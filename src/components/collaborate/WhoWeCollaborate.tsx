"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Building2,
  Landmark,
  HeartHandshake,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const partners = [
  {
    icon: GraduationCap,
    title: "Academic Institutions",
    text: "Universities, colleges, research centres, and academic laboratories.",
  },
  {
    icon: Microscope,
    title: "Researchers & Experts",
    text: "Researchers, scientists, engineers, domain specialists, and technical experts.",
  },
  {
    icon: Building2,
    title: "Industry Partners",
    text: "Companies and technology organizations seeking research and engineering collaboration.",
  },
  {
    icon: Landmark,
    title: "Public Institutions",
    text: "Government departments and public institutions working on technology-driven challenges.",
  },
  {
    icon: HeartHandshake,
    title: "Social Organizations",
    text: "NGOs and organizations addressing healthcare, safety, accessibility, and social impact.",
  },
  {
    icon: Rocket,
    title: "Innovation Ecosystems",
    text: "Incubators, accelerators, innovation centres, and organizations supporting emerging technologies.",
  },
];

export default function WhoWeCollaborate() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 sm:text-sm">
            Our Collaboration Network
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Who We
            <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              {" "}Collaborate With
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Meaningful innovation often requires expertise from multiple
            disciplines. We welcome opportunities to build productive
            research and technology partnerships.
          </p>
        </motion.div>

        {/* Partner Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 sm:mt-14 lg:mt-16 lg:grid-cols-3">
          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group flex min-h-[190px] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-violet-500" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {partner.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {partner.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}