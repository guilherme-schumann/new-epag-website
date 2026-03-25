import type { Metadata } from 'next';
import {
  HeroSection,
  StatsBar,
  DifferentiatorsSection,
  ProductsSection,
  IndustriesSection,
  CoverageSection,
  DeveloperSection,
  PricingTeaser,
  FooterCTA,
} from '@/components/home';

export const metadata: Metadata = {
  title: "Direct Access to Latin America's Payment Infrastructure — epag",
  description:
    'Accept payments across Latin America through direct connections to domestic banking rails and local acquirers — without intermediaries or layered aggregation.',
};

export default function Home() {
  return (
    <main className="flex-1 bg-background">
      <HeroSection />
      <StatsBar />
      <DifferentiatorsSection />
      <ProductsSection />
      <IndustriesSection />
      <CoverageSection />
      <DeveloperSection />
      <PricingTeaser />
      <FooterCTA />
    </main>
  );
}
