const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="section-shell flex flex-col gap-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-slate-300">
            © {new Date().getFullYear()} Sayf Allah JAMAI
          </p>
          <p className="mt-2">Backend Developer portfolio built with React, Vite, and Tailwind CSS.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
