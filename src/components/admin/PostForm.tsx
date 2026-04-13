'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from './RichTextEditor';

type Locale = 'en' | 'pt-BR' | 'es-ES';
const LOCALES: { key: Locale; label: string }[] = [
  { key: 'en', label: 'English' },
  { key: 'pt-BR', label: 'Português' },
  { key: 'es-ES', label: 'Español' },
];

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'published', label: 'Published' },
  { value: 'archived', label: 'Archived' },
];

type LocaleMap = Record<Locale, string>;

type PostFormProps = {
  initialData?: {
    id: string;
    slug: string;
    status: string;
    title: LocaleMap;
    excerpt: LocaleMap;
    content: LocaleMap;
    coverImage?: string | null;
  };
};

const emptyLocaleMap = (): LocaleMap => ({ en: '', 'pt-BR': '', 'es-ES': '' });

function StatusSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = STATUS_OPTIONS.find((o) => o.value === value);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors bg-background"
      >
        <span>{selected?.label}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`text-light-gray transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-panel border border-secondary-900/10 bg-white shadow-dropdown overflow-hidden">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full px-3 py-2 text-left text-sm transition-colors hover:bg-background ${
                opt.value === value ? 'font-semibold text-primary-500' : 'text-dark-gray'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();
  const isEditing = !!initialData;

  const [locale, setLocale] = useState<Locale>('en');
  const [slug, setSlug] = useState(initialData?.slug ?? '');
  const [status, setStatus] = useState(initialData?.status ?? 'draft');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? '');
  const [title, setTitle] = useState<LocaleMap>(initialData?.title ?? emptyLocaleMap());
  const [excerpt, setExcerpt] = useState<LocaleMap>(initialData?.excerpt ?? emptyLocaleMap());
  const [content, setContent] = useState<LocaleMap>(initialData?.content ?? emptyLocaleMap());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function setLocaleField<T extends LocaleMap>(
    setter: React.Dispatch<React.SetStateAction<T>>,
    value: string
  ) {
    setter((prev) => ({ ...prev, [locale]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = { slug, status, title, excerpt, content, coverImage: coverImage || null };
    const url = isEditing ? `/api/posts/${initialData.id}` : '/api/posts';
    const method = isEditing ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(JSON.stringify(data.error ?? data));
      return;
    }

    router.push('/admin/blog');
    router.refresh();
  }

  async function handleDelete() {
    if (!initialData || !confirm('Delete this post?')) return;
    await fetch(`/api/posts/${initialData.id}`, { method: 'DELETE' });
    router.push('/admin/blog');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Meta */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-secondary-900 mb-1">Slug</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
            placeholder="my-post-slug"
            required
            className="w-full rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-secondary-900 mb-1">Status</label>
          <StatusSelect value={status} onChange={setStatus} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary-900 mb-1">Cover Image URL</label>
        <input
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          placeholder="https://..."
          className="w-full rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors"
        />
      </div>

      {/* Locale tabs */}
      <div>
        <div className="flex gap-1 mb-4 border-b border-secondary-900/10">
          {LOCALES.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setLocale(key)}
              className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                locale === key
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-light-gray hover:text-dark-gray'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-secondary-900 mb-1">Title</label>
            <input
              value={title[locale]}
              onChange={(e) => setLocaleField(setTitle, e.target.value)}
              placeholder={`Title in ${locale}`}
              className="w-full rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary-900 mb-1">Excerpt</label>
            <textarea
              value={excerpt[locale]}
              onChange={(e) => setLocaleField(setExcerpt, e.target.value)}
              placeholder={`Short description in ${locale}`}
              rows={3}
              className="w-full rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary-900 mb-1">Content</label>
            <RichTextEditor
              value={content[locale]}
              onChange={(val) => setLocaleField(setContent, val)}
            />
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex items-center justify-between pt-2">
        {isEditing ? (
          <button
            type="button"
            onClick={handleDelete}
            className="text-sm text-red-500 hover:text-red-600 transition-colors"
          >
            Delete post
          </button>
        ) : <span />}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-panel border border-secondary-900/20 px-4 py-2 text-sm font-semibold text-dark-gray hover:bg-background transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-panel bg-primary-500 px-4 py-2 text-sm font-semibold text-light hover:bg-primary-600 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving…' : isEditing ? 'Save changes' : 'Create post'}
          </button>
        </div>
      </div>
    </form>
  );
}
