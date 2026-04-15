'use client';

import { useLanguage } from '@/lib/i18n';

type Props = {
  title: Record<string, string>;
  slug: string;
  publishedAt: string | null;
};

export default function BlogPostHero({ title, slug, publishedAt }: Props) {
  const { locale } = useLanguage();
  const localeKey = locale === 'es' ? 'es-ES' : locale;
  const resolvedTitle = title[localeKey] ?? title['en'] ?? slug;

  return (
    <section className="bg-secondary-900 rounded-b-hero overflow-hidden">
      <div className="page-section page-container flex flex-col items-center justify-center text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">Blog</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-light md:text-5xl">
          {resolvedTitle}
        </h1>
        {publishedAt && (
          <p className="mt-4 text-sm text-light/50">
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
        )}
      </div>
    </section>
  );
}
