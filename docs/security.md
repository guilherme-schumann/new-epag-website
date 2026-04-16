# Security Overview — epag Website

## Authentication & Session Management

### Login Flow
- User submits email/password to `POST /api/auth/login`
- Credentials are forwarded to Strapi (`/api/auth/local`)
- On success, Strapi returns a JWT token
- The JWT is stored in an **httpOnly cookie** named `session`
  - `httpOnly: true` — not accessible via JavaScript
  - `secure: true` in production — only sent over HTTPS
  - `sameSite: lax` — protects against CSRF
  - `maxAge: 7 days`

### Route Protection — Two Layers

**Layer 1 — Middleware (`src/middleware.ts`)**
- Runs on every request to `/admin/*` (except `/admin/login`)
- Checks for the presence of the `session` cookie
- Redirects to `/admin/login` if missing
- Fast, edge-level check — no Strapi call

**Layer 2 — Layout validation (`src/app/admin/(protected)/layout.tsx`)**
- On every admin page render, validates the token against Strapi (`GET /api/users/me`)
- Redirects to `/admin/login` if the token is expired or invalid
- Ensures revoked tokens are rejected even if the cookie still exists

---

## API Route Authorization

All write operations require a valid session. This is enforced via the `requireAuth()` helper in `src/lib/auth.ts`.

### How it works
1. Reads the `session` cookie from the request
2. Returns `401 Unauthorized` if missing
3. Validates the token against Strapi (`GET /api/users/me`)
4. Returns `401 Unauthorized` if the token is invalid or expired
5. Returns the token for use in downstream Strapi calls

### Protected routes

| Method | Route | Protected |
|--------|-------|-----------|
| POST | `/api/posts` | ✅ |
| PUT | `/api/posts/[id]` | ✅ |
| DELETE | `/api/posts/[id]` | ✅ |
| POST | `/api/categories` | ✅ |
| PUT | `/api/categories/[id]` | ✅ |
| DELETE | `/api/categories/[id]` | ✅ |
| POST | `/api/tags` | ✅ |
| PUT | `/api/tags/[id]` | ✅ |
| DELETE | `/api/tags/[id]` | ✅ |
| POST | `/api/upload` | ✅ |
| GET | `/api/posts` | Public (used by blog) |
| GET | `/api/categories` | Public (used by blog) |
| GET | `/api/tags` | Public (used by blog) |
| POST | `/api/auth/login` | Public (login endpoint) |
| POST | `/api/auth/logout` | Public (clears cookie) |

---

## Rate Limiting

The login endpoint is protected against brute force attacks via an in-memory rate limiter (`src/lib/rate-limit.ts`).

- **Limit:** 10 attempts per IP per 15 minutes
- **Response:** `429 Too Many Requests` with `Retry-After` header
- **IP detection:** reads `x-forwarded-for` or `x-real-ip` headers

> **Note:** The current implementation uses in-memory storage. For multi-instance deployments, replace with a Redis-based solution (e.g. `@upstash/ratelimit`).

---

## XSS Prevention

Blog post content is stored as HTML in Strapi and rendered with `dangerouslySetInnerHTML`. To prevent XSS attacks, all HTML is sanitized before rendering using **DOMPurify** (`isomorphic-dompurify`).

### Implementation (`src/lib/sanitize.ts`)
- `sanitizeHtml(html)` — strips dangerous tags and attributes, allows safe formatting
- `sanitizeText(text)` — strips all HTML, returns plain text
- `sanitizeSlug(slug)` — allows only `[a-z0-9-]`, max 200 chars

### Sanitization is applied at two points:
1. **On write** — `POST /api/posts` and `PUT /api/posts/[id]` sanitize all fields before forwarding to Strapi
2. **On render** — `BlogPostLayout` sanitizes content before `dangerouslySetInnerHTML`

### Allowed tags (HTML rendering)
```
p, br, strong, em, u, s,
h1–h6, ul, ol, li,
blockquote, pre, code,
a, img, table, thead, tbody, tr, th, td,
div, span
```

---

## File Upload Validation

The `/api/upload` endpoint validates files on both the client and server before forwarding to Strapi.

### Server-side (`src/app/api/upload/route.ts`)
- Requires authentication (session cookie)
- Validates MIME type — only images allowed:
  - `image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/svg+xml`
- Enforces maximum file size: **5MB**
- Returns `400 Bad Request` with a descriptive error for invalid files

### Client-side (`src/components/admin/PostForm.tsx`)
- Same MIME type and size validation before making the request
- Provides immediate feedback without a network round-trip

---

## Security Headers (CSP)

All responses include security headers configured in `next.config.ts`:

| Header | Value | Purpose |
|--------|-------|---------|
| `Content-Security-Policy` | Restricts script/style/connect sources | Prevents XSS and data injection |
| `X-Frame-Options` | `DENY` | Prevents clickjacking / iframe embedding |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer information |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` | Forces HTTPS (production) |
| `Permissions-Policy` | Disables camera, mic, geolocation | Reduces attack surface |

---

## Audit Logging

All admin actions are logged as structured JSON to stdout (`src/lib/audit.ts`).

### Logged events
- `auth.login` — successful login
- `auth.failed` — failed login attempt (wrong credentials)
- `auth.logout` — logout
- `post.create` / `post.update` / `post.delete`
- `upload.create`

### Log format
```json
{
  "level": "audit",
  "timestamp": "2026-04-16T12:00:00.000Z",
  "action": "post.create",
  "ip": "192.168.1.1",
  "details": { "slug": "my-post" }
}
```

> In production, pipe stdout to a log aggregator (Datadog, CloudWatch, Logtail, etc.) to persist and query audit logs.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `STRAPI_URL` | Strapi instance URL (default: `http://localhost:1337`) |
| `STRAPI_API_TOKEN` | Full-access API token for server-to-server Strapi calls |
| `MOCK_DB` | Set to `true` to use mock data (development only) |

See `.env.example` for the full list. Never commit `.env.local` to version control.

---

## Security Checklist

| Item | Status |
|------|--------|
| API write routes require authentication | ✅ |
| Session stored in httpOnly cookie | ✅ |
| Token validated against Strapi on each admin request | ✅ |
| XSS prevention via DOMPurify (render + write) | ✅ |
| File upload type and size validation | ✅ |
| Rate limiting on login endpoint | ✅ |
| Security headers (CSP, HSTS, X-Frame-Options, etc.) | ✅ |
| Input sanitization on post write | ✅ |
| Audit logging for admin actions | ✅ |
| CSRF via sameSite cookie + X-Frame-Options | ✅ |
| Rate limiting with Redis (multi-instance) | ❌ Future |
| 2FA | ❌ Future |
