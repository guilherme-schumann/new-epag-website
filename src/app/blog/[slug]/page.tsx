import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/strapi';
import { BlogPostLayout } from '@/components/sections/blog';

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

  const title = post.title?.['en'] ?? slug;
  const content = post.content?.['en'] ?? '';

  const related = allPosts
    .filter((p) => p.status === 'published' && p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="flex-1 bg-background">
      {/* Hero */}
      <section className="bg-secondary-900 rounded-b-hero overflow-hidden">
        <div className="page-section page-container flex flex-col items-center justify-center text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">
            Blog
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-light md:text-5xl">
            {title}
          </h1>
          {post.publishedAt && (
            <p className="mt-4 text-sm text-light/50">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </p>
          )}
        </div>
      </section>

      <BlogPostLayout
        title={title}
        publishedAt={post.publishedAt}
        content={content}
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
