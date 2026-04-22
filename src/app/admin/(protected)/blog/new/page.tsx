import type { Metadata } from 'next';
import { getCategories, getTags } from '@/lib/strapi';
import PostForm from '@/components/admin/PostForm';
import AdminPageTitle from '@/components/admin/AdminPageTitle';

export const metadata: Metadata = { title: 'New Post — epag Admin' };

export default async function NewPostPage() {
  const [categories, tags] = await Promise.all([
    getCategories().catch(() => []),
    getTags().catch(() => []),
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <AdminPageTitle type="newPost" />
      <PostForm
        categories={categories.map((c) => ({ id: String(c.id), documentId: c.documentId, slug: c.slug, label: c.label }))}
        tags={tags.map((t) => ({ id: String(t.id), documentId: t.documentId, slug: t.slug, label: t.label }))}
      />
    </div>
  );
}
