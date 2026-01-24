'use client';
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-gray-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Logo size="w-12 h-12" />
          <div>
            <div className="text-white font-bold">DLAXMI INFOTECH LLP</div>
            <div className="text-sm text-gray-400">Discover · Develop · Dominate</div>
          </div>
        </div>

        <nav>
          <ul className="flex gap-6">
            <li><Link className="text-white text-sm" href="/">Home</Link></li>
            <li><Link className="text-white text-sm" href="/about">About Us</Link></li>
            <li><Link className="text-white text-sm" href="/products">Products</Link></li>
            <li><Link className="text-white text-sm" href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
