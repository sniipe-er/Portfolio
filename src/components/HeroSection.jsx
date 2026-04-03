const focusPills = [
  "Django REST Framework",
  "JWT Authentication",
  "Role-Based Access",
  "API Architecture",
];

const valueCards = [
  {
    title: "Backend Delivery",
    copy: "I turn product requirements into secure, structured APIs that frontend teams can build on with confidence.",
  },
  {
    title: "Security Mindset",
    copy: "Authentication, permissions, and trust boundaries are part of the design process from the start.",
  },
  {
    title: "Remote Ready",
    copy: "Open to backend opportunities and freelance projects across Europe.",
  },
];

const endpointRows = [
  { label: "/api/v1/auth/login", status: "JWT Ready" },
  { label: "/api/v1/courses", status: "Protected" },
  { label: "/api/v1/enrollments", status: "Role Aware" },
  { label: "/api/v1/assignments", status: "Tracked" },
];

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 pt-32 sm:pt-36">
      <div className="section-shell pb-20 sm:pb-24">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="motion-safe:animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
              Backend Developer | Open to remote work in Europe
            </span>

            <div className="mt-8 space-y-6">
              <h1 className="max-w-4xl text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Sayf Allah JAMAI
                <span className="mt-3 block text-3xl font-medium leading-tight text-gradient sm:text-4xl lg:text-5xl">
                  Backend Developer | Django &amp; REST APIs
                </span>
              </h1>

              <p className="max-w-2xl text-xl leading-9 text-slate-200 sm:text-2xl">
                I build secure, scalable backend systems with Django and REST
                APIs for real product workflows.
              </p>

              <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                From authentication and role-based permissions to structured API
                architecture, I deliver backend foundations that are reliable,
                maintainable, and ready for production growth.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {focusPills.map((pill) => (
                <span key={pill} className="tag-pill">
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {valueCards.map((item, index) => (
                <article
                  key={item.title}
                  className="glass-card rounded-3xl p-5 motion-safe:animate-fade-up hover:-translate-y-1 hover:border-cyan-400/20"
                  style={{ animationDelay: `${120 + index * 110}ms` }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative motion-safe:animate-fade-up" style={{ animationDelay: "180ms" }}>
            <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl sm:block" />
            <div className="absolute -right-4 bottom-2 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="border-gradient relative overflow-hidden rounded-[2rem] bg-slate-950/75 p-6 shadow-soft backdrop-blur-xl motion-safe:animate-float sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100">
                  Production-minded
                </span>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Current Focus
                    </p>
                    <h2 className="mt-3 text-2xl text-white">
                      Secure backend APIs for structured learning products
                    </h2>
                  </div>
                  <div className="hidden rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-right sm:block">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                      Primary Stack
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Django + DRF
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4 font-mono text-sm">
                  {endpointRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-transparent px-3 py-2 text-slate-300 hover:border-cyan-400/20 hover:bg-white/[0.03]"
                    >
                      <span>{row.label}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-200">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="glass-card rounded-[1.5rem] p-5 hover:-translate-y-1 hover:border-cyan-400/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Highlight Project
                  </p>
                  <p className="mt-3 text-lg text-white">
                    CourseCampus backend with authentication, custom roles,
                    enrollment control, and assignment workflows.
                  </p>
                </div>
                <div className="glass-card rounded-[1.5rem] p-5 hover:-translate-y-1 hover:border-cyan-400/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Value Delivered
                  </p>
                  <p className="mt-3 text-lg text-white">
                    Reliable backend architecture built for secure access,
                    clean integration, and long-term maintainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
