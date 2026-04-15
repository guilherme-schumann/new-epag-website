'use client';

import { useLanguage } from '@/lib/i18n';

type Props = { total: number; published: number; drafts: number };

export default function AdminDashboard({ total, published, drafts }: Props) {
  const { t } = useLanguage();
  const a = t.admin;

  return (
    <div>
      <h1 className="mb-8 text-2xl font-extrabold text-secondary-900">{a.dashboard.title}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-panel bg-light p-6 shadow-card">
          <p className="text-sm text-light-gray">{a.dashboard.totalPosts}</p>
          <p className="mt-1 text-3xl font-extrabold text-secondary-900">{total}</p>
        </div>
        <div className="rounded-panel bg-light p-6 shadow-card">
          <p className="text-sm text-light-gray">{a.dashboard.published}</p>
          <p className="mt-1 text-3xl font-extrabold text-secondary-900">{published}</p>
        </div>
        <div className="rounded-panel bg-light p-6 shadow-card">
          <p className="text-sm text-light-gray">{a.dashboard.drafts}</p>
          <p className="mt-1 text-3xl font-extrabold text-secondary-900">{drafts}</p>
        </div>
      </div>
    </div>
  );
}
