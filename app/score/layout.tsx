import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Execution Gap Score | The Ghost Factory",
  description:
    "Take the free Execution Gap Score. 8 questions, 2 minutes. Find out if your business infrastructure matches your expertise.",
  openGraph: {
    title: "Execution Gap Score | The Ghost Factory",
    description:
      "8 questions. 2 minutes. Find out if your business infrastructure matches your expertise.",
    url: "https://gitm.ai/score",
    siteName: "The Ghost Factory",
    type: "website",
  },
};

export default function ScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
