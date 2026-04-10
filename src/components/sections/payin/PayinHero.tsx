'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';
import { withBasePath } from '@/lib/base-path';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';

export default function PayinHero() {
  const c = useContent(payinContent).hero;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="page-section page-container text-center flex min-h-(--min-h-hero) flex-col items-center justify-center short-screen:py-8">

        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {c.eyebrow}
        </motion.p>

        <motion.h1
          className="text-4xl font-extrabold leading-tight tracking-tight text-theme-secondary md:text-5xl lg:text-[3.25rem] xl:text-[4rem] short-screen:text-[2.25rem] short-screen:leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {c.headline}
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-dark-gray md:text-lg short-screen:mt-4 short-screen:text-sm"
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
          <Button variant="primary" size="md">
            {c.cta.primary}
            <Icon name="arrow-right" size={16} className="ml-2" />
          </Button>
          <Link href="/contact" className="text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500">
            {c.cta.secondary}
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 short-screen:mt-8"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <Image
            src={withBasePath('/assets/images/mockup-epag-dashboard.png')}
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
