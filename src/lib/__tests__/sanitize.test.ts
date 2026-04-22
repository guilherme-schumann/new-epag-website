import { describe, it, expect } from 'vitest';
import { sanitizeHtml, sanitizeText, sanitizeSlug, sanitizePostBody, sanitizeTaxonomyBody } from '../sanitize';

// ── sanitizeSlug ──────────────────────────────────────────────────────────────

describe('sanitizeSlug', () => {
  it('lowercases and keeps alphanumeric and hyphens', () => {
    expect(sanitizeSlug('My Post Title')).toBe('my-post-title');
  });

  it('removes special characters', () => {
    expect(sanitizeSlug('hello@world!')).toBe('helloworld');
  });

  it('removes accented characters', () => {
    expect(sanitizeSlug('publicação-teste')).toBe('publicao-teste');
  });

  it('truncates to 200 chars', () => {
    const long = 'a'.repeat(250);
    expect(sanitizeSlug(long)).toHaveLength(200);
  });

  it('returns empty string for empty input', () => {
    expect(sanitizeSlug('')).toBe('');
  });
});

// ── sanitizeText ──────────────────────────────────────────────────────────────

describe('sanitizeText', () => {
  it('strips all HTML tags', () => {
    expect(sanitizeText('<b>hello</b>')).toBe('hello');
  });

  it('strips script tags', () => {
    expect(sanitizeText('<script>alert(1)</script>text')).toBe('text');
  });

  it('returns plain text unchanged', () => {
    expect(sanitizeText('hello world')).toBe('hello world');
  });

  it('strips event handlers', () => {
    expect(sanitizeText('<p onclick="evil()">text</p>')).toBe('text');
  });
});

// ── sanitizeHtml ──────────────────────────────────────────────────────────────

describe('sanitizeHtml', () => {
  it('keeps safe formatting tags', () => {
    const input = '<p><strong>bold</strong> and <em>italic</em></p>';
    expect(sanitizeHtml(input)).toContain('<strong>bold</strong>');
    expect(sanitizeHtml(input)).toContain('<em>italic</em>');
  });

  it('strips script tags', () => {
    const input = '<p>text</p><script>alert(1)</script>';
    expect(sanitizeHtml(input)).not.toContain('<script>');
    expect(sanitizeHtml(input)).not.toContain('alert(1)');
  });

  it('strips onclick and other event handlers', () => {
    const input = '<p onclick="evil()">text</p>';
    expect(sanitizeHtml(input)).not.toContain('onclick');
  });

  it('strips javascript: URLs', () => {
    const input = '<a href="javascript:alert(1)">click</a>';
    expect(sanitizeHtml(input)).not.toContain('javascript:');
  });

  it('keeps safe anchor tags', () => {
    const input = '<a href="https://epag.io" target="_blank" rel="noopener">link</a>';
    expect(sanitizeHtml(input)).toContain('href="https://epag.io"');
  });

  it('keeps headings', () => {
    const input = '<h2>Title</h2><h3>Subtitle</h3>';
    expect(sanitizeHtml(input)).toContain('<h2>Title</h2>');
    expect(sanitizeHtml(input)).toContain('<h3>Subtitle</h3>');
  });

  it('keeps lists', () => {
    const input = '<ul><li>item</li></ul>';
    expect(sanitizeHtml(input)).toContain('<ul>');
    expect(sanitizeHtml(input)).toContain('<li>item</li>');
  });

  it('strips iframe', () => {
    const input = '<iframe src="https://evil.com"></iframe>';
    expect(sanitizeHtml(input)).not.toContain('<iframe');
  });
});

// ── sanitizePostBody ──────────────────────────────────────────────────────────

describe('sanitizePostBody', () => {
  it('sanitizes slug', () => {
    const result = sanitizePostBody({ slug: 'My Post!' });
    expect(result.slug).toBe('my-post');
  });

  it('sanitizes title per locale', () => {
    const result = sanitizePostBody({
      slug: 'test',
      title: { en: '<b>Title</b>', 'pt-BR': 'Título', 'es-ES': 'Título' },
    });
    const title = result.title as Record<string, string>;
    expect(title['en']).toBe('Title');
    expect(title['pt-BR']).toBe('Título');
  });

  it('sanitizes content HTML per locale', () => {
    const result = sanitizePostBody({
      slug: 'test',
      content: {
        en: '<p>text</p><script>alert(1)</script>',
        'pt-BR': '<p>texto</p>',
        'es-ES': '<p>texto</p>',
      },
    });
    const content = result.content as Record<string, string>;
    expect(content['en']).not.toContain('<script>');
    expect(content['en']).toContain('<p>text</p>');
  });

  it('preserves other fields', () => {
    const result = sanitizePostBody({ slug: 'test', category: 'abc', tags: ['x'] });
    expect(result.category).toBe('abc');
    expect(result.tags).toEqual(['x']);
  });
});

// ── sanitizeTaxonomyBody ──────────────────────────────────────────────────────

describe('sanitizeTaxonomyBody', () => {
  it('sanitizes slug', () => {
    const result = sanitizeTaxonomyBody({ slug: 'My Tag!' });
    expect(result.slug).toBe('my-tag');
  });

  it('sanitizes label per locale', () => {
    const result = sanitizeTaxonomyBody({
      slug: 'news',
      label: { en: '<b>News</b>', 'pt-BR': 'Notícias', 'es-ES': 'Noticias' },
    });
    const label = result.label as Record<string, string>;
    expect(label['en']).toBe('News');
    expect(label['pt-BR']).toBe('Notícias');
  });
});
