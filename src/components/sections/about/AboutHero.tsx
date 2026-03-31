'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

export default function AboutHero() {
  return (
    <section className="bg-secondary-900 rounded-b-[48px] overflow-hidden">
      <div className="page-section page-container text-center">

        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          About epag
        </motion.p>

        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-secondary-100 sm:text-5xl lg:text-[3.5rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          We didn&apos;t just study Latin America.
          <br />
          <span className="text-primary-500">We built its payment infrastructure.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-secondary-100/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          epag&apos;s founding team helped scale PagSeguro (NYSE: PAGS) and MercadoPago (NASDAQ: MELI)
          — two of the region&apos;s defining payment platforms. We built epag to give international
          companies the same direct access to LatAm&apos;s financial rails.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button variant="primary" size="md">
              Contact Sales
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
          </Link>
          <a
            href="/docs"
            className="text-sm font-semibold text-secondary-100 transition-colors hover:text-primary-500"
          >
            Explore our API →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
