import SectionHeading from "./SectionHeading";

export default function AboutSection({ highlights }) {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="section-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="motion-safe:animate-fade-up">
            <SectionHeading
              eyebrow="About Me"
              title="Backend development with a security-first mindset."
              description="I’m Sayf, a student specializing in cybersecurity and backend development. I enjoy turning complex product requirements into backend systems that feel secure, structured, and ready to scale."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              <p>
                My strongest focus is the Django ecosystem, especially Django
                REST Framework, authentication flows, role-based permissions,
                and practical API architecture.
              </p>
              <p>
                I&apos;m building toward remote backend opportunities in Europe
                where I can contribute to real products, grow with experienced
                teams, and keep sharpening both my engineering and security
                instincts.
              </p>
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
