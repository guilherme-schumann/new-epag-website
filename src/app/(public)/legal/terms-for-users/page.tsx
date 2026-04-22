import type { Metadata } from 'next';
import { LegalHero, LegalDocumentLayout, LegalHoverProvider } from '@/components/sections/legal';
import { legalSharedContent, termsUsersContent } from '@/content';

export const metadata: Metadata = {
  title: 'Terms of Use for Users — epag',
  description:
    'General terms and conditions for using the epag platform as an end user.',
};

export default function TermsUsersPage() {
  const content = termsUsersContent.en;
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
