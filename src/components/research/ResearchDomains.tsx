"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  HeartPulse,
  ShieldCheck,
  Utensils,
  Bot,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const domains = [
  {
    number: "01",
    title: "Artificial Intelligence & Intelligent Systems",
    description:
      "Developing intelligent software and AI-driven technologies for computer vision, behaviour understanding, predictive systems, and intelligent decision-making.",
    icon: BrainCircuit,
    features: [
      "Computer Vision",
      "Machine Learning",
      "Behaviour Analysis",
      "Edge AI",
    ],
    accent: "from-violet-600 to-indigo-500",
    glow: "bg-violet-100",
    iconColor: "text-violet-600",
  },

  {
    number: "02",
    title: "Healthcare Engineering",
    description:
      "Designing assistive and intelligent technologies that support healthcare, rehabilitation, accessibility, and improved quality of life.",
    icon: HeartPulse,
    features: [
      "Assistive Technology",
      "Rehabilitation",
      "Health Monitoring",
      "Smart Devices",
    ],
    accent: "from-cyan-500 to-blue-500",
    glow: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },

  {
    number: "03",
    title: "Women's Safety & Protective Systems",
    description:
      "Researching intelligent preventive, protective, and emergency-response technologies designed to improve personal safety.",
    icon: ShieldCheck,
    features: [
      "Risk Detection",
      "Protective Systems",
      "Emergency Response",
      "Smart Wearables",
    ],
    accent: "from-fuchsia-500 to-violet-600",
    glow: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
  },

  {
    number: "04",
    title: "Food Technology & Processing",
    description:
      "Developing engineering solutions for safer, more humane, hygienic, and automated food-processing systems.",
    icon: Utensils,
    features: [
      "Process Automation",
      "Humane Processing",
      "Hygiene Systems",
      "Quality Monitoring",
    ],
    accent: "from-emerald-500 to-cyan-500",
    glow: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },

  {
    number: "05",
    title: "Automation & Intelligent Machines",
    description:
      "Combining sensing, embedded intelligence, automation, and mechanical engineering to develop efficient intelligent machines.",
    icon: Bot,
    features: [
      "Automation",
      "Sensors",
      "Embedded Systems",
      "Intelligent Machines",
    ],
    accent: "from-blue-500 to-indigo-600",
    glow: "bg-blue-100",
    iconColor: "text-blue-600",
  },

  {
    number: "06",
    title: "Applied Engineering & Innovation",
    description:
      "Transforming multidisciplinary research concepts into practical prototypes and engineering solutions for real-world challenges.",
    icon: Lightbulb,
    features: [
      "Prototyping",
      "Product Development",
      "System Integration",
      "Applied Research",
    ],
    accent: "from-amber-400 to-orange-500",
    glow: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];
export default function ResearchDomains() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-28 lg:pb-24">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main container */}
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-14 lg:mb-20"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 sm:text-sm">
            Research Domains
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Engineering Solutions
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              For Every Challenge
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our multidisciplinary research spans Artificial Intelligence,
            Healthcare, Automation, Food Technology, Women&apos;s Safety, and
            Applied Engineering to develop impactful technologies.
          </p>
        </motion.div>
        {/* Research Domain 01 */}
        

            {/* ================= DOMAIN 01 CARD ================= */}

            <div className="space-y-10 lg:space-y-14">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                const reverse = index % 2 !== 0;

            return (

            <motion.div
              key={domain.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                mx-auto w-full
                rounded-[28px]
                border border-slate-200/70
                bg-white/90
                px-4 py-8
                shadow-[0_20px_60px_rgba(15,23,42,0.07)]
                sm:px-8 sm:py-10
                lg:px-12 lg:py-10
                xl:px-14 xl:py-10
              "
            >
              <div
                className="
                  grid grid-cols-1 items-center gap-8
                  lg:grid-cols-2 lg:gap-14
                "
              >

                {/* ================= LEFT : CIRCLE ================= */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center"
                >
                  <div
                    className={`
                      relative
                      flex items-center justify-center
                      h-[200px] w-[200px]
                      sm:h-[260px] sm:w-[260px]
                      md:h-[320px] md:w-[320px]
                      lg:h-[360px] lg:w-[360px]
                      xl:h-[380px] xl:w-[380px]
                      rounded-full
                      bg-gradient-to-br
                      ${domain.accent}
                      p-[2px]
                      shadow-[0_25px_60px_rgba(99,102,241,0.12)]
                    `}
                  >

                    {/* White inner circle */}

                    <div
                      className="
                        relative
                        flex h-full w-full
                        items-center justify-center
                        rounded-full
                        bg-white
                      "
                    >

                      {/* Decorative outer ring */}

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          h-[90%] w-[90%]
                          rounded-full
                          border border-indigo-200/50
                        "
                      />

                      {/* Decorative inner ring */}

                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 28,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          h-[72%] w-[72%]
                          rounded-full
                          border border-cyan-200/60
                        "
                      />

                      {/* Icon background */}

                      <div
                        className={`
                          relative z-10
                          flex h-20 w-20
                          items-center justify-center
                          rounded-full
                          ${domain.glow}
                          sm:h-24 sm:w-24
                        `}
                      >
                        {(() => {
                          const Icon = domain.icon;

                          return (
                            <Icon
                              className={`
                                h-10 w-10
                                ${domain.iconColor}
                                sm:h-12 sm:w-12
                              `}
                            />
                          );
                        })()}
                      </div>

                    </div>
                  </div>
                </motion.div>


                {/* ================= RIGHT : CONTENT ================= */}

                <div className="w-full">

                  {/* Domain number */}

                  <div
                    className="
                      mb-5 inline-flex
                      rounded-full
                      bg-slate-100
                      px-4 py-2
                      text-xs font-semibold
                      text-slate-700
                      sm:text-sm
                    "
                  >
                    Research Domain {domain.number}
                  </div>


                  {/* Title */}

                  <h3 className="
                    text-[27px] leading-[1.18] font-bold text-slate-900
                    sm:text-4xl
                    lg:text-5xl
                  ">
                    {domain.title}
                  </h3>


                  {/* Accent line */}

                  <div
                    className={`
                      my-6
                      h-1 w-20
                      rounded-full
                      bg-gradient-to-r
                      ${domain.accent}
                    `}
                  />


                  {/* Description */}

                  <p
                    className="
                      max-w-2xl
                      text-base
                      leading-7
                      text-slate-600
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    {domain.description}
                  </p>


                  {/* Feature chips */}

                  <div className="flex flex-wrap gap-2 sm:gap-3">

                    {domain.features.map((feature) => (

                      <motion.span
                        key={feature}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        className="
                          rounded-full
                          border border-slate-200
                          bg-slate-50
                          px-3 py-2
                          text-xs
                          font-medium
                          text-slate-700
                          shadow-sm
                          sm:px-4
                          sm:text-sm
                        "
                      >
                        {feature}
                      </motion.span>

                    ))}

                  </div>

                </div>

              </div>
            </motion.div>
        
            );
              })}
        </div>
      </div>
    </section>
  );
}