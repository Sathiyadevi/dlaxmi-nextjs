"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Accessibility,
  Fish,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    icon: BrainCircuit,
    title: "Human Behaviour Understanding Engine",
    short: "HBUE",
    description:
      "An AI-powered behaviour understanding platform capable of analysing facial expressions, body movements, posture, and behavioural patterns for healthcare, women’s safety, and intelligent automation.",

    technologies: [
      "Artificial Intelligence",
      "Computer Vision",
      "Behaviour Analysis",
      "MediaPipe",
      "OpenCV",
    ],

    color: "from-violet-600 to-fuchsia-600",
  },

  {
    icon: ShieldCheck,
    title: "Auto Protective System",
    short: "APS",
    description:
      "A next-generation women’s safety ecosystem integrating wearable devices, behaviour analysis, emergency communication, GPS tracking, and intelligent rescue coordination.",

    technologies: [
      "IoT",
      "Wearables",
      "AI",
      "GPS",
      "Safety Systems",
    ],

    color: "from-cyan-500 to-blue-600",
  },

  {
    icon: Accessibility,
    title: "Assistive Technology for MR & CP",
    short: "Healthcare",

    description:
      "Engineering assistive technologies that improve independence, monitoring, and quality of life for individuals with intellectual disabilities and cerebral palsy.",

    technologies: [
      "Healthcare",
      "Computer Vision",
      "AI",
      "Accessibility",
      "Assistive Devices",
    ],

    color: "from-green-500 to-emerald-600",
  },

  {
    icon: Fish,
    title: "Humane Fish Processing Technology",
    short: "Food Technology",

    description:
      "Developing intelligent engineering systems for humane fish handling, automated processing, welfare monitoring, and sustainable food technology.",

    technologies: [
      "Automation",
      "Food Technology",
      "Robotics",
      "Machine Vision",
      "AI",
    ],

    color: "from-orange-500 to-red-500",
  },
];

export default function FeaturedResearch() {
    return(
        <section className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
            initial={{ opacity:0,y:40 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="text-center mb-28"
        >

                    <p className="uppercase tracking-[0.35em] text-sm font-semibold text-violet-600 mb-4">

                        Featured Research

                    </p>

                    <h2 className="text-5xl font-bold text-slate-900">

                        Transforming

                        <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">

                            {" "}Ideas{" "}

                        </span>

                        into

                        <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">

                            {" "}Engineering Solutions

                        </span>

                    </h2>

                    <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-600">

                        Our flagship research projects combine Artificial Intelligence,
                        Engineering, Automation, Healthcare, and emerging technologies
                        to solve complex real-world challenges.

                    </p>

                </motion.div>

                <div className="space-y-36">

                    {projects.map((project, index) => {

                        const Icon = project.icon;

                        const reverse = index % 2 === 1;

                        return (

                        <motion.div
                            key={index}
                            initial={{
                            opacity: 0,
                            y: 80,
                            }}
                            whileInView={{
                            opacity: 1,
                            y: 0,
                            }}
                            whileHover={{
                            y: -8,
                            scale: 1.02,
                            }}
                            viewport={{ once: true }}
                            transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            }}
                            className={`grid lg:grid-cols-2 gap-20 items-center ${
                            reverse ? "lg:[&>*:first-child]:order-2" : ""
                            }`}
                        >

                            {/* Illustration */}

                            <div className="flex justify-center">

                            <div className="relative h-[420px] w-[420px] flex items-center justify-center">

                                {/* Outer Ring */}

                                <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className={`absolute h-[360px] w-[360px] rounded-full border-2 bg-gradient-to-r ${project.color} opacity-20`}
                                />

                                {/* Middle Ring */}

                                <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute h-[280px] w-[280px] rounded-full border border-cyan-300"
                                />

                                {/* Icon */}

                                <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl"
                                >

                                <Icon className="h-16 w-16 text-violet-600" />

                                </motion.div>

                            </div>

                            </div>

                            {/* Content */}

                            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur-sm">

                            {/* Background Glow */}
                                <div
                                    className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-r ${project.color} opacity-10 blur-3xl`}
                                />

                                <div className="relative">

                            <span className="inline-block rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-600">

                                {project.short}

                            </span>

                            <h3 className="mt-6 text-5xl font-bold text-slate-900 leading-tight">

                                {project.title}

                            </h3>

                            <div className={`mt-5 h-1 w-24 rounded-full bg-gradient-to-r ${project.color}`} />

                            <p className="mt-8 text-lg leading-9 text-slate-600">

                                {project.description}

                            </p>

                            {/* Technology Tags */}

                                <div className="mt-8 flex flex-wrap gap-3">

                                {project.technologies.map((tech) => (

                                    <span
                                    key={tech}
                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-300 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                                    >
                                    {tech}
                                    </span>

                                ))}

                                </div>

                                <motion.button
                                whileHover={{ x: 8 }}
                                transition={{ duration: 0.3 }}
                                className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-violet-600 hover:text-violet-700"
                                >

                                    Learn More

                                    <ArrowRight className="h-5 w-5" />

                                </motion.button>

                            </div>

                            </div>

                        </motion.div>

                        );

                    })}

                </div>
            </div>
        </section>
    )
}