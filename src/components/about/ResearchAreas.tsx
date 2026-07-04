"use client";
import { motion } from "framer-motion";

import {
  Brain,
  Cpu,
  HeartPulse,
  Shield,
  Factory,
  ArrowRight,
} from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    badge: "AI & Machine Learning",
    title: "Artificial Intelligence",
    color: "from-violet-500 to-indigo-500",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    description:
      "Building intelligent systems that learn, analyze, and make decisions using machine learning, computer vision, predictive analytics, and behavior understanding.",
    projects: [
      "Human Behaviour Understanding Engine",
      "AI Risk Prediction",
      "Computer Vision",
    ],
  },
  {
    icon: Factory,
    badge: "Industrial Automation",
    title: "Automation",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description:
      "Developing automation systems that improve industrial efficiency, robotics, embedded engineering, and intelligent manufacturing.",
    projects: [
      "Humane Fish Processing",
      "Industrial Automation",
      "Smart Process Control",
    ],
  },
  {
    icon: Cpu,
    badge: "Connected Systems",
    title: "Internet of Things",
    color: "from-cyan-500 to-sky-500",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    description:
      "Creating connected devices that collect, monitor, and analyze real-time information for industries, healthcare, and safety.",
    projects: [
      "Smart Safety Devices",
      "Remote Monitoring",
      "Sensor Networks",
    ],
  },
  {
    icon: HeartPulse,
    badge: "Healthcare Innovation",
    title: "Healthcare Technology",
    color: "from-red-400 to-pink-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    description:
      "Designing intelligent assistive technologies that improve rehabilitation, accessibility, and quality of life.",
    projects: [
      "MR Patient Assistance",
      "CP Support System",
      "Smart Rehabilitation",
    ],
  },
  {
    icon: Shield,
    badge: "Social Innovation",
    title: "Women's Safety",
    color: "from-fuchsia-500 to-purple-600",
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
    description:
      "Developing AI-powered personal safety technologies using wearable devices, behavior analysis, and emergency response systems.",
    projects: [
      "Auto Protective System",
      "Behaviour Detection",
      "Smart Rescue Network",
    ],
  },
  {
    icon: Factory,
    badge: "Food Engineering",
    title: "Food Technology",
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    description:
      "Engineering humane food processing systems through automation, AI inspection, sustainable manufacturing, and intelligent engineering.",
    projects: [
      "Humane Fish Slaughter",
      "AI Inspection",
      "Food Automation",
    ],
  },
];

export default function ResearchAreas() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="max-w-screen-2xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 uppercase tracking-[0.3em] text-sm font-semibold">
            Research Domains
          </span>

          <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:.8}} viewport={{once:true}}>
            Engineering Across
            <br />
            <span className="text-indigo-600">
              Multiple Industries
            </span>
          </motion.h2>

          <p className="mt-12 text-lg text-slate-600 leading-8">
            DLAXMI INFOTECH LLP combines multidisciplinary research,
            engineering, and innovation to create intelligent technologies
            that solve meaningful real-world challenges.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">

          {researchAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(79,70,229,0.18)] transition-all duration-300 overflow-hidden"
              >
                {/* Top Gradient */}

                <div
                  className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color}`}
                />

                {/* Icon */}

                <motion.div
                  whileHover={{
                  rotate: 10,
                  scale: 1.0
                  }}
                  transition={{ duration: .3 }}
                  >
                  <Icon className={`w-8 h-8 ${item.iconColor}`} />
                </motion.div>

                <div className="mb-5"/>

                {/* Badge */}

                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold tracking-wide text-slate-600 mb-4">
                  {item.badge}
                </span>

                {/* Title */}

                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="text-slate-600 leading-8 mb-6">
                  {item.description}
                </p>

                {/* Projects */}

                <div className="mb-8">
                  <p className="font-semibold text-slate-900 mb-3">
                    Current Projects
                  </p>

                  <ul className="space-y-2">

                    {item.projects.map((project, i) => (
                      <li
                        key={i}
                        className="flex items-center text-slate-600"
                      >
                        <span className="text-indigo-600 mr-3">✓</span>
                        {project}
                      </li>
                    ))}

                  </ul>
                </div>

                {/* Button */}

                <span className="flex items-center gap-2 text-indigo-600 font-semibold group">
                  Explore Research
                  <ArrowRight className="w-5 h-5 transition-transform  group-hover:translate-x-2" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}