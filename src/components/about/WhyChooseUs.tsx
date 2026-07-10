"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FlaskConical,
  Cpu,
  Lightbulb,
  Rocket,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Research Driven",
    description:
      "Every innovation begins with in-depth research, problem analysis, and evidence-based engineering to build reliable technologies.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: Cpu,
    title: "Multidisciplinary Engineering",
    description:
      "We integrate Artificial Intelligence, Automation, IoT, Healthcare, and Applied Research into practical engineering solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "Our focus is solving meaningful real-world challenges rather than building technology for technology's sake.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description:
      "Ideas quickly become working prototypes through iterative engineering, testing, and continuous improvement.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Globe2,
    title: "Future Ready",
    description:
      "We create scalable technologies designed for the industries and communities of tomorrow.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Innovation",
    description:
      "Safety, sustainability, accessibility, and social responsibility guide every solution we develop.",
    color: "from-violet-500 to-fuchsia-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

        {/* Subtle Grid Background */}
        <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
            backgroundImage: `
                "radial-gradient(#6366f1 1px, transparent 1px)",
                backgroundSize: "28px 28px",
            `,
            backgroundSize: "60px 60px",
            }}
        />

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[140px]" />

      {/* Background Blur */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30" />

        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20" />

      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 xl:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          <p className="text-indigo-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold leading-tight">

            <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .6 }}
                className="block text-slate-900"
            >
                Why Organizations
            </motion.span>

            <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                duration: .6,
                delay: .2
                }}
                className="block text-indigo-600"
            >
                Choose DLAXMI
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
            className="max-w-3xl mx-auto mt-8 text-xl text-slate-600 leading-9">
            Research-driven engineering, practical innovation, and multidisciplinary
            expertise enable us to develop intelligent technologies that create
            measurable impact across industries.
        </motion.p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 xl:gap-24  items-stretch">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  
                }}
                className="group relative h-full bg-white rounded-3xl p-8 shadow-lg border border-slate-100 overflow-hidden flex flex-col"
              >

                {/* Index No */}

                <span className="absolute top-6 right-6 text-6xl font-black text-slate-100 opacity-60">
                    {String(index + 1).padStart(2,"0")}
                </span>

                {/* Top Gradient */}

                <div
                  className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${feature.color}`}
                />

                {/* Icon */}

                <motion.div
                    animate={{
                    y: [0, -4, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        
                    }}
                    whileHover={{
                        rotate: 10,
                        scale: 1.15,
                    }}
                                        
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-8`}
                >

                  <Icon className="w-8 h-8" />

                </motion.div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900 mb-5">

                  {feature.title}

                </h3>

                {/* Divider */}

                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 mb-5" />

                {/* Description */}

                <p className="text-slate-600 leading-8">

                  {feature.description}

                </p>

            {/* View Innovations */}

            <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}>

                <button className="font-semibold text-indigo-600 flex items-center gap-2 group">

                     View Innovations

                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />

                </button>

            </motion.div>

            {/* Bottom Gradiant */}

            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`} />

              </motion.div>

            );

          })}

          

        </div>

      </div>
    </section>
  );
}