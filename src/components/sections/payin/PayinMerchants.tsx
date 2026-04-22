'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';
import { links } from '@/content/links';

const merchants = ['monday', 'SHEIN', 'UBISOFT', 'PlayStation', 'TikTok', 'Spotify'];

export default function PayinMerchants() {
  const c = useContent(payinContent).merchants;

  return (
    <section className="bg-light">
      <div className="page-section page-container text-center">

        <motion.p
          className="mb-8 text-sm text-light-gray"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {c.label}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {merchants.map((name, i) => (
            <motion.span
              key={name}
              className="text-lg font-bold text-dark-gray/30 lg:text-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/solutions/payin" className="text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500">
            {c.learnPayin}
          </Link>
          <a href={links.docs} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500">
            {c.learnPayout}
          </a>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
