'use client';

import Image from 'next/image';
import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';
import { withBasePath } from '@/lib/base-path';

const founders = [
  {
    name: 'Ricardo Dortas Schönhofen',
    role: 'Co-founder & CEO',
    photo: '/assets/directors/Ricardo-Dortas-Director.jpg',
  },
  {
    name: 'Jan Schnürle',
    role: 'Director',
    photo: '/assets/directors/Jan-Schnurle-Director.jpg',
  },
  {
    name: 'Julian Migura',
    role: 'Director',
    photo: '/assets/directors/Julian-Migura-Director.jpg',
  },
  {
    name: 'Rafael Pereira',
    role: 'Director',
    photo: '/assets/directors/Rafael-Pereira-Director.jpg',
  },
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
  return (
    <section className="page-section bg-light overflow-hidden">
      <div className="page-container">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* Left — text */}
          <div className="lg:w-1/2">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
              Leadership
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
              Industry veterans who built LatAm&apos;s payment infrastructure.
            </h2>

            <p className="mt-5 text-base leading-7 text-dark-gray">
              Our team consists of industry veterans from the banking, payments, financial services,
              and e-commerce ecosystem across Latin America — with hands-on experience scaling
              platforms like <span className="font-semibold text-secondary-900">PagSeguro (NYSE: PAGS)</span> and{' '}
              <span className="font-semibold text-secondary-900">MercadoPago (NASDAQ: MELI)</span>.
            </p>

            <p className="mt-4 text-base leading-7 text-dark-gray">
              With almost a century of combined experience and over 10 nationalities, we understand
              the particularities of each LatAm market — and bridge the cultural and regulatory gaps
              that slow down international expansion.
            </p>

            <blockquote className="mt-8 border-l-4 border-primary-500 pl-5">
              <p className="text-base italic leading-7 text-dark-gray">
                &ldquo;We want to bridge the gap between Latin America and the rest of the world,
                providing merchants with a technology platform with the same level of functionality
                expected in developed markets.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-secondary-900">
                Ricardo Dortas Schönhofen — Co-founder &amp; CEO
              </footer>
            </blockquote>
          </div>

          {/* Right — cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {founders.map((founder, i) => (
                <motion.div
                  key={founder.name}
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
                      src={withBasePath(founder.photo)}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-sm font-semibold text-secondary-900">{founder.name}</p>
                    <p className="mt-1 text-xs text-light-gray">{founder.role}</p>
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
