"use client";

import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Lightbulb,
  FlaskConical,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Problem Identification",
    description:
      "We begin by identifying meaningful real-world problems through observation, user needs, industry collaboration, and market research.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: BookOpen,
    title: "Research & Analysis",
    description:
      "Our team studies existing technologies, scientific literature, feasibility, and market opportunities before proposing innovative solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Concept & Design",
    description:
      "We transform ideas into engineering concepts by designing intelligent algorithms, hardware architectures, software systems, and workflows.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: FlaskConical,
    title: "Prototype Development",
    description:
      "Concepts evolve into functional prototypes through rapid development, experimentation, and iterative engineering improvements.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Validation",
    description:
      "Every prototype is carefully evaluated for reliability, safety, performance, scalability, and practical usability before deployment.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Rocket,
    title: "Real-World Implementation",
    description:
      "Successful innovations are prepared for commercialization, industrial adoption, research collaboration, or social impact deployment.",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function ResearchProcess() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Our Process
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-slate-900 leading-tight"
            >
            Engineering Innovation
            <br />
            <span className="text-indigo-600">
              From Idea to Impact
            </span>
          </motion.h2>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-600 leading-9">
            Every successful innovation follows a structured engineering
            process. We combine scientific research, rapid prototyping,
            validation, and continuous improvement to create technologies
            that solve real-world challenges.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-slate-200 -translate-x-1/2"></div>

          {process.map((item, index) => {

            const Icon = item.icon;
            const left = index % 2 === 0;

            return (

              <motion.div
                    key={index}
                    initial={{
                        opacity: 0,
                        x: left ? -120 : 120,
                        y: 30,
                        scale: 0.95,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: "easeOut",
                    }}
                    className={`relative flex items-center mb-20 ${
                        left ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    >

                {/* Card */}

                <div className="md:w-1/2">

                  <motion.div
                    whileHover={{
                        y: -12,
                        scale: 1.02,
                        boxShadow: "0 30px 60px rgba(99,102,241,0.18)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                    }}
                    className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8"
                    >

                    <span className="absolute top-6 right-8 text-7xl font-extrabold text-slate-100 select-none">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <motion.div
                        whileHover={{
                            rotate: 8,
                            scale: 1.1
                        }}
                        transition={{ type: "spring" }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>

                    {/* Step Badge */}
                    <div className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold tracking-[0.2em] px-4 py-1.5 shadow-lg mb-5">
                    STEP {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
                    {item.title}
                    </h3>

                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 my-5" />

                    <p className="text-slate-600 leading-8">
                      {item.description}
                    </p>

                  </motion.div>

                </div>

                {/* Timeline Dot */}

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">

                 <div className="w-8 h-8 rounded-full bg-white border-4 border-indigo-600 shadow-xl flex items-center justify-center">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2
                        }}
                        className="w-6 h-6 rounded-full bg-violet-600 border-4 border-white shadow-lg"
                    />
                                    </div>
                </div>

                {/* Empty Side */}

                <div className="hidden md:block md:w-1/2"></div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}