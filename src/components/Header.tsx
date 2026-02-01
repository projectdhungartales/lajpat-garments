'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-teal-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            LAJPAT<span className="text-blue-900">FABRICS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className={`transition font-medium ${isActive('/products') ? 'text-blue-900 border-b-2 border-blue-900 pb-1' : 'text-slate-700 hover:text-blue-900'}`}>
            Products
          </Link>
          <Link href="/about" className={`transition font-medium ${isActive('/about') ? 'text-blue-900 border-b-2 border-blue-900 pb-1' : 'text-slate-700 hover:text-blue-900'}`}>
            About Us
          </Link>
          <Link href="/contact" className={`px-4 py-2 rounded-full text-sm font-medium transition ${isActive('/contact') ? 'bg-blue-950 text-white' : 'bg-blue-900 text-white hover:bg-blue-950'}`}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="w-6 h-0.5 bg-slate-900"></div>
          <div className="w-6 h-0.5 bg-slate-900"></div>
          <div className="w-6 h-0.5 bg-slate-900"></div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-teal-100 py-4 px-4 flex flex-col gap-4">
          <Link href="/products" onClick={() => setIsOpen(false)} className={`transition font-medium ${isActive('/products') ? 'text-blue-900 font-bold' : 'text-slate-700 hover:text-blue-900'}`}>
            Products
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={`transition font-medium ${isActive('/about') ? 'text-blue-900 font-bold' : 'text-slate-700 hover:text-blue-900'}`}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`px-4 py-2 rounded-full text-sm font-medium transition text-center ${isActive('/contact') ? 'bg-blue-950 text-white' : 'bg-blue-900 text-white hover:bg-blue-950'}`}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
