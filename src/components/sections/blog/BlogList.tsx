'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useContent } from '@/hooks/useContent';
import { blogContent } from '@/content';

type Category = {
  id: string;
  slug: string;
  label: Record<string, string>;
};

type Tag = {
  id: string;
  slug: string;
  label: Record<string, string>;
};

type Post = {
  id: string;
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  coverImage: string | null;
  publishedAt: Date | null;
  category: Category | null;
  tags: Tag[];
};

type Props = {
  posts: Post[];
  categories: Category[];
};

export default function BlogList({ posts, categories }: Props) {
  const c = useContent(blogContent).list;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((p) => p.category?.slug === activeCategory)
    : posts;

  return (
    <section className="page-section bg-background">
      <div className="page-container">
        {/* Category filter */}
        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeCategory === null
                  ? 'bg-primary-500 text-light'
                  : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-100/70'
              }`}
            >
              {c.allCategories}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug === activeCategory ? null : cat.slug)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-primary-500 text-light'
                    : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-100/70'
                }`}
              >
                {cat.label['en'] ?? cat.slug}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-light-gray py-12">{c.noPosts}</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} readMore={c.readMore} publishedOn={c.publishedOn} />
            ))}
          </div>
        )}
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
  const coverImage = post.coverImage?.startsWith('http') ? post.coverImage : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-panel bg-light shadow-card overflow-hidden transition-shadow hover:shadow-md"
    >
      {coverImage ? (
        <div className="h-48 w-full overflow-hidden bg-secondary-100">
          <Image
            src={coverImage}
            alt={title}
            width={600}
            height={192}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
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

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-full bg-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-primary-600"
              >
                {tag.label['en'] ?? tag.slug}
              </span>
            ))}
          </div>
        )}

        <span className="mt-auto text-sm font-semibold text-primary-500 group-hover:text-primary-600 transition-colors">
          {readMore} →
        </span>
      </div>
    </Link>
  );
}
