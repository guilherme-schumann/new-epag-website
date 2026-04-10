 'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { withBasePath } from '@/lib/base-path';
import { useContent } from '@/hooks/useContent';
import { coverageContent } from '@/content';

type Method = {
  label: string;
  type: string;
  icon: string | null;
};

type Country = {
  name: string;
  code: string;
  methods: Method[];
};

// Country data stays here — it's structured data, not UI copy
const countries: Country[] = [
  {
    name: 'Brazil', code: 'br',
    methods: [
      { label: 'PIX', type: 'Instant transfer', icon: '/assets/payment_methods/pix.svg' },
      { label: 'Boleto Bancário', type: 'Cash voucher', icon: '/assets/payment_methods/bar_code.svg' },
      { label: 'Credit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Credit Card.svg' },
      { label: 'Debit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Debit Card.svg' },
      { label: 'PicPay', type: 'Digital wallet', icon: '/assets/payment_methods/picpay.svg' },
    ],
  },
  {
    name: 'Mexico', code: 'mx',
    methods: [
      { label: 'SPEI', type: 'Bank transfer', icon: '/assets/payment_methods/SPEI.svg' },
      { label: 'OXXO', type: 'Cash voucher', icon: '/assets/payment_methods/OXXO.svg' },
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
      { label: 'Tiendas Y Farmacias', type: 'Cash voucher', icon: '/assets/payment_methods/Tiendas Y Farmacias.svg' },
      { label: 'Credit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Credit Card.svg' },
      { label: 'Debit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Debit Card.svg' },
    ],
  },
  {
    name: 'Colombia', code: 'co',
    methods: [
      { label: 'Bank Transfer', type: 'Bank transfer', icon: '/assets/payment_methods/Bank Transfer.svg' },
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
      { label: 'Nequi', type: 'Digital wallet', icon: '/assets/payment_methods/Nequi.svg' },
      { label: 'Credit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Credit Card.svg' },
      { label: 'Debit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Debit Card.svg' },
    ],
  },
  {
    name: 'Costa Rica', code: 'cr',
    methods: [
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
      { label: 'Credit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Credit Card.svg' },
    ],
  },
  {
    name: 'Ecuador', code: 'ec',
    methods: [
      { label: 'Bank Transfer', type: 'Bank transfer', icon: '/assets/payment_methods/Bank Transfer.svg' },
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
      { label: 'Deuna', type: 'Digital wallet', icon: '/assets/payment_methods/Deuna.svg' },
      { label: 'Credit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Credit Card.svg' },
    ],
  },
  {
    name: 'Guatemala', code: 'gt',
    methods: [
      { label: 'Bank Transfer', type: 'Bank transfer', icon: '/assets/payment_methods/Bank Transfer.svg' },
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
    ],
  },
  {
    name: 'Panama', code: 'pa',
    methods: [
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
    ],
  },
  {
    name: 'Peru', code: 'pe',
    methods: [
      { label: 'Bank Transfer', type: 'Bank transfer', icon: '/assets/payment_methods/Bank Transfer.svg' },
      { label: 'Pago Efectivo', type: 'Cash', icon: '/assets/payment_methods/PagoEfectivo.svg' },
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
      { label: 'Credit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Credit Card.svg' },
      { label: 'Debit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Debit Card.svg' },
    ],
  },
  {
    name: 'Chile', code: 'cl',
    methods: [
      { label: 'Bank Transfer', type: 'Bank transfer', icon: '/assets/payment_methods/Bank Transfer.svg' },
      { label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' },
      { label: 'Mach', type: 'Digital wallet', icon: '/assets/payment_methods/Mach.svg' },
      { label: 'Credit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Credit Card.svg' },
      { label: 'Debit Card', type: 'Local acquiring', icon: '/assets/payment_methods/Debit Card.svg' },
    ],
  },
  {
    name: 'Honduras', code: 'hn',
    methods: [{ label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' }],
  },
  {
    name: 'Dominican Republic', code: 'do',
    methods: [{ label: 'Paycash', type: 'Cash voucher', icon: '/assets/payment_methods/PayCash.svg' }],
  },
  {
    name: 'El Salvador', code: 'sv',
    methods: [{ label: 'Bank Transfer', type: 'Bank transfer', icon: '/assets/payment_methods/Bank Transfer.svg' }],
  },
];

export default function CoverageCountrySelector() {
  const [selected, setSelected] = useState(countries[0]);
  const c = useContent(coverageContent).countrySelector;

  return (
    <section className="bg-background">
      <div className="page-section page-container">

        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-theme-secondary">{c.eyebrow}</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 md:text-4xl">{c.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-dark-gray">{c.subheadline}</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {countries.map((country) => (
            <button
              key={country.name}
              onClick={() => setSelected(country)}
              className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                selected.name === country.name
                  ? 'bg-theme-middle-blue text-light'
                  : 'bg-secondary-100 text-dark-gray hover:bg-secondary-100/70'
              }`}
            >
              <span className={`fi fi-${country.code} fis rounded-sm`} />
              <span>{country.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {selected.methods.map((method) => (
              <div key={method.label} className="flex items-center gap-3 rounded-2xl bg-light px-4 py-4 shadow-card">
                {method.icon ? (
                  <Image src={withBasePath(method.icon)} alt={method.label} width={36} height={36} className="h-9 w-9 shrink-0 object-contain" />
                ) : (
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-secondary-100" />
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold leading-snug text-secondary-900">{method.label}</span>
                  <span className="text-xs text-light-gray">{method.type}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
