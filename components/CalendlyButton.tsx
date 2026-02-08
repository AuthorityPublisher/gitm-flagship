"use client";

import { cn } from "@/lib/utils";

interface CalendlyButtonProps {
  text?: string;
  className?: string;
  variant?: "gold" | "navy" | "outline";
  size?: "sm" | "md" | "lg";
}

export function CalendlyButton({
  text = "Book a Call",
  className,
  variant = "gold",
  size = "md",
}: CalendlyButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all";

  const variants = {
    gold: "gold-gradient text-navy hover:shadow-lg hover:shadow-gold/20",
    navy: "bg-navy text-white hover:bg-navy-light",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-navy",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <a
      href="https://calendly.com/ghostoperator/offer"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, variants[variant], sizes[size], className)}
    >
      {text}
    </a>
  );
}
