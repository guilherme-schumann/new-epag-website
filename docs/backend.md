# Backend Architecture — epag Website

## Overview

The backend is a **Next.js API layer** that acts as a secure proxy between the frontend and a **Strapi CMS** instance. The frontend never calls Strapi directly — all requests go through Next.js API routes, which handle authentication, input sanitization, audit logging, and response normalization.

```
Browser / Server Component
        │
        ▼
Next.js API Routes (/api/*)
        │  ← auth check, sanitize input, audit log
        ▼
Strapi CMS (http://localhost:1337)
        │  ← STRAPI_API_TOKEN
        ▼
PostgreSQL / SQLite (managed by Strapi)
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `STRAPI_URL` | Yes | Strapi base URL. Default: `http://localhost:1337` |
| `STRAPI_API_TOKEN` | Yes | Full-access API token for server-to-server calls |
| `MOCK_DB` | No | Set to `true` to use in-memory mock data (no Strapi needed) |

---

## API Routes

All routes live in `src/app/api/`. They follow Next.js 16 Route Handler conventions — exported named functions `GET`, `POST`, `PUT`, `DELETE`.

### Auth

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/auth/login` | Public | Authenticates against Strapi, sets session cookie |
| POST | `/api/auth/logout` | Public | Clears session cookie |

**Login flow:**
1. Rate limit check (10 req / 15 min per IP)
2. Forward credentials to `POST /api/auth/local` on Strapi
3. On success: set `session` cookie (httpOnly, secure in prod, sameSite: lax, 7 days)
4. Audit log: `auth.login` or `auth.failed`

### Posts

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/posts` | Public | List all posts (`populate=*`, sorted by `createdAt:desc`) |
| POST | `/api/posts` | Required | Create post (sanitized + audit logged) |
| PUT | `/api/posts/[id]` | Required | Update post by `documentId` (sanitized + audit logged) |
| DELETE | `/api/posts/[id]` | Required | Delete post by `documentId` (audit logged) |

### Categories

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/categories` | Public | List all categories (sorted by `label:asc`) |
| POST | `/api/categories` | Required | Create category (sanitized + audit logged) |
| PUT | `/api/categories/[id]` | Required | Update category (sanitized + audit logged) |
| DELETE | `/api/categories/[id]` | Required | Delete category (audit logged) |

### Tags

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/tags` | Public | List all tags (sorted by `label:asc`) |
| POST | `/api/tags` | Required | Create tag (sanitized + audit logged) |
| PUT | `/api/tags/[id]` | Required | Update tag (sanitized + audit logged) |
| DELETE | `/api/tags/[id]` | Required | Delete tag (audit logged) |

### Upload

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/upload` | Required | Upload image to Strapi media library |

**Upload validation:**
- Allowed MIME types: `image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/svg+xml`
- Max size: 5MB
- Returns `{ id, url }` with resolved absolute URL

---

## Shared Libraries

### `src/lib/auth.ts` — Authentication

```ts
requireAuth(): Promise<{ token: string } | NextResponse>
isAuthError(result): result is NextResponse
```

`requireAuth()` reads the `session` cookie, validates it against Strapi (`GET /api/users/me`), and returns either the token or a `401 NextResponse`. In mock mode, any non-empty token is accepted.

Used at the top of every write route:
```ts
const auth = await requireAuth();
if (isAuthError(auth)) return auth;
```

### `src/lib/sanitize.ts` — Input Sanitization

```ts
sanitizeHtml(html)         // Strips XSS, allows safe formatting tags
sanitizeText(text)         // Strips all HTML — plain text only
sanitizeSlug(slug)         // Allows only [a-z0-9-], max 200 chars
sanitizePostBody(body)     // Sanitizes a full post payload
sanitizeTaxonomyBody(body) // Sanitizes a category/tag payload
```

`sanitizePostBody` and `sanitizeTaxonomyBody` are the entry points used in API routes. They apply the appropriate sanitizer to each field:

| Field | Sanitizer |
|-------|-----------|
| `slug` | `sanitizeSlug` |
| `title` | `sanitizeText` (per locale) |
| `excerpt` | `sanitizeText` (per locale) |
| `content` | `sanitizeHtml` (per locale) |
| `label` (taxonomy) | `sanitizeText` (per locale) |

### `src/lib/audit.ts` — Audit Logging

```ts
auditLog(action, ip, details?)
```

Writes structured JSON to stdout. Logged events:

| Action | Trigger |
|--------|---------|
| `auth.login` | Successful login |
| `auth.failed` | Failed login attempt |
| `post.create` | POST /api/posts |
| `post.update` | PUT /api/posts/[id] |
| `post.delete` | DELETE /api/posts/[id] |
| `category.create/update/delete` | Category write routes |
| `tag.create/update/delete` | Tag write routes |
| `upload.create` | POST /api/upload |

Log format:
```json
{ "level": "audit", "timestamp": "...", "action": "post.create", "ip": "1.2.3.4", "details": { "slug": "my-post" } }
```

### `src/lib/rate-limit.ts` — Rate Limiting

```ts
rateLimit(key, limit, windowMs): { allowed, retryAfter }
```

In-memory rate limiter. Currently used only on the login endpoint (10 req / 15 min per IP). Returns `429` with `Retry-After` header when exceeded.

> For multi-instance deployments, replace with a Redis-based solution.

### `src/lib/strapi.ts` — Strapi Client

**Types:**

```ts
StrapiPost       // Normalized post shape used throughout the app
StrapiCategory   // { id, documentId, slug, label: Record<string, string> }
StrapiTag        // { id, documentId, slug, label: Record<string, string> }
StrapiListResponse<T>    // { data: T[], meta: { pagination } }
StrapiSingleResponse<T>  // { data: T }
```

**Key difference — `id` vs `documentId`:**
- `id` — numeric, auto-increment, internal to Strapi
- `documentId` — string UUID, stable across environments, used for all API operations

Always use `documentId` for PUT/DELETE operations.

**Functions:**

```ts
getPosts()              // All posts, normalized
getPostBySlug(slug)     // Single post by slug (slug is URL-encoded)
getPostById(id)         // Single post by documentId (for admin edit)
getCategories()         // All categories
getTags()               // All tags
strapiRequest<T>(path)  // Generic typed Strapi fetch (throws on error)
```

**Normalization (`normalize()`):**

Raw Strapi responses differ from the app's `StrapiPost` type in two ways:
1. Status field is named `postStatus` in Strapi, `status` in the app
2. Media fields (`coverImage`, `featuredImage`) can be a single object, an array, or null

`normalize()` handles both:
```ts
// postStatus → status
// coverImage: StrapiMediaFile | StrapiMediaFile[] | null → string | null
```

**Mock mode:**

When `MOCK_DB=true`, all functions return hardcoded data from `MOCK_POSTS`, `MOCK_CATEGORIES`, `MOCK_TAGS`. No Strapi instance needed. Useful for local development and CI.

---

## Proxy (`src/proxy.ts`)

Runs at the edge before every request to `/admin/*` (except `/admin/login`). Checks for the `session` cookie and redirects to `/admin/login` if missing.

This is a fast, lightweight check — no Strapi call. The full token validation happens in the admin layout (`src/app/admin/(protected)/layout.tsx`).

```
Request to /admin/*
    │
    ▼
proxy.ts — cookie present?
    │ No → redirect /admin/login
    │ Yes → continue
    ▼
layout.tsx — token valid against Strapi?
    │ No → redirect /admin/login
    │ Yes → render page
```

---

## Data Flow Examples

### Public blog page loads

```
BlogPage (Server Component)
  → getPosts()          calls strapiRequest('/posts?populate=*')
  → getCategories()     calls strapiRequest('/categories')
  → normalize(raw[])    maps postStatus→status, resolves image URLs
  → BlogList (Client)   renders with locale-aware content
```

### Admin creates a post

```
PostForm (Client) → POST /api/posts
  → requireAuth()       validates session cookie against Strapi
  → sanitizePostBody()  sanitizes slug, title, excerpt, content per locale
  → fetch Strapi POST /api/posts
  → auditLog('post.create', ip, { slug })
  → return { data: post }
```

### Admin uploads an image

```
CoverImageUpload (Client) → POST /api/upload (multipart/form-data)
  → requireAuth()
  → validate MIME type (whitelist) + size (≤5MB)
  → forward formData to Strapi POST /api/upload
  → auditLog('upload.create', ip, { filename, size, type })
  → return { id, url }  (url resolved to absolute)
```

---

## Known Limitations & Future Improvements

| Item | Status | Notes |
|------|--------|-------|
| Pagination on GET /api/posts | ❌ | Returns all posts. Add `?page=` and `?pageSize=` params for large datasets |
| Search on GET /api/posts | ❌ | No full-text search. Would need Strapi plugin or external search |
| Error response normalization | Partial | Strapi errors are forwarded as-is. Could normalize to a consistent shape |
| Rate limiting on write routes | ❌ | Only login is rate-limited. Could add per-IP limits on POST/PUT |
| Redis rate limiter | ❌ | Current in-memory limiter resets on server restart and doesn't work across instances |
| Webhook support | ❌ | No Strapi webhooks configured for cache invalidation |
