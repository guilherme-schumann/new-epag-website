import { describe, it, expect } from 'vitest';
import { postSchema } from '../schemas/post';

const validPayload = {
  slug: 'my-first-post',
  postStatus: 'draft' as const,
  title: { en: 'My First Post', 'pt-BR': '', 'es-ES': '' },
  excerpt: { en: 'A short summary.', 'pt-BR': '', 'es-ES': '' },
  content: { en: '<p>Hello world</p>', 'pt-BR': '', 'es-ES': '' },
};

describe('postSchema — valid', () => {
  it('accepts a minimal valid payload (only en locale filled)', () => {
    expect(postSchema.safeParse(validPayload).success).toBe(true);
  });

  it('accepts all locales filled', () => {
    const payload = {
      ...validPayload,
      title: { en: 'Title', 'pt-BR': 'Título', 'es-ES': 'Título' },
      excerpt: { en: 'Excerpt', 'pt-BR': 'Resumo', 'es-ES': 'Resumen' },
      content: { en: '<p>EN</p>', 'pt-BR': '<p>PT</p>', 'es-ES': '<p>ES</p>' },
    };
    expect(postSchema.safeParse(payload).success).toBe(true);
  });

  it('accepts optional fields: category, tags, coverImage, featuredImage', () => {
    const payload = {
      ...validPayload,
      category: 'cat-doc-id',
      tags: ['tag-1', 'tag-2'],
      coverImage: 42,
      featuredImage: null,
    };
    expect(postSchema.safeParse(payload).success).toBe(true);
  });

  it('defaults postStatus to draft when omitted', () => {
    const { postStatus: _, ...withoutStatus } = validPayload;
    const result = postSchema.safeParse(withoutStatus);
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.postStatus).toBe('draft');
  });
});

describe('postSchema — slug', () => {
  it('rejects empty slug', () => {
    const result = postSchema.safeParse({ ...validPayload, slug: '' });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.error.flatten().fieldErrors.slug).toBeDefined();
  });

  it('rejects slug with uppercase letters', () => {
    const result = postSchema.safeParse({ ...validPayload, slug: 'My-Post' });
    expect(result.success).toBe(false);
  });

  it('rejects slug with spaces', () => {
    const result = postSchema.safeParse({ ...validPayload, slug: 'my post' });
    expect(result.success).toBe(false);
  });

  it('rejects slug with special characters', () => {
    const result = postSchema.safeParse({ ...validPayload, slug: 'post@2024!' });
    expect(result.success).toBe(false);
  });

  it('accepts slug with hyphens and numbers', () => {
    expect(postSchema.safeParse({ ...validPayload, slug: 'post-123' }).success).toBe(true);
  });
});

describe('postSchema — postStatus', () => {
  it.each(['draft', 'published', 'archived'])('accepts status "%s"', (s) => {
    expect(postSchema.safeParse({ ...validPayload, postStatus: s }).success).toBe(true);
  });

  it('rejects unknown status', () => {
    const result = postSchema.safeParse({ ...validPayload, postStatus: 'pending' });
    expect(result.success).toBe(false);
  });
});

describe('postSchema — locale fields', () => {
  it('rejects title when all locales are empty', () => {
    const result = postSchema.safeParse({
      ...validPayload,
      title: { en: '', 'pt-BR': '', 'es-ES': '' },
    });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.error.flatten().fieldErrors.title).toBeDefined();
  });

  it('rejects excerpt when all locales are empty', () => {
    const result = postSchema.safeParse({
      ...validPayload,
      excerpt: { en: '', 'pt-BR': '', 'es-ES': '' },
    });
    expect(result.success).toBe(false);
  });

  it('rejects content when all locales are empty', () => {
    const result = postSchema.safeParse({
      ...validPayload,
      content: { en: '', 'pt-BR': '', 'es-ES': '' },
    });
    expect(result.success).toBe(false);
  });

  it('accepts when only pt-BR is filled', () => {
    const result = postSchema.safeParse({
      ...validPayload,
      title: { en: '', 'pt-BR': 'Título', 'es-ES': '' },
      excerpt: { en: '', 'pt-BR': 'Resumo', 'es-ES': '' },
      content: { en: '', 'pt-BR': '<p>Conteúdo</p>', 'es-ES': '' },
    });
    expect(result.success).toBe(true);
  });
});
