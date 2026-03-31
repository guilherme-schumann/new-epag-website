'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

const paygoHighlights = [
  'No setup fee',
  'No monthly fee',
  'No local entity required',
  'Covers all 12 countries',
  'All payment methods included',
];

const enterpriseHighlights = [
  'Volume discounts',
  'Custom business models',
  'Charity & non-profit rates',
  'Enterprise-scale infrastructure',
  'Dedicated account manager',
];

export default function PricingTeaser() {
  return (
    <section className="page-section">
      <div className="page-container">

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Simple, transparent pricing.{' '}
            <span className="text-primary-500">No surprises.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-dark-gray">
            One flat rate covers all 12 countries and every payment method.
            No FX spreads, no monthly minimums, no hidden settlement fees.
          </p>
        </motion.div>

        {/* Plan cards */}
        <div className="mx-auto grid max-w-3xl gap-6 lg:grid-cols-2">

          {/* Pay as you go */}
          <motion.div
            className="relative flex flex-col rounded-2xl border-2 border-primary-500 bg-light p-8 shadow-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <span className="absolute -top-3 left-8 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-secondary-900">
              Most popular
            </span>
            <p className="mb-1 text-sm font-semibold text-dark-gray">Pay as you go</p>
            <div className="mb-1 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-theme-secondary">3.9%</span>
              <span className="text-2xl font-extrabold text-theme-secondary">+ ¢29</span>
            </div>
            <p className="mb-6 text-sm text-light-gray">per transaction</p>
            <ul className="mb-8 flex flex-col gap-3">
              {paygoHighlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-sm text-dark-gray"
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.07 }}
                >
                  <Icon name="check" size={16} className="shrink-0 text-primary-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link href="/contact" className="mt-auto">
              <Button variant="primary" size="md" className="w-full justify-center">
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            className="flex flex-col rounded-2xl border border-secondary-100 bg-light p-8 shadow-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <p className="mb-1 text-sm font-semibold text-dark-gray">Enterprise</p>
            <div className="mb-1">
              <span className="text-5xl font-extrabold text-theme-secondary">Custom</span>
            </div>
            <p className="mb-6 text-sm text-light-gray">talk to our team</p>
            <ul className="mb-8 flex flex-col gap-3">
              {enterpriseHighlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-sm text-dark-gray"
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.07 }}
                >
                  <Icon name="check" size={16} className="shrink-0 text-theme-secondary" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link href="/contact" className="mt-auto">
              <Button variant="outline" size="md" className="w-full justify-center">
                Contact Sales
              </Button>
            </Link>
          </motion.div>

        </div>

        {/* Footer link */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500"
          >
            See full pricing details, fee table and settlement info
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
