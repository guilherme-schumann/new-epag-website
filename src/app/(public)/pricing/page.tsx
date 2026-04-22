import type { Metadata } from 'next';
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
    <main className="flex-1">
      <PricingHero />
      <PricingPlans />
      <PricingFeeTable />
      <PricingDifferentiators />
      <PricingPlatformHighlights />
      <PricingBottomCTA />
    </main>
  );
}
