import Image from 'next/image';
import { Button, Icon } from '@/components/ui';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary-500/10 blur-3xl"
      />

      <div className="relative flex h-screen flex-col lg:min-h-[640px] lg:flex-row lg:items-center">

        {/* ── Left: text content ── */}
        <div className="page-section flex flex-col justify-center lg:w-[48%]">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            CROSS-BORDER
            <br />
            online payments
            <br />
            for{' '}
            <span className="text-theme-secondary">Latin America</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-dark-gray">
            Our cross-border payments platform allows you to accept payments
            like a local business. Offer users to pay with:{' '}
            <strong>Local Credit</strong> and <strong>Debit Cards</strong>,{' '}
            <strong>PIX</strong>, <strong>OXXO</strong>, <strong>SPEI</strong>,
            and <strong>much more</strong>.
          </p>

          <div className="mt-8">
            <Button variant="primary" size="md">
              Get Started
              <Icon name="arrow-right" size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* ── Right: mockup image ── */}

        {/* Mobile: full-width below text */}
        <div className="page-x pb-12 lg:hidden">
          <Image
            src="/assets/images/mockup-epag-dashboard.png"
            alt="EPAG Dashboard"
            width={700}
            height={460}
            className="h-auto w-full rounded-2xl shadow-card"
            priority
          />
        </div>

        {/* Desktop: flush to the right edge */}
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex lg:w-[56%] lg:justify-end xl:w-[58%]">
          <Image
            src="/assets/images/mockup-epag-dashboard.png"
            alt="EPAG Dashboard showing balances, transactions and revenue charts"
            width={1000}
            height={650}
            className="ml-auto block h-auto w-auto max-w-full"
            style={{ maxHeight: '80vh', width: 'auto' }}
            priority
          />
        </div>

      </div>
    </section>
  );
}
