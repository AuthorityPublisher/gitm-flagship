import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { VidalyticsEmbed } from "@/components/VidalyticsEmbed";

export const metadata: Metadata = {
  title: "Thank You | The Ghost Factory",
  description:
    "Your application has been received. Here is what happens next in your Ghost Deployment.",
  openGraph: {
    title: "Thank You | The Ghost Factory",
    description:
      "Application received. We will review and respond within 24-48 hours.",
    url: "https://gitm.ai/thank-you",
    siteName: "The Ghost Factory",
    type: "website",
  },
};

const nextSteps = [
  {
    number: "01",
    title: "We Listen to Your Idea or Business",
    description:
      "You talk. We take notes. We want to understand what you have built, what you are trying to build, and what is standing in the way.",
  },
  {
    number: "02",
    title: "We Assess Fit Honestly",
    description:
      "Not every opportunity is right for The Ghost Factory. If we are not the best fit, we will tell you directly and point you in the right direction.",
  },
  {
    number: "03",
    title: "We Map Out Your Deployment in Real Time",
    description:
      "If there is a fit, we will sketch your deployment architecture on the call. Positioning, tech stack, value ladder, launch sequence - all of it, right there.",
  },
  {
    number: "04",
    title: "No Pressure. No Pitch. Just Clarity.",
    description:
      "You will leave the call knowing exactly what needs to happen, whether we are the ones to do it, and what it will cost. Straight answers only.",
  },
];

export default function ThankYouPage() {
  return (
    <div className="pt-16">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Application Received
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            You&apos;re In.{" "}
            <span className="text-gold-gradient">
              Here&apos;s What Happens Next.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Your application has been received. We review every submission
            personally and will get back to you within 24-48 hours.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: WHAT TO EXPECT
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Call"
            title="What to Expect on Our Call"
          />

          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {nextSteps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy">
                  <span className="text-sm font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 3: TESTIMONIAL VIDEOS
          ============================================ */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real People. Real Deployments."
            title="Hear From People Who Have Been Where You Are"
            light
          />

          {/* Alan & Angie */}
          <div className="mt-16">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gold-light">
              Alan &amp; Angie Thomas - Rethink Dieting
            </p>
            <VidalyticsEmbed
              embedId="LifjrhoT5ZeI2shI"
              className="shadow-2xl shadow-black/40"
            />
            <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-white/50">
              Five years working together. 17,000 subscribers. A full deployment
              built on real content and real systems.
            </p>
          </div>

          {/* Coach Beau */}
          <div className="mt-20">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gold-light">
              Coach Beau
            </p>
            <VidalyticsEmbed
              embedId="IKYcyCuITCMFAC8l"
              className="shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 4: REFERRAL CTA
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Spread the Word"
            title="Know Someone Who Needs This?"
          />

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            If you know an expert, influencer, or business owner sitting on
            untapped potential, send them to{" "}
            <Link
              href="/"
              className="font-semibold text-gold-dark underline underline-offset-2 transition-colors hover:text-gold"
            >
              gitm.ai
            </Link>
            . Every deployment we take on gets our full attention. The right
            referral makes a difference.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 5: PRM SPONSOR
          ============================================ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Founding Sponsor
          </p>
          <a
            href="https://prmspray.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy transition-colors hover:text-gold-dark"
          >
            PRM Spray
          </a>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Made for one mother. Used by racehorses, Dubai royalty, and
            thousands of people who needed something that actually worked. The
            permanent founding sponsor of The Ghost Factory.
          </p>
          <a
            href="https://prmspray.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-gold-dark underline underline-offset-2 transition-colors hover:text-gold"
          >
            prmspray.com
          </a>
        </div>
      </section>
    </div>
  );
}
