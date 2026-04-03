import SectionHeading from "./SectionHeading";
import SkillGroup from "./SkillGroup";

export default function SkillsSection({ skillGroups }) {
  const [backendGroup, ...otherGroups] = skillGroups;

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="section-shell section-space">
        <SectionHeading
          eyebrow="Skills"
          title="Backend-first skills organized for clean delivery, secure access, and practical development."
          description="My strongest skills are on the backend, where I focus on API architecture, authentication, and building systems that stay clear and maintainable as they grow."
        />

        <div className="mt-12 space-y-6">
          <article className="glass-card rounded-[1.9rem] p-6 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  {backendGroup.title}
                </p>
                <h3 className="mt-4 text-2xl text-white sm:text-3xl">
                  Core backend capabilities
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-400">
                  {backendGroup.caption}
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100">
                Primary focus area
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {backendGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-3">
            {otherGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
