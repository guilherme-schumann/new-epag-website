import NewsBanner from './NewsBanner';
import TopBar from './TopBar';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <NewsBanner />
      <TopBar />
      <Navbar />
    </header>
  );
}
