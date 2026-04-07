'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';

export default function PayinMarkets() {
  const c = useContent(payinContent).markets;

  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">

        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]">
            {c.headline}
            <br />
            <span className="text-theme-secondary">{c.headlineHighlight}</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {c.items.map((market, i) => (
            <motion.div
              key={market.country}
              className="rounded-2xl bg-light p-8 shadow-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">

                <div className="lg:w-[30%]">
                  <span className="text-4xl font-extrabold text-secondary-100">{market.number}</span>
                  <h3 className="mt-1 text-xl font-extrabold text-secondary-900">{market.country}</h3>
                  <p className="mt-1 text-sm font-semibold text-theme-secondary">{market.headline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-dark-gray">{market.body}</p>
                </div>

                <div className="lg:w-[70%]">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-dark-gray/60">{c.accessLabel}</p>
                  <ul className="flex flex-col gap-2">
                    {market.methods.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-sm leading-relaxed text-dark-gray">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-secondary" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-l-2 border-theme-secondary pl-4 text-sm italic leading-relaxed text-dark-gray/70">
                    {market.footnote}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
