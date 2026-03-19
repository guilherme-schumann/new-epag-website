import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import { PayinHero, PayinMerchants, PayinFeatures, PayinCTA } from '@/components/sections/payin';

export const metadata: Metadata = {
  title: 'Payin',
};

export default function PayinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <PayinHero />
        <PayinMerchants />
        <PayinFeatures />
        <PayinCTA />
      </main>
    </div>
  );
}
