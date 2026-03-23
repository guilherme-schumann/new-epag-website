---
inclusion: manual
---

# Scaffold New Section

Create a new page section component. Expected format: `<feature>/<SectionName>` — e.g. `payin/PayinPricing` or `home/HomeStats`

## Steps

1. **Determine the file path**: `src/components/sections/<feature>/<SectionName>.tsx`

2. **Check context** — if a `context/*.md` file exists for this feature, read it for copy and structure.

3. **Scaffold the component**:

```tsx
// src/components/sections/<feature>/<SectionName>.tsx

export default function <SectionName>() {
  return (
    <section className="page-section">
      <div className="page-container">
        {/* content */}
      </div>
    </section>
  );
}
```

4. **Component rules**:
   - Server Component by default — add `'use client'` only if the component uses hooks or browser APIs
   - Use only Tailwind token classes — no hardcoded hex values or pixel sizes
   - Use layout utilities: `page-section`, `page-x`, `page-container` (defined in `globals.css`)
   - Import primitives from `@/components/ui` (Button, Icon, Logo)
   - Import images with `next/image` from `public/assets/images/`

5. **Update the barrel** — add to `src/components/sections/<feature>/index.ts`:
```ts
export { default as <SectionName> } from './<SectionName>';
```
If the barrel doesn't exist yet, create it.
