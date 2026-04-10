'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { homeContent } from '@/content';
import ScrollIndicator from './ScrollIndicator';
import PaymentMethodsMarquee from './PaymentMethodsMarquee';

export default function HeroSection() {
  const c = useContent(homeContent).hero;

  return (
    <section data-hero className="relative overflow-hidden bg-secondary-900 rounded-b-hero">
      <div className="hero-inner page-section page-container flex min-h-(--min-h-hero) flex-col items-center justify-center text-center short-screen:py-8 xl:py-10 3xl:py-20 gap-8">

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            <span className="text-xs font-semibold tracking-wide text-primary-500">{c.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-light md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] xl:leading-[1.1] 3xl:text-[4.5rem] short-screen:text-[2.25rem] short-screen:leading-tight"
          >
            {c.headline.replace(c.headlineHighlight, '').trim()}
            <br className="hidden xl:block [@media(min-width:1367px)]:hidden" />
            {' '}
            <span className="text-theme-dark-blue-400">{c.headlineHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-secondary-100/75 md:text-lg short-screen:mt-4 short-screen:max-w-2xl short-screen:text-sm"
          >
            {c.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 short-screen:mt-5"
          >
            <Link
              href="https://docs.epag.io"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-primary-600"
            >
              {c.cta.primary}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-secondary-100/35 px-6 py-3 text-sm font-semibold text-secondary-100 transition-colors hover:border-secondary-100/60 hover:text-light"
            >
              {c.cta.secondary}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]"
        >
          <PaymentMethodsMarquee />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <ScrollIndicator />
        </motion.div>

      </div>
    </section>
  );
}
