import type { Metadata } from 'next';
import LoginForm from '@/components/admin/LoginForm';

export const metadata: Metadata = { title: 'Admin Login — epag' };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary-900">
      <div className="w-full max-w-sm rounded-panel bg-light p-8 shadow-card">
        <h1 className="mb-6 text-xl font-extrabold text-secondary-900">epag Admin</h1>
        <LoginForm />
      </div>
    </div>
  );
}
