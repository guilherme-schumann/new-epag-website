'use client';

import { motion } from 'motion/react';

const fees = [
  {
    service: 'Settlement',
    description:
      'Funds remitted to your bank account abroad in your preferred currency. No local entity or local bank account required.',
    fee: 'Free above USD 5,000',
    note: 'Fast, predictable transfers',
    noteHighlight: false,
  },
  {
    service: 'Refunds',
    description: 'Manage refunds directly via the epag API.',
    fee: '¢25 (cards) / ¢85 (cash)',
    note: null,
    noteHighlight: false,
  },
  {
    service: 'Disputes',
    description: 'Dispute resolution handled through epag.',
    fee: 'USD 15 per dispute',
    note: 'Fully refunded if resolved in your favor',
    noteHighlight: true,
  },
  {
    service: 'Installments',
    description:
      'Offer up to 12 monthly installments to your customers — a fully local payment experience.',
    fee: '2.99% / month (Consumer Credit Fee)',
    note: 'Interest-free to your business; consumer pays the installment cost',
    noteHighlight: false,
  },
];

export default function PricingFeeTable() {
  return (
    <section className="page-section bg-light">
      <div className="page-container">

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
            Fee details
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
            Every fee, published upfront.
          </h2>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-secondary-100"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {fees.map((row, i) => (
            <motion.div
              key={row.service}
              className={`grid gap-4 p-6 lg:grid-cols-3 ${
                i % 2 === 0 ? 'bg-light' : 'bg-secondary-100'
              } ${i < fees.length - 1 ? 'border-b border-secondary-100' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div>
                <p className="text-sm font-semibold text-secondary-900">{row.service}</p>
                <p className="mt-1 text-sm leading-6 text-dark-gray">{row.description}</p>
              </div>
              <div className="flex items-start">
                <span className="text-base font-extrabold text-theme-secondary">{row.fee}</span>
              </div>
              <div className="flex items-start">
                {row.note && (
                  <span
                    className={`text-sm leading-6 ${
                      row.noteHighlight ? 'font-semibold text-primary-500' : 'text-light-gray'
                    }`}
                  >
                    {row.note}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
