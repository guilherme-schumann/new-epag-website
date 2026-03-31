import type { Metadata } from 'next';
import {
  AboutHero,
  AboutMissionVision,
  AboutStory,
  AboutTeamStats,
  AboutFounders,
  AboutTechnology,
  AboutOffices,
  AboutBottomCTA,
} from '@/components/sections/about';

export const metadata: Metadata = {
  title: 'The Team That Built LatAm\'s Payment Infrastructure — epag',
  description:
    'epag was founded by payment veterans who helped build PagSeguro (NYSE: PAGS) and MercadoPago (NASDAQ: MELI). We built epag to give international companies the same direct access.',
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutMissionVision />
      <AboutStory />
      <AboutTeamStats />
      <AboutFounders />
      <AboutTechnology />
      <AboutOffices />
      <AboutBottomCTA />
    </main>
  );
}
