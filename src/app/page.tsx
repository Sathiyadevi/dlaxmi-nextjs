const HomePage = () => {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover.<br />
            Develop.<br />
            <span className="text-blue-600">Dominate.</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            DLAXMI INFOTECH LLP is a research-driven R&D innovation lab
            focused on Automation, IoT, and Applied Technology.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Explore Research
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Contact the Lab
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-xl">
          <p className="text-blue-400 text-lg tracking-wide">
            Innovation Lab
          </p>
        </div>

      </section>

      {/* RESEARCH DOMAINS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Innovation • Research • Technology
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-semibold text-lg">Applied Research</h3>
              <p className="mt-3 text-gray-600">
                Turning real-world problems into research-backed engineering solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-semibold text-lg">Smart Systems</h3>
              <p className="mt-3 text-gray-600">
                Automation, IoT, and intelligent control platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-semibold text-lg">Social Impact</h3>
              <p className="mt-3 text-gray-600">
                Technology designed to improve safety and quality of life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Why DLAXMI INFOTECH LLP?
          </h2>
          <p className="mt-6 text-gray-600">
            We are not just developers — we are researchers.
            Our work bridges academic research and real-world deployment,
            ensuring innovation that actually works.
          </p>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
