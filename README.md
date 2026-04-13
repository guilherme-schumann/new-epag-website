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
| ORM | Prisma | 7 |
| Database | PostgreSQL | — |
| Validation | Zod | 4 |
| Rich Text | Tiptap | 3 |
| Auth | Session-based (bcrypt + cookies) | — |

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
      login/page.tsx          # Login (no sidebar)
      (protected)/
        layout.tsx            # Auth guard + sidebar
        page.tsx              # Dashboard
        blog/
          page.tsx            # Post list
          new/page.tsx        # Create post
          [id]/page.tsx       # Edit post

    # ── API ──────────────────────────────────
    api/
      auth/login/route.ts
      auth/logout/route.ts
      posts/route.ts
      posts/[id]/route.ts

  components/
    admin/                    # Admin-only components
      AdminSidebar.tsx
      LoginForm.tsx
      PostForm.tsx
      RichTextEditor.tsx
    layout/                   # Shell: Header, Navbar, Footer
    sections/                 # Page sections grouped by feature
      blog/
      home/
      about/
      contact/
      coverage/
      legal/
      payin/
      pricing/
      shared/
    ui/                       # Primitives: Button, Icon, Logo

  content/                    # i18n content (en, pt-BR, es-ES)
    blog/
    home/
    about/
    contact/
    coverage/
    legal/
      shared.ts               # Hero, nav, overview
      termsUsers.ts
      termsMerchants.ts
      privacy.ts
      imprint.ts
      prohibited.ts
    payin/
    pricing/

  lib/
    auth/index.ts             # getSession, requireAuth, requireAdmin
    db/index.ts               # Prisma client singleton
    services/posts.ts         # CRUD + cache revalidation
    validations/post.ts       # Zod schemas

  middleware.ts               # Route protection for /admin/*

prisma/
  schema.prisma               # Models: User, Session, Post, Tag, LegalDocument
  prisma.config.ts            # Database connection config
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

Edit `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/epag_cms"
MOCK_DB="true"   # set to "false" when database is ready
```

### 3. Generate Prisma client

```bash
npx prisma generate
```

### 4. Run development server

```bash
npm run dev
```

---

## Database Setup (when ready)

```bash
# Apply migrations
npx prisma migrate dev --name init

# Seed first admin user (run once)
npx ts-node prisma/seed.ts
```

---

## Mock Mode

Set `MOCK_DB="true"` in `.env` to run without a database. All pages render with mock data — useful for UI development.

| What is mocked |
|----------------|
| Auth session (auto-logged in as admin) |
| Blog posts (3 sample posts) |
| Login endpoint (accepts any credentials) |

Set `MOCK_DB="false"` to connect to a real PostgreSQL instance.

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
| `POST` | `/api/auth/login` | Login |
| `POST` | `/api/auth/logout` | Logout |
| `GET` | `/api/posts` | List posts |
| `POST` | `/api/posts` | Create post |
| `PUT` | `/api/posts/[id]` | Update post |
| `DELETE` | `/api/posts/[id]` | Delete post |

---

## i18n

Content is available in three locales: `en`, `pt-BR`, `es-ES`.

All content lives in `src/content/` as TypeScript objects. Components use the `useContent()` hook to get the correct locale slice at runtime.

---

## Design System

Tokens are defined in `src/lib/design-tokens.ts` and `src/app/globals.css` (`@theme inline` block). Both files must be kept in sync.

Layout utilities defined in `globals.css`:

| Class | Effect |
|-------|--------|
| `page-section` | Responsive padding for page sections |
| `page-x` | Horizontal padding only |
| `page-container` | `max-w-[1440px] mx-auto` |

---

## Infrastructure Requirements

The application requires:

- **Node.js** 20+
- **PostgreSQL** 15+
- Storage for media uploads (S3-compatible or filesystem)

Environment variables needed in production:

```env
DATABASE_URL=
NODE_ENV=production
MOCK_DB=false
```
