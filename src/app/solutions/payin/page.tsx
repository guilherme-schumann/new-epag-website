import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import {
  PayinHero,
  PayinMerchants,
  PayinRails,
  PayinMarkets,
  PayinConversion,
  PayinBusinessModels,
  PayinDeveloper,
  PayinCTA,
} from '@/components/sections/payin';

export const metadata: Metadata = {
  title: 'Pay-in — epag',
  description:
    'Accept payments across Latin America through direct connections to domestic banking rails and local acquirers — without intermediaries or layered aggregation.',
};

export default function PayinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <PayinHero />
        <PayinMerchants />
        <PayinRails />
        <PayinMarkets />
        <PayinConversion />
        <PayinBusinessModels />
        <PayinDeveloper />
        <PayinCTA />
      </main>
    </div>
  );
}
