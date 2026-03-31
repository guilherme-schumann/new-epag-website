'use client';

import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

export default function PayinCTA() {
  return (
    <section className="bg-secondary-900">
      <div className="page-section page-container text-center">

        <motion.p
          className="mb-4 text-xs font-bold uppercase tracking-widest text-primary-500"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Get Started
        </motion.p>

        <motion.h2
          className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-light sm:text-4xl lg:text-[2.75rem]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Accept Payments Like a Local.{' '}
          <span className="text-primary-500">Operate Like a Global Company.</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-light/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          epag replaces fragmented integrations and approval uncertainty with direct, structured
          payment infrastructure. From zero to live in LATAM — faster, fully compliant, and aligned
          with local financial systems.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button variant="primary" size="md">
            Build Your Pay-in Infrastructure
            <Icon name="arrow-right" size={16} className="ml-2" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
