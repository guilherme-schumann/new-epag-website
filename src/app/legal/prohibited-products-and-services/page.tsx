import type { Metadata } from 'next';
import { LegalHero, LegalDocumentLayout, LegalHoverProvider } from '@/components/sections/legal';
import { legalSharedContent, prohibitedContent } from '@/content';

export const metadata: Metadata = {
  title: 'Prohibited Products and Services — epag',
  description:
    'List of products, services, and activities that are not permitted on the epag platform.',
};

export default function ProhibitedPage() {
  const content = prohibitedContent.en;
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
