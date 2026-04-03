import SectionHeading from "./SectionHeading";
import SkillGroup from "./SkillGroup";

export default function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="section-shell section-space">
        <SectionHeading
          eyebrow="Skills"
          title="A backend toolkit centered on Django, APIs, and practical delivery."
          description="My strongest value is on the backend: designing structured application logic, authentication systems, and clean REST APIs while collaborating with modern tooling."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
