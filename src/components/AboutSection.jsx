import SectionHeading from "./SectionHeading";

export default function AboutSection({ highlights }) {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="section-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="motion-safe:animate-fade-up">
            <SectionHeading
              eyebrow="About Me"
              title="Backend development shaped by APIs, authentication, and secure system design."
              description="I am Sayf Allah JAMAI, a backend developer and cybersecurity student focused on building clean server-side systems with Django and Django REST Framework."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              <p>
                My strongest focus is building REST APIs, authentication flows,
                role-based permissions, and maintainable backend structures that
                support real product workflows.
              </p>
              <p>
                I am working toward remote backend opportunities in Europe where
                I can contribute to production teams, keep growing as an
                engineer, and bring a security-aware mindset into backend
                delivery.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[1.5rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Core Focus
                </p>
                <p className="mt-3 text-lg text-white">
                  Django APIs, JWT authentication, and backend product logic.
                </p>
              </div>
              <div className="glass-card rounded-[1.5rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Career Direction
                </p>
                <p className="mt-3 text-lg text-white">
                  Remote backend roles and freelance work across Europe.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className={`glass-card rounded-[1.75rem] p-6 motion-safe:animate-fade-up ${
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
