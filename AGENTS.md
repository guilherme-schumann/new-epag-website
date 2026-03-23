<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Stack

| Layer | Package | Notes |
|-------|---------|-------|
| Framework | Next.js 16 | App Router, Server Components — has breaking changes vs 14/15 |
| UI | React 19.2.4 | Includes `use()`, compiler, and new hooks |
| Styling | Tailwind CSS v4 | PostCSS via `@tailwindcss/postcss`; config lives in `globals.css` |
| Animation | Motion 12 | Import from `motion/react` — NOT `framer-motion` |
| Language | TypeScript 5 | Strict mode enabled |

---

## Next.js 16 — Critical Differences

- **`next/image`** — `alt` is required. Use `priority` for above-the-fold (LCP) images.
- **Metadata** — export `export const metadata: Metadata` from `page.tsx` or `layout.tsx`. Use `generateMetadata()` for dynamic values.
- **Server Actions** — mark with `'use server'` at the top of the function or file. Never define server actions inline inside `'use client'` components.
- **Route Handlers** — `src/app/api/**/route.ts`, exported as named functions: `GET`, `POST`, etc.
- **Layouts** — `layout.tsx` persists across navigation. `template.tsx` re-mounts on every navigation.
- **Loading / Error UI** — colocate `loading.tsx` and `error.tsx` with the route segment they cover.
- **`'use client'`** — marks a component and all its imports as client-side. Propagates down; does not propagate up.
- When uncertain about any feature, read `node_modules/next/dist/docs/` first.

---

## Tailwind CSS v4 — Critical Differences

- **No `tailwind.config.js`** — all theme customization lives inside `globals.css` under `@theme inline { … }`.
- **Custom utilities** use `@utility` blocks, not `@layer utilities { .class { … } }`.
- **CSS variable naming** — `--color-primary-500` maps automatically to `bg-primary-500`, `text-primary-500`, etc.
- **Do NOT use `theme()`** in CSS — use `var(--token-name)` instead.
- **Do NOT add a `tailwind.config.ts`** — it will conflict with the v4 setup.

---

## File & Folder Conventions

```
src/
  app/                      # Routes only: page.tsx, layout.tsx, loading.tsx, error.tsx
  components/
    layout/                 # Shell components: Header, Navbar, Footer (used in root layout)
    sections/               # Page sections, grouped by feature
      <feature>/            # e.g. payin/, contact/
        index.ts            # Barrel re-export for all sections in this feature
    ui/                     # Primitives: Button, Icon, Logo, etc.
      index.ts              # Barrel re-export for all UI components
  lib/                      # Shared utilities and data (design-tokens.ts, …)
  assets/                   # SVG icons as React components (NOT raster images)

public/
  assets/images/            # All raster images consumed by next/image

context/                    # Product copy, design briefs (read-only reference — do not edit)
```

---

## Design System

### Design Tokens

Single source of truth: `src/lib/design-tokens.ts`
CSS variables + Tailwind theme: `src/app/globals.css` → `@theme inline { … }`

**Both files must be kept in sync.** If you add a token to one, add it to the other.

### Color Classes

```
Primary:    bg-primary-500    text-primary-500    border-primary-500
            bg-primary-600    bg-primary-700
Secondary:  bg-secondary-100  text-secondary-900  bg-secondary-500
Theme:      text-theme-secondary    bg-theme-secondary
            text-theme-middle-blue  bg-theme-dark-blue-400
Neutral:    text-dark-gray    text-light-gray    bg-background    text-light
```

### Layout Utilities (defined in `globals.css`)

| Class | Effect |
|-------|--------|
| `page-section` | Responsive padding: `px-6 py-14` → `sm:px-10` → `lg:px-16 py-16` → `xl:px-[120px] py-20` |
| `page-x` | Horizontal-only variant of the above |
| `page-container` | `max-w-[1440px] mx-auto` — always pair with `page-section` or `page-x` |

**Pattern:** every section outer element gets `page-section`, inner content wrapper gets `page-container`.

```tsx
<section className="page-section">
  <div className="page-container">
    {/* content */}
  </div>
</section>
```

---

## Component Patterns

### Server Component (default)

```tsx
import { Button } from '@/components/ui';

export default function FeatureSection() {
  return (
    <section className="page-section">
      <div className="page-container">
        <h2 className="text-4xl font-bold text-secondary-900">…</h2>
        <Button variant="primary" size="md">Get Started</Button>
      </div>
    </section>
  );
}
```

### Client Component (only when needed)

```tsx
'use client';

import { useState } from 'react';

export default function InteractiveWidget() {
  const [open, setOpen] = useState(false);
  // …
}
```

### Image

```tsx
import Image from 'next/image';

<Image
  src="/assets/images/foo.png"
  alt="Descriptive alt text"   // required
  width={800}
  height={600}
  priority                     // add for LCP images only
/>
```

### Page with Metadata

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title — epag',
  description: '…',
};

export default function Page() {
  return <main>…</main>;
}
```

---

## Do Not

- Do not import from `framer-motion` — use `motion/react`
- Do not create `tailwind.config.js` / `.ts` — config is in `globals.css`
- Do not put server-only logic in `'use client'` files
- Do not use raw `<img>` — always use `next/image`
- Do not hardcode hex values — use Tailwind token classes
- Do not hardcode pixel padding — use `page-section` / `page-x` / `page-container`
- Do not skip barrel exports — always update `index.ts` when adding a component
- Do not edit files in `context/` — they are read-only product references
