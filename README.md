# epag Website

B2B fintech website for **epag** — direct payment infrastructure across Latin America (Brazil, Mexico, Colombia). No intermediaries, direct rails: PIX, SPEI, PSE, card acquiring.

---

## Stack

| Layer | Package | Version |
|-------|---------|---------|
| Framework | Next.js (App Router) | 16 |
| UI | React | 19 |
| Styling | Tailwind CSS v4 | 4 |
| Animation | Motion | 12 |
| Language | TypeScript | 5 (strict) |
| CMS | Strapi | — |
| Validation | Zod | 4 |

---

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   frontend      │────▶│     strapi      │────▶│   postgres      │
│   Next.js       │     │   CMS + API     │     │   Database      │
│   :3000         │     │   :1337         │     │   :5432         │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

The Next.js frontend communicates with Strapi via REST API. The custom admin UI (under `/admin`) is part of the Next.js app and proxies all CMS operations to Strapi.

---

## Project Structure

```
src/
  app/
    # ── Public site ──────────────────────────
    page.tsx                  # Home
    about/
    blog/
      page.tsx                # Blog listing
      [slug]/page.tsx         # Blog post
    contact/
    coverage/
    legal/
      page.tsx                # Legal hub
      terms-for-users/
      terms-for-merchants/
      privacy-policy/
      imprint/
      prohibited-products-and-services/
    pricing/
    solutions/payin/

    # ── Admin CMS ────────────────────────────
    admin/
      login/page.tsx          # Login
      (protected)/
        layout.tsx            # Auth guard + sidebar
        page.tsx              # Dashboard
        blog/
          page.tsx            # Post list
          new/page.tsx        # Create post
          [id]/page.tsx       # Edit post

    # ── API (Strapi proxy) ───────────────────
    api/
      auth/login/route.ts     # Authenticates via Strapi, sets JWT cookie
      auth/logout/route.ts    # Clears session cookie
      posts/route.ts          # GET / POST
      posts/[id]/route.ts     # PUT / DELETE

  components/
    admin/                    # Admin-only components
      AdminSidebar.tsx
      LoginForm.tsx
      PostForm.tsx
      RichTextEditor.tsx
    layout/                   # Shell: Header, Navbar, Footer
    sections/                 # Page sections grouped by feature
    ui/                       # Primitives: Button, Icon, Logo

  content/                    # i18n content (en, pt-BR, es-ES)

  lib/
    strapi.ts                 # Strapi REST client + types + mock data

  middleware.ts               # Route protection for /admin/*
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

```env
STRAPI_URL="http://localhost:1337"
STRAPI_API_TOKEN=""       # leave empty in mock mode
MOCK_DB="true"            # set to "false" when Strapi is running
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Mock Mode

Set `MOCK_DB="true"` to run without Strapi. Useful for frontend development.

| What is mocked |
|----------------|
| Auth session (auto-logged in, any credentials accepted) |
| Blog posts (3 sample posts) |
| All Strapi API calls |

Set `MOCK_DB="false"` and fill `STRAPI_API_TOKEN` to connect to a real Strapi instance.

---

## Docker

The frontend is containerized using a multi-stage Dockerfile (deps → builder → runner).

```bash
# Build and run
docker compose up --build
```

The container runs on port `3000`. Environment variables are passed via `docker-compose.yml` or a `.env` file.

---

## Public Routes

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About epag |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post |
| `/coverage` | Payment coverage map |
| `/pricing` | Pricing |
| `/solutions/payin` | Pay-in product page |
| `/contact` | Contact |
| `/legal` | Legal hub |
| `/legal/terms-for-users` | Terms of Use — Users |
| `/legal/terms-for-merchants` | Terms of Use — Merchants |
| `/legal/privacy-policy` | Privacy Policy |
| `/legal/imprint` | Imprint |
| `/legal/prohibited-products-and-services` | Prohibited list |

## Admin Routes

| Route | Description |
|-------|-------------|
| `/admin/login` | Login |
| `/admin` | Dashboard |
| `/admin/blog` | Blog post list |
| `/admin/blog/new` | Create post |
| `/admin/blog/[id]` | Edit post |

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/auth/login` | Login via Strapi |
| `POST` | `/api/auth/logout` | Logout |
| `GET` | `/api/posts` | List posts |
| `POST` | `/api/posts` | Create post |
| `PUT` | `/api/posts/[id]` | Update post |
| `DELETE` | `/api/posts/[id]` | Delete post |

---

## i18n

Content is available in three locales: `en`, `pt-BR`, `es-ES`.

All static content lives in `src/content/` as TypeScript objects. Components use the `useContent()` hook to get the correct locale at runtime.

---

## Design System

Tokens are defined in `src/lib/design-tokens.ts` and `src/app/globals.css` (`@theme inline` block). Both files must be kept in sync.

| Class | Effect |
|-------|--------|
| `page-section` | Responsive padding for page sections |
| `page-x` | Horizontal padding only |
| `page-container` | `max-w-[1440px] mx-auto` |

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `STRAPI_URL` | Strapi instance URL | `http://localhost:1337` |
| `STRAPI_API_TOKEN` | Strapi API token | — |
| `MOCK_DB` | Enable mock mode | `false` |

