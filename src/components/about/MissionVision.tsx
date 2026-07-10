"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 xl:px-16">

        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Our Purpose
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Mission & Vision
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Guided by research, innovation, and engineering excellence,
            we develop technologies that solve real-world challenges
            and create lasting impact for society.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">

          {/* Mission Card */}

          <div
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            lg:p-12
            min-h-[620px]
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-indigo-300
            hover:shadow-[0_20px_40px_rgba(79,70,229,0.10)]
            "
          >

            <div className="absolute left-0 top-0 h-full w-2 bg-indigo-600"></div>

            <div className="flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">

              <Target className="h-8 w-8" />

            </div>
            <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                Research Driven
            </span>

            <h3 className="mt-8 text-4xl lg:text-5xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-3 text-lg font-medium text-indigo-600">
              Building technologies that solve meaningful problems.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Our mission is to transform innovative ideas into practical,
              research-driven engineering solutions through Artificial
              Intelligence, Automation, IoT, Healthcare, and Applied Research.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Every project is guided by deep research, rapid prototyping,
              intelligent design, and continuous innovation to create products
              that improve industries and people's lives.
            </p>

          </div>

          {/* Vision Card */}

          <div
           className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            lg:p-12
            min-h-[620px]
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-violet-300
            hover:shadow-[0_20px_40px_rgba(79,70,229,0.10)]
            "
          >

            <div className="absolute left-0 top-0 h-full w-2 bg-purple-600"></div>

            <div className="flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">

              <Eye className="h-8 w-8" />

            </div>
            <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                Research Driven
            </span>

            <h3 className="mt-8 text-4xl lg:text-5xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-3 text-lg font-medium text-purple-600">
              Becoming a globally recognized innovation laboratory.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              We envision DLAXMI INFOTECH LLP as a leading research and
              engineering organization that develops intelligent technologies
              for healthcare, automation, safety, sustainability, and future
              industries.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              By combining scientific research with engineering excellence,
              we aim to create innovative products that generate long-term
              social impact and improve quality of life worldwide.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}