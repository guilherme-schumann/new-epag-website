'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { coverageContent } from '@/content';

export default function CoverageProductsSection() {
  const c = useContent(coverageContent).productsSection;

  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">

        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">{c.headline}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {c.items.map((product, i) => (
            <motion.div
              key={product.label}
              className="flex flex-col justify-between rounded-2xl bg-light p-8 shadow-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{product.label}</p>
                <h3 className="mb-3 text-xl font-extrabold leading-snug text-secondary-900">{product.headline}</h3>
                <p className="text-sm leading-7 text-dark-gray">{product.body}</p>
              </div>
              <Link href={product.href} className="mt-6 text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500">
                {product.cta}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
