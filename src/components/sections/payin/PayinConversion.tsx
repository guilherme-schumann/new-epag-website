'use client';

import { motion } from 'motion/react';

const capabilities = [
  {
    label: 'Smart Routing',
    description: 'Smart routing to top-performing domestic acquirers',
  },
  {
    label: 'Installment Optimization',
    description: 'Localized installment optimization',
  },
  {
    label: 'Adaptive Retry Logic',
    description: 'Adaptive retry logic',
  },
  {
    label: 'Real-Time Monitoring',
    description: 'Real-time transaction monitoring',
  },
  {
    label: 'Fraud Prevention',
    description: 'Behavior-calibrated fraud prevention',
  },
];

export default function PayinConversion() {
  return (
    <section className="bg-background">
      <div className="page-section page-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">

          {/* Left — headline */}
          <div className="lg:w-[45%]">
            <motion.p
              className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Performance
            </motion.p>

            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Conversion Is
              <br />
              <span className="text-theme-secondary">Architecture</span>
            </motion.h2>

            <motion.p
              className="mt-5 text-base leading-7 text-dark-gray"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              High approval rates in Latin America are engineered — not assumed.
            </motion.p>

            <motion.p
              className="mt-4 text-sm font-semibold text-secondary-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              In Latin America, approval performance is a function of infrastructure design.
            </motion.p>
          </div>

          {/* Right — capability cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[55%]">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                className="rounded-xl border border-secondary-100 bg-light p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                <p className="text-sm font-bold text-secondary-900">{cap.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-dark-gray">{cap.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
