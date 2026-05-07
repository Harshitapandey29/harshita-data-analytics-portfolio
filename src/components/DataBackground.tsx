export function DataBackground() {
  // Deterministic pseudo-random points
  const points = Array.from({ length: 28 }).map((_, i) => {
    const x = (i * 137.5) % 100;
    const y = (i * 73.3) % 100;
    return { x, y, d: (i % 5) * 0.4 };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-overlay opacity-70" />
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.18 235)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.72 0.18 235)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.72 0.18 235)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,70 C15,60 25,80 40,55 C55,30 65,65 80,40 C90,25 95,45 100,35"
          fill="none"
          stroke="url(#line)"
          strokeWidth="0.4"
          className="animate-dash"
        />
        <path
          d="M0,80 C20,72 30,88 45,70 C60,52 70,78 85,60 C92,52 96,62 100,58"
          fill="none"
          stroke="oklch(0.70 0.20 25 / 0.5)"
          strokeWidth="0.3"
        />
      </svg>
      {points.map((p, i) => (
        <span
          key={i}
          className="absolute data-dot animate-pulse-soft"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDelay: `${p.d}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}
