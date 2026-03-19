import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import { ContactSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Contact Us — EPAG',
  description:
    'Get in touch with EPAG. Contact our sales team or become a merchant and start accepting payments across Latin America.',
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <ContactSection />
    </div>
  );
}
