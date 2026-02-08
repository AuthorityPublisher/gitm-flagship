import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { CalendlyButton } from "@/components/CalendlyButton";
import { VidalyticsEmbed } from "@/components/VidalyticsEmbed";

export const metadata: Metadata = {
  title: "About Jason Laird | The Ghost Factory",
  description:
    "The real story behind The Ghost Factory. From a $3M clinic in Wyoming to losing everything, to building a system that deploys businesses from the inside out.",
  openGraph: {
    title: "About Jason Laird | The Ghost Factory",
    description:
      "From a $3M clinic to losing everything to building The Ghost Factory. This is what actually happened.",
    url: "https://gitm.ai/about",
    siteName: "The Ghost Factory",
    type: "website",
  },
};

interface TimelineBeat {
  marker: string;
  title: string;
  content: React.ReactNode;
}

const timelineBeats: TimelineBeat[] = [
  {
    marker: "Casper, WY",
    title: "Rising Lotus Wellness Center",
    content: (
      <>
        <p>
          Jason built Rising Lotus Wellness Center into a $3M acupuncture clinic
          in Casper, Wyoming. Twenty patients a day. Over 10,000 treated across
          two decades. He earned his Master of Science in Oriental Medicine and
          became a Licensed Acupuncturist (MSOM, L.Ac., now retired) from AOMA.
        </p>
        <p className="mt-3">
          KTWO News featured him monthly for eight consecutive years. He was the
          guy people called when nothing else worked.
        </p>
      </>
    ),
  },
  {
    marker: "Mom",
    title: "PRM Spray Was Made for One Person",
    content: (
      <>
        <p>
          His mother, Judi Laird, was putting store-bought topical on her
          arthritic joints 10+ times a day. No relief. Jason used his Master
          Herbology training to create something that actually worked.
        </p>
        <p className="mt-3">
          It took four weeks. Not four years. Not a lab. Not venture capital. A
          son who refused to watch his mother hurt.
        </p>
      </>
    ),
  },
  {
    marker: "Hotels",
    title: "The Extended Stay Venture",
    content: (
      <p>
        Jason partnered with Serge D&apos;Elia to build an extended stay hotel
        operation. $3.5M in revenue. A real business with real infrastructure.
        Things were working.
      </p>
    ),
  },
  {
    marker: "The Fall",
    title: "Everything Gone",
    content: (
      <>
        <p>
          A trusted associate turned. A lightning strike destroyed the hotel.
          Eighty-two hotels and Airbnbs, gone. Down to $1,200 in the bank with
          two small kids and his wife Amber in crisis.
        </p>
        <p className="mt-3">
          They moved to Florida. Three months later, COVID shut the world down.
        </p>
      </>
    ),
  },
  {
    marker: "8 Years",
    title: "The Rebuild",
    content: (
      <>
        <p>
          Over $250K invested in education. Stefan Georgi (RMBC II). Bill Walsh,
          where Jason became #1 ALL-TIME in Objection Box Elite. Perry Belcher.
          John Benson. Frank Kern - $15K invested, made $7K back in three days.
          Dan Kennedy. Ryan Deiss. Russell Brunson.
        </p>
        <p className="mt-3">
          He used a toilet as a chair and a sink as a desk, closing high-ticket
          deals from hotel bathrooms. That is not a metaphor.
        </p>
      </>
    ),
  },
  {
    marker: "Proof",
    title: "$100K in Four Days",
    content: (
      <>
        <p>
          Jason helped Stacey generate $100K in four days from a 2,100-person
          email list. He built the entire system by hand and made 20%.
        </p>
        <p className="mt-3">
          That was the moment it clicked: the SYSTEM works. Doing it by hand
          does not scale.
        </p>
      </>
    ),
  },
  {
    marker: "Sales",
    title: "#1 on Every Leaderboard",
    content: (
      <>
        <p>
          Number one on ALL THREE leaderboards in Objection Box Elite. Seventy-seven
          points. 3.5x the person in second place. Top 3 closer on a team doing
          $2.7M per month.
        </p>
        <p className="mt-3">
          He sold across golf, weight loss, marriage, health, affiliate, and for
          Cheryl Hunter. Every vertical, every audience, every close - all by
          hand.
        </p>
      </>
    ),
  },
  {
    marker: "Judi",
    title: "Mayor of Casper, Wyoming",
    content: (
      <>
        <p className="text-gold/90 italic font-[family-name:var(--font-playfair)]">
          Judi Laird. May 5, 1948 - September 6, 2024.
        </p>
        <p className="mt-3">
          Jason released her ashes at New Smyrna Beach, then renewed his vows
          with Amber. Sterling (10) and Rogan (12) were there.
        </p>
        <p className="mt-3">
          PRM was created for her. She lives in the product, in the ocean, in
          the renewal.
        </p>
      </>
    ),
  },
  {
    marker: "Global",
    title: "From Wyoming to Dubai",
    content: (
      <>
        <p>
          Jason made PRM for a Sheikh in Dubai. Randy Colton, a racehorse jockey
          in Phoenix, started using it on racehorses. Wendell Matt treated a
          racehorse named Dancefourseven for an ankle injury.
        </p>
        <p className="mt-3">
          From a kitchen in Wyoming to Dubai royalty and Phoenix racing stables.
          A product made for one mother.
        </p>
      </>
    ),
  },
  {
    marker: "The Brain",
    title: "The Executive Function Awakening",
    content: (
      <p>
        The kind of brain that can see the entire system in one flash, then
        cannot remember to send the follow-up email. Not a diagnosis. Not a
        label. A recognition that his brain works differently, and that the gap
        between vision and execution is where most entrepreneurs lose
        everything.
      </p>
    ),
  },
  {
    marker: "Origin",
    title: "The Ghost Factory Was Born",
    content: (
      <>
        <p>
          Jason built it with Amber because he had to purge his mind of
          everything in it. The constant stream of ideas. The visionary thinking
          that never stops. He needed a system to DEPLOY what was in his head
          instead of leaving it there.
        </p>
        <p className="mt-4 text-lg font-medium text-gold">
          &ldquo;I needed a system to deploy what&apos;s in my head.&rdquo;
        </p>
        <p className="mt-2">
          The Ghost Factory IS that system.
        </p>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            The Real Story
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Story Behind{" "}
            <span className="text-gold-gradient">The Ghost Factory</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Not a pitch deck. This is what actually happened.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: THE ARC - Timeline
      ═══════════════════════════════════════════════ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Arc"
            title="Built, Lost, Rebuilt, Deployed"
            subtitle="Every beat of this story is documented. Every number is real."
          />

          <div className="relative mt-16">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent sm:block" />

            <div className="space-y-12 sm:space-y-16">
              {timelineBeats.map((beat, index) => (
                <div key={index} className="relative sm:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-1 hidden h-5 w-5 items-center justify-center sm:flex">
                    <div className="h-3 w-3 rounded-full border-2 border-gold bg-warm" />
                  </div>

                  {/* Marker badge */}
                  <div className="mb-3 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {beat.marker}
                  </div>

                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
                    {beat.title}
                  </h3>

                  <div className="mt-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
                    {beat.content}
                  </div>

                  {/* Divider between beats */}
                  {index < timelineBeats.length - 1 && (
                    <div className="section-divider mt-12 sm:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════════════
          SECTION 3: THE CONVERSION STORY
      ═══════════════════════════════════════════════ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,67,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            The Foundation
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why It&apos;s Called &ldquo;Ghost&rdquo;
          </h2>

          <div className="mx-auto mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Jason met The Lord in the shower. He felt the full weight of His
              presence. Not a business pivot. Not a rebranding exercise. A
              spiritual transformation that rewired everything.
            </p>
            <p>
              The name &ldquo;Ghost&rdquo; comes from the Holy Spirit. This is
              identity, not branding. The company was built from the inside out
              because that is how Jason was rebuilt.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-xl border border-gold/20 bg-white/5 px-6 py-8 backdrop-blur-sm sm:px-10">
            <p className="font-[family-name:var(--font-playfair)] text-xl italic leading-relaxed text-gold sm:text-2xl">
              &ldquo;But seek first his kingdom and his righteousness, and all
              these things will be given to you as well.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-white/50">
              Matthew 6:33
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: THE STARFISH STORY
      ═══════════════════════════════════════════════ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Starfish"
            title="It Made a Difference for That One"
          />

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold/20 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>
                A grandfather and his granddaughter walk along a beach covered
                with thousands of stranded starfish.
              </p>
              <p>
                The girl picks one up and throws it back into the ocean.
              </p>
              <p>
                The grandfather looks at the thousands still on the sand.
                &ldquo;There are too many. What difference will it
                make?&rdquo;
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-navy sm:text-2xl">
                She picks up another one, throws it back, and says:
                &ldquo;It made a difference for that one.&rdquo;
              </p>
            </div>

            <div className="section-divider mx-auto mt-8 max-w-xs" />

            <p className="mt-8 text-base text-foreground/60">
              The Ghost Factory does not try to save every starfish. It deploys
              businesses one at a time, and each one matters.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════════════
          SECTION 5: VIDEO TESTIMONIAL
      ═══════════════════════════════════════════════ */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonial"
            title="Hear It From Dr. Nick"
            subtitle="A real deployment. A real result."
            light
          />

          <div className="mt-12">
            <VidalyticsEmbed
              videoId="JHNBBRwjatnIdLG8"
              className="shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6: CTA
      ═══════════════════════════════════════════════ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Next Step"
            title="Your Move"
            subtitle="If any part of this story sounds like yours, we should talk."
          />

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <CalendlyButton
              text="Book a Call"
              variant="gold"
              size="lg"
            />
            <Link
              href="/results"
              className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              See the Results
            </Link>
          </div>

          <p className="mt-8 text-sm text-foreground/50">
            No pitch. No pressure. Just a conversation about whether The Ghost
            Factory is the right fit for what you are building.
          </p>
        </div>
      </section>
    </div>
  );
}
