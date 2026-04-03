export default function SkillGroup({ title, caption, skills }) {
  return (
    <article className="glass-card rounded-[1.75rem] p-6 hover:-translate-y-1 hover:border-cyan-400/20">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
        {title}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-400">{caption}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
