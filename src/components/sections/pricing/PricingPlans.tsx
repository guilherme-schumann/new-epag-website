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

export default function PricingPlans() {
  return (
    <section className="page-section bg-secondary-100">
      <div className="page-container">

        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
            Simple plans. No surprises.
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6 lg:grid-cols-2">

          {/* Pay as you go */}
          <motion.div
            className="relative flex flex-col rounded-2xl border-2 border-primary-500 bg-light p-8 shadow-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
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
            viewport={{ once: true, amount: 0.3 }}
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
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
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
      </div>
    </section>
  );
}
