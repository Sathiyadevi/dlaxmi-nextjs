"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 ">
      
      {/* Subtle Background Glow */}
      <div className="absolute -top-32 -right-32 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-blue-500/10 rounded-full blur-3xl" /> 
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ">

        {/* LEFT CONTENT */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="order-1 lg:order-1 text-center lg:text-left"
        >
          <h1 className="className= text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 ">
            Engineering Intelligent Systems
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              for the Future
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0 ">
            DLAXMI INFOTECH LLP is a research-driven innovation lab
            specializing in Automation, IoT, and Applied Engineering —
            transforming advanced concepts into scalable technological solutions.
          </p>

          {/* Authority Points */}
          <div className=" mt-8 space-y-3 text-sm sm:text-base md:text-lg text-gray-700 ">
            <p>✔ Applied Research & Development</p>
            <p>✔ Smart Systems & Automation Engineering</p>
            <p>✔ Future-Ready Infrastructure Solutions</p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 ">
            <Link
              href="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition" >
              Start Collaboration
            </Link>

            <Link
              href="/research"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition ">
              Explore Research
            </Link>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="
        order-2
        lg:order-2
        flex
        justify-center
        items-center
        mt-12
        lg:mt-0
        ">
        
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[560px] aspect-square mx-auto rounded-3xl overflow-hidden">

            <Image
              src="/images/hero-tech.jpg"
              alt="DLAXMI Research & Engineering"
              fill
              className="object-cover"
              priority
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
