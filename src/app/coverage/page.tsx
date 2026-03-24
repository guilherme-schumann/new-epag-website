import type { Metadata } from 'next';
import { Header } from '@/components/layout';
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <CoverageHero />
        <CoverageStatsBar />
        <CoverageCountrySelector />
        <CoverageProductsSection />
        <CoverageBottomCTA />
      </main>
    </div>
  );
}
