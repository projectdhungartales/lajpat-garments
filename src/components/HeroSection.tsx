import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            Wholesale Only • MOQ 50 Pcs
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Premium Textiles from <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-700">
              Central Market
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Direct manufacturers and wholesalers of ethnic wear, unstitched suits, and premium fabrics. Serving retailers across India since 1998.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/products" className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 transition shadow-lg shadow-blue-900/20 text-center">
              View Catalog
            </Link>
            <Link href="/about" className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg border border-teal-200 hover:bg-teal-50 transition text-center">
              Our Warehouse
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-blue-900 to-teal-700">
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="url(#paint0_linear)" />
              <circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.1)" />
              <circle cx="100" cy="80" r="50" fill="rgba(255,255,255,0.1)" />
              <circle cx="300" cy="220" r="60" fill="rgba(255,255,255,0.1)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="300">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">👗</div>
                <p className="font-semibold">Premium Textiles</p>
              </div>
            </div>
          </div>
          
          {/* Float Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block border border-teal-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                ✓
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Status</p>
                <p className="text-sm font-bold text-slate-900">GST Registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
