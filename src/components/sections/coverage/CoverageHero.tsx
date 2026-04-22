'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';
import { useContent } from '@/hooks/useContent';
import { coverageContent } from '@/content';
import { links } from '@/content/links';

export default function CoverageHero() {
  const c = useContent(coverageContent).hero;

  return (
    <section className="bg-secondary-900 rounded-b-hero overflow-hidden">
      <div className="page-section page-container text-center flex min-h-(--min-h-hero) flex-col items-center justify-center short-screen:py-8">

        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {c.eyebrow}
        </motion.p>

        <motion.h1
          className="text-4xl font-extrabold leading-tight tracking-tight text-secondary-100 md:text-5xl lg:text-[3.25rem] xl:text-[4rem] short-screen:text-[2.25rem] short-screen:leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {c.headline}
          <br />
          <span className="text-primary-500">{c.headlineHighlight}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-secondary-100/80 md:text-lg short-screen:mt-4 short-screen:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {c.subheadline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 short-screen:mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/contact">
            <Button variant="primary" size="md">
              {c.cta.primary}
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
          </Link>
          <a href={links.docs} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-secondary-100 transition-colors hover:text-primary-500">
            {c.cta.secondary}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
