import { Header } from '@/components/layout';
import { Hero } from '@/components/sections';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />
    </div>
  );
}
