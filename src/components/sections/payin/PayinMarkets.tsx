'use client';

import { motion } from 'motion/react';

const markets = [
  {
    number: '02',
    country: 'Brazil',
    headline: 'Real-Time Economy, Structured for Conversion',
    body: 'Brazil is a real-time, multi-method payment ecosystem that requires localized architecture.',
    methods: [
      'PIX (instant payments, available 24/7)',
      'PIX Automatic (recurring payment infrastructure)',
      'Domestic card acquiring',
      'Installment payments ("parcelamento")',
      'Intelligent transaction routing',
    ],
    footnote:
      'In Brazil, a declined card transaction is often not a rejection — it is a missing local logic. Our infrastructure provides that logic.',
  },
  {
    number: '03',
    country: 'Mexico',
    headline: 'Domestic Banking, Global Strategy',
    body: 'Mexico operates under its own banking dynamics and consumer payment behavior.',
    methods: [
      'SPEI real-time bank transfers',
      'Local card networks',
      'Alternative cash-based solutions (when applicable)',
    ],
    footnote:
      'Payment flows are structured according to domestic consumer behavior, ensuring higher conversion performance and regulatory alignment.',
  },
  {
    number: '04',
    country: 'Colombia & Additional LATAM Markets',
    headline: 'Country-by-Country Integration Logic',
    body: 'Each Latin American country operates under distinct regulatory frameworks, banking standards, and payment preferences.',
    methods: [
      'Regulatory compliance',
      'Optimized local method prioritization',
      'Intelligent approval strategies',
      'Seamless cross-border settlement',
    ],
    footnote:
      'Latin America is not a single market. It is a collection of independent financial systems. Our infrastructure connects you properly to each one.',
  },
];

export default function PayinMarkets() {
  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">

        {/* Section header */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
            Markets
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]">
            Direct Access to
            <br />
            <span className="text-theme-secondary">Every Local Ecosystem</span>
          </h2>
        </motion.div>

        {/* Market cards */}
        <div className="flex flex-col gap-6">
          {markets.map((market, i) => (
            <motion.div
              key={market.country}
              className="rounded-2xl bg-light p-8 shadow-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">

                {/* Left — country heading */}
                <div className="lg:w-[30%]">
                  <span className="text-4xl font-extrabold text-secondary-100">
                    {market.number}
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold text-secondary-900">
                    {market.country}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-theme-secondary">
                    {market.headline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-dark-gray">{market.body}</p>
                </div>

                {/* Right — methods + footnote */}
                <div className="lg:w-[70%]">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-dark-gray/60">
                    Through epag, merchants access:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {market.methods.map((m) => (
                      <li
                        key={m}
                        className="flex items-start gap-2 text-sm leading-relaxed text-dark-gray"
                      >
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
