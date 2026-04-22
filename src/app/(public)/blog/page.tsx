import type { Metadata } from 'next';
import { Suspense } from 'react';
import { BlogHero, BlogList } from '@/components/sections/blog';
import { getCategories, getPosts, getTags } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Blog — epag',
  description: 'Insights, guides and updates on payments across Latin America from the epag team.',
  openGraph: {
    title: 'Blog — epag',
    description: 'Insights, guides and updates on payments across Latin America from the epag team.',
    url: 'https://epag.io/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Blog — epag',
    description: 'Insights, guides and updates on payments across Latin America from the epag team.',
  },
};

export default async function BlogPage() {
  const [posts, categories, tags] = await Promise.all([
    getPosts().catch(() => []),
    getCategories().catch(() => []),
    getTags().catch(() => []),
  ]);

  const published = posts.filter((p) => p.status === 'published');

  return (
    <main className="flex-1 bg-background">
      <BlogHero />
      <Suspense>
        <BlogList
          posts={published.map((p) => ({
            id: String(p.id),
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            coverImage: p.coverImage,
            publishedAt: p.publishedAt ? new Date(p.publishedAt) : null,
            category: p.category
              ? { id: String(p.category.id), slug: p.category.slug, label: p.category.label }
              : null,
            tags: p.tags.map((t) => ({ id: String(t.id), slug: t.slug, label: t.label })),
          }))}
          categories={categories.map((c) => ({
            id: String(c.id),
            slug: c.slug,
            label: c.label,
          }))}
          tags={tags.map((t) => ({
            id: String(t.id),
            slug: t.slug,
            label: t.label,
          }))}
        />
      </Suspense>
    </main>
  );
}
