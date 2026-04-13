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
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  return res.json();
}

// ── Types ─────────────────────────────────────────────────────────────────────

export type StrapiPost = {
  id: number;
  documentId: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
  coverImage: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type StrapiListResponse<T> = {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
};

export type StrapiSingleResponse<T> = {
  data: T;
};

// ── Mock data ─────────────────────────────────────────────────────────────────

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
  },
];

// ── Posts ─────────────────────────────────────────────────────────────────────

export async function getPosts(): Promise<StrapiPost[]> {
  if (USE_MOCK) return MOCK_POSTS;
  const res = await strapiRequest<StrapiListResponse<StrapiPost>>(
    '/posts?populate=*&sort=createdAt:desc'
  );
  return res.data;
}

export async function getPostBySlug(slug: string): Promise<StrapiPost | null> {
  if (USE_MOCK) return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
  const res = await strapiRequest<StrapiListResponse<StrapiPost>>(
    `/posts?filters[slug][$eq]=${slug}&populate=*`
  );
  return res.data[0] ?? null;
}

export async function getPostById(id: string): Promise<StrapiPost | null> {
  if (USE_MOCK) return MOCK_POSTS.find((p) => p.documentId === id) ?? null;
  try {
    const res = await strapiRequest<StrapiSingleResponse<StrapiPost>>(`/posts/${id}?populate=*`);
    return res.data;
  } catch {
    return null;
  }
}
