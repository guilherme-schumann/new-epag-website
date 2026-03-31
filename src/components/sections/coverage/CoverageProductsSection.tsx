'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const products = [
  {
    label: 'Payment Processing',
    headline: 'From PIX to OXXO in a single API call.',
    body: 'Accept local credit & debit cards, cash, bank transfers, and instant payments through a single RESTful API. Go live with PIX, SPEI, OXXO, PSE, Nequi, and more in days, not months.',
    cta: 'Explore our API',
    href: '/docs',
  },
  {
    label: 'Real-time Payouts',
    headline: 'Disburse funds across 6 countries in real time.',
    body: 'Disburse funds to local bank accounts, wallets, and partners in real-time via PIX and SPEI — with detailed tracking and reconciliation via dashboard. KYC/AML compliant.',
    cta: 'Learn more about Payouts →',
    href: '/solutions/payout',
  },
  {
    label: 'ID Validation',
    headline: 'CPF and CNPJ verification in milliseconds.',
    body: 'Real-time CPF and CNPJ verification connected to multiple government databases. Essential for payment processing, age verification, and regulatory compliance in Brazil. Pay-per-use model.',
    cta: 'Learn more about ID Validation →',
    href: '/solutions/id-validation',
  },
];

export default function CoverageProductsSection() {
  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">

        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
            Products
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
            Everything you need to operate in LatAm
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.label}
              className="flex flex-col justify-between rounded-2xl bg-light p-8 shadow-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">
                  {product.label}
                </p>
                <h3 className="mb-3 text-xl font-extrabold leading-snug text-secondary-900">
                  {product.headline}
                </h3>
                <p className="text-sm leading-7 text-dark-gray">{product.body}</p>
              </div>
              <Link
                href={product.href}
                className="mt-6 text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500"
              >
                {product.cta}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
