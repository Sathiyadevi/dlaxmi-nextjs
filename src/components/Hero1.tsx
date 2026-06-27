"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Subtle Background Glow */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-[1500px] mx-auto px-8 lg:px-16 py-28 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Engineering Intelligent Systems
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              for the Future
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-xl">
            DLAXMI INFOTECH LLP is a research-driven innovation lab
            specializing in Automation, IoT, and Applied Engineering —
            transforming advanced concepts into scalable technological solutions.
          </p>

          {/* Authority Points */}
          <div className="mt-10 space-y-4 text-gray-700 text-base">
            <p>✔ Applied Research & Development</p>
            <p>✔ Smart Systems & Automation Engineering</p>
            <p>✔ Future-Ready Infrastructure Solutions</p>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Start Collaboration
            </Link>

            <Link
              href="/research"
              className="px-7 py-3.5 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              Explore Research
            </Link>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[480px] lg:h-[560px] rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">

            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 mix-blend-overlay" />

            {/* Text Overlay */}
            <p className="relative text-blue-400 tracking-widest text-lg">
              INNOVATION • RESEARCH • TECHNOLOGY
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
