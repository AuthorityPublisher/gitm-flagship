interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
