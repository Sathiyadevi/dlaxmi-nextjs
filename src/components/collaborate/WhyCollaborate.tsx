"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Target,
  Users,
  FlaskConical,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Problem-Driven Research",
    text: "We focus on meaningful real-world challenges and explore practical engineering solutions with measurable impact.",
  },
  {
    icon: BrainCircuit,
    title: "Multidisciplinary Innovation",
    text: "Our research combines artificial intelligence, automation, healthcare, embedded systems, and applied engineering.",
  },
  {
    icon: Users,
    title: "Collaborative Development",
    text: "We welcome knowledge exchange and joint development with researchers, institutions, technical experts, and industry partners.",
  },
  {
    icon: FlaskConical,
    title: "Research to Application",
    text: "We work toward transforming research concepts into prototypes, validated technologies, and practical applications.",
  },
];

export default function WhyCollaborate() {
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
            Why Collaborate
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Building Better Solutions
            <span className="block bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              Through Shared Expertise
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Collaboration brings together knowledge, experience, and technology
            to address complex challenges and accelerate meaningful innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 transition group-hover:bg-violet-100">
                  <Icon className="h-6 w-6 text-violet-600" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {reason.title}
                </h3>

                <div className="mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}