import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function ContactSection({ contactDetails }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="section-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="motion-safe:animate-fade-up">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build secure, reliable backend products together."
              description="If you are hiring for a backend role, looking for a Django developer, or need help shaping an API-driven product, I would love to connect."
            />

            <p className="mt-6 text-base font-medium leading-8 text-cyan-100">
              Open to backend opportunities and freelance projects.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[1.75rem] p-6 hover:-translate-y-1 hover:border-cyan-400/20">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-3 block break-all text-xl font-semibold text-white hover:text-cyan-200"
                >
                  {contactDetails.email}
                </a>
              </div>

              <div className="glass-card rounded-[1.75rem] p-6 hover:-translate-y-1 hover:border-cyan-400/20">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  GitHub
                </p>
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-xl font-semibold text-white hover:text-cyan-200"
                >
                  github.com/sniipe-er
                </a>
              </div>

              <div className="glass-card rounded-[1.75rem] p-6 sm:col-span-2 hover:-translate-y-1 hover:border-cyan-400/20">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Availability
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {contactDetails.availability}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {contactDetails.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6 sm:p-8 hover:border-cyan-400/20">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-slate-300">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-shell"
                    placeholder="John Doe"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-slate-300">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-shell"
                    placeholder="john@company.com"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-3 block text-sm font-medium text-slate-300">
                  Project Details
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-shell min-h-[180px] resize-none"
                  placeholder="Tell me about the role, product, or freelance opportunity..."
                  required
                />
              </label>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-slate-500">
                  This form prepares an email draft in the visitor&apos;s email
                  client.
                </p>
                <button
                  type="submit"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 hover:-translate-y-0.5 hover:bg-cyan-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
