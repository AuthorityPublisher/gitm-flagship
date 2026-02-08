import { VidalyticsEmbed } from "./VidalyticsEmbed";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  metric?: string;
  videoId?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  metric,
  videoId,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      {videoId && (
        <div className="mb-4">
          <VidalyticsEmbed videoId={videoId} />
        </div>
      )}
      <blockquote className="text-base leading-relaxed text-foreground/80">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        {metric && (
          <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold-dark">
            {metric}
          </span>
        )}
      </div>
    </div>
  );
}
