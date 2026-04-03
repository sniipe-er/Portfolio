import SectionHeading from "./SectionHeading";

export default function AboutSection({ highlights }) {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="section-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="motion-safe:animate-fade-up">
            <SectionHeading
              eyebrow="About Me"
              title="Backend specialization built on clean APIs, strong auth flows, and security-aware thinking."
              description="I am Sayf Allah JAMAI, a backend developer with a cybersecurity background focused on Django, Django REST Framework, and building structured backend systems for modern web products."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
              <p>
                My work is centered on backend development, especially REST
                APIs, JWT authentication, role-based access control, and backend
                logic that supports clear product workflows.
              </p>
              <p>
                With a foundation in cybersecurity, I pay close attention to
                authentication, permissions, and scalable system design so the
                backend is not only functional, but also secure and maintainable
                as products grow.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[1.5rem] p-5 hover:-translate-y-1 hover:border-cyan-400/20">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Backend Focus
                </p>
                <p className="mt-3 text-lg text-white">
                  Django APIs, JWT authentication, and scalable backend
                  architecture.
                </p>
              </div>
              <div className="glass-card rounded-[1.5rem] p-5 hover:-translate-y-1 hover:border-cyan-400/20">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Professional Goal
                </p>
                <p className="mt-3 text-lg text-white">
                  Remote backend roles and freelance projects across Europe.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className={`glass-card rounded-[1.75rem] p-6 motion-safe:animate-fade-up hover:-translate-y-1 hover:border-cyan-400/20 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
                style={{ animationDelay: `${120 + index * 120}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
