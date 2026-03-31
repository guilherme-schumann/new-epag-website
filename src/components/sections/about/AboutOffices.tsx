'use client';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

const offices = [
  { city: 'São Paulo',  country: 'Brazil',       role: 'LatAm HQ',         code: 'br' },
  { city: 'Lisbon',     country: 'Portugal',      role: 'European hub',      code: 'pt' },
  { city: 'Amsterdam',  country: 'Netherlands',   role: 'Global operations', code: 'nl' },
];

const rotations = [-4, 0, 4];

const cardVariants: Variants = {
  offscreen: { y: 120, opacity: 0 },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    rotate: rotations[i],
    transition: { type: 'spring', bounce: 0.4, duration: 0.9, delay: i * 0.1 },
  }),
};

export default function AboutOffices() {
  return (
    <section className="page-section bg-secondary-100 overflow-hidden">
      <div className="page-container">

        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
            Offices
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
            Global team. Local expertise.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-dark-gray">
            With over 10 nationalities, we understand the particularities of each LatAm market and
            bridge cultural and regulatory gaps that slow down international expansion.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-4 rounded-2xl bg-light p-8 shadow-card text-center cursor-default"
              style={{ transformOrigin: '50% 100%' }}
            >
              <span className={`fi fi-${office.code} rounded-md`} style={{ fontSize: '3rem', lineHeight: 1 }} />
              <div>
                <p className="text-lg font-semibold text-secondary-900">{office.city}</p>
                <p className="text-sm text-light-gray">{office.country}</p>
              </div>
              <span className="text-xs font-semibold text-primary-500">{office.role}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
