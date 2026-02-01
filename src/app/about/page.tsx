export default function About() {
  const highlights = [
    {
      title: "26+ Years Experience",
      description: "Serving the textile industry since 1998 with consistent quality and reliability.",
      icon: "📅",
    },
    {
      title: "500+ Happy Clients",
      description: "Trusted by retailers across 25+ cities in India for premium textiles.",
      icon: "🤝",
    },
    {
      title: "GST Registered",
      description: "Fully compliant business with proper documentation and certifications.",
      icon: "✓",
    },
    {
      title: "Fast Delivery",
      description: "Efficient supply chain ensuring quick turnaround for bulk orders.",
      icon: "🚚",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">About Lajpat Fabrics</h1>
          <p className="text-lg text-slate-600">
            Your trusted partner for premium wholesale textiles from Central Market, Lajpat Nagar.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Lajpat Fabrics is a premier wholesale textiles supplier located in the heart of Central Market, Lajpat Nagar, Delhi. For over 26 years, we have been committed to providing the highest quality ethnic wear, unstitched suits, and premium fabrics to retailers and businesses across India.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Our success is built on a foundation of trust, quality, and customer service. We work directly with manufacturers to ensure competitive pricing without compromising on quality.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you&apos;re a small retail shop or a large distributor, we have the perfect products and pricing to meet your needs.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <span className="text-8xl">🏢</span>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{highlight.title}</h3>
              <p className="text-slate-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* MISSION VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the most reliable and trusted wholesale textile supplier in India by providing superior quality products, competitive pricing, and exceptional customer service to retailers and businesses.
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower retailers with premium textile products that help them grow their business while maintaining our commitment to quality, integrity, and sustainable practices.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold mb-2">Best Pricing</h3>
              <p className="text-blue-100">Direct from manufacturers means better prices for you without compromising quality.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold mb-2">Quality Assured</h3>
              <p className="text-blue-100">Every product undergoes strict quality checks to ensure premium standards.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Quick Delivery</h3>
              <p className="text-blue-100">Efficient inventory management and logistics for fast delivery across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-slate-600 mb-8">
            Experience the difference of working with a trusted wholesale textile supplier.
          </p>
          <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition shadow-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}
