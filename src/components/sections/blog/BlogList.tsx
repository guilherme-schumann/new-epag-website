'use client';

import { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useContent } from '@/hooks/useContent';
import { blogContent } from '@/content';
import { useLanguage } from '@/lib/i18n';

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
  tags: Tag[];
  initialTag?: string;
};

export default function BlogList({ posts, categories, tags, initialTag }: Props) {
  const c = useContent(blogContent).list;
  const { locale } = useLanguage();
  const localeKey = locale === 'es' ? 'es-ES' : locale;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const activeTag = searchParams.get('tag') ?? initialTag ?? null;

  function setTagFilter(slug: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set('tag', slug);
    } else {
      params.delete('tag');
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  const filtered = posts.filter((p) => {
    const matchCat = !activeCategory || p.category?.slug === activeCategory;
    const matchTag = !activeTag || p.tags.some((t) => t.slug === activeTag);
    return matchCat && matchTag;
  });

  return (
    <section className="page-section bg-background">
      <div className="page-container">
        {/* Category filter */}
        {categories.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              suppressHydrationWarning
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
                suppressHydrationWarning
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-primary-500 text-light'
                    : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-100/70'
                }`}
              >
                {cat.label[localeKey] ?? cat.label['en'] ?? cat.slug}
              </button>
            ))}
          </div>
        )}

        {/* Tag filter */}
        {tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {activeTag && (
              <button
                onClick={() => setTagFilter(null)}
                suppressHydrationWarning
                className="rounded-full bg-primary-500 px-4 py-1.5 text-sm font-semibold text-light transition-colors"
              >
                #{activeTag} ×
              </button>
            )}
            {!activeTag && tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setTagFilter(tag.slug)}
                suppressHydrationWarning
                className="rounded-full bg-secondary-100/60 px-3 py-1 text-xs font-semibold text-secondary-900 hover:bg-primary-500/10 hover:text-primary-600 transition-colors"
              >
                #{tag.label[localeKey] ?? tag.label['en'] ?? tag.slug}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-light-gray py-12">{c.noPosts}</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} readMore={c.readMore} publishedOn={c.publishedOn} localeKey={localeKey} showMoreTags={c.showMoreTags} showLessTags={c.showLessTags} />
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
  localeKey,
  showMoreTags,
  showLessTags,
}: {
  post: Post;
  readMore: string;
  publishedOn: string;
  localeKey: string;
  showMoreTags: string;
  showLessTags: string;
}) {
  const title = post.title[localeKey] ?? post.title['en'] ?? post.slug;
  const excerpt = post.excerpt[localeKey] ?? post.excerpt['en'] ?? '';
  const coverImage = post.coverImage ?? null;
  const [tagsExpanded, setTagsExpanded] = useState(false);

  const MAX_TAGS = 3;
  const visibleTags = tagsExpanded ? post.tags : post.tags.slice(0, MAX_TAGS);
  const hasMore = post.tags.length > MAX_TAGS;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-panel bg-light shadow-card overflow-hidden transition-shadow hover:shadow-md"
    >
      {coverImage ? (
        <div className="relative h-48 w-full overflow-hidden bg-secondary-100">
          <Image
            src={coverImage}
            alt={title}
            width={600}
            height={192}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          {post.tags.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap justify-end gap-1 max-w-[80%]">
              {visibleTags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full bg-primary-500/90 px-3 py-1 text-sm font-medium text-light backdrop-blur-sm"
                >
                  {tag.label[localeKey] ?? tag.label['en'] ?? tag.slug}
                </span>
              ))}
              {hasMore && (
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); setTagsExpanded((v) => !v); }}
                  className="rounded-full bg-primary-500/90 px-3 py-1 text-sm font-semibold text-light backdrop-blur-sm hover:bg-primary-600/90 transition-colors"
                >
                  {tagsExpanded ? showLessTags : showMoreTags}
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-48 w-full bg-secondary-100">
          {post.tags.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap justify-end gap-1 max-w-[80%]">
              {visibleTags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full bg-primary-500/90 px-3 py-1 text-sm font-medium text-light backdrop-blur-sm"
                >
                  {tag.label[localeKey] ?? tag.label['en'] ?? tag.slug}
                </span>
              ))}
              {hasMore && (
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); setTagsExpanded((v) => !v); }}
                  className="rounded-full bg-primary-500/90 px-3 py-1 text-sm font-semibold text-light backdrop-blur-sm hover:bg-primary-600/90 transition-colors"
                >
                  {tagsExpanded ? showLessTags : showMoreTags}
                </button>
              )}
            </div>
          )}
        </div>
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
