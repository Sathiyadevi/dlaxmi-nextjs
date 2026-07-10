"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Handshake,
  GraduationCap,
  Factory,
  Lightbulb,
  Landmark,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const collaborations = [
  {
    icon: Handshake,
    title: "Research Partners",
    description:
      "Collaborate on advanced research, technology development, and interdisciplinary engineering projects.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    description:
      "Partner with us for research programs, student innovation, internships, and academic collaborations.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Factory,
    title: "Industry",
    description:
      "Develop intelligent products, automation systems, and next-generation engineering solutions together.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Lightbulb,
    title: "Startups",
    description:
      "Accelerate innovative ideas through engineering guidance, prototyping, and research support.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Briefcase,
    title: "Investors",
    description:
      "Support breakthrough technologies that solve meaningful real-world challenges.",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Landmark,
    title: "Government & NGOs",
    description:
      "Work together on healthcare, sustainability, automation, and social impact innovation.",
    color: "from-indigo-500 to-purple-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

export default function Collaborate() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 xl:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <p className="text-indigo-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Collaborate With Us
          </p>

          <h2 className="text-5xl font-bold leading-tight">

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="block text-slate-900"
            >
              Let's Build the
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: .2,
              }}
              className="block text-indigo-600"
            >
              Future Together
            </motion.span>

          </h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: .4,
            }}
            className="max-w-3xl mx-auto mt-8 text-xl text-slate-600 leading-9"
          >
            Innovation thrives through collaboration.
            We welcome researchers, universities,
            industries, startups, investors,
            and government organizations to
            create technologies with real-world impact.
          </motion.p>

        </motion.div>
                {/* Collaboration Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 xl:gap-24 items-stretch">

          {collaborations.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg"
              >

                {/* Top Gradient */}

                <div
                  className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${item.color}`}
                />

                {/* Background Number */}

                <span className="absolute top-6 right-6 text-7xl font-black text-slate-100 opacity-70 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8`}
                >

                  <Icon className={`w-8 h-8 ${item.iconColor}`} />

                </motion.div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Divider */}

                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 my-5" />

                {/* Description */}

                <p className="text-slate-600 leading-8">
                  {item.description}
                </p>

                {/* Button */}

                <div className="mt-auto pt-8">

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-indigo-600 group"
                  >

                    Start Collaboration

                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />

                  </Link>

                </div>

              </motion.div>

            );

          })}

        </div>
             

      {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 p-12 text-white shadow-2xl"
        >

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-100">
                Ready to Innovate?
              </p>

              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let's Build the
                <br />
                Future Together
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-indigo-100">
                Whether you're a university, startup, industry partner,
                government organization, investor, or researcher,
                we'd love to collaborate on meaningful engineering
                solutions that create real-world impact.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col items-start gap-5 lg:items-end">

              <Link href="/contact">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-700 shadow-xl transition"
                >

                  Start Collaboration

                </motion.button>

              </Link>

              <Link href="/contact">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="rounded-2xl border border-white/40 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                >

                  Contact Us

                </motion.button>

              </Link>

            </div>

          </div>

        </motion.div>
              </div>
    </section>
  );
}