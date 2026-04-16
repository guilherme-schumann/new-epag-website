'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';

export default function LoginForm() {
  const router = useRouter();
  const { t } = useLanguage();
  const a = t.admin.login;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.get('email'),
        password: form.get('password'),
      }),
    });

    setLoading(false);

    if (!res.ok) {
      setError(a.invalidCredentials);
      return;
    }

    router.push('/admin');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.email}</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.password}</label>
        <input
          name="password"
          type="password"
          required
          className="w-full rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-panel bg-primary-500 py-2 text-sm font-semibold text-light transition-colors hover:bg-primary-600 disabled:opacity-50"
      >
        {loading ? a.signingIn : a.signIn}
      </button>
    </form>
  );
}
