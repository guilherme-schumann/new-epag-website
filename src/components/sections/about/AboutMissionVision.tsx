'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { aboutContent } from '@/content';

export default function AboutMissionVision() {
  const c = useContent(aboutContent).missionVision;

  return (
    <section className="page-section bg-secondary-100">
      <div className="page-container grid gap-6 md:grid-cols-2">

        <motion.div
          className="rounded-2xl bg-light p-8 shadow-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-500">{c.mission.label}</p>
          <p className="text-base leading-7 text-dark-gray">{c.mission.body}</p>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-light p-8 shadow-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-500">{c.vision.label}</p>
          <p className="text-base leading-7 text-dark-gray">{c.vision.body}</p>
        </motion.div>

      </div>
    </section>
  );
}
