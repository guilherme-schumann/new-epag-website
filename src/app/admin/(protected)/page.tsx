import type { Metadata } from 'next';
import { getPosts } from '@/lib/strapi';

export const metadata: Metadata = { title: 'Dashboard — epag Admin' };

export default async function AdminDashboard() {
  const posts = await getPosts().catch(() => []);
  const published = posts.filter((p) => p.status === 'published').length;
  const drafts = posts.filter((p) => p.status === 'draft').length;

  return (
    <div>
      <h1 className="mb-8 text-2xl font-extrabold text-secondary-900">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Posts" value={posts.length} />
        <StatCard label="Published" value={published} />
        <StatCard label="Drafts" value={drafts} />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-panel bg-light p-6 shadow-card">
      <p className="text-sm text-light-gray">{label}</p>
      <p className="mt-1 text-3xl font-extrabold text-secondary-900">{value}</p>
    </div>
  );
}
