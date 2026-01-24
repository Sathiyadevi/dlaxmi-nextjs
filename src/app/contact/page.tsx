'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <p className="text-gray-300 mb-6">For inquiries about partnerships, R&D collaborations, or product demos, reach out to our team.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700" />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700" />
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 h-40" />
        <div>
          <button type="submit" className="bg-dlaxmi-500 px-6 py-3 rounded-xl text-white">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && <span className="ml-4 text-green-400">Message sent — we will contact you soon.</span>}
          {status === 'error' && <span className="ml-4 text-red-400">Error sending message. Try again later.</span>}
        </div>
      </form>
    </section>
  );
}
