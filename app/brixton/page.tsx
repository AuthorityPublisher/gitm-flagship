"use client";

import Link from "next/link";
import Image from "next/image";
import { VidalyticsEmbed } from "@/components/VidalyticsEmbed";

const BRIXTON_VIDEO_ID = "S3DFnlo5XtYrrZWc";

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

export default function BrixtonPage() {
  return (
    <div className="pt-16">
      {/* ============================================
          HERO - Lead with why this exists for Brixton
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-light">
            Built for Performance Golf
          </p>
          <h1 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Amber told me about your post in Nothing Held Back.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/70">
            It just so happens I actually built one of those for myself. I never
            intended to sell it to anybody. It was really just for me. Then I
            realized you might need the same thing.
          </p>
        </div>
      </section>

      {/* ============================================
          VIDEO - Let Jason tell the story
          ============================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
            I shot you a quick video. Three and a half minutes.
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/80">
            I explain how the system came together, what it actually does, and
            why it might matter for an operation like Performance Golf. No pitch.
            Just the real story.
          </p>

          <div className="mx-auto mt-8 max-w-sm">
            <VidalyticsEmbed
              videoId={BRIXTON_VIDEO_ID}
              aspectRatio="177.78%"
              className="rounded-2xl border-2 border-gold/20 shadow-2xl shadow-black/40"
            />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              3:47 - Watch on mobile for best experience
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          THE PROBLEM I SOLVED FOR MYSELF
          ============================================ */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
              I had the same problem you probably have.
            </p>

            <p>
              I can see the whole thing. The whole project, immediately. The
              offer, the funnel, the positioning, the content strategy, the
              backend automation. All of it, right there in my head. But then I
              get stuck on what email to send or what color of the website. And
              nothing ships.
            </p>

            <p>
              So I built a system that does it excellently from the beginning. It
              takes all those decisions away from me. I give it 10% of the
              effort: the strategy, the direction, the expertise. The system
              handles the other 90%. The research, the copy, the tech, the
              automation, the compliance. Everything.
            </p>

            <p>
              It takes an idea and turns it into a deployable business with an
              MVP. And it evaluates that MVP with real traffic and real
              purchasing signals before I commit serious resources to scaling
              it.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          WHAT IT WOULD LOOK LIKE FOR YOU
          ============================================ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
            What it would look like for Performance Golf.
          </p>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                Your DNA, Extracted
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I interview you. What I have really been able to do, across
                every deployment, is interview people to get their exact system.
                The methodology. The language. The competitive advantages. The
                stories. That DNA becomes the foundation for every piece of
                copy, every funnel, every email the system produces. It sounds
                like you. It sells like you. Because it is built from you.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                Market Positioning
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The golf instruction market is crowded. Everybody promises lower
                scores. The system maps your competitive landscape, identifies
                the positioning gaps your competitors leave open, and builds
                messaging that makes Performance Golf the obvious choice for
                your specific audience. Not generic. Not templated. Engineered
                for your market position.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                Full Revenue Infrastructure
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Website. VSL production. Lead magnets. Email automation. Stripe
                integration. Affiliate program. Product tiers from front-end
                offers through high-ticket enrollment. Compliance review on
                every claim. All of it built as one integrated system, not 15
                different tools duct-taped together.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                MVP First
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I learned this the hard way. My very first Authority Publisher
                project was an influencer. We did a lot of work, built the
                sites, did all the things by hand. When he went to send his
                email, we got 50 people from his Instagram to the site. That was
                a real kick in the nuts. So now the system deploys an MVP first.
                Real traffic. Real data. If it converts, we scale it. If it does
                not, we adjust before committing serious resources.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                Your Role: 10%
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You provide the expertise, the strategic direction, and the
                final approval. The system handles the other 90%. You stay in
                the zone that built Performance Golf in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          PROOF - What the system has actually deployed
          ============================================ */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
            This is what the system has deployed in its first 90 days.
          </p>
          <p className="mt-3 text-base text-foreground/70">
            I built it by building these. Each one is a real deployment, not a
            mockup.
          </p>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-border bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                Rethink Dieting - 10 Days from Interview to Live
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Alan and Angie had a proven weight loss method and an existing
                audience. No infrastructure. In 10 days the system deployed a
                personalized calculator, VSL integration, a 3-email follow-up
                sequence, a 7-email nurture sequence, Stripe payment processing,
                and 19 product tier copy packages from $7 to $97. First email
                blast generated immediate optins.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                PRM Spray - $1,155 in 4 Days from a Dead List
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A shingles topical spray I created for my mother, Judi Laird,
                Mayor of Casper, Wyoming, before she passed in 2024. The product
                had been sitting dormant. The email list was six years old.
                Nobody thought it was still alive. The system built the launch
                sequence. Four days later, $1,155 from a list everyone had
                written off.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                The Cleanup Firm - Model Validated on First Transaction
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Amber&apos;s bookkeeping cleanup business. The system built the
                positioning, the CRM pipeline, and the partner acquisition
                strategy. First cleanup: $3,690 in revenue and an ongoing
                $300/month recurring client. The model proved out on transaction
                one.
              </p>
            </div>
          </div>

          {/* Dr. Nick */}
          <div className="mt-12">
            <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
              Dr. Nick had 297K Instagram followers and no revenue
              infrastructure. I extracted his clinical DNA and built the full
              product and revenue system behind it.
            </p>
            <div className="mt-6">
              <VidalyticsEmbed
                videoId="JHNBBRwjatnIdLG8"
                className="shadow-2xl shadow-black/40"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          THE GOLF BACKGROUND
          ============================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
              Two of my clients are golfers. That is not a coincidence.
            </p>

            <p>
              Dean Chitren and I worked together for over six years. Low 70s
              Golf. I was tip of the spear for his high-ticket coaching
              operation. $10K to $17K program enrollment. Built every funnel,
              wrote every piece of copy, closed every deal. Over $380K
              generated together. All by hand, before this system existed.
            </p>

            <p>
              Chase Cooper was the same approach. Veteran. Breath work
              methodology applied specifically to golf. Different expert,
              different angle, same market.
            </p>

            <p>
              That manual experience across six years in golf is what taught me
              what to systematize. I know the objections. I know what moves
              golfers from a free video to a paid program. I know the
              difference between positioning that works in this market and
              positioning that sounds good in a meeting but dies on a landing
              page.
            </p>
          </div>

          {/* Objection Box */}
          <div className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <Image
                src="/images/objection-box-leaderboards.jpg"
                alt="Jason Laird - #1 on all 3 Objection Box Elite leaderboards"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Bill Walsh Objection Box Elite. #1 on all 3 leaderboards.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          CTA - Match the tone of the transcript
          ============================================ */}
      <section className="navy-gradient py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            I do not know if this would be good for you or helpful for you.
            But it is worth a shot.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
            No pitch. No deck. Just a conversation about what Performance Golf
            needs and whether this system can deliver it. Or reply to Amber and
            we will set something up directly.
          </p>
          <div className="mt-10">
            <button
              type="button"
              onClick={openCalendly}
              className="gold-gradient inline-flex items-center justify-center rounded-lg px-10 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
            >
              Book a Call with Jason
            </button>
          </div>
        </div>
      </section>

      {/* ============================================
          SITE LINK
          ============================================ */}
      <section className="bg-warm py-12">
        <div className="mx-auto max-w-xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            See everything The Ghost Factory does:
          </p>
          <Link
            href="/"
            className="mt-2 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
          >
            gitm.ai &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
