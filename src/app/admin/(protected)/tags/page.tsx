import type { Metadata } from 'next';
import { getTags } from '@/lib/strapi';
import TaxonomyManager from '@/components/admin/TaxonomyManager';
import AdminPageTitle from '@/components/admin/AdminPageTitle';

export const metadata: Metadata = { title: 'Tags — epag Admin' };

export default async function TagsPage() {
  const tags = await getTags().catch(() => []);

  return (
    <div className="max-w-2xl mx-auto">
      <AdminPageTitle type="tags" />
      <TaxonomyManager
        endpoint="/api/tags"
        initialItems={tags.map((t) => ({
          id: String(t.id),
          documentId: t.documentId,
          slug: t.slug,
          label: t.label,
        }))}
      />
    </div>
  );
}
