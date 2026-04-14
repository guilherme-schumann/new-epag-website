import type { Metadata } from 'next';
import { getCategories } from '@/lib/strapi';
import TaxonomyManager from '@/components/admin/TaxonomyManager';

export const metadata: Metadata = { title: 'Categories — epag Admin' };

export default async function CategoriesPage() {
  const categories = await getCategories().catch(() => []);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="mb-6 text-2xl font-extrabold text-secondary-900">Categories</h1>
      <TaxonomyManager
        endpoint="/api/categories"
        initialItems={categories.map((c) => ({
          id: String(c.id),
          documentId: c.documentId,
          slug: c.slug,
          label: c.label,
        }))}
      />
    </div>
  );
}
