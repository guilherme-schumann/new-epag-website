import type { Metadata } from 'next';
import { getPosts } from '@/lib/strapi';
import AdminDashboard from '@/components/admin/AdminDashboard';

export const metadata: Metadata = { title: 'Dashboard — epag Admin' };

export default async function AdminDashboardPage() {
  const posts = await getPosts().catch(() => []);
  const published = posts.filter((p) => p.status === 'published').length;
  const drafts = posts.filter((p) => p.status === 'draft').length;

  return <AdminDashboard total={posts.length} published={published} drafts={drafts} />;
}
