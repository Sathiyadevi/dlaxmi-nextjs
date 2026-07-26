"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowDown } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 sm:text-sm">
            Contact Us
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let&apos;s Start a
            <span className="block bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Whether you are interested in research collaboration, technology
            development, academic partnership, or discussing a real-world
            engineering challenge, we would be glad to hear from you.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Contact Us
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex h-[360px] w-full max-w-[460px] items-center justify-center"
        >
          <div className="absolute h-[320px] w-[320px] rounded-full border border-violet-100 bg-gradient-to-br from-violet-50 to-cyan-50" />

          <div className="absolute h-[230px] w-[230px] rounded-full border border-cyan-200" />

          <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl">
            <MessageSquare className="h-12 w-12 text-violet-600" />
          </div>

          <div className="absolute left-3 top-12 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:left-0">
            <Mail className="h-5 w-5 text-violet-600" />
            <span className="text-sm font-semibold text-slate-800">
              Connect
            </span>
          </div>

          <div className="absolute bottom-10 right-2 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-lg sm:right-0">
            <span className="text-sm font-semibold text-slate-800">
              Research • Innovation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}