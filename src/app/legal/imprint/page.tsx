import type { Metadata } from 'next';
import { LegalHero, LegalDocumentLayout, LegalHoverProvider } from '@/components/sections/legal';
import { legalSharedContent, imprintContent } from '@/content';

export const metadata: Metadata = {
  title: 'Imprint — epag',
  description:
    'Legal information about the company, registration, and those responsible for operations.',
};

export default function ImprintPage() {
  const content = imprintContent.en;
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
