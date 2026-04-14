'use client';

import { useState } from 'react';

type Locale = 'en' | 'pt-BR' | 'es-ES';
const LOCALES: { key: Locale; label: string }[] = [
  { key: 'en', label: 'EN' },
  { key: 'pt-BR', label: 'PT' },
  { key: 'es-ES', label: 'ES' },
];

type Item = {
  id: string;
  documentId: string;
  slug: string;
  label: Record<string, string>;
};

type Props = {
  endpoint: string; // e.g. '/api/categories' or '/api/tags'
  initialItems: Item[];
};

export default function TaxonomyManager({ endpoint, initialItems }: Props) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);

  function openCreate() {
    setEditing(null);
    setCreating(true);
  }

  function openEdit(item: Item) {
    setCreating(false);
    setEditing(item);
  }

  function closeForm() {
    setCreating(false);
    setEditing(null);
  }

  async function handleSave(slug: string, label: Record<string, string>) {
    if (editing) {
      const res = await fetch(`${endpoint}/${editing.documentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, label }),
      });
      if (res.ok) {
        setItems((prev) =>
          prev.map((i) => (i.id === editing.id ? { ...i, slug, label } : i))
        );
      }
    } else {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, label }),
      });
      if (res.ok) {
        const { data } = await res.json();
        setItems((prev) => [
          ...prev,
          { id: String(data.id), documentId: data.documentId, slug: data.slug ?? slug, label: data.label ?? label },
        ]);
      }
    }
    closeForm();
  }

  async function handleDelete(item: Item) {
    if (!confirm(`Delete "${item.label['en'] ?? item.slug}"?`)) return;
    const res = await fetch(`${endpoint}/${item.documentId}`, { method: 'DELETE' });
    if (res.ok) setItems((prev) => prev.filter((i) => i.id !== item.id));
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-light-gray">{items.length} item{items.length !== 1 ? 's' : ''}</p>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-panel bg-primary-500 px-4 py-2 text-sm font-semibold text-light hover:bg-primary-600 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New
        </button>
      </div>

      {/* Inline form */}
      {(creating || editing) && (
        <ItemForm
          initial={editing ?? undefined}
          onSave={handleSave}
          onCancel={closeForm}
        />
      )}

      {/* List */}
      {items.length === 0 ? (
        <p className="py-12 text-center text-sm text-light-gray">No items yet. Create one above.</p>
      ) : (
        <div className="divide-y divide-secondary-900/10 rounded-panel border border-secondary-900/10 bg-light">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-secondary-900">{item.label['en'] ?? item.slug}</p>
                <p className="text-xs text-light-gray font-mono">{item.slug}</p>
              </div>
              <div className="flex items-center gap-3">
                {/* locale badges */}
                <div className="hidden sm:flex gap-1">
                  {LOCALES.map(({ key, label }) => (
                    <span
                      key={key}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                        item.label[key]
                          ? 'bg-green-100 text-green-700'
                          : 'bg-secondary-100 text-light-gray'
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openEdit(item)}
                  className="text-xs text-primary-500 hover:text-primary-600 transition-colors font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="text-xs text-red-400 hover:text-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ItemForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Item;
  onSave: (slug: string, label: Record<string, string>) => Promise<void>;
  onCancel: () => void;
}) {
  const [slug, setSlug] = useState(initial?.slug ?? '');
  const [label, setLabel] = useState<Record<string, string>>(
    initial?.label ?? { en: '', 'pt-BR': '', 'es-ES': '' }
  );
  const [saving, setSaving] = useState(false);

  // Auto-generate slug from EN label if creating
  function handleEnLabel(val: string) {
    setLabel((prev) => ({ ...prev, en: val }));
    if (!initial) {
      setSlug(val.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await onSave(slug, label);
    setSaving(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 rounded-panel border border-primary-500/30 bg-primary-500/5 p-4 space-y-3"
    >
      <p className="text-sm font-semibold text-secondary-900">{initial ? 'Edit item' : 'New item'}</p>

      <div>
        <label className="block text-xs font-semibold text-secondary-900 mb-1">Slug</label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''))}
          placeholder="my-slug"
          required
          className="w-full rounded-panel border border-secondary-900/20 px-3 py-1.5 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {LOCALES.map(({ key, label: localeLabel }) => (
          <div key={key}>
            <label className="block text-xs font-semibold text-secondary-900 mb-1">
              Label <span className="text-light-gray font-normal">({localeLabel})</span>
            </label>
            <input
              value={label[key] ?? ''}
              onChange={(e) =>
                key === 'en' ? handleEnLabel(e.target.value) : setLabel((prev) => ({ ...prev, [key]: e.target.value }))
              }
              placeholder={`Label in ${localeLabel}`}
              className="w-full rounded-panel border border-secondary-900/20 px-3 py-1.5 text-sm text-dark-gray outline-none focus:border-primary-500 transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 pt-1">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-panel border border-secondary-900/20 px-3 py-1.5 text-sm font-semibold text-dark-gray hover:bg-background transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="rounded-panel bg-primary-500 px-3 py-1.5 text-sm font-semibold text-light hover:bg-primary-600 transition-colors disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
    </form>
  );
}
