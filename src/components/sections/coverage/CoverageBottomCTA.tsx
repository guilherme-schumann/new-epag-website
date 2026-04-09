'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';
import { useContent } from '@/hooks/useContent';
import { coverageContent } from '@/content';

export default function CoverageBottomCTA() {
  const c = useContent(coverageContent).bottomCTA;

  return (
    <section className="bg-background">
      <div className="page-section page-container">
        <div className="rounded-hero bg-secondary-900 px-8 py-16 text-center lg:px-16">

          <motion.p
            className="mb-4 text-xs font-bold uppercase tracking-widest text-primary-500"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {c.eyebrow}
          </motion.p>

          <motion.h2
            className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-secondary-100 sm:text-4xl lg:text-[2.75rem]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {c.headline}
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-secondary-100/70"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {c.subheadline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link href="/contact">
              <Button variant="primary" size="md">
                {c.cta.primary}
                <Icon name="arrow-right" size={16} className="ml-2" />
              </Button>
            </Link>
            <a href="/docs" className="text-sm font-semibold text-secondary-100 transition-colors hover:text-primary-500">
              {c.cta.secondary}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
