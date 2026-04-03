import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection({ featuredProject, futureProjects }) {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="section-shell section-space">
        <SectionHeading
          eyebrow="Projects"
          title="Backend projects focused on authentication, permissions, and real application workflows."
          description="CourseCampus is the strongest example of how I design backend systems for real use cases, with secure access, role-aware permissions, and API-first architecture."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="border-gradient relative overflow-hidden rounded-[2rem] bg-slate-950/75 p-8 shadow-soft backdrop-blur-xl sm:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
                  Featured Project
                </span>
                <h3 className="mt-5 text-3xl text-white sm:text-4xl">
                  {featuredProject.title}
                  <span className="mt-2 block text-lg font-medium text-cyan-200">
                    {featuredProject.subtitle}
                  </span>
                </h3>
              </div>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/15"
              >
                View GitHub Repository
              </a>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-6">
                <div className="glass-card rounded-[1.5rem] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Problem
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Learning platforms need secure access control, different user
                    roles, and reliable backend workflows for courses,
                    enrollments, lessons, and assignments.
                  </p>
                </div>

                <div className="glass-card rounded-[1.5rem] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Solution
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {featuredProject.title} solves this with a Django and Django
                    REST Framework backend that handles JWT authentication,
                    role-based permissions, student enrollment flows, lesson
                    access control, and assignment submission through an API-only
                    architecture.
                  </p>
                </div>

                <div className="mt-2 grid gap-3 sm:grid-cols-3">
                  {featuredProject.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="glass-card rounded-[1.35rem] p-4 hover:-translate-y-1 hover:border-cyan-400/20"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Tech Stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {featuredProject.techStack.map((item) => (
                      <span key={item} className="tag-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Backend Features
                </p>
                <ul className="mt-5 space-y-4">
                  {featuredProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                >
                  github.com/sniipe-er/CourseCampus
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {futureProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                {...project}
                title="Upcoming Project"
                status="Planned"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
