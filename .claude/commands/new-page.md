Scaffold a new Next.js App Router page for the route: $ARGUMENTS

## Steps

1. **Read context first** — check if `context/` has a matching document (e.g. `context/Payin.md`). Read it before writing any code.

2. **Plan the structure** — list the files you will create and ask me to confirm before proceeding:
   - `src/app/$ARGUMENTS/page.tsx`
   - `src/components/sections/<feature>/` (one folder per page feature)
   - Individual section files + `index.ts` barrel

3. **Create `src/app/$ARGUMENTS/page.tsx`**:
   - Export `metadata: Metadata` with a title and description derived from the context doc
   - Default export is a Server Component named after the route (PascalCase)
   - Compose the page from section components imported via the barrel
   - Do NOT place layout markup here — use sections

4. **Create section components** in `src/components/sections/<feature>/`:
   - At minimum: a Hero section + at least one content section
   - Each section: outer `<section className="page-section">`, inner `<div className="page-container">`
   - Server Components by default — add `'use client'` only if interactivity is required
   - Use only Tailwind token classes (no hardcoded values)
   - Import UI primitives from `@/components/ui`

5. **Update the barrel** — add every new section to `src/components/sections/<feature>/index.ts`

6. **Check images** — if images are needed, reference `public/assets/images/` and use `next/image`
