'use client';

import { motion } from 'motion/react';
import { useContent } from '@/hooks/useContent';
import { aboutContent } from '@/content';

export default function AboutTeamStats() {
  const { items } = useContent(aboutContent).teamStats;

  return (
    <section className="page-section bg-secondary-100">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((stat, i) => (
            <motion.div
              key={stat.value}
              className={`flex flex-col items-center gap-2 text-center ${i < items.length - 1 ? 'lg:border-r lg:border-secondary-900/10 lg:pr-8' : ''}`}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: 'spring', bounce: 0.45, duration: 0.7, delay: i * 0.12 }}
            >
              <span className="text-5xl font-extrabold text-theme-secondary">{stat.value}</span>
              <span className="text-sm text-dark-gray">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
