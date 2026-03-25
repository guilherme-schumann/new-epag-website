'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import ScrollIndicator from './ScrollIndicator';
import PaymentMethodsMarquee from './PaymentMethodsMarquee';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary-900 rounded-b-[48px]">

      {/* Centered content — constrained by page-container */}
      <div className="page-section page-container flex min-h-[520px] flex-col items-center justify-center text-center">

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          <span className="text-xs font-semibold tracking-wide text-primary-500">
            PCI DSS &nbsp;·&nbsp; 6 Countries &nbsp;·&nbsp; 1 Integration
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-light sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]"
        >
          Direct Access to Latin America&apos;s{' '}
          <span className="text-theme-dark-blue-400">Payment Infrastructure</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-secondary-100/75 sm:text-lg"
        >
          Accept payments across Latin America through direct connections to domestic banking
          rails and local acquirers — without intermediaries or layered aggregation. epag enables
          global companies to operate inside the local financial ecosystem with a single
          integration.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="https://docs.epag.io"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-primary-600"
          >
            Explore our API
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-secondary-100/35 px-6 py-3 text-sm font-semibold text-secondary-100 transition-colors hover:border-secondary-100/60 hover:text-light"
          >
            Talk to a LATAM Expansion Specialist
          </Link>
        </motion.div>

      </div>

      {/* Full-bleed marquee — intentionally outside page-container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.45 }}
        className="w-full"
      >
        <PaymentMethodsMarquee />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center py-10"
      >
        <ScrollIndicator />
      </motion.div>

    </section>
  );
}
