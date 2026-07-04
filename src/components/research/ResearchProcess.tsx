"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  FlaskConical,
  Cpu,
  Rocket,
} from "lucide-react";
const process = [
  {
    number: "01",
    icon: Search,
    title: "Problem Discovery",
    description:
      "We identify real-world engineering challenges through research, observation, and industry collaboration.",
    color: "from-violet-600 to-fuchsia-600",
  },

  {
    number: "02",
    icon: Lightbulb,
    title: "Concept Development",
    description:
      "Innovative ideas are transformed into practical concepts using scientific thinking and multidisciplinary engineering.",
    color: "from-cyan-500 to-blue-600",
  },

  {
    number: "03",
    icon: FlaskConical,
    title: "Research & Validation",
    description:
      "Every concept is validated through simulation, experimentation, prototyping, and technical evaluation.",
    color: "from-green-500 to-emerald-600",
  },

  {
    number: "04",
    icon: Cpu,
    title: "Engineering Design",
    description:
      "AI, Automation, IoT, Embedded Systems, and Software Engineering are integrated into scalable solutions.",
    color: "from-orange-500 to-red-500",
  },

  {
    number: "05",
    icon: Rocket,
    title: "Innovation Impact",
    description:
      "Solutions are refined for commercialization, societal impact, and long-term sustainable deployment.",
    color: "from-indigo-600 to-violet-600",
  },
];

export default function ResearchProcessy() {
    return(
        <section className="relative py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >

                    <p className="text-sm font-semibold tracking-[0.35em] uppercase text-violet-600 mb-4">
                    Research Process
                    </p>

                    <h2 className="text-5xl font-bold text-slate-900 leading-tight">

                    From
                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                        {" "}Problem{" "}
                    </span>

                    to

                    <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                        {" "}Innovation
                    </span>

                    </h2>

                    <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-600">
                    Every innovation at DLAXMI INFOTECH LLP follows a structured engineering
                    workflow—from identifying real-world problems to developing validated,
                    scalable technologies that create meaningful impact.
                    </p>

                </motion.div>

                 {/* Timeline */}

                <div className="relative">

                    {/* Timeline Line */}

                    <div className="absolute top-14 left-0 right-0 h-[3px] bg-slate-200 hidden lg:block">

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600"
                    />

                    </div>

                    {/* Grid*/}

                    <div className="grid lg:grid-cols-5 gap-10 relative">

                        {process.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .7,
                                delay: index * .15,
                            }}
                            className="relative flex flex-col items-center"
                            >

                                {/* Timeline Circle */}

                                <div className="relative z-20">

                                <motion.div
                                    whileHover={{
                                    scale: 1.1,
                                    rotate: 10,
                                    }}
                                    transition={{
                                    duration: .3,
                                    }}
                                    className={`h-20 w-20 rounded-full bg-gradient-to-r ${step.color} p-[2px] shadow-xl`}
                                >

                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-xl">

                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-20 blur-xl scale-125`} />

                                        <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                        }}
                                        >
                                        <Icon className="h-9 w-9 text-violet-600" />
                                        </motion.div>

                                    </div>

                                </motion.div>

                                </div>

                                <div className="h-7 w-[2px] bg-gradient-to-b from-violet-500 to-transparent" />

                                <div className="mt-8 mb-5">

                                <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-600">

                                    Step {step.number}

                                </span>

                                </div>

                                <div className="group relative w-full min-h-[360px] rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl">

                                {/* Gradient Top */}

                                <div
                                    className={`absolute left-0 top-0 h-1.5 w-full rounded-t-3xl bg-gradient-to-r ${step.color}`}
                                />

                                <h3 className="text-[25px] font-bold text-slate-900">

                                    {step.title}

                                </h3>

                                <div className="my-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600" />

                                <p className="leading-8 text-slate-600">

                                    {step.description}

                                </p>

                                </div>
                                                                

                            </motion.div>

                        );

                        })}

                    </div>

                </div>
            </div>
        </section>
    )
}