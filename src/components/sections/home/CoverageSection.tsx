'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useContent';
import { homeContent } from '@/content';

const countryHrefs: Record<string, string> = {
  br: '/coverage/brazil',
  mx: '/coverage/mexico',
  co: '/coverage/colombia',
  pe: '/coverage/peru',
  cl: '/coverage/chile',
  ec: '/coverage/ecuador',
};

export default function CoverageSection() {
  const c = useContent(homeContent).coverage;

  return (
    <section className="page-section">
      <div className="page-container">

        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-secondary-900 md:text-4xl">{c.headline}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-gray">{c.subheadline}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          {c.countries.map((country) => (
            <Link
              key={country.flagCode}
              href={countryHrefs[country.flagCode] ?? '/coverage'}
              className="group flex flex-col items-center rounded-2xl bg-light p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`fi fi-${country.flagCode} mb-3 text-4xl`} role="img" aria-label={`${country.name} flag`} />
              <h3 className="mb-1.5 text-sm font-semibold text-secondary-900">{country.name}</h3>
              <p className="text-xs leading-relaxed text-light-gray">{country.methods}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/coverage" className="inline-flex items-center gap-1.5 text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500">
            {c.viewAll}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
