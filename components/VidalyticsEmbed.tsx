"use client";

import { useEffect, useRef } from "react";

const ACCOUNT_ID = "S99KMyNq";

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
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    if (!containerRef.current) return;

    // Strategy 1: Try the global script rescan
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.vidalytics_embeds === "function") {
      win.vidalytics_embeds();
      // Check if it actually injected something after a moment
      setTimeout(() => {
        if (
          containerRef.current &&
          containerRef.current.children.length === 0
        ) {
          loadPerVideoScript();
        }
      }, 1000);
    } else {
      // Strategy 2: Load the per-video embed script directly
      loadPerVideoScript();
    }

    function loadPerVideoScript() {
      if (scriptLoaded.current) return;
      scriptLoaded.current = true;

      const script = document.createElement("script");
      script.src = `https://fast.vidalytics.com/embeds/${ACCOUNT_ID}/${videoId}`;
      script.async = true;
      containerRef.current?.parentElement?.appendChild(script);
    }

    return () => {};
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
