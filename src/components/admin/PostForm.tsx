'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RichTextEditor from './RichTextEditor';

function CoverImageUpload({ value, onChange }: { value: string; onChange: (url: string, id: number | null) => void }) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('files', file);

    const res = await fetch('/api/upload', { method: 'POST', body: formData });
    setUploading(false);

    if (res.ok) {
      const { url, id } = await res.json();
      onChange(url, id);
    }
  }

  return (
    <div className="space-y-2">
      {value ? (
        <div className="relative h-40 w-full overflow-hidden rounded-panel border border-secondary-900/20">
          <Image src={value} alt="Cover" fill className="object-cover" unoptimized />
          <button
            type="button"
            onClick={() => onChange('', null)}
            className="absolute top-2 right-2 rounded-full bg-secondary-900/60 px-2 py-0.5 text-xs text-light hover:bg-secondary-900 transition-colors"
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex w-full items-center justify-center gap-2 rounded-panel border border-dashed border-secondary-900/20 px-3 py-6 text-sm text-light-gray hover:border-primary-500 hover:text-primary-500 transition-colors disabled:opacity-50"
        >
          {uploading ? 'Uploading…' : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Upload image
            </>
          )}
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  );
}

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

type Category = { id: string; documentId: string; slug: string; label: Record<string, string> };
type Tag = { id: string; documentId: string; slug: string; label: Record<string, string> };

type PostFormProps = {
  initialData?: {
    id: string;
    slug: string;
    status: string;
    title: LocaleMap;
    excerpt: LocaleMap;
    content: LocaleMap;
    coverImage?: string | null;
    featuredImage?: string | null;
    categoryId?: string | null;
    tagIds?: string[];
  };
  categories?: Category[];
  tags?: Tag[];
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

export default function PostForm({ initialData, categories = [], tags = [] }: PostFormProps) {
  const router = useRouter();
  const isEditing = !!initialData;

  const [locale, setLocale] = useState<Locale>('en');
  const [slug, setSlug] = useState(initialData?.slug ?? '');
  const [status, setStatus] = useState(initialData?.status ?? 'draft');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? '');
  const [coverImageId, setCoverImageId] = useState<number | null>(null);
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage ?? '');
  const [featuredImageId, setFeaturedImageId] = useState<number | null>(null);
  const [title, setTitle] = useState<LocaleMap>(initialData?.title ?? emptyLocaleMap());
  const [excerpt, setExcerpt] = useState<LocaleMap>(initialData?.excerpt ?? emptyLocaleMap());
  const [content, setContent] = useState<LocaleMap>(initialData?.content ?? emptyLocaleMap());
  const [categoryId, setCategoryId] = useState<string>(initialData?.categoryId ?? '');
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>(initialData?.tagIds ?? []);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function setLocaleField<T extends LocaleMap>(
    setter: React.Dispatch<React.SetStateAction<T>>,
    value: string
  ) {
    setter((prev) => ({ ...prev, [locale]: value }));
  }

  // Helper to check if all required fields are filled for at least one locale
  function hasValidContent() {
    return LOCALES.some(({ key }) => 
      title[key]?.trim() && excerpt[key]?.trim() && content[key]?.trim()
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      slug,
      postStatus: status,
      title,
      excerpt,
      content,
      coverImage: coverImageId ?? undefined,
      featuredImage: featuredImageId ?? undefined,
      category: categoryId || undefined,
      tags: selectedTagIds.length > 0 ? selectedTagIds : undefined,
    };
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

      {/* Category & Tags */}
      {(categories.length > 0 || tags.length > 0) && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-secondary-900 mb-1">Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full rounded-panel border border-secondary-900/20 px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors bg-background"
              >
                <option value="">— No category —</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.documentId}>
                    {cat.label['en'] ?? cat.slug}
                  </option>
                ))}
              </select>
            </div>
          )}

          {tags.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-secondary-900 mb-1">Tags</label>
              <div className="flex flex-wrap gap-2 rounded-panel border border-secondary-900/20 px-3 py-2 min-h-[38px]">
                {tags.map((tag) => {
                  const active = selectedTagIds.includes(tag.documentId);
                  return (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() =>
                        setSelectedTagIds((prev) =>
                          active ? prev.filter((id) => id !== tag.documentId) : [...prev, tag.documentId]
                        )
                      }
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${
                        active
                          ? 'bg-primary-500 text-light'
                          : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-100/70'
                      }`}
                    >
                      {tag.label['en'] ?? tag.slug}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-secondary-900 mb-1">Cover Image</label>
        <CoverImageUpload
          value={coverImage}
          onChange={(url, id) => { setCoverImage(url); setCoverImageId(id); }}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary-900 mb-1">Featured Image <span className="text-light-gray font-normal">(appears inside the post)</span></label>
        <CoverImageUpload
          value={featuredImage}
          onChange={(url, id) => { setFeaturedImage(url); setFeaturedImageId(id); }}
        />
      </div>

      {/* Locale tabs */}
      <div>
        <div className="mb-3 rounded-panel bg-secondary-100/50 px-4 py-3 text-sm text-dark-gray">
          <strong className="font-semibold">Multi-language:</strong> Fill in the content for each language separately. Switch between tabs to add translations. You can publish with just one language filled.
        </div>

        <div className="flex gap-1 mb-4 border-b border-secondary-900/10">
          {LOCALES.map(({ key, label }) => {
            const isFilled = title[key]?.trim() && excerpt[key]?.trim() && content[key]?.trim();
            return (
              <button
                key={key}
                type="button"
                onClick={() => setLocale(key)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                  locale === key
                    ? 'border-primary-500 text-primary-500'
                    : 'border-transparent text-light-gray hover:text-dark-gray'
                }`}
              >
                {label}
                {isFilled && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                )}
              </button>
            );
          })}
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
