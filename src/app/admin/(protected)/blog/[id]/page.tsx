import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostById } from '@/lib/strapi';
import PostForm from '@/components/admin/PostForm';

export const metadata: Metadata = { title: 'Edit Post — epag Admin' };

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="mb-6 text-2xl font-extrabold text-secondary-900">Edit Post</h1>
      <PostForm
        initialData={{
          id: post.documentId,
          slug: post.slug,
          status: post.status,
          title: post.title as Record<'en' | 'pt-BR' | 'es-ES', string>,
          excerpt: post.excerpt as Record<'en' | 'pt-BR' | 'es-ES', string>,
          content: post.content as Record<'en' | 'pt-BR' | 'es-ES', string>,
          coverImage: post.coverImage,
        }}
      />
    </div>
  );
}
