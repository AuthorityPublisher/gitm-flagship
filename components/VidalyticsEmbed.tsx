"use client";

interface VidalyticsEmbedProps {
  videoId: string;
  className?: string;
}

export function VidalyticsEmbed({ videoId, className = "" }: VidalyticsEmbedProps) {
  return (
    <div className={`aspect-video w-full overflow-hidden rounded-xl ${className}`}>
      <div
        id={`vidalytics_embed_${videoId}`}
        style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
      >
        <iframe
          src={`https://fast.vidalytics.com/embeds/${videoId}/`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>
  );
}
