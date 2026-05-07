import { Section } from "./Section";
import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "harshitapandey2910@gmail.com",
    href: "mailto:harshitapandey2910@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/harshita-pandey-95a373272/",
    href: "https://www.linkedin.com/in/harshita-pandey-95a373272/",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "GitHub",
    value: "https://github.com/Harshitapandey29",
    href: "https://github.com/Harshitapandey29",
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's turn your data into decisions."
      description="Open to full-time roles, and collaborative analytics projects."
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-14 backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0.9, x: -80 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400 backdrop-blur-sm px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur">
              <span className="data-dot" /> Available
            </div>
            <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Have a dataset?{" "}
              <span className="text-gradient">Let's talk.</span>
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400">
              Whether it's a full-time role, or a collaboration on an analytics
              project — I'd love to hear what you're working on.
            </p>

            <motion.a
              href="mailto:harshitapandey2910@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] shadow-[0_0_40px_rgba(34,211,238,0.35)] px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] glow-ring"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              Start a conversation
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </motion.a>
          </div>

          <div className="grid gap-3 lg:col-span-3">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-hover group flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-colors group-hover:border-primary/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {l.icon}
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {l.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm text-foreground transition-colors group-hover:text-primary">
                    {l.value}
                  </div>
                </div>
                <span className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Harshita Pandey. All rights reserved.</span>
        <span className="font-mono">Built with data in mind.</span>
      </footer>
    </Section>
  );
}
