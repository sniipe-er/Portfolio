export default function ProjectCard({ title, status, summary, tags, cta }) {
  return (
    <article className="glass-card group rounded-[1.75rem] p-6 hover:-translate-y-1 hover:border-cyan-400/20">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl text-white">{title}</h3>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
          {status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-400">{summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={cta.href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
      >
        {cta.label}
        <span aria-hidden="true">-&gt;</span>
      </a>
    </article>
  );
}
