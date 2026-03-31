@AGENTS.md
@PRODUCT.md

# epag Website

B2B fintech providing **direct payment infrastructure across Latin America** (Brazil, Mexico, Colombia). No intermediaries — direct rails: PIX, SPEI, PSE, card acquiring.

## Context Documents

Product copy per page lives in `context/pages/`. **Always read the relevant file before implementing a new page or section.**
For product context, copy rules, token mapping and roadmap, read `PRODUCT.md` (loaded above via `@PRODUCT.md`).

| File | Route |
|------|-------|
| `context/pages/payin.md` | `/solutions/payin` |

> When implementing a new page: (1) check `PRODUCT.md` Section 6 for the relevant `context/pages/` file, (2) create the `.md` if it doesn't exist yet using `context/guide/` as reference, (3) scaffold the page with `/new-page <route>`.

## Quick Reference

| What | Where |
|------|-------|
| Design tokens (JS) | `src/lib/design-tokens.ts` |
| CSS utilities | `globals.css` → `page-section`, `page-x`, `page-container` |
| Tailwind theme | `@theme inline` block in `globals.css` |
| Barrel exports | `src/components/{layout,sections,ui}/index.ts` |
| Raster images | `public/assets/images/` |

## Slash Commands (Skills)

| Command | Purpose |
|---------|---------|
| `/new-page <route>` | Scaffold a full page + sections |
| `/new-section <Feature/Name>` | Scaffold a single section component |
| `/new-ui <Name>` | Scaffold a UI primitive |
| `/figma <url>` | Fetch Figma design and generate component |
| `/tokens <description>` | Add or update design tokens |

## Hard Rules

- **Never hardcode colors or spacing** — use Tailwind token classes or CSS utilities only
- **App Router only** — no `pages/` directory, no `getServerSideProps`, no `getStaticProps`
- **Server Components by default** — add `'use client'` only when hooks or browser APIs are required
- **No standalone `.css` files** — all styles go through Tailwind or `globals.css`
- **Always update barrel exports** — new components must be added to the nearest `index.ts`
- **`next/image` for all images** — never use a raw `<img>` tag
