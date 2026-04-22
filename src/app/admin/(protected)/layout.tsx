import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { config } from '@/lib/config';
import AdminSidebar from '@/components/admin/AdminSidebar';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const USE_MOCK = process.env.MOCK_DB === 'true';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const store = await cookies();
  const token = store.get('session')?.value;
  if (!token) redirect('/admin/login');

  let user = { email: config.mock.adminEmail, username: config.mock.adminUsername };

  if (!USE_MOCK) {
    const res = await fetch(`${STRAPI_URL}/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    });
    if (!res.ok) redirect('/admin/login');
    user = await res.json();
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar user={{ email: user.email, name: user.username }} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
