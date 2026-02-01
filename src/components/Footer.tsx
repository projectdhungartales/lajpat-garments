'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">LAJPAT<span className="text-amber-400">FABRICS</span></h3>
            <p className="text-blue-100 text-sm">
              Premium wholesale textiles and ethnic wear from Central Market, Lajpat Nagar since 1998.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/" className="hover:text-amber-400 transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition">Products</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Email: info@lajpatfabrics.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Location: Lajpat Nagar, Delhi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Mon - Fri: 9AM - 6PM</li>
              <li>Sat: 9AM - 4PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; 2026 Lajpat Fabrics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
