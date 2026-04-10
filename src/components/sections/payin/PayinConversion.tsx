'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';

export default function PayinConversion() {
  const c = useContent(payinContent).conversion;

  return (
    <section className="bg-background">
      <div className="page-section page-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">

          <div className="lg:w-[45%]">
            <motion.p
              className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {c.eyebrow}
            </motion.p>

            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 md:text-4xl xl:text-[2.75rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {c.headline}
              <br />
              <span className="text-theme-secondary">{c.headlineHighlight}</span>
            </motion.h2>

            <motion.p
              className="mt-5 text-base leading-7 text-dark-gray"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {c.body}
            </motion.p>

            <motion.p
              className="mt-4 text-sm font-semibold text-secondary-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {c.footer}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-[55%]">
            {c.capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                className="rounded-xl border border-secondary-100 bg-light p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                <p className="text-sm font-bold text-secondary-900">{cap.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-dark-gray">{cap.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
