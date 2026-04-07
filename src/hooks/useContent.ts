'use client';

import { useLanguage } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

/**
 * Returns the locale-specific slice of a content object.
 *
 * Usage:
 *   const c = useContent(homeContent);
 *   // c is typed as homeContent['en'] — the canonical shape
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useContent<T extends Partial<Record<Locale, any>>>(content: T): NonNullable<T['en']> {
  const { locale } = useLanguage();
  return (content[locale as Locale] ?? content['en']) as NonNullable<T['en']>;
}
