/**
 * Design tokens extracted from Figma — single source of truth.
 * Use Tailwind classes mapped to these values via globals.css @theme.
 * This file is for programmatic access when needed outside of Tailwind.
 *
 * PADDING STANDARD — use `layout.pagePadding` or the CSS utility `page-section`:
 *
 *   Horizontal  │  mobile: 24px  │  sm: 40px  │  lg: 64px  │  xl: 7.5rem (120px)
 *   Vertical    │  mobile: 56px  │            │  lg: 64px  │  xl: 80px
 */

export const colors = {
  primary: {
    500: '#17C3FA',
    600: '#0EAEE2',
    700: '#0899C9',
  },
  secondary: {
    100: '#EBF7FF',
    500: '#30A6E9',
    900: '#002C45',
  },
  theme: {
    secondary: '#016197',
    middleBlue: '#019FD1',
    darkBlue400: '#62C6FF',
  },
  neutral: {
    light: '#FFFFFF',
    darkGray: '#333333',
    lightGray: '#999999',
    background: '#F2F2F2',
  },
} as const;

/**
 * Page layout tokens.
 *
 * `pagePadding`  — apply to the outermost wrapper of every page section.
 *                  Equivalent to the CSS utility class `page-section` defined in globals.css.
 *
 * `pageMaxWidth` — max-width cap that keeps content from stretching on ultra-wide screens.
 *                  Always pair with `mx-auto` when used.
 */
export const layout = {
  /** Responsive horizontal + vertical padding for page sections (Tailwind classes). */
  pagePadding: 'px-6 py-14 sm:px-10 lg:px-16 lg:py-16 xl:px-[7.5rem] xl:py-20',

  /** Horizontal-only variant — useful for elements that manage their own vertical rhythm. */
  pageX: 'px-6 sm:px-10 lg:px-16 xl:px-[7.5rem]',

  /** Max-width cap aligned with the Figma canvas (1440px). Pair with `mx-auto`. */
  pageMaxWidth: 'max-w-[1440px] mx-auto',
} as const;

export const typography = {
  fontFamily: "'Open Sans', sans-serif",
  sizes: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  weights: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    tight: '20px',
    normal: '24px',
    relaxed: '28px',
    loose: '32px',
  },
} as const;
