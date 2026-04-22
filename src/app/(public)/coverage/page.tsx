import type { Metadata } from 'next';
import {
  CoverageHero,
  CoverageStatsBar,
  CoverageCountrySelector,
  CoverageProductsSection,
  CoverageBottomCTA,
} from '@/components/sections/coverage';

export const metadata: Metadata = {
  title: 'Payment Coverage Across Latin America — epag',
  description:
    'Accept local payments in Brazil, Mexico, Colombia, Peru, Ecuador and Chile through direct connections to domestic banking rails — no local entity required.',
};

export default function CoveragePage() {
  return (
    <main className="flex-1">
      <CoverageHero />
      <CoverageStatsBar />
      <CoverageCountrySelector />
      <CoverageProductsSection />
      <CoverageBottomCTA />
    </main>
  );
}
