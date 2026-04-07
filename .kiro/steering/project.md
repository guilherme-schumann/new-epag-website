# epag Website

B2B fintech providing **direct payment infrastructure across Latin America** (Brazil, Mexico, Colombia). No intermediaries — direct rails: PIX, SPEI, PSE, card acquiring.

## Context Documents

Product copy and design briefs live in `context/`. **Always read the relevant file before implementing a new page or section.**

| File | Covers |
|------|--------|
| `context/Payin.md` | Pay-in / Pay-out product page copy and CTAs |

## Quick Reference

| What | Where |
|------|-------|
| Design tokens (JS) | `src/lib/design-tokens.ts` |
| CSS utilities | `globals.css` → `page-section`, `page-x`, `page-container` |
| Tailwind theme | `@theme inline` block in `globals.css` |
| Barrel exports | `src/components/{layout,sections,ui}/index.ts` |
| Raster images | `public/assets/images/` |

## Hard Rules

- **Never hardcode colors or spacing** — use Tailwind token classes or CSS utilities only
- **App Router only** — no `pages/` directory, no `getServerSideProps`, no `getStaticProps`
- **Server Components by default** — add `'use client'` only when hooks or browser APIs are required
- **No standalone `.css` files** — all styles go through Tailwind or `globals.css`
- **Always update barrel exports** — new components must be added to the nearest `index.ts`
- **`next/image` for all images** — never use a raw `<img>` tag
