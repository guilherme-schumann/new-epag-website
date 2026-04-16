const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function strapiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      ...options.headers,
    },
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  return res.json();
}
// ── Types ─────────────────────────────────────────────────────────────────────

export type StrapiCategory = {
  id: number;
  documentId: string;
  slug: string;
  label: Record<string, string>;
};

export type StrapiTag = {
  id: number;
  documentId: string;
  slug: string;
  label: Record<string, string>;
};

export type StrapiPost = {
  id: number;
  documentId: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
  coverImage: string | null;
  featuredImage: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  category: StrapiCategory | null;
  tags: StrapiTag[];
};

export type StrapiListResponse<T> = {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
};

export type StrapiSingleResponse<T> = {
  data: T;
};

// ── Mock data ─────────────────────────────────────────────────────────────────

export const MOCK_CATEGORIES: StrapiCategory[] = [
  { id: 1, documentId: '1', slug: 'product', label: { en: 'Product', 'pt-BR': 'Produto', 'es-ES': 'Producto' } },
  { id: 2, documentId: '2', slug: 'guides', label: { en: 'Guides', 'pt-BR': 'Guias', 'es-ES': 'Guías' } },
  { id: 3, documentId: '3', slug: 'news', label: { en: 'News', 'pt-BR': 'Notícias', 'es-ES': 'Noticias' } },
];

export const MOCK_TAGS: StrapiTag[] = [
  { id: 1, documentId: '1', slug: 'pix', label: { en: 'PIX', 'pt-BR': 'PIX', 'es-ES': 'PIX' } },
  { id: 2, documentId: '2', slug: 'spei', label: { en: 'SPEI', 'pt-BR': 'SPEI', 'es-ES': 'SPEI' } },
  { id: 3, documentId: '3', slug: 'brazil', label: { en: 'Brazil', 'pt-BR': 'Brasil', 'es-ES': 'Brasil' } },
  { id: 4, documentId: '4', slug: 'integration', label: { en: 'Integration', 'pt-BR': 'Integração', 'es-ES': 'Integración' } },
];

export const MOCK_POSTS: StrapiPost[] = [
  {
    id: 1,
    documentId: '1',
    slug: 'getting-started-with-epag',
    status: 'published',
    title: { en: 'Getting Started with epag', 'pt-BR': 'Começando com epag', 'es-ES': 'Empezando con epag' },
    excerpt: { en: 'Learn how to integrate epag payments into your platform.', 'pt-BR': 'Aprenda a integrar pagamentos epag.', 'es-ES': 'Aprende a integrar pagos epag.' },
    content: { en: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>', 'pt-BR': '<p>Lorem ipsum em português.</p>', 'es-ES': '<p>Lorem ipsum en español.</p>' },
    coverImage: null,
    publishedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    category: MOCK_CATEGORIES[0],
    tags: [MOCK_TAGS[0], MOCK_TAGS[3]],
  },
  {
    id: 2,
    documentId: '2',
    slug: 'pix-payments-brazil',
    status: 'draft',
    title: { en: 'PIX Payments in Brazil', 'pt-BR': 'Pagamentos PIX no Brasil', 'es-ES': 'Pagos PIX en Brasil' },
    excerpt: { en: '', 'pt-BR': '', 'es-ES': '' },
    content: { en: '', 'pt-BR': '', 'es-ES': '' },
    coverImage: null,
    publishedAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    category: MOCK_CATEGORIES[1],
    tags: [MOCK_TAGS[0], MOCK_TAGS[2]],
  },
  {
    id: 3,
    documentId: '3',
    slug: 'spei-mexico-guide',
    status: 'archived',
    title: { en: 'SPEI Payments in Mexico', 'pt-BR': 'Pagamentos SPEI no México', 'es-ES': 'Pagos SPEI en México' },
    excerpt: { en: '', 'pt-BR': '', 'es-ES': '' },
    content: { en: '', 'pt-BR': '', 'es-ES': '' },
    coverImage: null,
    publishedAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    category: MOCK_CATEGORIES[1],
    tags: [MOCK_TAGS[1]],
  },
];

// ── Normalize ─────────────────────────────────────────────────────────────────

type StrapiMediaFile = { id: number; url: string };

type RawStrapiPost = Omit<StrapiPost, 'status' | 'coverImage' | 'featuredImage' | 'category' | 'tags'> & {
  postStatus: StrapiPost['status'];
  coverImage: StrapiMediaFile[] | StrapiMediaFile | null;
  featuredImage: StrapiMediaFile[] | StrapiMediaFile | null;
  category: StrapiCategory | null;
  tags: StrapiTag[] | null;
};

function resolveImage(img: StrapiMediaFile[] | StrapiMediaFile | null): string | null {
  const file = Array.isArray(img) ? (img[0] ?? null) : img;
  if (!file) return null;
  return file.url.startsWith('http') ? file.url : `${STRAPI_URL}${file.url}`;
}

function normalize(raw: RawStrapiPost): StrapiPost {
  const { postStatus, coverImage, featuredImage, tags, ...rest } = raw;
  return {
    ...rest,
    status: postStatus,
    coverImage: resolveImage(coverImage),
    featuredImage: resolveImage(featuredImage),
    category: rest.category ?? null,
    tags: tags ?? [],
  };
}

// ── Posts ─────────────────────────────────────────────────────────────────────

export async function getPosts(): Promise<StrapiPost[]> {
  if (USE_MOCK) return MOCK_POSTS;
  const res = await strapiRequest<StrapiListResponse<RawStrapiPost>>(
    '/posts?populate=*&sort=createdAt:desc'
  );
  return res.data.map(normalize);
}

export async function getPostBySlug(slug: string): Promise<StrapiPost | null> {
  if (USE_MOCK) return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
  const res = await strapiRequest<StrapiListResponse<RawStrapiPost>>(
    `/posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  return res.data[0] ? normalize(res.data[0]) : null;
}

export async function getPostById(id: string): Promise<StrapiPost | null> {
  if (USE_MOCK) return MOCK_POSTS.find((p) => p.documentId === id) ?? null;
  try {
    const res = await strapiRequest<StrapiSingleResponse<RawStrapiPost>>(`/posts/${id}?populate=*`);
    return normalize(res.data);
  } catch {
    return null;
  }
}

// ── Categories ────────────────────────────────────────────────────────────────

export async function getCategories(): Promise<StrapiCategory[]> {
  if (USE_MOCK) return MOCK_CATEGORIES;
  const res = await strapiRequest<StrapiListResponse<StrapiCategory>>('/categories?sort=label:asc');
  return res.data;
}

// ── Tags ──────────────────────────────────────────────────────────────────────

export async function getTags(): Promise<StrapiTag[]> {
  if (USE_MOCK) return MOCK_TAGS;
  const res = await strapiRequest<StrapiListResponse<StrapiTag>>('/tags?sort=label:asc');
  return res.data;
}

export async function getTagBySlug(slug: string): Promise<StrapiTag | null> {
  if (USE_MOCK) return MOCK_TAGS.find((t) => t.slug === slug) ?? null;
  const res = await strapiRequest<StrapiListResponse<StrapiTag>>(
    `/tags?filters[slug][$eq]=${encodeURIComponent(slug)}`
  );
  return res.data[0] ?? null;
}
