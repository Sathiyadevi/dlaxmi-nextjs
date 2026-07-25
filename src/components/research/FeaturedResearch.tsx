"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Eye,
  PersonStanding,
  ScanFace,
  ShieldCheck,
  Radar,
  MapPin,
  Radio,
  Gamepad2,
  Siren,
  Accessibility,
  HeartPulse,
  Hand,
  MessageCircle,
  Fish,
  Waves,
  ScanLine,
  Gauge,
  Workflow,
  Factory,
  Droplets,
  Sparkles,
  PackageCheck,
  Cog,
} from "lucide-react";
const projects = [
  {
    id: "hbue",
    code: "HBUE",
    title: "Human Behaviour Understanding Engine",
    description:
      "An AI-powered behaviour understanding platform capable of analysing facial expressions, body movements, posture, and behavioural patterns for healthcare, women's safety, and intelligent automation.",
    tags: [
      "Artificial Intelligence",
      "Computer Vision",
      "Behaviour Analysis",
      "Human-Centered AI",
    ],
    researchArea: "Intelligent Systems",
    focus: "Human Behaviour Understanding",
  },

  {
    id: "aps",
    code: "APS",
    title: "Auto Protective System",
    description:
      "A technology-driven women's safety ecosystem integrating preventive intelligence, protective devices, emergency communication, rescue coordination, and interactive self-protection skill training.",
    tags: [
      "Women's Safety",
      "Behaviour Intelligence",
      "Wearable Technology",
      "Rescue Systems",
      "Skill Training",
    ],
    researchArea: "Safety Technology",
    focus: "Prevention, Protection & Rescue",
  },

  {
    id: "assistive",
    code: "ASSISTIVE TECHNOLOGY",
    title: "Assistive Technology for Intellectual Disabilities & CP",
    description:
      "Developing intelligent assistive technologies to support communication, behaviour understanding, movement monitoring, and daily care for people with intellectual disabilities and cerebral palsy.",
    tags: [
      "Assistive Technology",
      "Healthcare Engineering",
      "Behaviour Analysis",
      "Smart Devices",
    ],
    researchArea: "Healthcare Engineering",
    focus: "Assistive & Support Technologies",
  },

  {
    id: "fish",
    code: "HUMANE PROCESSING",
    title: "Humane Fish Processing Technology",
    description:
      "Researching engineering and intelligent monitoring approaches for humane fish handling, stunning, processing, and welfare-conscious automation.",
    tags: [
      "Fish Welfare",
      "Automation",
      "Computer Vision",
      "Food Technology",
    ],
    researchArea: "Food Technology",
    focus: "Humane Processing",
  },

  {
    id: "meat",
    code: "HYGIENIC PROCESSING",
    title: "Hygienic Meat Processing System",
    description:
      "Developing automated and hygienic meat processing technologies designed to reduce manual handling, improve sanitation, and support safer and more efficient processing.",
    tags: [
      "Food Technology",
      "Automation",
      "Hygiene",
      "Mechanical Engineering",
    ],
    researchArea: "Food Processing Engineering",
    focus: "Hygienic Automation",
  },
];
type Project = (typeof projects)[number];

{/* ================= HBUEVisual ================= */}

function HBUEVisual() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        w-full
        max-w-[270px]
        overflow-hidden
        rounded-[30px]
        border border-slate-200
        bg-white
        p-4
        shadow-[0_25px_70px_rgba(99,102,241,0.12)]
        sm:max-w-[400px]
        sm:p-6
        lg:max-w-[470px]
        lg:p-7
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-100 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-100 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 sm:h-11 sm:w-11">
            <BrainCircuit className="h-5 w-5 text-violet-600 sm:h-6 sm:w-6" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wide text-slate-900 sm:text-sm">
              HBUE
            </p>

            <p className="text-[9px] text-slate-500 sm:text-[10px]">
              Behaviour Intelligence
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-semibold text-emerald-600 sm:text-[10px]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          ANALYSING
        </div>
      </div>

      {/* Scanner */}
      <div
        className="
          relative
          mt-5
          flex
          h-[180px]
          items-center
          justify-center
          overflow-hidden
          rounded-[24px]
          border border-violet-100
          bg-gradient-to-br
          from-violet-50
          via-white
          to-cyan-50
          sm:mt-6
          sm:h-[250px]
          lg:h-[300px]
        "
      >
        {/* Scanner corners */}
        <div className="absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-violet-500 sm:h-10 sm:w-10" />

        <div className="absolute right-5 top-5 h-8 w-8 border-r-2 border-t-2 border-violet-500 sm:h-10 sm:w-10" />

        <div className="absolute bottom-5 left-5 h-8 w-8 border-b-2 border-l-2 border-cyan-500 sm:h-10 sm:w-10" />

        <div className="absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-cyan-500 sm:h-10 sm:w-10" />

        {/* Analysis ring */}
        <div
          className="
            absolute
            h-[145px] w-[145px]
            rounded-full
            border border-dashed border-violet-200
            sm:h-[200px] sm:w-[200px]
            lg:h-[225px] lg:w-[225px]
          "
        />

        {/* Person */}
        <div
          className="
            relative
            flex
            h-24 w-24
            items-center justify-center
            rounded-[28px]
            border border-violet-100
            bg-white
            shadow-[0_15px_40px_rgba(99,102,241,0.15)]
            sm:h-32 sm:w-32
            lg:h-36 lg:w-36
          "
        >
          <PersonStanding className="h-14 w-14 text-violet-600 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />

          {/* Face detector */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -right-4 top-4
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              border border-violet-100
              bg-white shadow-md
              sm:h-10 sm:w-10
            "
          >
            <ScanFace className="h-5 w-5 text-violet-600" />
          </motion.div>

          {/* Activity detector */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -left-4 bottom-5
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              border border-cyan-100
              bg-white shadow-md
              sm:h-10 sm:w-10
            "
          >
            <Activity className="h-5 w-5 text-cyan-600" />
          </motion.div>
        </div>

        {/* Scan line */}
        <motion.div
          animate={{
            y: [-70, 70, -70],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[12%] right-[12%] top-1/2
            h-px
            bg-gradient-to-r
            from-transparent
            via-violet-500
            to-transparent
            shadow-[0_0_12px_rgba(139,92,246,0.7)]
          "
        />
      </div>

      {/* Indicators */}
      <div className="relative mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <ScanFace className="mx-auto h-4 w-4 text-violet-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Face
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Activity className="mx-auto h-4 w-4 text-cyan-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Pose
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Eye className="mx-auto h-4 w-4 text-indigo-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Behaviour
          </p>
        </div>
      </div>
    </motion.div>
  );
}

{/* ================= APSVisual ================= */}

function APSVisual() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        w-full
        max-w-[270px]
        overflow-hidden
        rounded-[30px]
        border border-slate-200
        bg-white
        p-4
        shadow-[0_25px_70px_rgba(236,72,153,0.10)]
        sm:max-w-[400px]
        sm:p-6
        lg:max-w-[470px]
        lg:p-7
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-100 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-violet-100 blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100 sm:h-11 sm:w-11">
            <ShieldCheck className="h-5 w-5 text-fuchsia-600 sm:h-6 sm:w-6" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wide text-slate-900 sm:text-sm">
              APS
            </p>

            <p className="text-[9px] text-slate-500 sm:text-[10px]">
              Intelligent Safety Ecosystem
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-semibold text-emerald-600 sm:text-[10px]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          ACTIVE
        </div>
      </div>

      {/* ================= SYSTEM MAP ================= */}
      <div
        className="
          relative
          mt-5
          min-h-[230px]
          overflow-hidden
          rounded-[24px]
          border border-fuchsia-100
          bg-gradient-to-br
          from-fuchsia-50
          via-white
          to-violet-50
          p-4
          sm:mt-6
          sm:min-h-[280px]
          sm:p-5
          lg:min-h-[300px]
        "
      >
        {/* Decorative scanner corners */}
        <div className="absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-fuchsia-400" />
        <div className="absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-fuchsia-400" />
        <div className="absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-violet-400" />
        <div className="absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-violet-400" />

        {/* Main safety flow */}
        <div className="relative z-10 flex h-full min-h-[198px] flex-col justify-center sm:min-h-[238px] lg:min-h-[258px]">

          {/* PREVENT */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto flex w-[82%] items-center gap-3 rounded-2xl border border-fuchsia-100 bg-white/90 p-3 shadow-sm"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100">
              <Radar className="h-5 w-5 text-fuchsia-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-fuchsia-600">
                Prevent
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                Behaviour-based risk awareness
              </p>
            </div>
          </motion.div>

          {/* Connection */}
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-fuchsia-300 to-violet-300" />

          {/* PROTECT + RESCUE */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">

            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-violet-100 bg-white/90 p-3 text-center shadow-sm"
            >
              <ShieldCheck className="mx-auto h-5 w-5 text-violet-600" />

              <p className="mt-2 text-[10px] font-bold text-slate-800">
                Protect
              </p>

              <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                Protective device
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-cyan-100 bg-white/90 p-3 text-center shadow-sm"
            >
              <Siren className="mx-auto h-5 w-5 text-cyan-600" />

              <p className="mt-2 text-[10px] font-bold text-slate-800">
                Rescue
              </p>

              <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                Emergency response
              </p>
            </motion.div>

          </div>

          {/* Connection */}
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-violet-300 to-indigo-300" />

          {/* SKILL TRAINING */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto flex w-[82%] items-center gap-3 rounded-2xl border border-indigo-100 bg-white/90 p-3 shadow-sm"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
              <Gamepad2 className="h-5 w-5 text-indigo-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-indigo-600">
                Skill Training
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                Interactive self-protection learning
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= SYSTEM MODULES ================= */}
      <div className="relative mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">

        {/* Location */}
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <MapPin className="mx-auto h-4 w-4 text-fuchsia-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Location
          </p>
        </div>

        {/* Communication */}
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Radio className="mx-auto h-4 w-4 text-violet-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Connect
          </p>
        </div>

        {/* Training */}
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Gamepad2 className="mx-auto h-4 w-4 text-indigo-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Training
          </p>
        </div>

      </div>
    </motion.div>
  );
}

{/* ================= AssistiveVisual ================= */}
function AssistiveVisual() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        w-full
        max-w-[270px]
        overflow-hidden
        rounded-[30px]
        border border-slate-200
        bg-white
        p-4
        shadow-[0_25px_70px_rgba(6,182,212,0.10)]
        sm:max-w-[400px]
        sm:p-6
        lg:max-w-[470px]
        lg:p-7
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-100 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-100 blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 sm:h-11 sm:w-11">
            <Accessibility className="h-5 w-5 text-cyan-600 sm:h-6 sm:w-6" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wide text-slate-900 sm:text-sm">
              ASSIST
            </p>

            <p className="text-[9px] text-slate-500 sm:text-[10px]">
              Intelligent Support System
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-semibold text-emerald-600 sm:text-[10px]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          MONITORING
        </div>
      </div>

      {/* ================= MONITORING AREA ================= */}
      <div
        className="
          relative
          mt-5
          flex
          min-h-[230px]
          items-center
          justify-center
          overflow-hidden
          rounded-[24px]
          border border-cyan-100
          bg-gradient-to-br
          from-cyan-50
          via-white
          to-blue-50
          p-4
          sm:mt-6
          sm:min-h-[280px]
          lg:min-h-[300px]
        "
      >
        {/* Technical corners */}
        <div className="absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-blue-400" />
        <div className="absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-blue-400" />

        {/* Central user */}
        <div
          className="
            relative
            flex h-28 w-28
            items-center justify-center
            rounded-[28px]
            border border-cyan-100
            bg-white
            shadow-[0_15px_40px_rgba(6,182,212,0.15)]
            sm:h-36 sm:w-36
          "
        >
          <Accessibility className="h-16 w-16 text-cyan-600 sm:h-20 sm:w-20" />

          {/* Behaviour */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -right-5 top-2
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-violet-100
              bg-white shadow-md
            "
          >
            <BrainCircuit className="h-5 w-5 text-violet-600" />
          </motion.div>

          {/* Movement */}
          <motion.div
            animate={{ x: [0, -3, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -left-5 top-1/2
              flex h-10 w-10
              -translate-y-1/2
              items-center justify-center
              rounded-xl
              border border-blue-100
              bg-white shadow-md
            "
          >
            <Activity className="h-5 w-5 text-blue-600" />
          </motion.div>

          {/* Health */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -right-4 bottom-1
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-rose-100
              bg-white shadow-md
            "
          >
            <HeartPulse className="h-5 w-5 text-rose-500" />
          </motion.div>
        </div>

        {/* Sensor ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            h-[175px] w-[175px]
            rounded-full
            border border-dashed border-cyan-200
            sm:h-[220px] sm:w-[220px]
          "
        />
      </div>

      {/* ================= SUPPORT MODULES ================= */}
      <div className="relative mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Activity className="mx-auto h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Movement
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <MessageCircle className="mx-auto h-4 w-4 text-cyan-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Communicate
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Hand className="mx-auto h-4 w-4 text-violet-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Support
          </p>
        </div>

      </div>
    </motion.div>
  );
}

{/* ================= FishProcessingVisual ================= */}

function FishProcessingVisual() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        w-full
        max-w-[270px]
        overflow-hidden
        rounded-[30px]
        border border-slate-200
        bg-white
        p-4
        shadow-[0_25px_70px_rgba(14,165,233,0.10)]
        sm:max-w-[400px]
        sm:p-6
        lg:max-w-[470px]
        lg:p-7
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-100 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-sky-100 blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 sm:h-11 sm:w-11">
            <Fish className="h-5 w-5 text-cyan-600 sm:h-6 sm:w-6" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wide text-slate-900 sm:text-sm">
              HUMANE PROCESSING
            </p>

            <p className="text-[9px] text-slate-500 sm:text-[10px]">
              Welfare-Aware Engineering
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-semibold text-emerald-600 sm:text-[10px]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          MONITORING
        </div>
      </div>

      {/* ================= PROCESS AREA ================= */}
      <div
        className="
          relative
          mt-5
          min-h-[230px]
          overflow-hidden
          rounded-[24px]
          border border-cyan-100
          bg-gradient-to-br
          from-cyan-50
          via-white
          to-sky-50
          p-4
          sm:mt-6
          sm:min-h-[280px]
          sm:p-5
          lg:min-h-[300px]
        "
      >
        {/* Technical corners */}
        <div className="absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-cyan-400" />

        <div className="absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-cyan-400" />

        <div className="absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-sky-400" />

        <div className="absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-sky-400" />

        {/* Main process */}
        <div className="relative z-10 flex h-full min-h-[198px] flex-col justify-center sm:min-h-[238px] lg:min-h-[258px]">

          {/* Fish handling */}
          <motion.div
            animate={{ x: [-3, 3, -3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              flex w-[82%]
              items-center gap-3
              rounded-2xl
              border border-cyan-100
              bg-white/90
              p-3
              shadow-sm
            "
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-100">
              <Fish className="h-5 w-5 text-cyan-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-600">
                Gentle Handling
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                Controlled fish movement
              </p>
            </div>
          </motion.div>

          {/* Connection */}
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-cyan-300 to-sky-300" />

          {/* Monitoring + stunning */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">

            <motion.div
              whileHover={{ y: -2 }}
              className="
                rounded-2xl
                border border-sky-100
                bg-white/90
                p-3
                text-center
                shadow-sm
              "
            >
              <ScanLine className="mx-auto h-5 w-5 text-sky-600" />

              <p className="mt-2 text-[10px] font-bold text-slate-800">
                Monitor
              </p>

              <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                Condition assessment
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="
                rounded-2xl
                border border-indigo-100
                bg-white/90
                p-3
                text-center
                shadow-sm
              "
            >
              <Gauge className="mx-auto h-5 w-5 text-indigo-600" />

              <p className="mt-2 text-[10px] font-bold text-slate-800">
                Stunning
              </p>

              <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                Controlled intervention
              </p>
            </motion.div>

          </div>

          {/* Connection */}
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-sky-300 to-blue-300" />

          {/* Processing */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              flex w-[82%]
              items-center gap-3
              rounded-2xl
              border border-blue-100
              bg-white/90
              p-3
              shadow-sm
            "
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <Workflow className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-blue-600">
                Processing
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                Automated processing flow
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= PROCESS MODULES ================= */}
      <div className="relative mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Waves className="mx-auto h-4 w-4 text-cyan-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Handling
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <ScanLine className="mx-auto h-4 w-4 text-sky-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Sensing
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Workflow className="mx-auto h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Automation
          </p>
        </div>

      </div>
    </motion.div>
  );
}
{/* ================= MeatProcessingVisual ================= */}

function MeatProcessingVisual() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        w-full
        max-w-[270px]
        overflow-hidden
        rounded-[30px]
        border border-slate-200
        bg-white
        p-4
        shadow-[0_25px_70px_rgba(16,185,129,0.10)]
        sm:max-w-[400px]
        sm:p-6
        lg:max-w-[470px]
        lg:p-7
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-100 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-100 blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 sm:h-11 sm:w-11">
            <Factory className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wide text-slate-900 sm:text-sm">
              HYGIENIC PROCESSING
            </p>

            <p className="text-[9px] text-slate-500 sm:text-[10px]">
              Automated Food Engineering
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-semibold text-emerald-600 sm:text-[10px]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          PROCESSING
        </div>
      </div>

      {/* ================= PROCESS AREA ================= */}
      <div
        className="
          relative
          mt-5
          min-h-[230px]
          overflow-hidden
          rounded-[24px]
          border border-emerald-100
          bg-gradient-to-br
          from-emerald-50
          via-white
          to-cyan-50
          p-4
          sm:mt-6
          sm:min-h-[280px]
          sm:p-5
          lg:min-h-[300px]
        "
      >
        {/* Technical corners */}
        <div className="absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-emerald-400" />

        <div className="absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-emerald-400" />

        <div className="absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-cyan-400" />

        <div className="absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-cyan-400" />

        <div className="relative z-10 flex h-full min-h-[198px] flex-col justify-center sm:min-h-[238px] lg:min-h-[258px]">

          {/* CONTROLLED HANDLING */}
          <motion.div
            animate={{ x: [-3, 3, -3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              flex w-[82%]
              items-center gap-3
              rounded-2xl
              border border-emerald-100
              bg-white/90
              p-3
              shadow-sm
            "
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
              <Workflow className="h-5 w-5 text-emerald-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-600">
                Controlled Handling
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                Reduced manual contact
              </p>
            </div>
          </motion.div>

          {/* Connection */}
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-emerald-300 to-cyan-300" />

          {/* HYGIENE + AUTOMATION */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">

            <motion.div
              whileHover={{ y: -2 }}
              className="
                rounded-2xl
                border border-cyan-100
                bg-white/90
                p-3
                text-center
                shadow-sm
              "
            >
              <Droplets className="mx-auto h-5 w-5 text-cyan-600" />

              <p className="mt-2 text-[10px] font-bold text-slate-800">
                Hygiene
              </p>

              <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                Cleaning & sanitation
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="
                rounded-2xl
                border border-violet-100
                bg-white/90
                p-3
                text-center
                shadow-sm
              "
            >
              <Cog className="mx-auto h-5 w-5 text-violet-600" />

              <p className="mt-2 text-[10px] font-bold text-slate-800">
                Automation
              </p>

              <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                Controlled processing
              </p>
            </motion.div>

          </div>

          {/* Connection */}
          <div className="mx-auto h-4 w-px bg-gradient-to-b from-cyan-300 to-blue-300" />

          {/* OUTPUT */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              flex w-[82%]
              items-center gap-3
              rounded-2xl
              border border-blue-100
              bg-white/90
              p-3
              shadow-sm
            "
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <PackageCheck className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-blue-600">
                Hygienic Output
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                Safer processing workflow
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= PROCESS MODULES ================= */}
      <div className="relative mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Sparkles className="mx-auto h-4 w-4 text-emerald-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Hygiene
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <Cog className="mx-auto h-4 w-4 text-violet-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Automation
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center sm:p-3">
          <PackageCheck className="mx-auto h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />

          <p className="mt-1.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
            Output
          </p>
        </div>

      </div>
    </motion.div>
  );
}

{/* ================= ProjectVisual ================= */}

function ProjectVisual({ project }: { project: Project }) {
  switch (project.id) {
    case "hbue":
      return <HBUEVisual />;

    case "aps":
      return <APSVisual />;

    case "assistive":
      return <AssistiveVisual/>

    case "fish":
      return <FishProcessingVisual/>

    case "meat":
      return <MeatProcessingVisual/>

    default:
      return null;
  }
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="
        grid grid-cols-1
        items-center
        gap-4
        rounded-[24px]
        border border-slate-200
        bg-white
        p-4
        shadow-[0_20px_70px_rgba(15,23,42,0.06)]
        sm:gap-10
        sm:rounded-[28px]
        sm:p-8
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-14
        lg:p-12
        xl:gap-20
        xl:p-14
      "
    >
      {/* Visual */}
      <div
        className={`
          flex w-full items-center justify-center
          ${reverse ? "lg:order-2" : "lg:order-1"}
        `}
      >
        <ProjectVisual project={project} />
      </div>

      {/* Content */}
      <div
        className={`
          w-full
          ${reverse ? "lg:order-1" : "lg:order-2"}
        `}
      >
        <div className="mb-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600 sm:text-sm">
          {project.code}
        </div>

        <h3
          className="
            text-[27px]
            font-bold
            leading-[1.08]
            text-slate-950
            sm:text-4xl
            lg:text-[46px]
          "
        >
          {project.title}
        </h3>

        <div className="my-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" />

        <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border border-slate-200
                bg-slate-50
                px-4 py-2
                text-xs font-medium
                text-slate-700
                sm:text-sm
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-100 pt-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Research Area
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-800">
              {project.researchArea}
            </p>
          </div>

          <div className="hidden h-10 w-px bg-slate-200 sm:block" />

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Focus
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-800">
              {project.focus}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedResearch() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* ================= BACKGROUND ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ==================================================
            SECTION HEADING
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-5xl text-center sm:mb-16 lg:mb-20"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 sm:text-sm">
            Featured Research
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Transforming{" "}
            <span className="text-violet-600">Ideas</span>
            {" "}into{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Engineering Solutions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our flagship research projects combine Artificial Intelligence,
            Engineering, Automation, Healthcare, and emerging technologies to
            solve complex real-world challenges.
          </p>
        </motion.div>

        {/* ================= FEATURED PROJECTS ================= */}

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
                

      </div>
    </section>
  );
}