import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Contact Us — EPAG',
  description:
    'Get in touch with EPAG. Contact our sales team or become a merchant and start accepting payments across Latin America.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-background">
      <ContactSection />
    </main>
  );
}
