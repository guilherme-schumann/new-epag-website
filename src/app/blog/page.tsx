import type { Metadata } from 'next';
import { BlogHero, BlogList } from '@/components/sections/blog';
import { getPosts } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Blog — epag',
  description: 'Insights, guides and updates on payments across Latin America from the epag team.',
};

export default async function BlogPage() {
  const posts = await getPosts().catch(() => []);
  const published = posts.filter((p) => p.status === 'published');

  return (
    <main className="flex-1 bg-background">
      <BlogHero />
      <BlogList posts={published.map((p) => ({
        id: String(p.id),
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        coverImage: p.coverImage,
        publishedAt: p.publishedAt ? new Date(p.publishedAt) : null,
        tags: [],
      }))} />
    </main>
  );
}
