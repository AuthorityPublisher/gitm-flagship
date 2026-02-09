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
    // The Vidalytics global script (loaded in layout.tsx) exposes
    // window.vidalytics_embed (SINGULAR, not plural).
    // It scans for divs with id="vidalytics_embed_VIDEO_ID" and injects players.
    // In React, components mount after the initial scan, so we poll
    // for the function and trigger a rescan once available.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    function tryRescan() {
      if (typeof win.vidalytics_embed === "function") {
        win.vidalytics_embed();
        return true;
      }
      return false;
    }

    if (tryRescan()) return;

    let attempts = 0;
    const maxAttempts = 60; // 60 x 250ms = 15 seconds
    const interval = setInterval(() => {
      attempts++;
      if (tryRescan()) {
        clearInterval(interval);
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
        console.warn(
          `Vidalytics global script did not load within 15s. Video "${videoId}" may not render.`
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
