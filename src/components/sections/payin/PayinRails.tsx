'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';

export default function PayinRails() {
  const c = useContent(payinContent).rails;

  return (
    <section className="bg-background">
      <div className="page-section page-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">

          <div className="lg:w-1/2">
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
              className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]"
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
          </div>

          <div className="lg:w-1/2">
            <ul className="flex flex-col gap-4">
              {c.benefits.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-dark-gray"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-secondary" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 border-t border-secondary-100 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-secondary-900">{c.footer.line1}</p>
              <p className="text-sm font-semibold text-theme-secondary">{c.footer.line2}</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
