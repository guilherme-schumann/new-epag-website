'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { aboutContent } from '@/content';

export default function AboutStory() {
  const c = useContent(aboutContent).story;

  return (
    <section className="page-section bg-light">
      <div className="page-container">
        <div className="mx-auto max-w-(--size-xl)">

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
            className="mb-8 text-3xl font-extrabold leading-tight tracking-tight text-theme-secondary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {c.headline}
          </motion.h2>

          <div className="flex flex-col gap-6">
            {c.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="text-base leading-7 text-dark-gray"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            className="mt-10 border-l-4 border-primary-500 pl-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <p className="text-lg italic leading-7 text-dark-gray">{c.quote}</p>
            <footer className="mt-3 text-sm font-semibold text-secondary-900">{c.quoteAuthor}</footer>
          </motion.blockquote>

        </div>
      </div>
    </section>
  );
}
