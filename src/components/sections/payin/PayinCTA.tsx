'use client';

import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';

export default function PayinCTA() {
  const c = useContent(payinContent).cta;

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
          {c.eyebrow}
        </motion.p>

        <motion.h2
          className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-light md:text-4xl xl:text-[2.75rem]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {c.headline}{' '}
          <span className="text-primary-500">{c.headlineHighlight}</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-light/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {c.body}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button variant="primary" size="md">
            {c.cta}
            <Icon name="arrow-right" size={16} className="ml-2" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
