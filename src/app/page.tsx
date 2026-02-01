import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-800">
            LAJPAT<span className="text-blue-700">FABRICS</span>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition">
            Contact
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-32">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              Wholesale Only • MOQ 50 Pcs
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
              Premium Textiles from <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                Central Market
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Direct manufacturers and wholesalers of ethnic wear, unstitched suits, and premium fabrics. Serving retailers across India since 1998.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition shadow-lg shadow-blue-700/20">
                View Catalog
              </button>
              <button className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition">
                Our Warehouse
              </button>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1520206443477-8d067429188d?q=80&w=800&auto=format&fit=crop"
                alt="Wholesale Textiles"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
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

      {/* METRICS */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Retail Partners", value: "500+" },
            { label: "Cities Served", value: "25+" },
            { label: "Years Experience", value: "26" },
            { label: "Daily Output", value: "2k Mtrs" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Latest Collections</h2>
          <p className="text-slate-600 mt-2">Available for bulk booking immediately.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1629813583344-9336d934279b?w=500&q=80",
            "https://images.unsplash.com/photo-1616886475653-e3801cf3241d?w=500&q=80",
            "https://images.unsplash.com/photo-1605218457297-3a4794939c87?w=500&q=80"
          ].map((src, i) => (
            <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
              <img src={src} alt="Product" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}