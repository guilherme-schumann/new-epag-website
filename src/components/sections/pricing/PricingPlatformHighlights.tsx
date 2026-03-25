'use client';

import { motion } from 'motion/react';

const highlights = [
  'Free setup and sign-up',
  'No monthly or hidden fees',
  'No local entity required',
  'Singular RESTful API',
  'Mobile-optimized Boletos',
  '100% Central Bank compliant',
  'Easy subscription management',
  'Top-notch live reporting',
];

export default function PricingPlatformHighlights() {
  return (
    <section className="page-section bg-light">
      <div className="page-container">

        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
            Platform
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
            Everything included. No add-ons.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-light p-5 shadow-card"
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: 'spring',
                bounce: 0.35,
                duration: 0.6,
                delay: i * 0.06,
              }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-secondary-900">
                ✓
              </span>
              <span className="text-sm font-semibold text-dark-gray">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
