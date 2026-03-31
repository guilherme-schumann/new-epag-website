'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '670M+', label: 'adult individuals reachable' },
  { value: '470K+', label: 'points of sale' },
  { value: '140+',  label: 'payment partners' },
  { value: '12',    label: 'countries covered' },
];

export default function CoverageStatsBar() {
  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className="flex flex-col items-center gap-1 text-center lg:relative lg:not-last:after:absolute lg:not-last:after:right-0 lg:not-last:after:top-1/2 lg:not-last:after:h-10 lg:not-last:after:w-px lg:not-last:after:-translate-y-1/2 lg:not-last:after:bg-secondary-900/10 lg:not-last:after:content-['']"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-4xl font-extrabold text-theme-secondary lg:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm text-dark-gray">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
