"use client";

import Link from "next/link";

const deploymentLinks = [
  { href: "https://rethinkdieting.com", label: "Rethink Dieting" },
  { href: "https://metabolicsleep.com", label: "Metabolic Sleep" },
  { href: "https://prmspray.com", label: "PRM Spray" },
];

const youtubeLinks = [
  {
    href: "https://www.youtube.com/@Painreliefmiracle",
    label: "PRM Spray (30+ Testimonials)",
  },
  {
    href: "https://www.youtube.com/@WellnessPi",
    label: "WellnessPI",
  },
];

function openCalendly() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  if (win.Calendly) {
    win.Calendly.initPopupWidget({
      url: "https://calendly.com/ghostoperator/offer",
    });
  } else {
    window.location.href = "https://calendly.com/ghostoperator/offer";
  }
}

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* PRM Founding Sponsor Bar */}
      <div className="border-b border-white/10 bg-navy-light">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-3 text-center text-sm">
          <span className="text-gold font-medium">Founding Sponsor:</span>
          <a
            href="https://prmspray.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 transition-colors hover:text-gold"
          >
            PRM Spray
          </a>
          <span className="text-white/50">-</span>
          <span className="text-white/60">
            Created for Jason&apos;s mother, Judi Laird, Mayor of Casper,
            Wyoming (1948-2024)
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
              The Ghost Factory
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              You bring the expertise. We deploy the machine.
            </p>
            <p className="mt-4 text-sm italic text-gold/80">
              &ldquo;Seek first his kingdom and his righteousness, and all these
              things will be given to you as well.&rdquo;
            </p>
            <p className="mt-1 text-xs text-white/40">Matthew 6:33</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm transition-colors hover:text-white"
              >
                About Jason
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm transition-colors hover:text-white"
              >
                How It Works
              </Link>
              <Link
                href="/results"
                className="text-sm transition-colors hover:text-white"
              >
                Results
              </Link>
              <Link
                href="/score"
                className="text-sm transition-colors hover:text-white"
              >
                Execution Gap Score
              </Link>
              <Link
                href="/apply"
                className="text-sm transition-colors hover:text-white"
              >
                Apply for Deployment
              </Link>
            </nav>
          </div>

          {/* Live Deployments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Live Deployments
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              {deploymentLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </nav>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/40">
              YouTube
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              {youtubeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Ready to Deploy?
            </h4>
            <p className="mt-4 text-sm text-white/60">
              Your expertise goes in. A scalable business comes out.
            </p>
            <button
              type="button"
              onClick={openCalendly}
              className="gold-gradient mt-4 inline-block rounded-lg px-6 py-3 text-sm font-semibold text-navy transition-all hover:shadow-lg cursor-pointer"
            >
              Book a Call
            </button>
          </div>
        </div>

        <div className="section-divider mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} The Ghost Factory. All rights
            reserved.
          </p>
          <p>Built with The Ghost Factory</p>
          <p className="max-w-md text-white/30">
            Earnings Disclaimer: Results vary. The testimonials and case studies
            on this site represent specific outcomes and are not typical. Your
            results will depend on your effort, market conditions, and many other
            factors.
          </p>
        </div>
      </div>
    </footer>
  );
}
