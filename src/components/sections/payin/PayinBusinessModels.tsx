'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { payinContent } from '@/content';

export default function PayinBusinessModels() {
  const c = useContent(payinContent).businessModels;

  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">

        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 lg:text-4xl xl:text-[2.75rem]">
            {c.headline}
            <br />
            <span className="text-theme-secondary">{c.headlineHighlight}</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-dark-gray">{c.body}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {c.items.map((model, i) => (
            <motion.div
              key={model.title}
              className="flex flex-col rounded-2xl bg-light p-6 shadow-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <span className="mb-3 text-3xl font-extrabold text-secondary-100">{model.number}</span>
              <h3 className="text-base font-extrabold leading-snug text-secondary-900">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-gray">{model.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
