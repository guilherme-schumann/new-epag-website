import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategories, getPostById, getTags } from '@/lib/strapi';
import PostForm from '@/components/admin/PostForm';
import AdminPageTitle from '@/components/admin/AdminPageTitle';

export const metadata: Metadata = { title: 'Edit Post — epag Admin' };

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [post, categories, tags] = await Promise.all([
    getPostById(id),
    getCategories().catch(() => []),
    getTags().catch(() => []),
  ]);

  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <AdminPageTitle type="editPost" />
      <PostForm
        initialData={{
          id: post.documentId,
          slug: post.slug,
          status: post.status,
          title: post.title as Record<'en' | 'pt-BR' | 'es-ES', string>,
          excerpt: post.excerpt as Record<'en' | 'pt-BR' | 'es-ES', string>,
          content: post.content as Record<'en' | 'pt-BR' | 'es-ES', string>,
          coverImage: post.coverImage,
          featuredImage: post.featuredImage,
          categoryId: post.category?.documentId ?? null,
          tagIds: post.tags.map((t) => t.documentId),
        }}
        categories={categories.map((c) => ({ id: String(c.id), documentId: c.documentId, slug: c.slug, label: c.label }))}
        tags={tags.map((t) => ({ id: String(t.id), documentId: t.documentId, slug: t.slug, label: t.label }))}
      />
    </div>
  );
}
