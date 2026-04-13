import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug } from '@/lib/strapi';

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
  const post = await getPostBySlug(slug);

  if (!post || post.status !== 'published') notFound();

  const title = post.title?.['en'] ?? slug;
  const content = post.content?.['en'] ?? '';

  return (
    <main className="flex-1 bg-background">
      <section className="bg-secondary-900 rounded-b-hero overflow-hidden">
        <div className="page-section page-container flex flex-col items-center justify-center text-center">
          <Link
            href="/blog"
            className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary-500 hover:text-primary-600 transition-colors"
          >
            ← Blog
          </Link>
          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-light md:text-4xl lg:text-5xl">
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

      {post.coverImage && (
        <div className="page-x">
          <div className="page-container">
            <div className="relative -mt-8 h-72 w-full overflow-hidden rounded-panel shadow-card md:h-96">
              <Image src={post.coverImage} alt={title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      )}

      <section className="page-section">
        <div className="page-container">
          <div className="mx-auto max-w-2xl">
            <div
              className="text-dark-gray leading-relaxed text-base [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-secondary-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-secondary-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-500 [&_blockquote]:pl-4 [&_blockquote]:text-light-gray [&_blockquote]:italic [&_a]:text-primary-500 [&_a]:hover:text-primary-600"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
