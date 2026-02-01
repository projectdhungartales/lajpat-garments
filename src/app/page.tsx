'use client';

import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductCard from "@/components/ProductCard";
import QuoteFormModal from "@/components/QuoteFormModal";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  
  const productCategories = [
    {
      title: "Ethnic Wear",
      description: "Premium ethnic suits, sarees, and traditional garments for wholesale distribution.",
      icon: "👗",
    },
    {
      title: "Unstitched Suits",
      description: "High-quality fabric suits perfect for retailers and tailors.",
      icon: "✂️",
    },
    {
      title: "Cotton & Blends",
      description: "Pure and blend cotton fabrics in various patterns and colors.",
      icon: "🧵",
    },
    {
      title: "Designer Collections",
      description: "Exclusive designer patterns and premium fabric combinations.",
      icon: "✨",
    },
  ];

  const whyChooseUs = [
    {
      icon: "🏆",
      title: "26 Years of Excellence",
      description: "Industry veterans with proven track record in wholesale textiles",
    },
    {
      icon: "🚚",
      title: "48-Hour Delivery",
      description: "Lightning-fast shipping to retailers across India",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "100% authentic fabrics with rigorous quality checks",
    },
    {
      icon: "💰",
      title: "Best Wholesale Rates",
      description: "Competitive pricing with bulk order discounts",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Textiles, Delhi",
      rating: 5,
      quote: "Best wholesale supplier for ethnic wear. Their pricing and quality is unmatched in the market.",
    },
    {
      name: "Priya Sharma",
      company: "Fashion Hub, Mumbai",
      rating: 5,
      quote: "Reliable, professional, and always goes the extra mile. Highly recommended!",
    },
    {
      name: "Ahmed Khan",
      company: "Elegance Collections, Bangalore",
      rating: 5,
      quote: "Perfect blend of quality, price, and service. Our go-to supplier for 5 years.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <HeroSection />
      <StatsSection />

      {/* WHY CHOOSE US - PREMIUM SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-bold uppercase tracking-wider mb-4">Why Choose Lajpat Fabrics</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by 500+ Retailers Nationwide</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We&apos;ve been the backbone of India&apos;s textile retail for over two decades. Here&apos;s why top retailers trust us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="group relative h-full animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-teal-700/10 rounded-2xl blur-xl group-hover:blur-2xl transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-teal-200 group-hover:border-blue-900 transition shadow-lg group-hover:shadow-2xl h-full flex flex-col">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES SECTION */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-bold uppercase tracking-wider mb-4">Our Collections</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Curated Product Range</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Handpicked collections designed for modern retailers. From traditional to contemporary, we have it all.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION - WOW FACTOR */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-teal-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Loved by Industry Leaders</h2>
            <p className="text-lg text-blue-100">Hear from retailers who&apos;ve transformed their business with Lajpat Fabrics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/50 transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-blue-100 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BENEFITS BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Easy Ordering</h3>
              <p className="text-slate-600">Simple, transparent ordering process with instant quote generation</p>
            </div>
            <div className="text-center border-l border-r border-teal-200 px-8">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Transactions</h3>
              <p className="text-slate-600">GST registered with fully transparent billing and payment terms</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-slate-600">Dedicated account managers ready to assist you anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-teal-700 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4">Start Your Success Story Today</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join 500+ successful retailers who&apos;ve already scaled their business with Lajpat Fabrics. Get your personalized quote in just 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setSelectedProduct("General Inquiry")} 
              className="px-10 py-4 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-amber-50 transition shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get Instant Quote
            </button>
            <button className="px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white/30 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <QuoteFormModal 
          isOpen={true}
          productName={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </main>
  );
}