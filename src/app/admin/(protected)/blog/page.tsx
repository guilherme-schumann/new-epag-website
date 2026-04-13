import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/lib/strapi';

export const metadata: Metadata = { title: 'Blog Posts — epag Admin' };

export default async function AdminBlogPage() {
  const posts = await getPosts().catch(() => []);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-secondary-900">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-panel bg-primary-500 px-4 py-2 text-sm font-semibold text-light transition-colors hover:bg-primary-600"
        >
          New Post
        </Link>
      </div>

      <div className="rounded-panel bg-light shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-secondary-900/10">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-light-gray">Title</th>
              <th className="px-4 py-3 text-left font-semibold text-light-gray">Status</th>
              <th className="px-4 py-3 text-left font-semibold text-light-gray">Updated</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-900/5">
            {posts.map((post) => {
              const title = post.title?.['en'] ?? post.slug;
              return (
                <tr key={post.id} className="hover:bg-background transition-colors">
                  <td className="px-4 py-3 font-medium text-secondary-900">{title}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={post.status} />
                  </td>
                  <td className="px-4 py-3 text-light-gray">
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/blog/${post.documentId}`}
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-light-gray">
                  No posts yet.{' '}
                  <Link href="/admin/blog/new" className="text-primary-500 hover:underline">
                    Create the first one.
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

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    published: 'bg-secondary-100 text-theme-secondary',
    draft: 'bg-background text-light-gray',
    archived: 'bg-background text-light-gray border border-secondary-900/10',
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${styles[status] ?? ''}`}>
      {status}
    </span>
  );
}
