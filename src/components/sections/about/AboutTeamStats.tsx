'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '10+',  label: 'nationalities on the team' },
  { value: '3',    label: 'offices across 3 continents' },
  { value: '~100', label: 'years combined experience' },
];

export default function AboutTeamStats() {
  return (
    <section className="page-section bg-secondary-100">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className={`flex flex-col items-center gap-2 text-center ${
                i < stats.length - 1
                  ? 'sm:border-r sm:border-secondary-900/10 sm:pr-8'
                  : ''
              }`}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: 'spring',
                bounce: 0.45,
                duration: 0.7,
                delay: i * 0.12,
              }}
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
