'use client';

import { useState } from 'react';
import QuoteFormModal from '@/components/QuoteFormModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      name: "Premium Ethnic Suits",
      category: "Ethnic Wear",
      price: "₹450-650 per piece",
      moq: "50 pcs",
      description: "Premium quality ethnic suits with intricate embroidery and traditional designs.",
    },
    {
      id: 2,
      name: "Unstitched Cotton Suits",
      category: "Unstitched Suits",
      price: "₹200-350 per suit",
      moq: "100 suits",
      description: "High-grade unstitched cotton suits perfect for tailors and retailers.",
    },
    {
      id: 3,
      name: "Pure Cotton Fabric",
      category: "Cotton & Blends",
      price: "₹80-150 per meter",
      moq: "500 meters",
      description: "100% pure cotton fabric in various prints and solid colors.",
    },
    {
      id: 4,
      name: "Cotton Silk Blend",
      category: "Cotton & Blends",
      price: "₹120-200 per meter",
      moq: "300 meters",
      description: "Premium cotton-silk blend for traditional and casual wear.",
    },
    {
      id: 5,
      name: "Designer Sarees",
      category: "Designer Collections",
      price: "₹800-1500 per piece",
      moq: "25 pcs",
      description: "Exclusive designer sarees with handwoven patterns and premium finish.",
    },
    {
      id: 6,
      name: "Festive Collection",
      category: "Designer Collections",
      price: "₹600-1200 per piece",
      moq: "30 pcs",
      description: "Premium festive wear with latest designs and color combinations.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
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
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-slate-100 overflow-hidden">
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
                    <p className="text-sm font-bold text-slate-900">{product.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">MOQ</p>
                    <p className="text-sm font-bold text-slate-900">{product.moq}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(product.name)}
                  className="w-full py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
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
