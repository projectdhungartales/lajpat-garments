'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleNavigation = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('click', handleNavigation);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('click', handleNavigation);
    };
  }, [isOpen]);

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
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-slate-900 transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-t border-teal-100 py-4 px-4 flex flex-col gap-4 animate-slide-down">
          <Link href="/products" className={`transition font-medium ${isActive('/products') ? 'text-blue-900 font-bold' : 'text-slate-700 hover:text-blue-900'}`}>
            Products
          </Link>
          <Link href="/about" className={`transition font-medium ${isActive('/about') ? 'text-blue-900 font-bold' : 'text-slate-700 hover:text-blue-900'}`}>
            About Us
          </Link>
          <Link href="/contact" className={`px-4 py-2 rounded-full text-sm font-medium transition text-center ${isActive('/contact') ? 'bg-blue-950 text-white' : 'bg-blue-900 text-white hover:bg-blue-950'}`}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
