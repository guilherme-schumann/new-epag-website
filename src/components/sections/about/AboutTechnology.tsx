'use client';

import { motion } from 'motion/react';

const highlights = [
  'Direct connections to PIX, SPEI, PSE, and local card acquirers',
  'No legacy systems, no aggregator layers',
  "Full flexibility to adapt to each partner's specific needs",
  "Partners never inherit someone else's limitations",
  'PCI DSS certified infrastructure',
];

export default function AboutTechnology() {
  return (
    <section className="page-section bg-background">
      <div className="page-container">
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
              Technology
            </motion.p>

            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-theme-secondary sm:text-4xl"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            >
              100% proprietary technology.
              <br />
              No third-party dependencies.
            </motion.h2>

            <motion.p
              className="mt-5 text-base leading-7 text-dark-gray"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              All payment infrastructure is built 100% in-house. No legacy systems. No aggregator
              layers. This gives us full flexibility to adapt to each partner&apos;s specific needs
              — and means our partners never inherit someone else&apos;s limitations.
            </motion.p>

            <motion.a
              href="https://docs.epag.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              Read the docs →
            </motion.a>
          </div>

          {/* Right — highlights */}
          <div className="lg:w-1/2">
            <ul className="flex flex-col gap-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-dark-gray"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-secondary" />
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
