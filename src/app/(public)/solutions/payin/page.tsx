import type { Metadata } from 'next';
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
    <main className="flex-1">
      <PayinHero />
      <PayinMerchants />
      <PayinRails />
      <PayinMarkets />
      <PayinConversion />
      <PayinBusinessModels />
      <PayinDeveloper />
      <PayinCTA />
    </main>
  );
}
