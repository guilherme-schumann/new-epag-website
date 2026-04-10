'use client';

import Image from 'next/image';
import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';
import { withBasePath } from '@/lib/base-path';
import { useContent } from '@/hooks/useContent';
import { aboutContent } from '@/content';

const photos = [
  '/assets/directors/Ricardo-Dortas-Director.jpg',
  '/assets/directors/Jan-Schnurle-Director.jpg',
  '/assets/directors/Julian-Migura-Director.jpg',
  '/assets/directors/Rafael-Pereira-Director.jpg',
];

const rotations = [-4, 4, -4, 4];

const cardVariants: Variants = {
  offscreen: { y: 120, opacity: 0 },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    rotate: rotations[i % rotations.length],
    transition: { type: 'spring', bounce: 0.4, duration: 0.9, delay: i * 0.1 },
  }),
};

export default function AboutFounders() {
  const c = useContent(aboutContent).founders;

  return (
    <section className="page-section bg-light overflow-hidden">
      <div className="page-container">
        <div className="flex flex-col gap-16 xl:flex-row xl:items-center xl:gap-20">

          <div className="xl:w-1/2">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 md:text-4xl">{c.headline}</h2>

            <p className="mt-5 text-base leading-7 text-dark-gray">{c.body1}</p>
            <p className="mt-4 text-base leading-7 text-dark-gray">{c.body2}</p>

            <blockquote className="mt-8 border-l-4 border-primary-500 pl-5">
              <p className="text-base italic leading-7 text-dark-gray">{c.quote}</p>
              <footer className="mt-3 text-sm font-semibold text-secondary-900">{c.quoteAuthor}</footer>
            </blockquote>
          </div>

          <div className="xl:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {c.people.map((person, i) => (
                <motion.div
                  key={person.name}
                  custom={i}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.2 } }}
                  className="overflow-hidden rounded-2xl bg-light shadow-card cursor-default"
                  style={{ transformOrigin: '50% 100%' }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={withBasePath(photos[i])}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-sm font-semibold text-secondary-900">{person.name}</p>
                    <p className="mt-1 text-xs text-light-gray">{person.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
