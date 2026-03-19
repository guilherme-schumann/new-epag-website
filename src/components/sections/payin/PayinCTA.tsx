'use client';

import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

export default function PayinCTA() {
  return (
    <section className="bg-secondary-900">
      <div className="page-section page-container text-center">

        <motion.h2
          className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-light sm:text-4xl lg:text-[2.75rem]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          ARE YOU INTERESTED IN GROWING YOUR BUSINESS BY{' '}
          <span className="text-primary-500">
            COLLECTING AND DISBURSING FUNDS SEAMLESSLY
          </span>{' '}
          ACROSS RISING MARKETS?
        </motion.h2>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button variant="primary" size="md">
            Get Started
            <Icon name="arrow-right" size={16} className="ml-2" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
