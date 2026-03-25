import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import {
  PricingHero,
  PricingPlans,
  PricingFeeTable,
  PricingDifferentiators,
  PricingPlatformHighlights,
  PricingBottomCTA,
} from '@/components/sections/pricing';

export const metadata: Metadata = {
  title: 'Simple, Transparent Pricing — epag',
  description:
    '3.9% + ¢29 per transaction. No setup fees. No monthly fees. No local entity required. Pay as you go across all 12 LatAm countries.',
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingFeeTable />
        <PricingDifferentiators />
        <PricingPlatformHighlights />
        <PricingBottomCTA />
      </main>
    </div>
  );
}
