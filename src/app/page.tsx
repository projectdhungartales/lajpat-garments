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

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <HeroSection />
      <StatsSection />

      {/* CATEGORIES SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Product Categories</h2>
          <p className="text-slate-600 mt-2">Wide range of textiles for every business need.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join 500+ retailers already sourcing from Lajpat Fabrics. Competitive prices, best quality, fastest delivery.
          </p>
          <button onClick={() => setSelectedProduct("General Inquiry")} className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-amber-50 transition shadow-lg">
            Get Started Today
          </button>
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