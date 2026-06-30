import Image from "next/image";
export default function OurStory() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Innovation begins with
            <span className="text-blue-600"> solving real problems.</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-8">

            <p>
              DLAXMI INFOTECH LLP was founded with one belief:
              Technology should solve meaningful real-world problems.
            </p>

            <p>
              Instead of building technology for its own sake,
              we engineer practical solutions in Automation,
              Artificial Intelligence, IoT, Healthcare,
              Safety, and Applied Research.
            </p>

            <p>
              Every innovation begins with understanding
              the problem, validating ideas through research,
              rapid prototyping, and transforming concepts
              into reliable products.
            </p>

            <p>
              Our long-term vision is to become a globally
              recognized innovation laboratory where research
              creates technologies that improve industries
              and people's lives.
            </p>

            {/* Statistics */}
           <div className="grid grid-cols-3 gap-6 pt-10">

                <div className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <div className="text-3xl mb-2">🚀</div>
                    <h3 className="text-4xl font-bold text-blue-600">5+</h3>
                    <p className="mt-2 text-gray-600">Innovation Projects</p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <div className="text-3xl mb-2">🧪</div>
                    <h3 className="text-4xl font-bold text-blue-600">6</h3>
                    <p className="mt-2 text-gray-600">Research Domains</p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <div className="text-3xl mb-2">💡</div>
                    <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
                    <p className="mt-2 text-gray-600">Innovation Mindset</p>
                </div>

            </div>
            

          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:scale-[1.02]">
            

            <Image
                src="/images/about-story.jpg"
                alt="Research and Innovation"
                width={700}
                height={550}
                className="w-full h-[550px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}