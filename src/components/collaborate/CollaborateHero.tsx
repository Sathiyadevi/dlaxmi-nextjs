"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Lightbulb, Network } from "lucide-react";

export default function CollaborateHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute right-[-10%] top-40 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:min-h-[720px] lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Collaborate With Us
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-5xl lg:text-6xl">
            Innovation Grows
            <span className="block bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              Through Collaboration
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
            We collaborate with researchers, academic institutions, industry
            partners, technical experts, and organizations to transform
            meaningful challenges into practical technology solutions.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href="#collaboration-areas"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Explore Collaboration
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-600"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto flex h-[420px] w-full max-w-lg items-center justify-center sm:h-[380px] lg:h-[420px]"
        >
          <div className="absolute h-72 w-72 rounded-full border border-dashed border-violet-200" />

          <div className="absolute h-52 w-52 rounded-full border border-dashed border-cyan-200" />

          {/* Center */}
          <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-xl">
            <Network className="h-7 w-7 text-violet-600" />

            <p className="mt-2 text-sm font-bold text-slate-900">
              Collaborative
              <br />
              Innovation
            </p>
          </div>

          {/* Research */}
          <div className="absolute left-4 top-14 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            <Lightbulb className="h-6 w-6 text-violet-600" />
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Research
            </p>
          </div>

          {/* Partnership */}
          <div className="absolute right-4 top-14 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            <Users className="h-6 w-6 text-cyan-600" />
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Partnership
            </p>
          </div>

          {/* Technology */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
            <p className="text-sm font-semibold text-slate-800">
              Technology Development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}