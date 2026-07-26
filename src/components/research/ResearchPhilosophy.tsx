"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  FlaskConical,
  ShieldCheck,
  Users,
  Leaf,
  Lightbulb,
} from "lucide-react";

const philosophy = [
  {
    icon: HeartHandshake,
    title: "Human Impact",
    text: "Technology should improve lives and solve meaningful real-world problems.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: FlaskConical,
    title: "Scientific Research",
    text: "Every innovation is guided by evidence, experimentation, and validation.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Ethical engineering, transparency, and responsibility remain central.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Innovation grows through multidisciplinary teamwork and partnerships.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Solutions are designed for long-term environmental and social value.",
    color: "from-lime-500 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    text: "Creative thinking transforms research into impactful technology.",
    color: "from-indigo-500 to-violet-500",
  },
];
export default function ResearchPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 xl:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
            Research Philosophy
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
            Innovation Begins
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              With Purpose
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Every technology we build is guided by scientific excellence,
            ethical responsibility, collaboration, sustainability, and
            meaningful human impact.
          </p>
        </motion.div>

        {/* Main Area */}
        <div className="relative mt-24 hidden min-h-[950px] items-center justify-center xl:flex">

            
          {/* ===== ORBIT BACKGROUND ===== */}
            <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none z-0">

              {/* Outer Orbit */}
              <div
                className="
                  absolute
                  w-[760px] h-[560px]
                  rounded-full
                  border border-dashed border-slate-200
                "
              />

              {/* Inner Orbit */}
              <div
                className="
                  absolute
                  w-[430px] h-[430px]
                  rounded-full
                  border border-dashed border-violet-200
                "
              />

              {/* Radial Connections */}
            <div className="absolute w-[430px] h-[430px]">

              {/* Top */}
              <div className="absolute left-1/2 top-0 h-1/2 border-l border-dashed border-violet-200"/>

              {/* Bottom */}
              <motion.div className="absolute left-1/2 top-1/2 h-1/2 border-l border-dashed border-orange-200" />

              {/* Upper Left */}
              <div
                className="absolute left-1/2 top-1/2 w-[215px] border-t border-dashed border-violet-200 origin-left"
                style={{ transform: "rotate(210deg)" }}
              />

              {/* Upper Right */}
              <div
                className="absolute left-1/2 top-1/2 w-[215px] border-t border-dashed border-sky-200 origin-left"
                style={{ transform: "rotate(330deg)" }}
              />

              {/* Lower Left */}
              <div
                className="absolute left-1/2 top-1/2 w-[215px] border-t border-dashed border-green-200 origin-left"
                style={{ transform: "rotate(150deg)" }}
              />

              {/* Lower Right */}
              <div
                className="absolute left-1/2 top-1/2 w-[215px] border-t border-dashed border-emerald-200 origin-left"
                style={{ transform: "rotate(30deg)" }}
              />

              {/* Connection Nodes */}

            {/* Top */}
            <motion.div className="absolute top-[-5px] left-1/2 -translate-x-1/2
                            w-3 h-3 rounded-full bg-violet-500
                            ring-4 ring-violet-100 shadow-sm"
                            animate={{
                              scale: [1, 1.35, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }} 
                            />

            {/* Upper Right */}
            <motion.div className="absolute top-[24%] right-[6%]
                            w-3 h-3 rounded-full bg-sky-500
                            ring-4 ring-sky-100 shadow-sm"
                            animate={{
                              scale: [1, 1.35, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.3,
                            }} 
                            />

            {/* Lower Right */}
            <motion.div className="absolute bottom-[24%] right-[6%]
                            w-3 h-3 rounded-full bg-emerald-500
                            ring-4 ring-emerald-100 shadow-sm"
                            animate={{
                              scale: [1, 1.35, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.6,
                            }} 
                            />

            {/* Bottom */}
            <motion.div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2
                            w-3 h-3 rounded-full bg-orange-500
                            ring-4 ring-orange-100 shadow-sm" 
                            animate={{
                              scale: [1, 1.35, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.9,
                            }} 
                            />

            {/* Lower Left */}
            <motion.div className="absolute bottom-[24%] left-[6%]
                            w-3 h-3 rounded-full bg-green-500
                            ring-4 ring-green-100 shadow-sm" 
                            animate={{
                              scale: [1, 1.35, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.2,
                            }} 
                            />

            {/* Upper Left */}
            <motion.div className="absolute top-[24%] left-[6%]
                            w-3 h-3 rounded-full bg-violet-500
                            ring-4 ring-violet-100 shadow-sm" 
                            animate={{
                              scale: [1, 1.35, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.5,
                            }} 
                            />

            {/* Outer Connector Lines */}

            {/* Top → Human Impact */}
            <div
              className="absolute left-1/2 top-[-70px]
                        h-[70px] border-l border-dashed border-violet-200"
            />

            {/* Bottom → Collaboration */}
            <div
              className="absolute left-1/2 bottom-[-70px]
                        h-[70px] border-l border-dashed border-orange-200"
            />

            {/* Upper Left → Open Innovation */}
            <div
              className="absolute top-[24%] left-[6%]
                        w-[150px] border-t border-dashed border-violet-200
                        origin-left"
              style={{ transform: "rotate(210deg)" }}
            />

            {/* Upper Right → Scientific Research */}
            <div
              className="absolute top-[24%] right-[6%]
                        w-[150px] border-t border-dashed border-sky-200
                        origin-right"
              style={{ transform: "rotate(150deg)" }}
            />

            {/* Lower Left → Sustainability */}
            <div
              className="absolute bottom-[24%] left-[6%]
                        w-[150px] border-t border-dashed border-green-200
                        origin-left"
              style={{ transform: "rotate(150deg)" }}
            />

            {/* Lower Right → Integrity */}
            <div
              className="absolute bottom-[24%] right-[6%]
                        w-[150px] border-t border-dashed border-emerald-200
                        origin-right"
              style={{ transform: "rotate(210deg)" }}
            />

            </div>

            </div>

          {/* Center Glow */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-fuchsia-500/20 blur-3xl"
          />

          {/* Center Circle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 flex h-52 w-52 items-center justify-center rounded-full border border-slate-200 bg-white shadow-2xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                Human
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Centered
                <br />
                Innovation
              </p>
            </div>
          </motion.div>
          {philosophy.map((item, index) => {
            const Icon = item.icon;

            const positions = [
              "top-0 left-1/6 -translate-x-1/2",     // Human Impact
              "top-32 right-10",                       // Scientific Research
              "bottom-32 right-10",                    // Integrity
              "bottom-0 left-1/6 -translate-x-1/2",  // Collaboration
              "bottom-32 left-10",                     // Sustainability
              "top-32 left-10",                        // Open Innovation
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className={`absolute ${positions[index]}`}
              >
                
        {/* Card */}
                <div className="group w-64 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-2xl">

                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>
              </motion.div>
            );
          })}

       

    </div>      {/* closes Main Area */}

        {/* ===== MOBILE & TABLET LAYOUT ===== */}
        <div className="mt-12 sm:mt-16 xl:hidden">

          {/* Center Philosophy */}
          <div className="mx-auto mb-8 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white text-center shadow-xl">
            <h3 className="text-xl font-bold text-slate-900">
              Human
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Centered
              <br />
              Innovation
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {philosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.color}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}