import Link from 'next/link';
import { Search, User, Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1b4332] text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-yellow-400">🍃</span>
          <span>Herbal Luxe</span>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-yellow-300 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="/reviews" className="hover:text-yellow-300 transition">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hover:text-yellow-300 transition">
            <Search size={20} />
          </button>
          <button className="hover:text-yellow-300 transition">
            <User size={20} />
          </button>
          <button className="hover:text-yellow-300 transition">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}