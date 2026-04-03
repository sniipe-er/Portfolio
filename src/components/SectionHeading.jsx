export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
        {eyebrow}
      </span>
      <h2 className="mt-6 text-3xl text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
