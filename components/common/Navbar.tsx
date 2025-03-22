import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span className="text-3xl font-bold">Metaifast</span>
          </Link>

          <ul className="hidden items-center gap-8 text-base md:flex">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-700">
              <Link href="#how-cotove-works">How It Works</Link>
            </li>
            <li className="text-gray-700">
              <Link href="/">Pricing</Link>
            </li>
          </ul>

          {/* Menu Links */}
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">Hamburger</div>
        </div>
      </nav>
    </header>
  );
}
