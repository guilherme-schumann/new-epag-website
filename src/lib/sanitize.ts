import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks.
 * Allows safe formatting tags but strips scripts, event handlers, etc.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'blockquote', 'pre', 'code',
      'a', 'img',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span',
    ],
    ALLOWED_ATTR: [
      'href', 'target', 'rel',
      'src', 'alt', 'width', 'height',
      'id', 'class',
    ],
    // Force links to be safe
    FORCE_BODY: true,
    ADD_ATTR: ['target'],
  });
}

/**
 * Sanitizes a plain text string — strips all HTML tags.
 */
export function sanitizeText(text: string): string {
  return DOMPurify.sanitize(text, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

/**
 * Sanitizes a slug — converts spaces to hyphens, removes special chars, lowercases.
 */
export function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 200);
}

const POST_LOCALES = ['en', 'pt-BR', 'es-ES'];

function sanitizeLocaleMap(map: unknown, fn: (s: string) => string): unknown {
  if (!map || typeof map !== 'object') return map;
  return Object.fromEntries(
    POST_LOCALES.map((l) => [l, fn(String((map as Record<string, unknown>)[l] ?? ''))])
  );
}

/**
 * Sanitizes a post body before writing to Strapi.
 * Strips XSS from content, plain text from title/excerpt, and normalizes slug.
 */
export function sanitizePostBody(body: Record<string, unknown>): Record<string, unknown> {
  return {
    ...body,
    slug: sanitizeSlug(String(body.slug ?? '')),
    title: sanitizeLocaleMap(body.title, sanitizeText),
    excerpt: sanitizeLocaleMap(body.excerpt, sanitizeText),
    content: sanitizeLocaleMap(body.content, sanitizeHtml),
  };
}

/**
 * Sanitizes a taxonomy item (category or tag) body.
 */
export function sanitizeTaxonomyBody(body: Record<string, unknown>): Record<string, unknown> {
  return {
    ...body,
    slug: sanitizeSlug(String(body.slug ?? '')),
    label: sanitizeLocaleMap(body.label, sanitizeText),
  };
}
