import type { Metadata } from 'next';
import { getPosts } from '@/lib/strapi';
import AdminBlogList from '@/components/admin/AdminBlogList';

export const metadata: Metadata = { title: 'Blog Posts — epag Admin' };

export default async function AdminBlogPage() {
  const posts = await getPosts().catch(() => []);
  return <AdminBlogList posts={posts} />;
}
