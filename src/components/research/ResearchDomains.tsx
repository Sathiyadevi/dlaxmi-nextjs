"use client";

import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  Bot,
  ShieldCheck,
  Fish,
  Cpu,
  ArrowRight,
} from "lucide-react";

{/*Research Domain Data*/}

const domains = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Intelligent Systems",
    description:
      "Developing intelligent software and AI-driven technologies that enable automation, computer vision, predictive analytics, and decision-making across multiple industries.",
    features: [
      "Computer Vision",
      "Machine Learning",
      "Behaviour Analysis",
      "Edge AI",
      "Predictive Systems",
    ],
    color: "from-violet-600 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },

  {
    icon: HeartPulse,
    title: "Healthcare Engineering",
    description:
      "Designing assistive medical technologies, rehabilitation systems, patient monitoring devices, and intelligent healthcare solutions for improving quality of life.",
    features: [
      "Medical Devices",
      "Assistive Technology",
      "Patient Monitoring",
      "Healthcare AI",
      "Rehabilitation",
    ],
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },

  {
    icon: Bot,
    title: "Automation & Robotics",
    description:
      "Creating intelligent automation systems, robotics platforms, industrial IoT solutions, and smart engineering processes for modern industries.",
    features: [
      "Industrial Automation",
      "Robotics",
      "IoT",
      "Smart Manufacturing",
      "Embedded Systems",
    ],
    color: "from-indigo-600 to-blue-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },

  {
    icon: ShieldCheck,
    title: "Women's Safety Technologies",
    description:
      "Researching innovative personal safety technologies using AI, smart wearables, emergency communication, and behaviour analysis for social protection.",
    features: [
      "AI Monitoring",
      "Wearable Devices",
      "Emergency Systems",
      "Behaviour Detection",
      "Smart Protection",
    ],
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },

  {
    icon: Fish,
    title: "Food Technology & Sustainable Processing",
    description:
      "Developing ethical food processing systems, humane engineering technologies, automation equipment, and sustainable manufacturing solutions.",
    features: [
      "Humane Processing",
      "Food Safety",
      "Automation",
      "Sustainable Engineering",
      "Smart Processing",
    ],
    color: "from-emerald-500 to-green-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },

  {
    icon: Cpu,
    title: "Applied Engineering Research",
    description:
      "Transforming innovative concepts into practical engineering solutions through rapid prototyping, validation, testing, and multidisciplinary collaboration.",
    features: [
      "Rapid Prototyping",
      "Simulation",
      "Product Design",
      "Testing",
      "Technology Transfer",
    ],
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function ResearchDomains() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gradient Blobs */}

      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-24 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-screen-2xl mx-auto px-8 xl:px-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-24"
        >

          <p className="text-indigo-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Research Domains
          </p>

          <h2 className="text-5xl font-bold leading-tight text-slate-900">
            Engineering Solutions
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              For Every Challenge
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-600 leading-9">
            Our multidisciplinary research spans Artificial Intelligence,
            Healthcare, Automation, Food Technology, Women's Safety,
            and Applied Engineering to develop impactful technologies.
          </p>

        </motion.div>

        {/* Domains */}

        <div className="space-y-28">
            {domains.map((domain, index) => {

              const Icon = domain.icon;
              const left = index % 2 === 0;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  className={`grid lg:grid-cols-[0.9fr_1.1fr] gap-10 xl:gap-16 items-center ${
                    left ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >

                  {/* Illustration Side */}

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex justify-center items-center -translate-y-6 lg:translate-x-6"
                  >

                    <div className={`relative h-[380px] w-[380px] xl:h-[440px] xl:w-[440px] rounded-full bg-gradient-to-br ${domain.color} p-[2px] shadow-[0_0_80px_rgba(99,102,241,0.15)]`}>
                        <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-[410px] w-[410px] rounded-full border border-indigo-200/40"
                        />

                        <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-[320px] w-[320px] rounded-full border border-cyan-200/50"
                        />

                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">

                        <div className={`flex h-28 w-28 items-center justify-center rounded-full ${domain.bg}`}>

                          <Icon className={`h-14 w-14 ${domain.iconColor}`} />

                        </div>

                      </div>

                    </div>

                  </motion.div>

                  {/* Content Side */}

                  <div className="max-w-2xl">

                    <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 mb-6">
                      Research Domain {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
                      {domain.title}
                    </h3>

                    <div className={`w-24 h-1 rounded-full bg-gradient-to-r ${domain.color} mb-8`} />

                    <p className="text-xl leading-9 text-slate-600 mb-8">
                      {domain.description}
                    </p>

                            {/* Feature Chips */}

                    <div className="flex flex-wrap gap-3 mb-10">

                      {domain.features.map((feature, i) => (

                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                          }}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                        >
                          {feature}
                        </motion.span>

                      ))}

                    </div>

                    {/* Button */}

                    <motion.button
                      whileHover={{
                        x: 6,
                        scale: 1.03,
                      }}
                      whileTap={{scale: 0.98}}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group inline-flex items-center gap-3 font-semibold text-indigo-600 text-lg"
                    >

                      Explore Research

                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                    </motion.button>

                  </div>

                </motion.div>

              );

            })}

        </div>

      </div>

    </section>
  );
}