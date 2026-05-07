import { Section } from "./Section";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Skill = { name: string; level: number };

const technical: Skill[] = [
  { name: "SQL", level: 92 },
  { name: "Python (Pandas, NumPy)", level: 95 },
  { name: "Power BI", level: 90 },
  { name: "Excel", level: 88 },
  { name: "Tableau", level: 75 },
];

const core = [
  { name: "Data Cleaning", icon: "🧹" },
  { name: "Data Visualization", icon: "📊" },
  { name: "Exploratory Data Analysis", icon: "🔍" },
  { name: "Statistics", icon: "📈" },
  { name: "Storytelling", icon: "🗣️" },
  { name: "Business Acumen", icon: "💡" },
];

function TechBar({ s, i }: { s: Skill, i: Number }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-foreground">{s.name}</span>
        <span className="font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
          {s.level}%
        </span>
      </div>
      <div className="relative mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${s.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            width: `${s.level}%`,
            boxShadow: "0 0 18px rgba(34,211,238,0.45)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const fullText = "Tools and methods I use every day.";

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
      id="skills"
      eyebrow="Skills"
      title={
        <span>
          {typedText}
          <span className="animate-pulse">|</span>
        </span>
      }
      description="A balanced toolkit for the full analytics lifecycle — from raw data to executive-ready dashboards."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Technical */}
        <motion.div
           className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 backdrop-blur-xl lg:col-span-3"
           initial={{ opacity: 0, x: -60 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Technical Stack
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">Languages & Tools</h3>
              </div>
              <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                {String(technical.length).padStart(2, "0")} skills
              </span>
            </div>
            <div className="space-y-5">
              {technical.map((s, i) => (
                <TechBar key={s.name} s={s} i={i} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core */}
        <motion.div
          className="rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl lg:col-span-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Core Strengths
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold">Analytical Mindset</h3>
            </div>
            <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
              {String(core.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {core.map((c, i) => (
              <motion.div
                key={c.name}
                className="card-hover group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <span className="text-lg">{c.icon}</span>
                <span className="text-xs leading-tight text-foreground transition-colors group-hover:text-primary">
                  {c.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee-ish strip */}
      <motion.div
        className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black/20 px-6 py-5 backdrop-blur-xl"
        initial={{ opacity: 0, x: -40, y: 40 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>SQL</span><span className="text-primary">·</span>
          <span>Python</span><span className="text-primary">·</span>
          <span>Pandas</span><span className="text-primary">·</span>
          <span>NumPy</span><span className="text-primary">·</span>
          <span>Power BI</span><span className="text-primary">·</span>
          <span>Tableau</span><span className="text-primary">·</span>
          <span>Excel</span><span className="text-primary">·</span>
          <span>Statistics</span>
        </div>
      </motion.div>
    </Section>
  );
}
