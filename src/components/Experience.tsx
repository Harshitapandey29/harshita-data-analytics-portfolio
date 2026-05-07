import { Section } from "./Section";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const bullets = [
  { t: "Real-world datasets", d: "Worked across multi-domain datasets at production scale." },
  { t: "Data wrangling", d: "Cleaned and preprocessed messy data into analysis-ready pipelines." },
  { t: "Dashboards", d: "Built interactive Power BI dashboards for stakeholder reviews." },
  { t: "Insight generation", d: "Translated patterns into actionable business recommendations." },
];

export function Experience() {
  const fullText = "Where I’ve put data to work.";

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
      id="experience"
      eyebrow="Experience"
      title={
        <span>
          {typedText}
          <span className="animate-pulse">|</span>
        </span>
      }
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Timeline rail */}
        <div className="hidden lg:col-span-1 lg:flex lg:flex-col lg:items-center">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
          </span>
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-cyan-400/70 via-cyan-400/20 to-transparent" />
        </div>

        {/* Card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-10 backdrop-blur-xl lg:col-span-11"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="absolute right-0 top-0 h-full w-1/3 bg-cyan-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm font-display text-base font-semibold text-primary">
                LM
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Data Analyst Intern</h3>
                <p className="text-sm text-muted-foreground">
                  Labmentix Technology · <span className="font-mono text-xs">July 2025 - January 2026</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm px-3 py-1 font-mono text-xs text-muted-foreground">
                <span className="data-dot" /> Recent
              </span>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                Power BI
              </span>
              <span className="rounded-full border border border-white/10 bg-black/20 backdrop-blur-sm px-3 py-1 font-mono text-xs text-muted-foreground">
                SQL
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 backdrop-blur-sm px-3 py-1 font-mono text-xs text-muted-foreground">
                Python
              </span>
            </div>
          </div>

          <div className="relative mt-8 grid gap-4 md:grid-cols-2">
            {bullets.map((b, i) => (
              <motion.div
                key={b.t}
                  className="card-hover group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-cyan-400 backdrop-blur-sm text-primary transition-colors group-hover:border-primary/50">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{b.t}</div>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-8 flex flex-wrap items-center gap-6 border-t border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span><span className="text-primary">●</span> Datasets cleaned</span>
            <span><span className="text-primary">●</span> Dashboards delivered</span>
            <span><span className="text-primary">●</span> Stakeholder insights</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
