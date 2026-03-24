'use client';

import { motion } from 'motion/react';

const models = [
  {
    number: '6.1',
    title: 'SaaS & Subscription Platforms',
    description:
      'Localized recurring billing logic and churn-reduction strategies tailored to regional card behavior.',
  },
  {
    number: '6.2',
    title: 'Gaming & High-Frequency Transactions',
    description:
      'Instant confirmation flows and optimized approval logic for performance-driven environments.',
  },
  {
    number: '6.3',
    title: 'Global Retail & E-commerce',
    description:
      'Installment enablement and Average Order Value optimization through localized payment structuring.',
  },
  {
    number: '6.4',
    title: 'Marketplaces & Digital Platforms',
    description:
      'Structured settlement logic and configurable split-payment architecture.',
  },
];

export default function PayinBusinessModels() {
  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">

        {/* Header */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
            Business Models
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]">
            Designed for Your
            <br />
            <span className="text-theme-secondary">Business Model</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-dark-gray">
            epag does not deploy generic payment flows. Our Pay-in architecture adapts to your
            revenue structure and operational complexity.
          </p>
        </motion.div>

        {/* Model grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              className="flex flex-col rounded-2xl bg-light p-6 shadow-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <span className="mb-3 text-3xl font-extrabold text-secondary-100">
                {model.number}
              </span>
              <h3 className="text-base font-extrabold leading-snug text-secondary-900">
                {model.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-gray">{model.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
