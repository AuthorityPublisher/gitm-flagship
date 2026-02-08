interface StageCardProps {
  number: number;
  title: string;
  headline: string;
  description: string;
  proof: string;
}

export function StageCard({
  number,
  title,
  headline,
  description,
  proof,
}: StageCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold/30 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
          {number}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-gold">
          {title}
        </span>
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
        {headline}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 rounded-lg bg-muted/50 px-3 py-2">
        <p className="text-xs italic text-foreground/60">{proof}</p>
      </div>
    </div>
  );
}
