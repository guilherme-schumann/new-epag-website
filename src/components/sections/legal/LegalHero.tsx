'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { legalContent } from '@/content';

export default function LegalHero() {
  const c = useContent(legalContent).hero;

  return (
    <section className="bg-secondary-900 rounded-b-hero overflow-hidden">
      <div className="page-section page-container flex flex-col items-center justify-center text-center short-screen:py-8">

        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {c.eyebrow}
        </motion.p>

        <motion.h1
          className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-light md:text-5xl lg:text-[3.25rem] short-screen:text-[2.25rem] short-screen:leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {c.headline}{' '}
          <span className="text-primary-500">{c.headlineHighlight}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-light/70 md:text-lg short-screen:mt-4 short-screen:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {c.subheadline}
        </motion.p>

      </div>
    </section>
  );
}
