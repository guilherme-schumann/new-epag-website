import type { Metadata } from 'next';
import { getTags } from '@/lib/strapi';
import TaxonomyManager from '@/components/admin/TaxonomyManager';

export const metadata: Metadata = { title: 'Tags — epag Admin' };

export default async function TagsPage() {
  const tags = await getTags().catch(() => []);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="mb-6 text-2xl font-extrabold text-secondary-900">Tags</h1>
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
