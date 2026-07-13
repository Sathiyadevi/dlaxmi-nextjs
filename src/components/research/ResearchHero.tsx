"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Microscope } from "lucide-react";

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-32">

      {/* Background */}

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 lg:grid-cols-2">

        {/* Left Content */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700"
          >
            <Microscope className="mr-2 h-4 w-4" />
            RESEARCH & INNOVATION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .15 }}
            className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl"
          >
            Engineering Research
            <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              for a Better Tomorrow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .3 }}
            className="mt-8 max-w-2xl text-lg leading-9 text-slate-600"
          >
            DLAXMI INFOTECH LLP conducts multidisciplinary research to
            develop intelligent engineering solutions across Artificial
            Intelligence, Healthcare, Automation, IoT, Women's Safety,
            and Food Technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .45 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <Link
              href="/research"
              className="inline-flex items-center rounded-2xl bg-indigo-600 px-7 py-4 font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore Innovations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              Collaborate
            </Link>
          </motion.div>

        </div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -12, 0],
        }}
        transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            },
        }}

        className="relative flex items-center justify-center mt-12 lg:mt-0"
        >

          <div className="
          relative
          flex
          items-center
          justify-center
          w-[260px] h-[260px]
          sm:w-[360px] sm:h-[360px]
          md:w-[450px] md:h-[450px]
          lg:w-[500px] lg:h-[500px]
          xl:w-[560px] xl:h-[560px]
          rounded-full
          bg-gradient-to-br
          from-indigo-100
          to-cyan-100
          shadow-2xl
          ">

            <motion.div 
                animate={{ rotate: 360 }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[190px] w-[190px]
                sm:h-[270px] sm:w-[270px]
                md:h-[340px] md:w-[340px]
                lg:h-[380px] lg:w-[380px]
                xl:h-[430px] xl:w-[430px] rounded-full border border-indigo-200 "
             />

            <motion.div 
                animate={{ rotate: -360 }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[140px] w-[140px]
                sm:h-[200px] sm:w-[200px]
                md:h-[250px] md:w-[250px]
                lg:h-[280px] lg:w-[280px]
                xl:h-[330px] xl:w-[330px] rounded-full border border-cyan-300" 
            />

            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                >
                <Microscope className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 text-indigo-600" />
            </motion.div>
          </div>

        </motion.div>

      </div>

    </section>
  );
}