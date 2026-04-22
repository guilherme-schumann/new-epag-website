import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getTagBySlug, getPosts, getCategories, getTags } from '@/lib/strapi';
import { BlogHero, BlogList } from '@/components/sections/blog';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://epag.io';

export async function generateStaticParams() {
  const tags = await getTags().catch(() => []);
  return tags.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  if (!tag) return {};

  const label = tag.label['en'] ?? slug;
  const title = `#${label} — epag Blog`;
  const description = `Posts tagged with ${label} on the epag blog.`;
  const url = `${BASE_URL}/blog/tag/${slug}`;

  return {
    title,
    description,
    openGraph: { title, description, url, type: 'website' },
    twitter: { card: 'summary', title, description },
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [tag, posts, categories, tags] = await Promise.all([
    getTagBySlug(slug),
    getPosts().catch(() => []),
    getCategories().catch(() => []),
    getTags().catch(() => []),
  ]);

  if (!tag) notFound();

  const published = posts
    .filter((p) => p.status === 'published')
    .filter((p) => p.tags.some((t) => t.slug === slug));

  return (
    <main className="flex-1 bg-background">
      <BlogHero />
      <Suspense>
        <BlogList
          initialTag={slug}
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
