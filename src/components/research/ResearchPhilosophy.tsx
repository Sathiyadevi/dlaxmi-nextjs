"use client";

import { motion } from "framer-motion";
import {
  Users,
  FlaskConical,
  Cpu,
  Leaf,
} from "lucide-react";

const philosophy = [
  {
    icon: Users,
    title: "Human-Centered Research",
    description:
      "Every innovation begins by understanding real-world challenges, user needs, and societal impact before developing solutions.",
    color: "from-indigo-600 to-violet-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: FlaskConical,
    title: "Scientific Method",
    description:
      "Our research follows structured investigation, experimentation, validation, and continuous improvement to ensure reliable outcomes.",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Cpu,
    title: "Engineering Excellence",
    description:
      "We combine Artificial Intelligence, Automation, IoT, Healthcare, and Applied Engineering into integrated research solutions.",
    color: "from-violet-600 to-fuchsia-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Leaf,
    title: "Sustainable Innovation",
    description:
      "Every technology is designed to be ethical, scalable, sustainable, and capable of creating long-term social impact.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function ResearchPhilosophy() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <p className="text-indigo-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Research Philosophy
          </p>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Engineering Begins
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              With Understanding
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-600 leading-9">
            At DLAXMI INFOTECH LLP, research is driven by scientific thinking,
            multidisciplinary engineering, and a commitment to solving
            meaningful real-world problems through innovation.
          </p>

        </motion.div>

        </div>

        {/* Two Columns */}

        <div className="mt-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        
        {/* Left Illustration */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >

          <div className="relative flex h-[420px] w-[420px] lg:h-[480px] lg:w-[480px] items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 via-white to-cyan-100 shadow-2xl">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[380px] w-[380px] lg:h-[420px] lg:w-[420px] rounded-full border border-indigo-200"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[280px] w-[280px] lg:h-[320px] lg:w-[320px] rounded-full border border-cyan-300"
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
            >
                
              <div className="h-28 w-28 rounded-full bg-white shadow-2xl flex items-center justify-center">
                    <FlaskConical className="h-24 w-24 text-indigo-600" />
              </div>
             
            </motion.div>

             <div className="absolute bottom-10 px-5 py-2 rounded-full bg-indigo  text-indigo-600 font-semibold">
                 Research Philosophy
            </div>

          </div>

        </motion.div>

        {/* Right Content */}

        <div className="space-y-6">

          {philosophy.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(99,102,241,0.18)",
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-10 shadow-lg">

                {/* Gradient Top */}

                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${item.color}`}
                />

                 <span className="absolute top-6 right-8 text-6xl font-extrabold text-slate-100">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex gap-6">

                  {/* Icon */}

                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
                  >

                    <Icon className={`h-8 w-8 ${item.iconColor}`} />

                  </motion.div>

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <div className="my-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600" />

                    <p className="leading-8 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>  {/* ✅ End Two-Columns */}

      </div>    {/* ✅ Close max-w-7xl container */}

    </section>
  );
}   
       