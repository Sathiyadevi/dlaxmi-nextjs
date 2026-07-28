"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  Lightbulb,
  Handshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Connect",
    text: "Share your research interest, technical challenge, or collaboration opportunity with our team.",
  },
  {
    number: "02",
    icon: Search,
    title: "Explore",
    text: "We explore the problem, objectives, technical requirements, and potential areas of collaboration.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Define",
    text: "Together, we identify a suitable research direction, development approach, and expected outcomes.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Collaborate",
    text: "We move forward with research, engineering development, knowledge exchange, or joint innovation.",
  },
];

export default function CollaborationProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 sm:text-sm">
            Collaboration Process
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From Conversation to{" "}
            <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              Collaboration
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We follow a simple and transparent approach to explore meaningful
            research and technology partnerships.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative mx-auto mt-12 max-w-6xl sm:mt-14 lg:mt-16">

          {/* Mobile / Tablet vertical connecting line */}
          <div className="absolute bottom-10 left-10 top-10 w-px bg-gradient-to-b from-violet-300 via-cyan-300 to-fuchsia-300 lg:hidden" />

          {/* Desktop connecting line */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-violet-300 via-cyan-300 to-fuchsia-300 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative pl-24 text-left lg:pl-0 lg:text-center"
                >
                  {/* Icon */}
                  <div className="absolute left-0 top-0 z-10 flex h-20 w-20 items-center justify-center rounded-full border border-violet-200 bg-white shadow-lg lg:relative lg:mx-auto">
                    <Icon className="h-7 w-7 text-violet-600" />
                  </div>

                  {/* Step */}
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 lg:mt-5">
                    Step {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[250px] text-sm leading-6 text-slate-600 lg:mx-auto">
                    {step.text}
                  </p>

                  {/* Desktop Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-8 z-20 hidden h-4 w-4 text-violet-400 lg:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}