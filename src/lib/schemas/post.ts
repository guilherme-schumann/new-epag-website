import { z } from 'zod';

const LOCALES = ['en', 'pt-BR', 'es-ES'] as const;

const localeMap = z.object({
  en: z.string().default(''),
  'pt-BR': z.string().default(''),
  'es-ES': z.string().default(''),
});

/** At least one locale must have a non-empty value. */
function atLeastOneLocale(map: Record<string, string>) {
  return LOCALES.some((l) => map[l]?.trim());
}

export const postSchema = z.object({
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(200)
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers and hyphens only'),

  postStatus: z.enum(['draft', 'published', 'archived']).default('draft'),

  title: localeMap.refine(atLeastOneLocale, {
    message: 'Title is required in at least one language',
  }),

  excerpt: localeMap.refine(atLeastOneLocale, {
    message: 'Excerpt is required in at least one language',
  }),

  content: localeMap.refine(atLeastOneLocale, {
    message: 'Content is required in at least one language',
  }),

  category: z.string().nullable().optional(),
  tags: z.array(z.string()).optional(),
  coverImage: z.union([z.number(), z.null()]).optional(),
  featuredImage: z.union([z.number(), z.null()]).optional(),
});

export type PostInput = z.infer<typeof postSchema>;
