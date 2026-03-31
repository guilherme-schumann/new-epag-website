'use client';

import { motion } from 'motion/react';

export default function AboutMissionVision() {
  return (
    <section className="page-section bg-secondary-100">
      <div className="page-container grid gap-6 lg:grid-cols-2">

        <motion.div
          className="rounded-2xl bg-light p-8 shadow-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-500">
            Mission
          </p>
          <p className="text-base leading-7 text-dark-gray">
            Helping international companies expand and operate across Latin America — without
            friction, without a local entity, and without compromise.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-light p-8 shadow-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-500">
            Vision
          </p>
          <p className="text-base leading-7 text-dark-gray">
            We believe in truly open markets. Any company, anywhere in the world, should be able to
            sell to any person in Latin America with the same ease as selling locally.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
