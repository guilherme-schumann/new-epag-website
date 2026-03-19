'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Icon } from '@/components/ui';

const payinFeatures = [
  {
    label: 'Built on Direct Rails',
    description:
      'Direct connections to PIX, SPEI, PSE and domestic card acquirers — no third-party processors, no multi-layer routing.',
  },
  {
    label: 'Greater Approval Control',
    description:
      'Smart routing to top-performing domestic acquirers with adaptive retry logic and localized installment optimization.',
  },
  {
    label: 'Recurring Payments',
    description:
      'Localized recurring billing logic and churn-reduction strategies tailored to regional card behavior.',
  },
  {
    label: 'Real-Time Transaction Monitoring',
    description:
      'Full operational transparency with real-time monitoring and behavior-calibrated fraud prevention.',
  },
  {
    label: 'Seamless Integration',
    description:
      'RESTful endpoints, real-time webhooks, production-mirroring sandbox, and clear versioned documentation.',
  },
  {
    label: 'Multi-Currency Settlement',
    description:
      'Sell locally while receiving funds in USD — structured for cross-border settlement with regulatory alignment.',
  },
];

const payoutFeatures = [
  {
    label: 'Flexible Payment Requests',
    description:
      'Accept payout requests in USD or local currency. Easily add balance through wire transfer or processed amounts.',
  },
  {
    label: 'Mass Payouts',
    description:
      'Pay a large number of recipients quickly and simultaneously. Local payment methods are also available.',
  },
  {
    label: 'Streamlined Payouts',
    description: 'Request single and mass payouts in 3 easy steps.',
  },
  {
    label: 'Micropayments',
    description: 'Perform transactions with no minimum payout amount.',
  },
  {
    label: 'Account Verifier',
    description: "Pre-validate the receiver's account automatically before disbursing funds.",
  },
  {
    label: 'Seamless Management',
    description:
      'Customizable reconciliation, detailed reports, and configurable split-payment architecture.',
  },
];

function FeatureIcon({ type }: { type: 'payin' | 'payout' }) {
  if (type === 'payin') {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="18" rx="3" stroke="white" strokeWidth="2" />
        <path d="M8 6V5a4 4 0 0 1 8 0v1" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 14v4M12 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 4L4 9v10l10 5 10-5V9L14 4Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 4v15M4 9l10 5 10-5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureCard({
  type,
  title,
  features,
  learnHref,
  delay,
}: {
  type: 'payin' | 'payout';
  title: string;
  features: { label: string; description: string }[];
  learnHref: string;
  delay: number;
}) {
  return (
    <motion.div
      className="rounded-2xl bg-light p-8 shadow-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {/* Card header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-secondary">
          <FeatureIcon type={type} />
        </div>
        <h3 className="text-2xl font-extrabold text-dark-gray">{title}</h3>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-3">
        {features.map((f, i) => (
          <motion.li
            key={f.label}
            className="flex items-start gap-2 text-sm leading-relaxed text-dark-gray"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: delay + 0.1 + i * 0.05 }}
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-secondary" />
            <span>
              <strong>{f.label}:</strong> {f.description}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Footer actions */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button variant="primary" size="md">
          Get Started
          <Icon name="arrow-right" size={16} className="ml-2" />
        </Button>
        <Link
          href={learnHref}
          className="text-sm font-semibold text-theme-secondary transition-colors hover:text-secondary-500"
        >
          Learn more about {title} →
        </Link>
      </div>
    </motion.div>
  );
}

export default function PayinFeatures() {
  return (
    <section className="bg-secondary-100">
      <div className="page-section page-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* Left — headline */}
          <div className="lg:w-[38%] lg:pt-2">
            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-[2.75rem]"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              A FULL-CIRCLE
              <br />
              PAYMENTS
              <br />
              OPERATION
              <br />
              TAILORED FOR
              <br />
              <span className="text-theme-secondary">RISING MARKETS</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-base leading-7 text-dark-gray"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              Unlock growth opportunities in emerging markets through direct payment infrastructure
              — extending your reach and elevating B2B and B2C operations across Latin America.
            </motion.p>
          </div>

          {/* Right — feature cards */}
          <div className="flex flex-col gap-6 lg:w-[62%]">
            <FeatureCard
              type="payin"
              title="Pay-in"
              features={payinFeatures}
              learnHref="/solutions/pay-in"
              delay={0.1}
            />
            <FeatureCard
              type="payout"
              title="Payout"
              features={payoutFeatures}
              learnHref="/solutions/payout"
              delay={0.25}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
