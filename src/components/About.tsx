import { Section } from "./Section";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const points = [
  {
    k: "Background",
    v: "IT student with hands-on Data Analyst internship experience across real datasets.",
    icon: (
      <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" />
    ),
  },
  {
    k: "Focus",
    v: "Solving real business problems by translating numbers into clear, confident decisions.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    k: "Mindset",
    v: "Continuous learning, curious experimentation, and shipping practical, real-world projects.",
    icon: (
      <>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </>
    ),
  },
];

const facts = [
  { v: "IT", l: "Student" },
  { v: "1", l: "Internship" },
  { v: "6+", l: "Projects" },
  { v: "5", l: "Tools" },
];

export function About() {
  const fullText = "A curious analyst, building clarity from complexity.";

const [typedText, setTypedText] = useState("");

useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    setTypedText(fullText.slice(0, i));
    i++;
    if (i > fullText.length) clearInterval(interval);
  }, 30);

  return () => clearInterval(interval);
}, []);
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <span>
          {typedText}
          <span className="animate-pulse">|</span>
        </span>
      }
      description="I love turning messy spreadsheets into stories that help teams move faster and decide smarter."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left: bio panel */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:col-span-2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 grid-overlay opacity-50" />
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface">
                <span className="font-display text-lg font-semibold text-primary">HP</span>
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
              </div>
              <div>
                <div className="font-display text-base font-semibold">Harshita Pandey</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Data Analyst 
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              I work at the intersection of business questions and data. From cleaning noisy
              datasets in Python to crafting dashboards in Power BI, I focus on the small
              decisions that compound into big outcomes.
            </p>

            <div className="mt-6 grid grid-cols-4 gap-3 border-t border-border pt-6">
              {facts.map((f) => (
                <div key={f.l} className="text-center">
                  <div className="font-display text-xl font-semibold text-foreground">{f.v}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {f.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Problem-solver", "Detail-oriented", "Storyteller"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: pillar cards */}
        <motion.div
          className="grid gap-4 lg:col-span-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25
              }
            }
          }}
        >
          {points.map((p) => (
            <motion.div
              key={p.k}
              className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              variants={{
                hidden: { opacity: 0, x: 80 },
                show: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 1.0 }}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-primary transition-colors group-hover:border-primary/50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {p.k}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.v}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
