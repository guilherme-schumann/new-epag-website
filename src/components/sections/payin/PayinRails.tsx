'use client';

import { motion } from 'motion/react';

const benefits = [
  'Greater control over approval logic',
  'Faster implementation of new payment methods',
  'Reduced dependency on external processing layers',
  'Higher operational transparency',
  'Improved performance consistency',
];

export default function PayinRails() {
  return (
    <section className="bg-background">
      <div className="page-section page-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">

          {/* Left — copy */}
          <div className="lg:w-1/2">
            <motion.p
              className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Infrastructure
            </motion.p>

            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Built on Direct Rails.
              <br />
              <span className="text-theme-secondary">Not on Layers.</span>
            </motion.h2>

            <motion.p
              className="mt-5 text-base leading-7 text-dark-gray"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Most cross-border providers rely on third-party processors and multi-layer routing
              structures. epag connects directly to local payment rails such as PIX, SPEI, and PSE,
              as well as domestic card acquirers. This direct infrastructure model provides:
            </motion.p>
          </div>

          {/* Right — benefits list */}
          <div className="lg:w-1/2">
            <ul className="flex flex-col gap-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-dark-gray"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-secondary" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 border-t border-secondary-100 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-secondary-900">
                We do not rent infrastructure.
              </p>
              <p className="text-sm font-semibold text-theme-secondary">
                We build and operate it.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
