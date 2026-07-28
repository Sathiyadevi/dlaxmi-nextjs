"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Cpu,
  HeartHandshake,
} from "lucide-react";

const areas = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Academic & Research Collaboration",
    text: "Joint research, knowledge exchange, technical studies, and collaborative exploration with universities, researchers, and academic institutions.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Industry Partnership",
    text: "Collaborating with industry partners to understand practical challenges and develop engineering solutions for real-world applications.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Technology Co-Development",
    text: "Joint development of intelligent systems, automation technologies, prototypes, software, and applied engineering solutions.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Social Impact Innovation",
    text: "Working with organizations and institutions on technology initiatives addressing healthcare, safety, accessibility, and other social challenges.",
  },
];

export default function CollaborationAreas() {
  return (
    <section
      id="collaboration-areas"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
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
            Collaboration Areas
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Ways We Can
            <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              {" "}Work Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We welcome collaboration across research, technology development,
            industry applications, and initiatives that create meaningful
            social impact.
          </p>
        </motion.div>

        {/* Collaboration areas */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:mt-16">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-bold text-slate-100">
                  {area.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-cyan-50">
                  <Icon className="h-7 w-7 text-violet-600" />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-violet-600 to-cyan-500" />

                <p className="relative mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  {area.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}