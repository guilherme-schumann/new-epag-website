'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

export default function PayinHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="page-section page-container text-center">

        {/* Label */}
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Payment Solutions
        </motion.p>

        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold leading-tight tracking-tight text-theme-secondary sm:text-5xl lg:text-[4rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Direct Access to Latin America's
          <br />
          Payment Infrastructure
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-dark-gray"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Accept payments across Latin America through direct connections to domestic banking rails
          and local acquirers — without intermediaries or layered aggregation. epag enables global
          companies to operate inside the local financial ecosystem with a single integration.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="primary" size="md">
            Explore Our API
            <Icon name="arrow-right" size={16} className="ml-2" />
          </Button>
          <Link
            href="/contact"
            className="text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500"
          >
            Talk to a LATAM Expansion Specialist →
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <Image
            src="/assets/images/mockup-epag-dashboard.png"
            alt="EPAG Pay-in dashboard"
            width={1200}
            height={600}
            className="mx-auto h-auto w-full max-w-5xl rounded-2xl shadow-card"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
