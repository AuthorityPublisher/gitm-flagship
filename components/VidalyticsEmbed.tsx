"use client";

import { useEffect, useRef } from "react";

const VIDALYTICS_ACCOUNT_ID = "S99KMyNq";

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
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;
    injectedRef.current = true;

    // Vidalytics requires a per-video IIFE that loads loader.min.js and
    // player.min.js from the embed URL. The global script (layout.tsx)
    // handles tracking/cookies but does NOT render videos by itself.
    // This is the exact IIFE pattern from the Vidalytics dashboard.
    const embedId = `vidalytics_embed_${videoId}`;
    const baseUrl = `https://fast.vidalytics.com/embeds/${VIDALYTICS_ACCOUNT_ID}/${videoId}/`;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
      (function (v, i, d, a, l, y, t, c, s) {
        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl+'Script'],vlf=v[c][vl+'Loaded'],ve='Embed';
        if(!vsl){vsl=function(u,cb){
          if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
          if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
          i.getElementsByTagName("head")[0].appendChild(s);
        };}
        vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', '${embedId}', '${baseUrl}');
    `;

    // Insert right after the embed div
    containerRef.current?.parentElement?.appendChild(script);

    return () => {
      script.remove();
    };
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
