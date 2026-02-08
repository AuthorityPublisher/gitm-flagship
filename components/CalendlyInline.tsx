"use client";

import { useEffect, useRef } from "react";

interface CalendlyInlineProps {
  className?: string;
  height?: number;
}

export function CalendlyInline({
  className,
  height = 700,
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (win.Calendly && containerRef.current) {
      win.Calendly.initInlineWidget({
        url: "https://calendly.com/ghostoperator/offer",
        parentElement: containerRef.current,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: 320, height }}
    />
  );
}
