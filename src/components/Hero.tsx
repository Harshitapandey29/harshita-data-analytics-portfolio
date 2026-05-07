import { DataBackground } from "./DataBackground";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  LineChart,
  Area,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { v: "6+", l: "Projects" },
  { v: "5", l: "Tools" },
  { v: "100%", l: "Curiosity" },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-4xl">
      {/* glow */}
      <div className="absolute -inset-x-10 -top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.18_235/0.18),transparent_70%)] blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-black/40 backdrop-blur-xl shadow-[0_30px_80px_-30px_oklch(0.72_0.18_235/0.25)]">
        {/* window chrome */}
        <div className="flex h-14 items-center justify-between border-b border-white/5 bg-[#0b1118]/90 px-5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-orange-400/80" />
            <span className="h-3 w-3 rounded-full bg-sky-400/80" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            my.analytics.profile
          </div>
          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <span className="data-dot" /> live
          </div>
        </div>

        <div className="grid gap-px border-b border-white/5 bg-transparent sm:grid-cols-3">
          {[
            { k: "Projects Built", v: "6+", trend: "Real-World Datasets" },
            { k: "Toold Used", v: "5", trend: "SQL • Python • Power BI" },
            { k: "Experience", v: "6 Months", trend: "Data Analyst Intern" },
          ].map((s) => (
            <div key={s.k} className="bg-black/10 p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.k}
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="font-display text-2xl font-semibold">{s.v}</span>
                <span className="font-mono text-[11px] text-primary">{s.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-52 w-full bg-gradient-to-b from-cyan-500/[0.03] to-transparent p-4">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={[
               { month: "Jan", growth: 20 },
               { month: "Feb", growth: 30 },
               { month: "Mar", growth: 45 },
               { month: "Apr", growth: 55 },
               { month: "May", growth: 65 },
               { month: "Jun", growth: 75 },
               { month: "Jul", growth: 80 },
               { month: "Aug", growth: 91 },
               { month: "Sep", growth: 96 },
               { month: "Oct", growth: 88 },
               { month: "Nov", growth: 92 },
               { month: "Dec", growth: 90 },
              ]}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >

              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.4}/>
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="growth"
                stroke="none"
                fill="url(#colorGrowth)"
              />
              <Tooltip />
              
              <Line
                type="monotone"
                dataKey="growth"
                stroke="#22d3ee"
                strokeWidth={3}
                dot={{ r: 4, stroke: "#22d3ee", strokeWidth: 2, fill: "#0f172a"}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>


      <div className="animate-float absolute -right-4 -bottom-4 hidden rounded-xl border border-white/10 bg-card/90 px-4 py-3 backdrop-blur md:block" style={{ animationDelay: "1.2s" }}>
        <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Accuracy</div>
        <div className="font-display text-lg font-semibold text-foreground">98.6%</div>
      </div>
    </div>
  );
}

export function Hero() {
  const fullText = "Turning data into actionable insights.";
const [typedText, setTypedText] = useState("");

useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    setTypedText(fullText.slice(0, i + 1));
    i++;
    if (i === fullText.length) clearInterval(interval);
  }, 25); // speed (lower = faster)

  return () => clearInterval(interval);
}, []);
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32"
    >
      <DataBackground />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          className="mt-3 text-balance text-5xl font-semibold leading-[1.02] sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-gradient">Harshita Pandey</span>
        </motion.h1>

        <motion.div
          className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {["Data Analyst", "SQL", "Python", "Power BI"].map((t, i) => (
            <span
              key={t}
              className={`rounded-full border px-3 py-1 font-mono text-[11px] ${
                i === 0
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-surface/60 text-muted-foreground"
              }`}
            >
              {t}
            </span>
          ))}
        </motion.div>

        <h2 className="mx-auto mt-8 max-w-2xl font-display text-2xl font-medium text-foreground sm:text-3xl">
          {typedText.includes("actionable insights") ? (
  <>
    {typedText.split("actionable insights")[0]}
    <span className="relative inline-block">
      <span className="relative z-10 text-primary">
        actionable insights
      </span>
      <span className="absolute inset-x-0 bottom-1 -z-0 h-2 bg-primary/20" />
    </span>
    {typedText.split("actionable insights")[1]}
  </>
) : (
  typedText
)}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          I'm a Data Analyst skilled in SQL, Python, Excel, and Power BI. I specialize in
          transforming raw data into meaningful insights that support data-driven decision-making.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] glow-ring"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="/DataAnalyst_Harshita_Pandey Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-12 flex max-w-md items-center justify-between gap-2">
          {stats.map((s, i) => (
            <div key={s.l} className="flex flex-1 items-center justify-center gap-3">
              <div className="text-center">
                <div className="font-display text-2xl font-semibold text-foreground">{s.v}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
              {i < stats.length - 1 && <div className="h-8 w-px bg-border" />}
            </div>
          ))}
        </div>
        
        </motion.div>

        {/* 🔥 DASHBOARD (SCROLL ANIMATION) */}
        <motion.div
          className="mt-24 w-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HeroVisual />
        </motion.div>
      
    </section>
  );
}
