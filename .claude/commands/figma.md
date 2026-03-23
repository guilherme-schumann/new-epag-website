Fetch a Figma design and generate a project component: $ARGUMENTS

Expected input: a Figma URL — `figma.com/design/<fileKey>/...?node-id=<nodeId>`

## Steps

1. **Extract** `fileKey` and `nodeId` from the URL (convert `-` to `:` in nodeId).

2. **Fetch the design** using `get_design_context` with `fileKey` and `nodeId`.

3. **Treat the output as reference only** — do not copy it verbatim. The generated code is React + Tailwind enriched with hints, but it must be adapted to this project's conventions.

4. **Map tokens** — before writing any code:
   - Compare Figma colors against `src/lib/design-tokens.ts`
   - Use existing Tailwind token classes (`text-primary-500`, `bg-secondary-900`, etc.)
   - Never copy raw hex values from Figma output

5. **Check for existing components** — search `src/components/` for components that match the design intent. Reuse them rather than generating new ones.

6. **Ask me** which folder the component belongs to before writing:
   - `layout/` — shell / navigation elements
   - `sections/<feature>/` — page sections
   - `ui/` — reusable primitives

7. **Write the component** following project conventions:
   - Server Component by default
   - Outer `<section className="page-section">`, inner `<div className="page-container">`
   - `next/image` for all images; save assets to `public/assets/images/`
   - Tailwind token classes only

8. **Update the barrel** — add the component to the nearest `index.ts`.
