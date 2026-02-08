"use client";

import { useEffect, useRef } from "react";

interface VidalyticsEmbedProps {
  videoId: string;
  className?: string;
  /** Override the default 56.25% (16:9) aspect ratio, e.g. "177.78%" for 9:16 portrait */
  aspectRatio?: string;
}

export function VidalyticsEmbed({
  videoId,
  className = "",
  aspectRatio = "56.25%",
}: VidalyticsEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The Vidalytics global script (loaded in layout.tsx) scans for
    // divs with id="vidalytics_embed_VIDEO_ID" and injects the player.
    // In a React SPA, components mount after the initial scan,
    // so we trigger a rescan when this component mounts.
    //
    // The global script loads asynchronously, so vidalytics_embeds may
    // not exist yet when this effect runs. We poll until it appears
    // (up to 10 seconds) then call it to inject the player.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    if (typeof win.vidalytics_embeds === "function") {
      win.vidalytics_embeds();
      return;
    }

    let attempts = 0;
    const maxAttempts = 40; // 40 x 250ms = 10 seconds
    const interval = setInterval(() => {
      attempts++;
      if (typeof win.vidalytics_embeds === "function") {
        clearInterval(interval);
        win.vidalytics_embeds();
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
        console.warn(
          `Vidalytics global script did not load within 10s. Video "${videoId}" may not render.`
        );
      }
    }, 250);

    return () => clearInterval(interval);
  }, [videoId]);

  return (
    <div className={`w-full overflow-hidden rounded-xl ${className}`}>
      <div
        ref={containerRef}
        id={`vidalytics_embed_${videoId}`}
        style={{ width: "100%", position: "relative", paddingTop: aspectRatio }}
      />
    </div>
  );
}
