Create a new UI primitive component: $ARGUMENTS

File path: `src/components/ui/<Name>.tsx`

## Rules

- Extend the relevant HTML element's props via `interface <Name>Props extends <HTMLElement>Attributes<HTMLElement>`
- Use `forwardRef` for interactive/focusable elements (buttons, inputs, links)
- Define variants and sizes as typed `Record<Variant, string>` objects (see `Button.tsx` for the pattern)
- Use only Tailwind token classes — no hardcoded hex or pixel values
- Set `<Name>.displayName = '<Name>'` for React DevTools
- Default export; also add a named re-export to `src/components/ui/index.ts`:

```ts
export { default as <Name> } from './<Name>';
```

## Reference pattern (Button.tsx)

```tsx
import { type ButtonHTMLAttributes, forwardRef } from 'react';

type <Name>Variant = 'primary' | 'secondary';

interface <Name>Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: <Name>Variant;
}

const variantStyles: Record<<Name>Variant, string> = {
  primary: 'bg-primary-500 text-secondary-900 hover:bg-primary-600',
  secondary: 'bg-theme-secondary text-light hover:bg-secondary-500',
};

const <Name> = forwardRef<HTMLButtonElement, <Name>Props>(
  ({ variant = 'primary', className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center rounded-full font-semibold transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    />
  )
);

<Name>.displayName = '<Name>';
export default <Name>;
```
