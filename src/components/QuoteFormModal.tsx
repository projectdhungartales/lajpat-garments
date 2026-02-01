'use client';

import { useState } from 'react';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function QuoteFormModal({ isOpen, onClose, productName }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: '',
    productName: productName,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        quantity: '',
        productName: productName,
        message: '',
      });
      onClose();
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">Request Quote</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
              <p className="text-slate-600">We&apos;ll contact you within 24 hours with a personalized quote.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Product</label>
                <input
                  type="text"
                  value={productName}
                  disabled
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-700"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Address (Optional)</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Business address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Quantity *</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Any specific requirements or colors?"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                >
                  Send Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
