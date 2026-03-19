import NewsBanner from './NewsBanner';
import TopBar from './TopBar';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="relative w-full">
      <NewsBanner message="This place was separated to share new features in our system!" />
      <TopBar />
      <Navbar />
    </header>
  );
}
