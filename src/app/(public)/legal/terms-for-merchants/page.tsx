import type { Metadata } from 'next';
import { LegalHero, LegalDocumentLayout, LegalHoverProvider } from '@/components/sections/legal';
import { legalSharedContent, termsMerchantsContent } from '@/content';

export const metadata: Metadata = {
  title: 'Terms of Use for Merchants — epag',
  description:
    'Specific conditions for companies and merchants using epag payment infrastructure.',
};

export default function TermsMerchantsPage() {
  const content = termsMerchantsContent.en;
  const nav = legalSharedContent.en.nav;

  return (
    <main className="flex-1 bg-background">
      <LegalHero />
      <LegalHoverProvider>
        <LegalDocumentLayout
          title={content.title}
          sections={content.sections}
          backLabel={nav.backToOverview}
        />
      </LegalHoverProvider>
    </main>
  );
}
