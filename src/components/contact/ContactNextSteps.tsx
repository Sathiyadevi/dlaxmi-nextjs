"use client";

import { motion } from "framer-motion";
import {
  Send,
  Search,
  MessageCircle,
} from "lucide-react";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Send Your Enquiry",
    text: "Share your research idea, technical challenge, collaboration proposal, or general enquiry.",
  },
  {
    icon: Search,
    number: "02",
    title: "We Review It",
    text: "We review the information to understand the objective, technical context, and potential next steps.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Continue the Conversation",
    text: "If the enquiry aligns with our research or technology interests, we can discuss the opportunity further.",
  },
];

export default function ContactNextSteps() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
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
            What Happens Next
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Simple. Clear.
            <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              {" "}Collaborative.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Every meaningful collaboration starts with a conversation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3 lg:mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm"
              >
                <span className="absolute right-5 top-4 text-4xl font-bold text-slate-100">
                  {step.number}
                </span>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
                  <Icon className="h-6 w-6 text-violet-600" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}