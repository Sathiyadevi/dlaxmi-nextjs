'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <p className="font-bold text-lg">DLAXMI INFOTECH LLP</p>
            <p className="text-xs text-gray-500">Research & Development</p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/collaborate"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Collaborate
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-800" />
              <span className="block w-6 h-[2px] bg-gray-800" />
              <span className="block w-6 h-[2px] bg-gray-800" />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU – Apple Style */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-xl border-b z-40"
          >
            <div className="flex flex-col px-6 py-6 gap-4 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/collaborate"
                onClick={() => setOpen(false)}
                className="mt-4 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Collaborate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
