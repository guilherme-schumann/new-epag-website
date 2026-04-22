'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useContent';
import { homeContent } from '@/content';
import { links } from '@/content/links';

export default function FooterCTA() {
  const c = useContent(homeContent).footerCTA;

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="rounded-card bg-secondary-900 px-6 py-16 text-center lg:px-10 xl:px-16 2xl:px-20">

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-light lg:text-4xl">{c.headline}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-secondary-100/70">{c.subheadline}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-primary-600">
              {c.cta.primary}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href={links.docs} className="inline-flex items-center gap-2 rounded-full border border-secondary-100/35 px-6 py-3 text-sm font-semibold text-secondary-100 transition-colors hover:border-secondary-100/60 hover:text-light">
              {c.cta.secondary}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
