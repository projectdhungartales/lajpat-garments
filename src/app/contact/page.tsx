'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "Central Market, Lajpat Nagar, New Delhi - 110024",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 9876543210",
    },
    {
      icon: "📧",
      title: "Email",
      details: "info@lajpatfabrics.com",
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Contact Us</h1>
          <p className="text-lg text-slate-600">
            Get in touch with our team for inquiries, orders, or bulk pricing.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 text-center">
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
              <p className="text-slate-600 text-sm">{info.details}</p>
            </div>
          ))}
        </div>

        {/* FORM & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">Product Inquiry</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="custom">Custom Order</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* MAP & INFO */}
          <div>
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-3">📍</div>
                <p className="text-slate-700 font-semibold">Central Market, Lajpat Nagar</p>
                <p className="text-slate-600 text-sm">New Delhi - 110024</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Quick Info</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  <span>Free consultation for bulk orders</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  <span>Special pricing available</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  <span>Flexible payment terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our sales team today for personalized assistance and the best pricing.
          </p>
          <a href="tel:+919876543210" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg inline-block">
            Call Us Now
          </a>
        </div>
      </section>
    </main>
  );
}
