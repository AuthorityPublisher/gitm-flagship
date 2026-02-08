import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Ghost Factory | You bring the expertise. We deploy the machine.",
  description:
    "Drop anything in. Get a business out. The Ghost Factory deploys scalable, exit-ready businesses for experts, influencers, and visionary entrepreneurs.",
  keywords: [
    "ghost factory",
    "business deployment",
    "executive function",
    "AI business builder",
    "done for you business",
  ],
  openGraph: {
    title: "The Ghost Factory | You bring the expertise. We deploy the machine.",
    description:
      "Drop anything in. Get a business out. AI-powered business deployment for experts and visionaries.",
    url: "https://gitm.ai",
    siteName: "The Ghost Factory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ghost Factory",
    description:
      "Drop anything in. Get a business out. AI-powered business deployment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://fast.vidalytics.com/js/global.min.js"
          id="vid_glb_S99KMyNq"
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
