'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useContent';
import { homeContent } from '@/content';

export default function DeveloperSection() {
  const c = useContent(homeContent).developer;

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
            <h2 className="text-3xl font-extrabold text-secondary-900 md:text-4xl">{c.headline}</h2>
            <p className="mt-4 text-base leading-7 text-dark-gray">{c.body}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {c.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-secondary-100 bg-secondary-100 px-3 py-1.5 text-xs font-semibold text-theme-secondary">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link href="https://docs.epag.io" className="inline-flex items-center gap-1.5 text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500">
                {c.cta}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Code panel — static, not translated */}
          <div className="rounded-2xl bg-secondary-900 p-6 font-mono text-sm shadow-card ring-1 ring-white/10">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-light/10" />
              <span className="h-3 w-3 rounded-full bg-light/10" />
              <span className="h-3 w-3 rounded-full bg-light/10" />
              <span className="ml-3 text-xs text-secondary-100/30">POST /v1/charges</span>
            </div>
            <div className="space-y-0.5 leading-6">
              <p className="text-secondary-100/40">{'// Create a PIX charge'}</p>
              <p><span className="text-primary-500">POST</span><span className="text-secondary-100/60"> /v1/charges</span></p>
              <p className="text-secondary-100/30">{'{'}</p>
              <p className="pl-4"><span className="text-theme-dark-blue-400">&quot;amount&quot;</span><span className="text-secondary-100/50">{': '}</span><span className="text-secondary-500">150.00</span><span className="text-secondary-100/50">,</span></p>
              <p className="pl-4"><span className="text-theme-dark-blue-400">&quot;asset&quot;</span><span className="text-secondary-100/50">{': '}</span><span className="text-primary-500">&quot;BRL&quot;</span><span className="text-secondary-100/50">,</span></p>
              <p className="pl-4"><span className="text-theme-dark-blue-400">&quot;payment_method&quot;</span><span className="text-secondary-100/50">{': '}</span><span className="text-primary-500">&quot;PIX&quot;</span><span className="text-secondary-100/50">,</span></p>
              <p className="pl-4"><span className="text-theme-dark-blue-400">&quot;reference_id&quot;</span><span className="text-secondary-100/50">{': '}</span><span className="text-primary-500">&quot;order_8f3a2c1d&quot;</span></p>
              <p className="text-secondary-100/30">{'}'}</p>
            </div>
            <div className="my-4 border-t border-white/10" />
            <div className="space-y-0.5 leading-6">
              <p className="text-secondary-100/40">{'// Response'}</p>
              <p className="text-secondary-100/30">{'{'}</p>
              <p className="pl-4"><span className="text-theme-dark-blue-400">&quot;status&quot;</span><span className="text-secondary-100/50">{': '}</span><span className="text-primary-500">&quot;approved&quot;</span><span className="text-secondary-100/50">,</span></p>
              <p className="pl-4"><span className="text-theme-dark-blue-400">&quot;charge_id&quot;</span><span className="text-secondary-100/50">{': '}</span><span className="text-primary-500">&quot;chg_4e8b1f9a&quot;</span><span className="text-secondary-100/50">,</span></p>
              <p className="pl-4"><span className="text-theme-dark-blue-400">&quot;pix_qr_code&quot;</span><span className="text-secondary-100/50">{': '}</span><span className="text-primary-500">&quot;00020126330014...&quot;</span></p>
              <p className="text-secondary-100/30">{'}'}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
