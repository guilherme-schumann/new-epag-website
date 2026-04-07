'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';

function FeatureIcon({ type }: { type: 'payin' | 'payout' }) {
  if (type === 'payin') {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="18" rx="3" stroke="white" strokeWidth="2" />
        <path d="M8 6V5a4 4 0 0 1 8 0v1" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 14v4M12 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4L4 9v10l10 5 10-5V9L14 4Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 4v15M4 9l10 5 10-5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function PayinFeatures() {
  const c = useContent(payinContent).features;

  const cards = [
    { type: 'payin' as const, data: c.payin, href: '/solutions/pay-in', delay: 0.1 },
    { type: 'payout' as const, data: c.payout, href: '/solutions/payout', delay: 0.25 },
  ];

  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          <div className="lg:w-[38%] lg:pt-2">
            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {c.headline}
              <br />
              {c.headlineLine2}
              <br />
              <span className="text-theme-secondary">{c.headlineHighlight}</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-base leading-7 text-dark-gray"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              {c.body}
            </motion.p>
          </div>

          <div className="flex flex-col gap-6 lg:w-[62%]">
            {cards.map(({ type, data, href, delay }) => (
              <motion.div
                key={type}
                className="rounded-2xl bg-light p-8 shadow-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay, ease: 'easeOut' }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-secondary">
                    <FeatureIcon type={type} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-dark-gray">{data.title}</h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {data.items.map((f, i) => (
                    <motion.li
                      key={f.label}
                      className="flex items-start gap-2 text-sm leading-relaxed text-dark-gray"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: delay + 0.1 + i * 0.05 }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-secondary" />
                      <span><strong>{f.label}:</strong> {f.description}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="md">
                    {data.getStarted}
                    <Icon name="arrow-right" size={16} className="ml-2" />
                  </Button>
                  <Link href={href} className="text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500">
                    {data.learnMore}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
