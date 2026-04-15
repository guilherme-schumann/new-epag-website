'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useContent } from '@/hooks/useContent';
import { blogContent } from '@/content';
import { useLanguage } from '@/lib/i18n';

type Heading = { id: string; text: string };

function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function calculate() {
      const threshold = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveId(current);
    }
    calculate();
    window.addEventListener('scroll', calculate, { passive: true });
    return () => window.removeEventListener('scroll', calculate);
  }, [ids]);

  return activeId;
}

function extractHeadings(html: string): Heading[] {
  if (typeof window === 'undefined') return [];
  const div = document.createElement('div');
  div.innerHTML = html;
  const headings: Heading[] = [];
  div.querySelectorAll('h2').forEach((el) => {
    const text = el.textContent?.trim() ?? '';
    if (!text) return;
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    el.id = id;
    headings.push({ id, text });
  });
  return headings;
}

type RelatedPost = { slug: string; title: string; coverImage: string | null };

type Tag = { id: string; slug: string; label: Record<string, string> };

type Props = {
  title: Record<string, string>;
  publishedAt: string | null;
  content: Record<string, string>;
  featuredImage?: string | null;
  relatedPosts?: RelatedPost[];
  backLabel?: string;
  tags?: Tag[];
};

export default function BlogPostLayout({ title, publishedAt, content, featuredImage, relatedPosts = [], backLabel, tags = [] }: Props) {
  const c = useContent(blogContent).post;
  const back = backLabel ?? c.backLabel;
  const { locale } = useLanguage();

  const localeKey = locale === 'es' ? 'es-ES' : locale;
  const resolvedTitle = title[localeKey] ?? title['en'] ?? '';
  const resolvedContent = content[localeKey] ?? content['en'] ?? '';

  const [headings, setHeadings] = useState<Heading[]>([]);
  const [processedContent, setProcessedContent] = useState(resolvedContent);
  const activeId = useScrollSpy(headings.map((h) => h.id));

  useEffect(() => {
    const extracted = extractHeadings(resolvedContent);
    setHeadings(extracted);

    const div = document.createElement('div');
    div.innerHTML = resolvedContent;
    div.querySelectorAll('h2').forEach((el) => {
      const text = el.textContent?.trim() ?? '';
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      el.id = id;
    });
    setProcessedContent(div.innerHTML);
  }, [resolvedContent]);

  return (
    <section className="page-section bg-background">
      <div className="page-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* Content — 75% */}
          <main className="min-w-0 flex-1">
            {featuredImage && (
              <div className="mb-8 overflow-hidden rounded-panel">
                <Image
                  src={featuredImage}
                  alt={title}
                  width={1200}
                  height={360}
                  className="w-full h-[360px] object-cover"
                  priority
                />
              </div>
            )}
            <div
              className="text-dark-gray leading-relaxed text-base [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-secondary-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:scroll-mt-32 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-secondary-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:scroll-mt-32 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-500 [&_blockquote]:pl-4 [&_blockquote]:text-light-gray [&_blockquote]:italic [&_a]:text-primary-500 [&_a]:hover:text-primary-600"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-secondary-900/10 pt-6">
                {tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-600"
                  >
                    {tag.label['en'] ?? tag.slug}
                  </span>
                ))}
              </div>
            )}
          </main>

          {/* Sidebar — 25% */}
          <aside className="lg:w-1/4 lg:shrink-0">
            <div className="sticky top-24">

              <Link
                href="/blog"
                className="mb-6 flex items-center gap-2 text-sm text-primary-500 transition-colors hover:text-primary-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {back}
              </Link>

              {headings.length > 0 && (
                <>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-light-gray">
                    {c.contents}
                  </p>
                  <nav>
                    <ul className="space-y-1">
                      {headings.map((h) => (
                        <li key={h.id}>
                          <button
                            onClick={() => {
                              const el = document.getElementById(h.id);
                              if (el) {
                                const top = el.getBoundingClientRect().top + window.scrollY - 150;
                                window.scrollTo({ top, behavior: 'smooth' });
                              }
                            }}
                            className={`w-full text-left text-sm py-1.5 transition-colors hover:text-primary-500 ${
                              activeId === h.id ? 'font-semibold text-primary-500' : 'text-dark-gray'
                            }`}
                          >
                            {h.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </>
              )}

              {/* Social links */}
              <div className="mt-8 rounded-panel border border-secondary-900/10 bg-light p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-light-gray">
                  {c.followUs}
                </p>
                <a
                  href="https://www.linkedin.com/company/epag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-dark-gray hover:text-primary-500 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-6 rounded-panel border border-secondary-900/10 bg-light p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-light-gray">
                    {c.topArticles}
                  </p>
                  <ul className="space-y-3">
                    {relatedPosts.map((p) => (
                      <li key={p.slug}>
                        <Link href={`/blog/${p.slug}`} className="flex items-center gap-3 group">
                          {p.coverImage ? (
                            <div className="h-10 w-14 shrink-0 overflow-hidden rounded">
                              <Image
                                src={p.coverImage}
                                alt={p.title}
                                width={56}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="h-10 w-14 shrink-0 rounded bg-secondary-100" />
                          )}
                          <span className="text-sm text-dark-gray group-hover:text-primary-500 transition-colors line-clamp-2 leading-snug">
                            {p.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
