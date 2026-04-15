import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/strapi';
import { BlogPostLayout, BlogPostHero } from '@/components/sections/blog';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title?.['en'] ?? slug} — epag Blog`,
    description: post.excerpt?.['en'] ?? '',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getPosts().catch(() => []),
  ]);

  if (!post || post.status !== 'published') notFound();

  const related = allPosts
    .filter((p) => p.status === 'published' && p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="flex-1 bg-background">
      <BlogPostHero
        title={post.title ?? {}}
        slug={slug}
        publishedAt={post.publishedAt}
      />
      <BlogPostLayout
        title={post.title ?? {}}
        publishedAt={post.publishedAt}
        content={post.content ?? {}}
        featuredImage={post.featuredImage}
        tags={post.tags.map((t) => ({ id: String(t.id), slug: t.slug, label: t.label }))}
        relatedPosts={related.map((p) => ({
          slug: p.slug,
          title: p.title?.['en'] ?? p.slug,
          coverImage: p.coverImage,
        }))}
      />
    </main>
  );
}
