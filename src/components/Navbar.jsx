import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`section-shell rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-slate-950/80 shadow-soft backdrop-blur-xl"
            : "border-white/0 bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
              SAJ
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-sm">Sayf Allah JAMAI</span>
              <span className="block text-xs font-medium text-slate-400">
                Backend Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-400/15"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-white/10 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
