'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useContent';
import { homeContent } from '@/content';

const tagColors = [
  'bg-primary-500/20 text-primary-500',
  'bg-theme-dark-blue-400/20 text-theme-dark-blue-400',
  'bg-secondary-500/20 text-secondary-500',
];

const hrefs = ['/solutions/payin', '/solutions/payout', '/solutions/id-validation'];

export default function ProductsSection() {
  const c = useContent(homeContent).products;

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="rounded-[32px] bg-secondary-900 px-6 py-14 sm:px-10 lg:px-16 lg:py-16 xl:px-20 xl:py-20">

          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">{c.eyebrow}</p>
            <h2 className="text-3xl font-extrabold text-light sm:text-4xl">{c.headline}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-secondary-100/70">{c.subheadline}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {c.items.map((product, i) => (
              <div key={product.title} className="flex flex-col rounded-2xl bg-light/5 p-6 ring-1 ring-white/10">
                <span className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${tagColors[i]}`}>
                  {product.tag}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-light">{product.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-6 text-secondary-100/65">{product.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {product.methods.map((m) => (
                    <span key={m} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-secondary-100/60">
                      {m}
                    </span>
                  ))}
                </div>

                <Link href={hrefs[i]} className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-600">
                  {c.learnMore}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
