import type { MetadataRoute } from 'next';
import { getPosts, getTags } from '@/lib/strapi';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://epag.io';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, tags] = await Promise.all([
    getPosts().catch(() => []),
    getTags().catch(() => []),
  ]);
  const published = posts.filter((p) => p.status === 'published');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/coverage`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/solutions/payin`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const postRoutes: MetadataRoute.Sitemap = published.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const tagRoutes: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${BASE_URL}/blog/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...tagRoutes];
}
