# Frontend Architecture — epag Website

## Stack

| Layer | Package | Version | Notes |
|-------|---------|---------|-------|
| Framework | Next.js | 16.2.3 | App Router, Server Components |
| UI | React | 19.2.4 | Includes `use()`, compiler, new hooks |
| Styling | Tailwind CSS | v4 | Config lives in `globals.css` — no `tailwind.config.js` |
| Animation | Motion | 12 | Import from `motion/react`, NOT `framer-motion` |
| Language | TypeScript | 5 | Strict mode enabled |
| Validation | Zod | 4.3.6 | Runtime schema validation |
| Flags | flag-icons | 7.5.0 | Language selector flag icons |

---

## Design System

### Tokens — Single Source of Truth

Two files must always stay in sync:

| File | Purpose |
|------|---------|
| `src/lib/design-tokens.ts` | JS tokens for programmatic access outside Tailwind |
| `src/app/globals.css` → `@theme inline` | CSS variables mapped to Tailwind classes |

If you add a token to one, add it to the other.

### Colors

```
Primary:    bg-primary-500 (#17C3FA)   bg-primary-600 (#0EAEE2)   bg-primary-700 (#0899C9)
Secondary:  bg-secondary-100 (#EBF7FF) bg-secondary-500 (#30A6E9) bg-secondary-900 (#002C45)
Theme:      text-theme-secondary (#016197)
            text-theme-middle-blue (#019FD1)
            text-theme-dark-blue-400 (#62C6FF)
Neutral:    text-light (#FFF)   text-dark-gray (#333)   text-light-gray (#999)   bg-background (#F2F2F2)
Menu:       bg-menu-bg   bg-menu-selected   text-menu-hover   text-menu-default
```

### Typography

- Font: **Open Sans** (400, 600, 700, 800) — loaded from Google Fonts
- Scale: `text-xs` (12px) → `text-6xl` (60px)
- Weights: regular, semibold, bold, extrabold

### Layout Utilities

Defined as `@utility` blocks in `globals.css`. Never hardcode padding.

| Class | Effect |
|-------|--------|
| `page-section` | Responsive padding: `px-6 py-14` → `lg:px-10` → `xl:px-16 py-16` → `2xl:px-[120px] py-20` |
| `page-x` | Horizontal-only variant of `page-section` |
| `page-container` | `max-w-[1440px] mx-auto` — always pair with `page-section` or `page-x` |

**Standard section pattern:**
```tsx
<section className="page-section bg-background">
  <div className="page-container">
    {/* content */}
  </div>
</section>
```

### Breakpoints

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 320px | Smallest phones |
| `sm` | 375px | iPhone SE |
| `md` | 425px | Tablets small / large phones |
| `lg` | 768px | Tablets |
| `xl` | 1024px | Laptops |
| `2xl` | 1280px | Desktops |
| `3xl` | 1440px | Wide desktops |

**Special breakpoint — short screens:**
```css
@media (max-height: 800px) { .short-screen\:py-8 { ... } }
```
Used on Hero sections to prevent content clipping on laptops with small vertical height.

### Shadows & Border Radius

```
shadow-card      10px 20px 40px 0px rgba(0,0,0,0.05)
shadow-navbar    10px 20px 40px 0px rgba(0,0,0,0.05)
shadow-dropdown  0 8px 32px rgba(0,0,0,0.12)

rounded-tab    5px    rounded-card  32px
rounded-hero   48px   rounded-panel 10px   rounded-icon 12px
```

---

## Component Architecture

```
src/components/
├── layout/          Header, Footer, Navbar, TopBar, NewsBanner, NavDropdown
├── sections/
│   ├── home/        HeroSection, StatsBar, DifferentiatorsSection, ProductsSection,
│   │                IndustriesSection, CoverageSection, DeveloperSection,
│   │                PricingTeaser, FooterCTA, PaymentMethodsMarquee, ScrollIndicator
│   ├── about/       AboutHero, AboutStory, AboutMissionVision, AboutTeamStats,
│   │                AboutFounders, AboutTechnology, AboutOffices, AboutBottomCTA
│   ├── blog/        BlogHero, BlogList, BlogPostHero, BlogPostLayout
│   ├── coverage/    CoverageHero, CoverageStatsBar, CoverageCountrySelector,
│   │                CoverageProductsSection, CoverageBottomCTA
│   ├── payin/       PayinHero, PayinMerchants, PayinRails, PayinMarkets,
│   │                PayinConversion, PayinFeatures, PayinDeveloper, PayinCTA
│   ├── pricing/     PricingHero, PricingPlans, PricingFeeTable,
│   │                PricingDifferentiators, PricingPlatformHighlights, PricingBottomCTA
│   └── index.ts     Barrel re-exports
├── ui/              Button, Logo, Icon
│   └── index.ts     Barrel re-exports
├── admin/           AdminBlogList, AdminDashboard, AdminPageTitle, AdminSidebar,
│                    LoginForm, PostForm, RichTextEditor, TaxonomyManager
└── shared/          AnimatedCounter
```

### Server vs Client Components

**Server Component (default)** — no directive, can be async:
```tsx
export default async function PricingPage() {
  const data = await fetchData();
  return <main>...</main>;
}
```

**Client Component** — add `'use client'` only when needed:
- Uses `useState`, `useEffect`, `useRef` or other hooks
- Uses browser APIs (`window`, `document`, `localStorage`)
- Uses animations (`motion/react`)
- Uses i18n (`useLanguage`, `useContent`)

### UI Primitives

**Button** — `variant`: primary | secondary | outline | ghost — `size`: sm | md | lg

**Icon** — inline SVG icons: `chevron-down`, `x`, `globe`, `arrow-right`, `menu`, `check`

**Logo** — `variant`: dark | light — responsive sizing via `width`/`height` props

### Barrel Exports

Every component folder has an `index.ts`. Always update it when adding a component:
```ts
// src/components/sections/pricing/index.ts
export { default as PricingHero } from './PricingHero';
```

---

## Routing (App Router)

### Public Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post |
| `/about` | About |
| `/contact` | Contact |
| `/coverage` | Coverage map |
| `/pricing` | Pricing |
| `/solutions/payin` | Pay-in product |
| `/legal/*` | Legal pages |

### Admin Pages (Protected)

| Route | Page |
|-------|------|
| `/admin/login` | Login |
| `/admin` | Dashboard |
| `/admin/blog` | Post list |
| `/admin/blog/new` | Create post |
| `/admin/blog/[id]` | Edit post |
| `/admin/categories` | Categories |
| `/admin/tags` | Tags |

### API Routes

| Method | Route | Auth |
|--------|-------|------|
| POST | `/api/auth/login` | Public |
| POST | `/api/auth/logout` | Public |
| GET | `/api/posts` | Public |
| POST | `/api/posts` | Required |
| PUT/DELETE | `/api/posts/[id]` | Required |
| GET | `/api/categories` | Public |
| POST | `/api/categories` | Required |
| PUT/DELETE | `/api/categories/[id]` | Required |
| GET | `/api/tags` | Public |
| POST | `/api/tags` | Required |
| PUT/DELETE | `/api/tags/[id]` | Required |
| POST | `/api/upload` | Required |

### Metadata

Every page exports static or dynamic metadata:
```tsx
export const metadata: Metadata = {
  title: 'Page Title — epag',
  description: '...',
};

// Dynamic:
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: `${post.title} — epag Blog` };
}
```

---

## i18n System

### Locales

| Code | Language | Flag | html lang |
|------|----------|------|-----------|
| `en` | English | 🇺🇸 | `en` |
| `pt-BR` | Português | 🇧🇷 | `pt-BR` |
| `es` | Español | 🇪🇸 | `es` |

### How It Works

1. `LanguageProvider` wraps the entire app in `layout.tsx`
2. On mount, detects locale from: `localStorage` → browser language → defaults to `en`
3. Syncs `<html lang>` attribute and persists preference in `localStorage`
4. `useLanguage()` returns `{ locale, t, setLocale }`
5. `useContent(contentObj)` returns the locale-specific slice of a content object

### UI Translations (`src/lib/i18n/translations/`)

Covers: nav, footer, admin panel (sidebar, dashboard, blog, post form, taxonomy), status labels.

### Page Content (`src/content/`)

Separate from UI translations — covers page copy (headlines, descriptions, CTAs):
```ts
export const homeContent = {
  en:    { hero: { headline: '...', ... }, ... },
  'pt-BR': { hero: { headline: '...', ... }, ... },
  es:    { hero: { headline: '...', ... }, ... },
};
```

Usage in components:
```tsx
'use client';
const c = useContent(homeContent).hero;
// c is typed as homeContent['en']
```

### Locale Key Mapping

Content files use `es-ES` as key for Spanish (blog/admin), while the i18n system uses `es`. When resolving:
```ts
const localeKey = locale === 'es' ? 'es-ES' : locale;
```

---

## Animation Patterns

Always import from `motion/react`, never `framer-motion`.

### Entrance Animations

Standard pattern for sections — staggered with `delay`:
```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, delay: 0.1 }}
>
```

For scroll-triggered sections use `whileInView` + `viewport={{ once: true }}`:
```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
```

### Continuous Animation (Marquee)

```tsx
const x = useMotionValue(0);
useAnimationFrame((_, delta) => {
  x.set(wrapX(x.get() - SPEED * (delta / 1000), half));
});
```

### Hover Effects

```tsx
whileHover={{ y: -3, transition: { duration: 0.15 } }}
```

---

## Image Handling

Always use `next/image`. Never use raw `<img>`.

```tsx
import Image from 'next/image';

<Image
  src="/assets/images/mockup-epag-dashboard.png"
  alt="EPAG Dashboard"   // required
  width={1200}
  height={600}
  priority               // only for LCP (above-the-fold) images
/>
```

**Remote images** (Strapi uploads) are whitelisted in `next.config.ts`:
```ts
remotePatterns: [
  { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '/uploads/**' },
  { protocol: 'https', hostname: strapiHost, pathname: '/uploads/**' },
]
```

**Base path** — use `withBasePath()` for images that need to respect `NEXT_PUBLIC_BASE_PATH`:
```tsx
import { withBasePath } from '@/lib/base-path';
<Image src={withBasePath('/assets/images/foo.png')} ... />
```

**Image locations:**
- Raster images: `public/assets/images/`
- Payment method icons: `public/assets/payment_methods/`
- Director photos: `public/assets/directors/`
- Logos: `public/images/`

---

## State Management

No Redux or Zustand. Uses React Context + local state:

| Pattern | Used for |
|---------|----------|
| `LanguageProvider` context | Global locale state |
| `useLanguage()` | Read/set locale + translations |
| `useContent()` | Get locale-specific page content |
| `useState()` | Local UI state (dropdowns, forms, filters) |
| Server Component async | Data fetching (no client-side fetching library) |

---

## Content System (Strapi CMS)

Blog content is managed via Strapi and accessed through `src/lib/strapi.ts`.

### Data Flow

```
Strapi CMS → /api/posts (Next.js route) → getPosts() → BlogPage (Server Component) → BlogList (Client)
```

### Key Functions

```ts
getPosts()           // All posts with populate=*
getPostBySlug(slug)  // Single post for blog detail page
getPostById(id)      // Single post for admin edit
getCategories()      // All categories
getTags()            // All tags
```

### Mock Mode

Set `MOCK_DB=true` in `.env.local` to use mock data without a running Strapi instance.

### Normalization

Raw Strapi responses are normalized via `normalize()` in `strapi.ts`:
- `postStatus` → `status`
- Media files resolved to full URLs (handles relative `/uploads/` paths)
- Null tags/category handled with fallbacks

---

## Hard Rules

- Never hardcode hex colors — use Tailwind token classes
- Never hardcode pixel padding — use `page-section` / `page-x` / `page-container`
- Never use raw `<img>` — always `next/image`
- Never import from `framer-motion` — use `motion/react`
- Never create `tailwind.config.js` — config is in `globals.css`
- Never put server-only logic in `'use client'` files
- Always update barrel `index.ts` when adding a component
- Always add `alt` to images
- Always add `priority` to LCP (above-the-fold) images
- Always export `metadata` from page files
- Server Components by default — `'use client'` only when necessary

---

## Pages Not Yet Implemented

Several routes are referenced in the Navbar and Footer but do not have a `page.tsx` yet. They currently redirect to `/contact` as a placeholder.

| Route | Status |
|-------|--------|
| `/solutions/payout` | Not implemented → `/contact` |
| `/solutions/checkout/*` | Not implemented → `/contact` |
| `/solutions/recurrency/*` | Not implemented → `/contact` |
| `/solutions/server-to-server` | Not implemented → `/contact` |
| `/solutions/id-validation` | Not implemented → `/contact` |
| `/industries/ecommerce` | Not implemented → `/contact` |
| `/industries/saas` | Not implemented → `/contact` |
| `/coverage/brazil` | Not implemented → `/coverage` |
| `/coverage/mexico` | Not implemented → `/coverage` |
| `/coverage/colombia` | Not implemented → `/coverage` |
| `/coverage/peru` | Not implemented → `/coverage` |
| `/coverage/chile` | Not implemented → `/coverage` |
| `/coverage/ecuador` | Not implemented → `/coverage` |
| `/admin/settings` | Not implemented (sidebar link exists) |

When implementing a new page, update the corresponding `href` in `Navbar.tsx` and `Footer.tsx`.
