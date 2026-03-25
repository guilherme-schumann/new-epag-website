'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

export default function PricingBottomCTA() {
  return (
    <section className="page-section bg-background">
      <div className="page-x page-container">
        <motion.div
          className="rounded-[48px] bg-secondary-900 px-8 py-16 text-center lg:px-16"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.p
            className="mb-4 text-xs font-bold uppercase tracking-widest text-primary-500"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Enterprise
          </motion.p>

          <motion.h2
            className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-secondary-100 sm:text-4xl lg:text-[2.75rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          >
            Volume pricing available for enterprise scale.
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-secondary-100/70"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Processing more than $50K/month? Talk to our sales team about custom rates, dedicated
            support, and SLA guarantees.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button variant="primary" size="md">
                Contact Sales
                <Icon name="arrow-right" size={16} className="ml-2" />
              </Button>
            </Link>
            <a
              href="https://docs.epag.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-secondary-100 transition-colors hover:text-primary-500"
            >
              Read the docs →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
