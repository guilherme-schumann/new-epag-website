Add or update design tokens: $ARGUMENTS

Design tokens have **two sources of truth that must always be kept in sync**:
1. `src/lib/design-tokens.ts` — TypeScript `as const` export (for programmatic access)
2. `src/app/globals.css` → `@theme inline { … }` — CSS variables that Tailwind reads

## Steps

1. **Read both files** before making any changes.

2. **Make the change in `design-tokens.ts`** following the existing structure:
```ts
export const colors = {
  primary: { 500: '#17C3FA', … },
  // add new token here
} as const;
```

3. **Mirror the change in `globals.css`** under `@theme inline`:
```css
@theme inline {
  --color-<category>-<name>: #value;  /* maps to bg-<category>-<name> etc. */
}
```

4. **Naming rules**:
   - Colors: `--color-<category>-<shade>` → `bg-<category>-<shade>`, `text-<category>-<shade>`
   - Shadows: `--shadow-<name>` → `shadow-<name>`
   - Fonts: `--font-<name>` → `font-<name>`
   - Use kebab-case in CSS variables; camelCase keys in TypeScript

5. **Do not** add a `tailwind.config.js` — Tailwind v4 reads exclusively from `globals.css`.
