'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage, locales } from '@/lib/i18n';

type Post = {
  id: number;
  documentId: string;
  slug: string;
  status: string;
  title: Record<string, string>;
  updatedAt: string;
};

export default function AdminBlogList({ posts: initialPosts }: { posts: Post[] }) {
  const { t, locale } = useLanguage();
  const a = t.admin;
  const router = useRouter();
  const localeKey = locale === 'es' ? 'es-ES' : locale;
  const currentLocaleConfig = locales.find((l) => l.code === locale);
  const localeBadge = currentLocaleConfig?.flag === 'us' ? 'EN' : currentLocaleConfig?.flag === 'br' ? 'PT' : 'ES';

  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const statusStyles: Record<string, string> = {
    published: 'bg-secondary-100 text-theme-secondary',
    draft: 'bg-background text-light-gray',
    archived: 'bg-background text-light-gray border border-secondary-900/10',
  };

  const statusLabels: Record<string, string> = {
    published: a.status.published,
    draft: a.status.draft,
    archived: a.status.archived,
  };

  async function handleDelete(post: Post) {
    if (!confirm(`${a.post.confirmDelete}`)) return;
    const res = await fetch(`/api/posts/${post.documentId}`, { method: 'DELETE' });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      router.refresh();
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-secondary-900">{a.blog.title}</h1>
        <Link href="/admin/blog/new" className="rounded-panel bg-primary-500 px-4 py-2 text-sm font-semibold text-light transition-colors hover:bg-primary-600">
          {a.blog.newPost}
        </Link>
      </div>

      <div className="rounded-panel bg-light shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-secondary-900/10">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-light-gray">{a.blog.colTitle}</th>
              <th className="px-4 py-3 text-left font-semibold text-light-gray">{a.blog.colStatus}</th>
              <th className="px-4 py-3 text-left font-semibold text-light-gray">{a.blog.colUpdated}</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-900/5">
            {posts.map((post) => {
              const title = post.title?.[localeKey] ?? post.title?.['en'] ?? post.slug;
              return (
                <tr key={post.id} className="hover:bg-background transition-colors">
                  <td className="px-4 py-3 font-medium text-secondary-900">
                    <div className="flex items-center gap-2">
                      <span className="wrap-break-word min-w-0">{title}</span>
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-semibold bg-green-100 text-green-700 shrink-0">
                        {localeBadge}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[post.status] ?? ''}`}>
                      {statusLabels[post.status] ?? post.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-light-gray whitespace-nowrap">
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/admin/blog/${post.documentId}`} className="text-xs text-primary-500 hover:text-primary-600 font-semibold transition-colors">
                        {a.taxonomy.edit}
                      </Link>
                      <button onClick={() => handleDelete(post)} className="text-xs text-red-400 hover:text-red-600 transition-colors">
                        {a.taxonomy.delete}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-light-gray">
                  {a.blog.noPostsYet}{' '}
                  <Link href="/admin/blog/new" className="text-primary-500 hover:underline">
                    {a.blog.createFirst}
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
