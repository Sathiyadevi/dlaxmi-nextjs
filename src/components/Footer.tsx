'use client';
import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-8 text-center text-gray-400">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center">
          <Logo size="w-10 h-10" />
          <div className="ml-3 text-white font-semibold">DLAXMI INFOTECH LLP</div>
        </div>
        <div>© {new Date().getFullYear()} DLAXMI INFOTECH LLP. All Rights Reserved.</div>
        <div className="text-sm mt-1">Contact: Sathiyadevi Murugesan (Founder) | (+91) 8438321560 </div>
      </div>
    </footer>
  );
}
