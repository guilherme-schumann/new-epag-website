'use client';

import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

const capabilities = [
  'RESTful endpoints',
  'Real-time webhooks',
  'Production-mirroring sandbox environment',
  'Clear, versioned documentation',
  'Accelerated implementation cycles',
];

export default function PayinDeveloper() {
  return (
    <section className="bg-secondary-900">
      <div className="page-section page-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">

          {/* Left — copy */}
          <div className="lg:w-1/2">
            <motion.p
              className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Developer
            </motion.p>

            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-light sm:text-4xl lg:text-[2.75rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              API-First.
              <br />
              <span className="text-primary-500">Developer-Driven.</span>
            </motion.h2>

            <motion.p
              className="mt-5 text-base leading-7 text-light/70"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              epag's Pay-in infrastructure is fully API-based and built for scalability.
            </motion.p>

            <motion.div
              className="mt-6 border-t border-light/10 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-light/60">
                Documentation is not an auxiliary resource.
              </p>
              <p className="text-sm font-semibold text-primary-500">
                It is a core component of the product architecture.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button variant="primary" size="md">
                Access Developer Documentation
                <Icon name="arrow-right" size={16} className="ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Right — capabilities list */}
          <div className="lg:w-1/2">
            <ul className="flex flex-col gap-3">
              {capabilities.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-light/10 bg-light/5 px-5 py-4 text-sm text-light/80"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
