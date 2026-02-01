'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link href="/products" className="text-slate-700 hover:text-blue-900 transition font-medium">
            Products
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-blue-900 transition font-medium">
            About Us
          </Link>
          <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-950 transition">
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
          <Link href="/products" className="text-slate-700 hover:text-blue-900 transition font-medium">
            Products
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-blue-900 transition font-medium">
            About Us
          </Link>
          <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-full text-center font-medium hover:bg-blue-950 transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
