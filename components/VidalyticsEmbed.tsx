"use client";

import { useEffect, useRef } from "react";

interface VidalyticsEmbedProps {
  videoId: string;
  className?: string;
}

export function VidalyticsEmbed({ videoId, className = "" }: VidalyticsEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The Vidalytics global script (loaded in layout.tsx) scans for
    // divs with id="vidalytics_embed_VIDEO_ID" and injects the player.
    // In a React SPA, components mount after the initial scan,
    // so we trigger a rescan when this component mounts.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.vidalytics_embeds === "function") {
      win.vidalytics_embeds();
    }
  }, [videoId]);

  return (
    <div className={`w-full overflow-hidden rounded-xl ${className}`}>
      <div
        ref={containerRef}
        id={`vidalytics_embed_${videoId}`}
        style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
      />
    </div>
  );
}
