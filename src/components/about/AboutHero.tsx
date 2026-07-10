"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-gray-900"
        >
          About
          <span className="text-blue-600"> DLAXMI INFOTECH LLP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-8"
        >
          We are a research-driven engineering company dedicated to creating
          innovative technologies through Automation, Artificial Intelligence,
          IoT, and Applied Research. Our mission is to transform ideas into
          practical solutions that create real-world impact.
        </motion.p>

      </div>
    </section>
  );
}