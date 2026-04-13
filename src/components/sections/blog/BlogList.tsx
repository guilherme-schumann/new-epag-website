'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContent } from '@/hooks/useContent';
import { blogContent } from '@/content';

type Post = {
  id: string;
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  coverImage: string | null;
  publishedAt: Date | null;
  tags: Array<{ id: string; label: Record<string, string> }>;
};

export default function BlogList({ posts }: { posts: Post[] }) {
  const c = useContent(blogContent).list;

  if (posts.length === 0) {
    return (
      <section className="page-section">
        <div className="page-container">
          <p className="text-center text-light-gray">{c.noPosts}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section bg-background">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} readMore={c.readMore} publishedOn={c.publishedOn} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({
  post,
  readMore,
  publishedOn,
}: {
  post: Post;
  readMore: string;
  publishedOn: string;
}) {
  const title = post.title['en'] ?? post.slug;
  const excerpt = post.excerpt['en'] ?? '';

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-panel bg-light shadow-card overflow-hidden transition-shadow hover:shadow-md"
    >
      {post.coverImage ? (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-secondary-100" />
      )}

      <div className="flex flex-1 flex-col p-6">
        {post.publishedAt && (
          <p className="mb-2 text-xs text-light-gray">
            {publishedOn}{' '}
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}

        <h2 className="mb-3 text-base font-extrabold text-secondary-900 group-hover:text-primary-500 transition-colors leading-snug">
          {title}
        </h2>

        {excerpt && (
          <p className="mb-4 flex-1 text-sm text-light-gray leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}

        <span className="mt-auto text-sm font-semibold text-primary-500 group-hover:text-primary-600 transition-colors">
          {readMore} →
        </span>
      </div>
    </Link>
  );
}
