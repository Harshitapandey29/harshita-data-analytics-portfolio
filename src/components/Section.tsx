import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mb-12 max-w-4xl">
        <div className="mb-4 flex items-center gap-3 font-mono uppercase tracking-[0.25em] text-primary">
        <span className="h-[2px] w-10 bg-primary" />
        <span className="text-lg md:text-xl font-semibold">
          {eyebrow}
        </span>
      </div>
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-base text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
