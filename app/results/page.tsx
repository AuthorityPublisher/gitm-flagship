import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { CalendlyButton } from "@/components/CalendlyButton";
import { VidalyticsEmbed } from "@/components/VidalyticsEmbed";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Results | The Ghost Factory",
  description:
    "Real deployments, real results. Case studies and proof from businesses built by The Ghost Factory.",
  openGraph: {
    title: "Results | The Ghost Factory",
    description:
      "Real deployments, real results. Case studies and proof from businesses built by The Ghost Factory.",
    url: "https://gitm.ai/results",
    siteName: "The Ghost Factory",
    type: "website",
  },
};

const proofPoints = [
  { label: "Acupuncture clinic revenue", value: "$3M+" },
  { label: "Hotel venture revenue", value: "$3.5M" },
  { label: "Dean Chitren partnership", value: "$380K+" },
  { label: "TCF generated", value: "$27K" },
  { label: "RTD email subscribers", value: "17,000+" },
  { label: "Dr. Nick Instagram", value: "297K followers" },
  { label: "PRM proven buyers", value: "321" },
  { label: "PRM YouTube testimonials", value: "30+ videos" },
  { label: "PRM global reach", value: "Dubai, Phoenix racehorses" },
  { label: "Patients treated", value: "10,000+" },
  { label: "Sales collected", value: "$1M+" },
  { label: "Objection Box Elite", value: "#1 all-time" },
  { label: "Education invested", value: "$250K+" },
  { label: "Frank Kern ROI", value: "$15K in, $7K back in 3 days" },
  { label: "Stacey launch", value: "$100K in 4 days, 2,100-person list" },
  { label: "KTWO news features", value: "Monthly for 8 years" },
  { label: "Judi Laird", value: "Mayor of Casper, Wyoming" },
];

export default function ResultsPage() {
  return (
    <div className="pt-16">
      {/* ========================================== */}
      {/* SECTION 1: HERO                            */}
      {/* ========================================== */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Deployed. Documented. Done.
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Real Deployments. Real Results.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Every number on this page comes from a real business, built by a
            real person, deployed by The Ghost Factory.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: CASE STUDIES                    */}
      {/* ========================================== */}
      <section className="bg-warm py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Deployments in the Wild"
            subtitle="These are not hypotheticals. Each business was built, launched, and is generating real revenue right now."
          />

          {/* ---- Case 1: DR. NICK (FEATURED - INFLUENCER) ---- */}
          <div className="mt-20 rounded-2xl border-2 border-gold/30 bg-white p-8 sm:p-12 shadow-lg">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-dark">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  Featured Deployment
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl">
                  Dr. Nick - Metabolic Sleep
                </h3>
                <p className="mt-2 text-base font-medium text-gold-dark">
                  The Fittest Doc - 297K Instagram followers
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Complete digital ecosystem built from scratch for a doctor with
                  a massive following but no monetization infrastructure. The Ghost
                  Factory deployed a Whop store with a three-tier offer stack: $27
                  core program, $47 group Zoom coaching, and $150 private calls.
                  From zero digital products to a fully operational storefront.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                    297K followers
                  </span>
                  <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                    3-tier offer stack
                  </span>
                  <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                    Built from scratch
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/thefittestdoc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                  >
                    @thefittestdoc &rarr;
                  </a>
                  <a
                    href="https://whop.com/thefittestyou/metabolicsleep/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                  >
                    The Fittest You (Whop) &rarr;
                  </a>
                  <a
                    href="https://metabolicsleep.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                  >
                    metabolicsleep.com &rarr;
                  </a>
                </div>
              </div>
              <div>
                <VidalyticsEmbed embedId="enNAveCaLlbp_LmT" />
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Dr. Nick - The Fittest Doc - Metabolic Sleep
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider my-16" />

          {/* ---- Case 2: RTD ---- */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-dark">
                Weight Loss Coaching
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                RTD - Rethink Dieting
              </h3>
              <p className="mt-2 text-sm font-medium text-gold-dark">
                Alan &amp; Angie Thomas
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Math-based weight loss coaching with a 5+ year partnership with
                Jason. The Ghost Factory built a calculator funnel and complete
                coaching platform in 10 days. From intake to launch, the entire
                digital infrastructure was deployed while Alan and Angie focused
                on coaching their community.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  17,000+ email subscribers
                </span>
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  10-day build
                </span>
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  5+ year partnership
                </span>
              </div>
              <a
                href="https://rethinkdieting.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                Visit rethinkdieting.org &rarr;
              </a>
            </div>
            <div>
              <VidalyticsEmbed embedId="ICoXowf3GsFp9QGL" />
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Alan &amp; Angie Thomas - Rethink Dieting
              </p>
            </div>
          </div>

          <div className="section-divider my-16" />

          {/* ---- Case 3: Dean Chitren ---- */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-dark">
                High-Ticket Golf
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                Dean Chitren - Low 70s Golf
              </h3>
              <p className="mt-2 text-sm font-medium text-gold-dark">
                6-7 year partnership
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Jason was tip of the spear for this high-ticket golf coaching
                operation, engineering the entire funnel from lead capture to
                $10K-$17K program enrollment. Over six to seven years, the
                partnership generated more than $380K. This same infrastructure
                model later deployed Chase Cooper&apos;s Golf Breath Mastery,
                combining veteran discipline with breath work for golfers.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  $380K+ generated
                </span>
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  $10K-$17K programs
                </span>
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  6-7 year run
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://droptenstrokes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                >
                  droptenstrokes.com &rarr;
                </a>
                <a
                  href="https://golfbreathmastery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                >
                  golfbreathmastery.com &rarr;
                </a>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-navy text-center">
                  $380K+
                </p>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Generated over 6-7 year partnership
                </p>
                <div className="section-divider my-6" />
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Dean Chitren - Low 70s Golf
                    </p>
                    <p className="text-sm text-muted-foreground">
                      High-ticket golf coaching. $10K-$17K programs.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Chase Cooper - Golf Breath Mastery
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Veteran. Breath work for golfers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider my-16" />

          {/* ---- Case 4: TCF ---- */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                      $27K
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Revenue generated
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                      $11K
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Active pipeline
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold-dark">
                      2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Funnel architecture
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold-dark">
                      CPA
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Diagnostic portal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-dark">
                Forensic Bookkeeping
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                TCF - The Cleanup Firm
              </h3>
              <p className="mt-2 text-sm font-medium text-gold-dark">
                Amber Laird
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Forensic bookkeeping for CPAs. The Ghost Factory engineered a
                two-funnel architecture: CPAs acquired through LinkedIn, business
                owners through Facebook and paid ads. A CPA portal with a
                diagnostic calculator gives referring accountants a professional
                tool to evaluate client situations before making introductions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  $27K generated
                </span>
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  $11K active pipeline
                </span>
                <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-gold">
                  Two-funnel system
                </span>
              </div>
              <a
                href="https://thecleanupfirm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                Visit thecleanupfirm.com &rarr;
              </a>
            </div>
          </div>

          <div className="section-divider my-16" />

          {/* ---- Video Testimonials ---- */}
          <div>
            <SectionHeading
              eyebrow="Testimonials"
              title="Straight from the People We Deployed"
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <VidalyticsEmbed embedId="LifjrhoT5ZeI2shI" />
                <div className="mt-4">
                  <p className="font-semibold text-foreground">
                    Alan &amp; Angie Thomas
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Full Testimonial - Rethink Dieting
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <VidalyticsEmbed embedId="IKYcyCuITCMFAC8l" />
                <div className="mt-4">
                  <p className="font-semibold text-foreground">Coach Beau</p>
                  <p className="text-sm text-muted-foreground">
                    Video Testimonial
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <VidalyticsEmbed embedId="iQEdr0M4GRnu7qsD" />
                <div className="mt-4">
                  <p className="font-semibold text-foreground">
                    Dr. Mrinalini Garv
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Video Testimonial
                  </p>
                </div>
              </div>
              <TestimonialCard
                quote="Got us redirected to really get out there and sell our high-ticket radical change coaching program to a million people."
                name="Dr. Mary Oz"
                role="Radical Change Coaching"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: PRM SPRAY - FOUNDING SPONSOR    */}
      {/* ========================================== */}
      <section className="navy-gradient py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Founding Sponsor"
            title="PRM Spray"
            subtitle="Created for Jason's mother, Judi Laird, Mayor of Casper, Wyoming. A legacy product born from love, built with Master Herbology training, and proven across the globe."
            light
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Origin Story */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                <span className="text-lg text-gold">1</span>
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                The Origin
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Jason created PRM for his mother Judi Laird&apos;s arthritis
                using his Master Herbology certification. What started as a
                family remedy became a product with 321 proven buyers and
                documented results across continents.
              </p>
            </div>

            {/* Dubai Connection */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                <span className="text-lg text-gold">2</span>
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                Dubai and Beyond
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Jason traveled to Dubai to make PRM for a Sheikh. Randy Colton,
                a jockey in Phoenix, AZ, used PRM on racehorses. Wendell Matt
                treated racehorse Dancefourseven&apos;s ankle injury with it.
                From the desert to the racetrack.
              </p>
            </div>

            {/* Medical Proof */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                <span className="text-lg text-gold">3</span>
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                Documented Results
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Denver doctors documented tissue regeneration. Dr. Lisa Hall
                used PRM for a dislocated shoulder. Over 30 YouTube testimonial
                videos catalog real people with real outcomes. No actors. No
                scripts.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://prmspray.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient rounded-lg px-6 py-3 text-sm font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Visit prmspray.com
            </a>
            <a
              href="https://youtube.com/@Painreliefmiracle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gold text-gold px-6 py-3 text-sm font-semibold transition-all hover:bg-gold hover:text-navy"
            >
              30+ YouTube Testimonials &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: PROOF POINTS TABLE              */}
      {/* ========================================== */}
      <section className="bg-warm py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="By the Numbers"
            title="The Full Scorecard"
            subtitle="Across every vertical, every partnership, every deployment. These are the receipts."
          />

          {/* Objection Box Leaderboard Screenshot */}
          <div className="mx-auto mb-12 mt-12 max-w-2xl">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-gold-dark">
              Bill Walsh Objection Box Elite - #1 All 3 Leaderboards
            </p>
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <Image
                src="/images/objection-box-leaderboards.jpg"
                alt="Jason Laird - #1 on all 3 Objection Box Elite leaderboards"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full">
              <tbody>
                {proofPoints.map((point, i) => (
                  <tr
                    key={point.label}
                    className={`${
                      i % 2 === 0 ? "bg-card" : "bg-muted/30"
                    } transition-colors hover:bg-gold/5`}
                  >
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {point.label}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-bold text-navy">
                      {point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Results vary. These figures represent specific outcomes across
            multiple businesses and partnerships over several years.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: CTA                             */}
      {/* ========================================== */}
      <section className="navy-gradient py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Your Turn"
            title="Want Results Like These?"
            subtitle="You have the expertise. You have the audience. You just need the infrastructure to capture what you have already built. The Ghost Factory deploys it."
            light
          />
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalendlyButton
              text="Book a Call"
              variant="gold"
              size="lg"
            />
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gold px-8 py-4 text-base font-semibold text-gold transition-all hover:bg-gold hover:text-navy"
            >
              Apply for Deployment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
