import {
  GraduationCap,
  Building2,
  Cpu,
  HeartHandshake,
} from "lucide-react";

export default function ResearchCollaboration() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Research Collaboration
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Meaningful
            <span className="block text-violet-400">
              Solutions Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We welcome collaboration with researchers, academic institutions,
            industry partners, and organizations working to solve meaningful
            real-world problems.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
                {
                    title: "Academic Research",
                    icon: GraduationCap,
                },
                {
                    title: "Industry Partnership",
                    icon: Building2,
                },
                {
                    title: "Technology Development",
                    icon: Cpu,
                },
                {
                    title: "Social Impact",
                    icon: HeartHandshake,
                },
                ].map((item) => {
                const Icon = item.icon;

                return (
                    <div
                    key={item.title}
                    className="
                        group rounded-xl border border-white/10 bg-white/5
                        px-4 py-5
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-violet-400/40
                        hover:bg-white/10
                    "
                    >
                    <div
                        className="
                        mx-auto mb-3 flex h-10 w-10
                        items-center justify-center rounded-lg
                        bg-violet-500/10 text-violet-400
                        transition-all duration-300
                        group-hover:bg-violet-500/20
                        "
                    >
                        <Icon className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-medium text-slate-200">
                        {item.title}
                    </p>
                    </div>
                );
                })}
            </div>
            {/* Collaboration CTA */}
            <div className="mt-10 flex justify-center">
            <a
                href="/contact"
                className="
                inline-flex items-center gap-2
                rounded-xl
                bg-gradient-to-r from-violet-600 to-fuchsia-600
                px-7 py-3.5
                text-sm font-semibold text-white
                shadow-lg shadow-violet-900/20
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-violet-900/30
                "
            >
                Collaborate With Us
                <span aria-hidden="true">→</span>
            </a>
            </div>
        </div>

      </div>
    </section>
  );
}