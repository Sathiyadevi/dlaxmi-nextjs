'use client';

import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2,delay: 0.4, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
    >     
      {/* Left */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover.<br />
          Develop.<br />
          <span className="text-blue-600">Dominate.</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-xl">
          DLAXMI INFOTECH LLP is a research-driven R&D innovation lab focused on
          Automation, IoT, and Applied Technology — turning ideas into
          engineered solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Explore Research
          </button>

          <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
            Contact the Lab
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-xl">
        <p className="text-blue-400 tracking-wide">Innovation Lab</p>
      </div>

    </motion.section> 
  );
};

export default Hero;
