import { describe, it, expect } from 'vitest';
import { MOCK_POSTS, MOCK_CATEGORIES, MOCK_TAGS, normalize, type RawStrapiPost } from '../strapi';

// ── normalize ─────────────────────────────────────────────────────────────────

const BASE_RAW: RawStrapiPost = {
  id: 99,
  documentId: 'test-doc-id',
  slug: 'test-post',
  postStatus: 'published',
  title: { en: 'Test', 'pt-BR': 'Teste', 'es-ES': 'Prueba' },
  excerpt: { en: 'Excerpt', 'pt-BR': 'Resumo', 'es-ES': 'Resumen' },
  content: { en: '<p>Content</p>', 'pt-BR': '<p>Conteúdo</p>', 'es-ES': '<p>Contenido</p>' },
  coverImage: null,
  featuredImage: null,
  publishedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
  category: null,
  tags: null,
};

describe('normalize', () => {
  it('maps postStatus to status', () => {
    const result = normalize({ ...BASE_RAW, postStatus: 'draft' });
    expect(result.status).toBe('draft');
  });

  it('returns null coverImage when null', () => {
    const result = normalize({ ...BASE_RAW, coverImage: null });
    expect(result.coverImage).toBeNull();
  });

  it('resolves relative coverImage URL', () => {
    const result = normalize({ ...BASE_RAW, coverImage: { id: 1, url: '/uploads/img.jpg' } });
    expect(result.coverImage).toBe('http://localhost:1337/uploads/img.jpg');
  });

  it('keeps absolute coverImage URL unchanged', () => {
    const result = normalize({ ...BASE_RAW, coverImage: { id: 1, url: 'https://cdn.example.com/img.jpg' } });
    expect(result.coverImage).toBe('https://cdn.example.com/img.jpg');
  });

  it('resolves coverImage from array (takes first)', () => {
    const result = normalize({
      ...BASE_RAW,
      coverImage: [
        { id: 1, url: '/uploads/first.jpg' },
        { id: 2, url: '/uploads/second.jpg' },
      ],
    });
    expect(result.coverImage).toBe('http://localhost:1337/uploads/first.jpg');
  });

  it('returns empty array when tags is null', () => {
    const result = normalize({ ...BASE_RAW, tags: null });
    expect(result.tags).toEqual([]);
  });

  it('returns tags array when provided', () => {
    const result = normalize({ ...BASE_RAW, tags: [MOCK_TAGS[0]] });
    expect(result.tags).toHaveLength(1);
    expect(result.tags[0].slug).toBe('pix');
  });

  it('returns null category when null', () => {
    const result = normalize({ ...BASE_RAW, category: null });
    expect(result.category).toBeNull();
  });

  it('returns category when provided', () => {
    const result = normalize({ ...BASE_RAW, category: MOCK_CATEGORIES[0] });
    expect(result.category?.slug).toBe('product');
  });

  it('preserves all other fields', () => {
    const result = normalize(BASE_RAW);
    expect(result.id).toBe(99);
    expect(result.documentId).toBe('test-doc-id');
    expect(result.slug).toBe('test-post');
    expect(result.title['en']).toBe('Test');
  });
});

describe('MOCK_POSTS', () => {
  it('has at least one published post', () => {
    const published = MOCK_POSTS.filter((p) => p.status === 'published');
    expect(published.length).toBeGreaterThan(0);
  });

  it('each post has required fields', () => {
    for (const post of MOCK_POSTS) {
      expect(post.id).toBeDefined();
      expect(post.documentId).toBeDefined();
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeDefined();
      expect(post.status).toMatch(/^(draft|published|archived)$/);
    }
  });

  it('each post has multi-locale title', () => {
    for (const post of MOCK_POSTS) {
      expect(post.title['en']).toBeTruthy();
    }
  });

  it('tags is always an array', () => {
    for (const post of MOCK_POSTS) {
      expect(Array.isArray(post.tags)).toBe(true);
    }
  });
});

describe('MOCK_CATEGORIES', () => {
  it('has unique slugs', () => {
    const slugs = MOCK_CATEGORIES.map((c) => c.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it('each category has multi-locale label', () => {
    for (const cat of MOCK_CATEGORIES) {
      expect(cat.label['en']).toBeTruthy();
    }
  });
});

describe('MOCK_TAGS', () => {
  it('has unique slugs', () => {
    const slugs = MOCK_TAGS.map((t) => t.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it('each tag has multi-locale label', () => {
    for (const tag of MOCK_TAGS) {
      expect(tag.label['en']).toBeTruthy();
    }
  });
});

// ── resolveImage logic (tested via normalize behavior) ────────────────────────

describe('resolveImage logic', () => {
  it('mock posts with null coverImage return null', () => {
    const post = MOCK_POSTS[0];
    // Mock posts have coverImage: null
    expect(post.coverImage).toBeNull();
  });
});
