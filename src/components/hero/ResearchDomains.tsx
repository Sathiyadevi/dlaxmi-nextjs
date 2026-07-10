'use client';
import { motion } from 'framer-motion';

const domains = [
  {
    title: "Applied Research",
    description:
      "Turning real-world problems into research-backed engineering solutions.",
  },
  {
    title: "Smart Systems",
    description:
      "Automation, IoT, and intelligent control platforms for modern industries.",
  },
  {
    title: "Social Impact",
    description:
      "Technology designed to improve safety, accessibility, and quality of life.",
  },
];

const ResearchDomains = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Innovation · Research · Technology
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {domains.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchDomains;
