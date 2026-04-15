import type { Metadata } from 'next';
import { getCategories } from '@/lib/strapi';
import TaxonomyManager from '@/components/admin/TaxonomyManager';
import AdminPageTitle from '@/components/admin/AdminPageTitle';

export const metadata: Metadata = { title: 'Categories — epag Admin' };

export default async function CategoriesPage() {
  const categories = await getCategories().catch(() => []);

  return (
    <div className="max-w-2xl mx-auto">
      <AdminPageTitle type="categories" />
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
