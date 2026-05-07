import { Section } from "./Section";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartKind = "area" | "bars" | "donut" | "scatter";

type Project = {
  title: string;
  emoji: string;
  link: string;
  tools: string[];
  bullets: string[];
  impact: string;
  image: string;
  metric?: { value: string; label: string };
  chart: ChartKind;
};

const projects: Project[] = [
  {
    title: "Uber Supply-Demand Analysis",
    emoji: "🚗",
    link: "https://github.com/Harshitapandey29/Uber-Supply-Demand-Gap",
    tools: ["SQL", "Excel"],
    image: "/project-images/uber_supply.png",
    bullets: [
      "Analyzed ride request data to identify demand-supply gaps across time slots.",
      "Discovered up to 35% unmet ride requests during peak late-evening hours.",
      "Recommended optimized driver allocation to reduce wait times.",
    ],
    impact:
      "Helped identify operational inefficiencies and improve ride fulfillment rates.",
    metric: { value: "35%", label: "Unmet peak demand" },
    chart: "bars",
  },
  {
    title: "Airbnb Market Listing Performance",
    emoji: "🏡",
    link: "https://github.com/Harshitapandey29/Airbnb-Market-Listing-Performance-Analysis-Excel-SQL-PowerBI",
    tools: ["SQL", "Python", "Power BI"],
    image: "/project-images/Airbnb_Dashboard.png",
    bullets: [
      "End-to-end analysis of pricing, availability, and occupancy trends.",
      "Optimized pricing strategies linked to up to 20% higher booking rates.",
      "Built interactive dashboard comparing cities and property types.",
    ],
    impact:
      "Enabled data-driven pricing and listing optimization to maximize host revenue.",
    metric: { value: "+20%", label: "Booking lift" },
    chart: "area",
  },
  {
    title: "Student Success Analysis",
    emoji: "🎓",
    link: "https://github.com/Harshitapandey29/Student-Success-Analysis-Excel-Dashboard",
    tools: ["Excel"],
    image: "/project-images/Screenshot 2026-05-01 134343.png",
    bullets: [
      "Analyzed student performance using Pivot Tables and Excel dashboards.",
      "Identified key factors: attendance, study time, and consistency.",
      "Created visual reports tracking trends and improvement areas.",
    ],
    impact:
      "Provided actionable insights to improve student outcomes and academic planning.",
    chart: "scatter",
  },
  {
    title: "Walmart Sales Analysis",
    emoji: "🛒",
    link: "https://github.com/Harshitapandey29/Walmart-Sales-Analysis-SQL-Python-Power-BI",
    tools: ["SQL", "Excel", "Power BI"],
    image: "/project-images/Dashboard.png",
    bullets: [
      "End-to-end sales analysis across regions and product categories.",
      "Top categories contributed 40% of total revenue.",
      "Dashboards tracked seasonal demand and regional performance.",
    ],
    impact:
      "Helped identify revenue drivers and improve business decision-making.",
    metric: { value: "40%", label: "Revenue from top cats" },
    chart: "donut",
  },
  {
  title: "HR Analytics Dashboard",
  emoji: "📊",
  link: "https://github.com/Harshitapandey29/HR-Analytics-Dashboard-Excel",
  tools: ["Excel", "Data Visualization"],
  image: "/project-images/Screenshot 2026-01-09 183301.png",
  bullets: [
    "Developed an interactive HR dashboard to track employee performance, salaries, and attrition trends.",
    "Analyzed workforce distribution across departments, age groups, and gender.",
    "Identified key factors influencing employee retention and productivity."
  ],
  impact:
    "Improved HR decision-making by providing clear insights into employee performance, attrition risks, and salary distribution.",
  metric: { value: "+25%", label: "insight clarity" },
  chart: "bars"
},
{
  title: "Local Food Waste Management System",
  emoji: "🍽️",
  link: "https://github.com/Harshitapandey29/Local-Food-Wastage-Management-System",
  tools: ["Python", "SQL", "Excel"],
  image: "/project-images/Local_food.png",
  bullets: [
    "Designed a system to connect restaurants and individuals with NGOs for food redistribution.",
    "Enabled real-time tracking of surplus food availability and requests.",
    "Built features for efficient allocation and reduced food wastage."
  ],
  impact:
    "Contributed to reducing food wastage and improving food accessibility for underprivileged communities.",
  metric: { value: "-30%", label: "food waste" },
  chart: "area"
}
];

function ChartArea() {
  const data = [
    { month: "Jan", projects: 1 },
    { month: "Mar", projects: 2 },
    { month: "May", projects: 4 },
    { month: "Jul", projects: 5 },
    { month: "Sep", projects: 6 },
  ];

  return (
    <div className="h-full w-full p-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="projects"
            stroke="#00f5a0"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function ChartBars() {
  const heights = [30, 55, 40, 70, 50, 78, 62, 45, 68, 52, 75, 48];
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="none">
      {heights.map((h, i) => {
        const x = i * (200 / heights.length) + 2;
        const w = 200 / heights.length - 4;
        const peak = h > 65;
        return (
          <rect
            key={i}
            x={x}
            y={80 - h * 0.85}
            width={w}
            height={h * 0.85}
            rx="1.5"
            fill={peak ? "oklch(0.70 0.20 25 / 0.85)" : "oklch(0.72 0.18 235 / 0.7)"}
          />
        );
      })}
    </svg>
  );
}

function ChartDonut() {
  // segments sum to 100
  const segs = [
    { v: 40, c: "oklch(0.72 0.18 235)" },
    { v: 25, c: "oklch(0.70 0.20 25)" },
    { v: 18, c: "oklch(0.78 0.15 180)" },
    { v: 17, c: "oklch(0.80 0.16 90)" },
  ];
  const C = 2 * Math.PI * 28;
  let offset = 0;
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(100 40)">
        {segs.map((s, i) => {
          const len = (s.v / 100) * C;
          const el = (
            <circle
              key={i}
              r="28"
              cx="0"
              cy="0"
              fill="none"
              stroke={s.c}
              strokeWidth="10"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={-offset}
              transform="rotate(-90)"
            />
          );
          offset += len;
          return el;
        })}
        <text textAnchor="middle" dy="2" fontSize="9" fill="oklch(0.96 0.005 250)" fontFamily="JetBrains Mono">
          40%
        </text>
        <text textAnchor="middle" dy="11" fontSize="4" fill="oklch(0.68 0.02 250)" fontFamily="JetBrains Mono">
          TOP CAT
        </text>
      </g>
    </svg>
  );
}

function ChartScatter() {
  const pts = Array.from({ length: 22 }).map((_, i) => {
    const x = 10 + (i * 173.7) % 180;
    const y = 8 + (i * 91.3) % 60;
    const r = 1.6 + ((i * 7) % 5) * 0.4;
    const accent = i % 5 === 0;
    return { x, y, r, accent };
  });
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="none">
      <line x1="0" y1="74" x2="200" y2="74" stroke="oklch(0.96 0.005 250 / 0.1)" strokeWidth="0.5" />
      <line x1="6" y1="0" x2="6" y2="80" stroke="oklch(0.96 0.005 250 / 0.1)" strokeWidth="0.5" />
      {/* trend line */}
      <line x1="6" y1="60" x2="194" y2="20" stroke="oklch(0.78 0.19 235 / 0.5)" strokeWidth="1" strokeDasharray="3 3" />
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={p.accent ? "oklch(0.70 0.20 25 / 0.9)" : "oklch(0.78 0.19 235 / 0.85)"}
        />
      ))}
    </svg>
  );
}

function ChartFor({ k }: { k: ChartKind }) {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-border bg-surface-elevated">
      <div className="absolute inset-0 grid-overlay opacity-60" />
      {k === "area" && <ChartArea />}
      {k === "bars" && <ChartBars />}
      {k === "donut" && <ChartDonut />}
      {k === "scatter" && <ChartScatter />}
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md border border-border bg-card/80 px-2 py-1 backdrop-blur">
        <span className="data-dot" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
          {k === "area" ? "Trend" : k === "bars" ? "Hourly demand" : k === "donut" ? "Category mix" : "Performance"}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  const [preview, setPreview] = useState(false);
  return (
    <article className="card-hover group relative flex flex-col h-full rounded-2xl border border-border bg-card p-6">
      <div className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
        {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </div>

      {p.image ? (
  <div
  className="relative overflow-hidden rounded-xl group cursor-pointer z-10"
  onClick={() => {
    console.log("clicked");
    setPreview(true);
  }}
>
    {/* Image */}
    <img
      src={p.image}
      alt={p.title}
      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

    {/* Text */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
      <span className="text-white text-sm font-medium">
        View Full Preview
      </span>
    </div>
  </div>
) : (
  <ChartFor k={p.chart} />
)}

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-1 text-2xl">{p.emoji}</div>
          <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
        </div>
        {p.metric && (
          <div className="shrink-0 rounded-lg border border-border bg-surface px-3 py-2 text-right">
            <div className="font-display text-lg font-semibold text-primary">{p.metric.value}</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {p.metric.label}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2.5">
        {p.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70 ring-2 ring-primary/15" />
            <span className="leading-relaxed line-clamp-2">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 auto items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg border border-primary px-4 py-2 text-sm text-primary transition hover:bg-primary/10 text-center"
        >
          🔗 View Project →
        </a>
      )}
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Impact</div>
          <p className="mt-0.5 text-sm text-foreground/90">{p.impact}</p>
        </div>
      </div>
      {preview && (
  <motion.div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setPreview(false)}
  >
    
    <div
      className="relative max-w-5xl w-full px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        src={p.image}
        alt={p.title}
        className="w-full rounded-xl shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Close button */}
      <button
        className="absolute top-4 right-6 text-white text-2xl"
        onClick={() => setPreview(false)}
      >
        ✕
      </button>
    </div>
  </motion.div>
)}
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work — from raw data to clear decisions."
      description="A mix of end-to-end analyses and dashboards built across real-world datasets."
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2 items-stretch"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard p={p} idx={i} />
          </motion.div>
  ))}
      </motion.div>
    </Section>
  );
}
