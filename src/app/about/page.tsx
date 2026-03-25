import type { Metadata } from 'next';
import { Header } from '@/components/layout';
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <AboutHero />
        <AboutMissionVision />
        <AboutStory />
        <AboutTeamStats />
        <AboutFounders />
        <AboutTechnology />
        <AboutOffices />
        <AboutBottomCTA />
      </main>
    </div>
  );
}
