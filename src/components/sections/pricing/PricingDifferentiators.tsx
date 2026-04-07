'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { pricingContent } from '@/content';

export default function PricingDifferentiators() {
  const c = useContent(pricingContent).differentiators;

  return (
    <section className="page-section bg-secondary-100">
      <div className="page-container">

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
            {c.headline}
            <br />
            <span className="text-theme-secondary">{c.headlineHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {c.points.map((point, i) => (
            <motion.div
              key={point.label}
              className="flex gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-secondary-900">✓</span>
              <div>
                <p className="text-sm font-semibold text-theme-secondary">{point.label}</p>
                <p className="mt-1 text-sm leading-6 text-dark-gray">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
