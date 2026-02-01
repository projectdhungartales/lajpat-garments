'use client';

import Link from 'next/link';
import { useState } from 'react';
import QuoteFormModal from '@/components/QuoteFormModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const products = [
    {
      id: 1,
      name: "Premium Ethnic Suits",
      category: "Ethnic Wear",
      basePrice: 550,
      priceRange: "₹450-650 per piece",
      moq: "50 pcs",
      description: "Premium quality ethnic suits with intricate embroidery and traditional designs.",
    },
    {
      id: 2,
      name: "Unstitched Cotton Suits",
      category: "Unstitched Suits",
      basePrice: 275,
      priceRange: "₹200-350 per suit",
      moq: "100 suits",
      description: "High-grade unstitched cotton suits perfect for tailors and retailers.",
    },
    {
      id: 3,
      name: "Pure Cotton Fabric",
      category: "Cotton & Blends",
      basePrice: 115,
      priceRange: "₹80-150 per meter",
      moq: "500 meters",
      description: "100% pure cotton fabric in various prints and solid colors.",
    },
    {
      id: 4,
      name: "Cotton Silk Blend",
      category: "Cotton & Blends",
      basePrice: 160,
      priceRange: "₹120-200 per meter",
      moq: "300 meters",
      description: "Premium cotton-silk blend for traditional and casual wear.",
    },
    {
      id: 5,
      name: "Designer Sarees",
      category: "Designer Collections",
      basePrice: 1150,
      priceRange: "₹800-1500 per piece",
      moq: "25 pcs",
      description: "Exclusive designer sarees with handwoven patterns and premium finish.",
    },
    {
      id: 6,
      name: "Festive Collection",
      category: "Designer Collections",
      basePrice: 900,
      priceRange: "₹600-1200 per piece",
      moq: "30 pcs",
      description: "Premium festive wear with latest designs and color combinations.",
    },
  ];

  const updateQuantity = (productId: number, qty: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(qty, 0),
    }));
  };

  const calculateTotal = (productId: number) => {
    const qty = quantities[productId] || 0;
    const product = products.find(p => p.id === productId);
    return qty * (product?.basePrice || 0);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-2 text-sm text-slate-600">
        <Link href="/" className="text-blue-900 hover:underline">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">Products</span>
      </nav>

      {/* HERO */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Our Products</h1>
          <p className="text-lg text-slate-600">
            Explore our comprehensive range of premium textiles and ethnic wear for wholesale.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <span className="text-5xl">👕</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold uppercase mt-1">{product.category}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Price</p>
                    <p className="text-sm font-bold text-slate-900">{product.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">MOQ</p>
                    <p className="text-sm font-bold text-slate-900">{product.moq}</p>
                  </div>
                </div>

                {/* Order Calculator */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <label className="text-xs text-slate-600 font-semibold uppercase block mb-2">Quick Calculator</label>
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() => updateQuantity(product.id, (quantities[product.id] || 0) - 1)}
                      className="w-7 h-7 bg-slate-300 text-slate-700 font-bold rounded hover:bg-slate-400 transition"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantities[product.id] || 0}
                      onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 0)}
                      className="flex-1 px-2 py-1 border border-slate-300 rounded text-center text-sm"
                      min="0"
                    />
                    <button
                      onClick={() => updateQuantity(product.id, (quantities[product.id] || 0) + 1)}
                      className="w-7 h-7 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
                    >
                      +
                    </button>
                  </div>
                  {quantities[product.id] > 0 && (
                    <div className="text-sm font-bold text-blue-900 text-center py-2 bg-white rounded border border-blue-200">
                      ₹{calculateTotal(product.id).toLocaleString('en-IN')}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProduct(product.name)}
                  className="w-full py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 transition"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Orders?</h2>
          <p className="text-lg mb-8 opacity-90">
            We offer custom designs, bulk orders, and special pricing for large quantities.
          </p>
          <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg">
            Contact Sales Team
          </button>
        </div>
      </section>

      {/* Quote Form Modal */}
      <QuoteFormModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct || ''}
      />
    </main>
  );
}
