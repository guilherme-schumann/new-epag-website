'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RichTextEditor from './RichTextEditor';
import { useLanguage } from '@/lib/i18n';
import { postSchema } from '@/lib/schemas/post';

type FieldErrors = Partial<Record<string, string[]>>;

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return <p className="mt-1 text-xs text-red-500">{errors[0]}</p>;
}

function CoverImageUpload({ value, onChange, uploadLabel, uploadingLabel, removeLabel }: {
  value: string;
  onChange: (url: string, id: number | null) => void;
  uploadLabel: string;
  uploadingLabel: string;
  removeLabel: string;
}) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    const MAX_SIZE = 5 * 1024 * 1024;

    if (!ALLOWED.includes(file.type)) {
      alert('File type not allowed. Use JPEG, PNG, WebP, GIF or SVG.');
      return;
    }
    if (file.size > MAX_SIZE) {
      alert('File too large. Maximum size is 5MB.');
      return;
    }

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
          <button type="button" onClick={() => onChange('', null)} className="absolute top-2 right-2 rounded-full bg-secondary-900/60 px-2 py-0.5 text-xs text-light hover:bg-secondary-900 transition-colors">
            {removeLabel}
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => inputRef.current?.click()} disabled={uploading} className="flex w-full items-center justify-center gap-2 rounded-panel border border-dashed border-secondary-900/20 px-3 py-6 text-sm text-light-gray hover:border-primary-500 hover:text-primary-500 transition-colors disabled:opacity-50">
          {uploading ? uploadingLabel : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              {uploadLabel}
            </>
          )}
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  );
}

type Locale = 'en' | 'pt-BR' | 'es-ES';
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

// ── Generic dropdown select ───────────────────────────────────────────────────

function CustomSelect({
  value,
  onChange,
  options,
  placeholder = '— Select —',
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

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
        <span className={selected ? 'text-dark-gray' : 'text-light-gray'}>{selected?.label ?? placeholder}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-light-gray transition-transform ${open ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-panel border border-secondary-900/10 bg-white shadow-dropdown overflow-hidden">
          <button
            type="button"
            onClick={() => { onChange(''); setOpen(false); }}
            className={`w-full px-3 py-2 text-left text-sm transition-colors hover:bg-background ${!value ? 'font-semibold text-primary-500' : 'text-light-gray'}`}
          >
            {placeholder}
          </button>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full px-3 py-2 text-left text-sm transition-colors hover:bg-background ${opt.value === value ? 'font-semibold text-primary-500' : 'text-dark-gray'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Multi-select dropdown for tags ────────────────────────────────────────────

function TagsSelect({
  value,
  onChange,
  tags,
  noTagsLabel = '— No tags —',
  adminLocale = 'en',
}: {
  value: string[];
  onChange: (v: string[]) => void;
  tags: Tag[];
  noTagsLabel?: string;
  adminLocale?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function toggle(documentId: string) {
    onChange(value.includes(documentId) ? value.filter((id) => id !== documentId) : [...value, documentId]);
  }

  const selectedLabels = tags.filter((t) => value.includes(t.documentId)).map((t) => t.label[adminLocale] ?? t.label['en'] ?? t.slug);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between rounded-panel border border-secondary-900/20 px-3 py-2 text-sm outline-none focus:border-primary-500 transition-colors bg-background min-h-[38px]"
      >
        <span className={selectedLabels.length ? 'text-dark-gray' : 'text-light-gray'}>
          {selectedLabels.length ? selectedLabels.join(', ') : noTagsLabel}
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 text-light-gray transition-transform ${open ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-panel border border-secondary-900/10 bg-white shadow-dropdown overflow-hidden">
          {tags.map((tag) => {
            const active = value.includes(tag.documentId);
            return (
              <button
                key={tag.id}
                type="button"
                onClick={() => toggle(tag.documentId)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-background ${active ? 'font-semibold text-primary-500' : 'text-dark-gray'}`}
              >
                <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${active ? 'border-primary-500 bg-primary-500' : 'border-secondary-900/20'}`}>
                  {active && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                </span>
                {tag.label[adminLocale] ?? tag.label['en'] ?? tag.slug}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function PostForm({ initialData, categories = [], tags = [] }: PostFormProps) {
  const router = useRouter();
  const { t } = useLanguage();
  const a = t.admin;
  const isEditing = !!initialData;

  const LOCALES: { key: Locale; label: string }[] = [
    { key: 'en', label: a.post.localeEn },
    { key: 'pt-BR', label: a.post.localePt },
    { key: 'es-ES', label: a.post.localeEs },
  ];

  const localeLabel: Record<Locale, string> = {
    en: a.post.localeEn,
    'pt-BR': a.post.localePt,
    'es-ES': a.post.localeEs,
  };

  const STATUS_OPTIONS_I18N = [
    { value: 'draft', label: a.status.draft },
    { value: 'published', label: a.status.published },
    { value: 'archived', label: a.status.archived },
  ];

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
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  // Track if slug was manually edited — if so, stop auto-generating
  const slugManuallyEdited = useRef(false);

  function generateSlug(value: string) {
    return value.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim().replace(/\s+/g, '-');
  }

  function setLocaleField<T extends LocaleMap>(setter: React.Dispatch<React.SetStateAction<T>>, value: string, isTitle = false) {
    setter((prev) => ({ ...prev, [locale]: value }));
    if (isTitle && !isEditing && !slugManuallyEdited.current) {
      setSlug(generateSlug(value));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError('');
    setFieldErrors({});

    const payload = {
      slug,
      postStatus: status,
      title,
      excerpt,
      content,
      category: categoryId || null,
      tags: selectedTagIds,
      ...(coverImageId !== null && { coverImage: coverImageId }),
      ...(featuredImageId !== null && { featuredImage: featuredImageId }),
    };

    // Client-side validation before hitting the API
    const parsed = postSchema.safeParse(payload);
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors as FieldErrors);
      return;
    }

    setSaving(true);

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
      const apiError = data.error;
      if (apiError?.fieldErrors) {
        setFieldErrors(apiError.fieldErrors as FieldErrors);
      } else {
        setFormError(apiError?.formErrors?.[0] ?? JSON.stringify(apiError ?? data));
      }
      return;
    }

    router.push('/admin/blog');
    router.refresh();
  }

  async function handleDelete() {
    if (!initialData || !confirm(a.post.confirmDelete)) return;
    await fetch(`/api/posts/${initialData.id}`, { method: 'DELETE' });
    router.push('/admin/blog');
    router.refresh();
  }

  const categoryOptions = categories.map((c) => ({ value: c.documentId, label: c.label[locale] ?? c.label['en'] ?? c.slug }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.slug}</label>
          <input
            value={slug}
            onChange={(e) => {
              slugManuallyEdited.current = true;
              setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
            }}
            placeholder={a.post.slugPlaceholder}
            className={`w-full rounded-panel border px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors ${fieldErrors.slug ? 'border-red-400' : 'border-secondary-900/20'}`}
          />
          <FieldError errors={fieldErrors.slug} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.status}</label>
          <CustomSelect value={status} onChange={setStatus} options={STATUS_OPTIONS_I18N} placeholder={a.post.status} />
        </div>
      </div>

      {(categories.length > 0 || tags.length > 0) && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.category}</label>
              <CustomSelect value={categoryId} onChange={setCategoryId} options={categoryOptions} placeholder={a.post.noCategory} />
            </div>
          )}
          {tags.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.tags}</label>
              <TagsSelect value={selectedTagIds} onChange={setSelectedTagIds} tags={tags} noTagsLabel={a.post.noTags} adminLocale={locale} />
            </div>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.coverImage}</label>
        <CoverImageUpload value={coverImage} onChange={(url, id) => { setCoverImage(url); setCoverImageId(id); }} uploadLabel={a.post.uploadImage} uploadingLabel={a.post.uploading} removeLabel={a.post.remove} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.featuredImage} <span className="text-light-gray font-normal">{a.post.featuredImageHint}</span></label>
        <CoverImageUpload value={featuredImage} onChange={(url, id) => { setFeaturedImage(url); setFeaturedImageId(id); }} uploadLabel={a.post.uploadImage} uploadingLabel={a.post.uploading} removeLabel={a.post.remove} />
      </div>

      <div>
        <div className="mb-3 rounded-panel bg-secondary-100/50 px-4 py-3 text-sm text-dark-gray">
          <strong className="font-semibold">{a.post.multiLangLabel}:</strong> {a.post.multiLangHint}
        </div>

        <div className="flex gap-1 mb-4 border-b border-secondary-900/10">
          {LOCALES.map(({ key, label }) => {
            const isFilled = title[key]?.trim() && excerpt[key]?.trim() && content[key]?.trim();
            const hasError = fieldErrors.title || fieldErrors.excerpt || fieldErrors.content;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setLocale(key)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${locale === key ? 'border-primary-500 text-primary-500' : 'border-transparent text-light-gray hover:text-dark-gray'}`}
              >
                {label}
                {isFilled && !hasError && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.title}</label>
            <input
              value={title[locale]}
              onChange={(e) => setLocaleField(setTitle, e.target.value, true)}
              placeholder={`${a.post.title} in ${localeLabel[locale]}`}
              className={`w-full rounded-panel border px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors ${fieldErrors.title ? 'border-red-400' : 'border-secondary-900/20'}`}
            />
            <FieldError errors={fieldErrors.title} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.excerpt}</label>
            <textarea
              value={excerpt[locale]}
              onChange={(e) => setLocaleField(setExcerpt, e.target.value)}
              placeholder={`${a.post.excerpt} in ${localeLabel[locale]}`}
              rows={3}
              className={`w-full rounded-panel border px-3 py-2 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors resize-none ${fieldErrors.excerpt ? 'border-red-400' : 'border-secondary-900/20'}`}
            />
            <FieldError errors={fieldErrors.excerpt} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-900 mb-1">{a.post.content}</label>
            <RichTextEditor key={locale} value={content[locale]} onChange={(val) => setLocaleField(setContent, val)} />
            <FieldError errors={fieldErrors.content} />
          </div>
        </div>
      </div>

      {formError && <p className="text-sm text-red-500">{formError}</p>}

      <div className="flex items-center justify-between pt-2">
        {isEditing ? (
          <button type="button" onClick={handleDelete} className="text-sm text-red-500 hover:text-red-600 transition-colors">
            {a.post.deletePost}
          </button>
        ) : <span />}
        <div className="flex gap-3">
          <button type="button" onClick={() => router.back()} className="rounded-panel border border-secondary-900/20 px-4 py-2 text-sm font-semibold text-dark-gray hover:bg-background transition-colors">
            {a.post.cancel}
          </button>
          <button type="submit" disabled={saving} className="rounded-panel bg-primary-500 px-4 py-2 text-sm font-semibold text-light hover:bg-primary-600 transition-colors disabled:opacity-50">
            {saving ? a.post.saving : isEditing ? a.post.save : a.post.create}
          </button>
        </div>
      </div>
    </form>
  );
}
