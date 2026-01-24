'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-10 items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover. Develop. <span className="text-dlaxmi-500">Dominate.</span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-xl">
          DLAXMI INFOTECH LLP is a research-driven R&D company focused on automation, IoT, and intelligent industrial systems. We combine mechanical engineering, embedded systems, and AI to build solutions that scale.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#innovations" className="bg-dlaxmi-500 hover:bg-dlaxmi-700 text-white px-6 py-3 rounded-xl">Explore Innovations</a>
          <a href="/contact" className="border border-gray-600 px-6 py-3 rounded-xl text-blue">Contact Us</a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:w-1/2 flex justify-center">
        {/* use next/image for optimization; falls back visually if image missing */}
        <div className="w-[420px] md:w-[520px] rounded-2xl shadow-dl-card border border-gray-700 overflow-hidden">
          <Image src="/products/innovation-lab.svg" alt="Innovation Lab" width={520} height={360} style={{ objectFit: 'cover' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
