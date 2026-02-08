"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    // Trigger Vidalytics rescan for dynamically mounted embeds
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.vidalytics_embeds === "function") {
      win.vidalytics_embeds();
    }
  }, []);

  return (
    <div className="pt-16">
      {/* ============================================
          SECTION 1: HERO - Personal Message
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-light">
            A Personal Message from Jason
          </p>
          <h1 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Brixton, I built this for the way my brain works. Yours might work
            the same way.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-white/60">
            Amber told me about your post in Nothing Held Back. I was not
            planning to sell this to anyone. I built it because I needed it. Then
            I realized you might need the same thing.
          </p>

          {/* Portrait Video - Mobile Optimized */}
          <div className="mx-auto mt-10 max-w-sm">
            <div className="overflow-hidden rounded-2xl border-2 border-gold/20 shadow-2xl shadow-black/40">
              <div
                id={`vidalytics_embed_${BRIXTON_VIDEO_ID}`}
                style={{
                  width: "100%",
                  position: "relative",
                  paddingTop: "177.78%",
                }}
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/40">
              3:47 - Watch on mobile for best experience
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: WHAT I ACTUALLY BUILT
          ============================================ */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            What This Actually Is
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
            I engineered a system that takes everything in my head and puts it
            into production.
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              I have been building businesses by hand for years. Golf, weight
              loss, health, affiliate marketing. I sold by hand. I built funnels
              by hand. I wrote copy by hand. And my brain would see the entire
              project the second I heard the idea, but I would get buried in the
              execution: which email to send, what color the button should be,
              which platform to use. The vision was never the problem. The
              production was.
            </p>
            <p>
              So starting in November, I built a deployment system called Atlas.
              It is an AI-powered infrastructure that handles the research, the
              positioning, the copy, the funnels, the email sequences, the
              payment integrations, the compliance, and the automation. I feed it
              the idea and the expert&apos;s DNA. It produces a deployable
              business.
            </p>
            <p>
              My role went from doing everything to providing 10% of the input:
              the strategy, the direction, and the approval. Atlas handles the
              other 90%. And I did not build this theoretically. I built it by
              deploying real businesses, live, with real clients generating real
              revenue.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-gold/20 bg-gold/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
              How It Works
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              I interview you to extract your system, your stories, your
              competitive advantages. Everything that makes your operation
              unique. Atlas maps the market positioning, identifies the gaps your
              competitors miss, builds the infrastructure, and deploys an MVP to
              validate with real traffic before we invest in the full build. If
              the MVP validates, we scale. If it does not, we have real data
              instead of assumptions, and nobody wasted six figures finding out.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 3: PROOF - THE GOLF CONNECTION
          ============================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            You Are Not My First Golfer
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
            Two of my longest-running deployments are in golf.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Dean Chitren */}
            <div className="rounded-2xl border border-border bg-warm p-8 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-dark">
                High-Ticket Golf Coaching
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
                Dean Chitren - Low 70s Golf
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-dark">
                6-7 year partnership
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I was the tip of the spear for Dean&apos;s high-ticket golf
                coaching operation. Engineered the entire funnel from lead
                capture through $10K-$17K program enrollment. Built the
                positioning that separated him from every other golf coach
                promising lower scores. Over six to seven years together, we
                generated more than $380K.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  $380K+ generated
                </span>
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  $10K-$17K programs
                </span>
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  Full funnel architecture
                </span>
              </div>
            </div>

            {/* Chase Cooper */}
            <div className="rounded-2xl border border-border bg-warm p-8 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-dark">
                Golf + Breath Work
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
                Chase Cooper - Golf Breath Mastery
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-dark">
                Veteran. Breath work methodology for golfers.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Built using the same deployment infrastructure as Dean
                Chitren&apos;s operation. Chase brought a unique angle: military
                discipline combined with breath work methodology, positioned
                specifically for the golf market. Same system, different expert,
                different niche within the same industry.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  Same infrastructure
                </span>
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  Golf-specific positioning
                </span>
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  Veteran-founded
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 4: FULL DEPLOYMENT PROOF
          ============================================ */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Beyond Golf
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
            This system deploys across verticals. Here is what it produces.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                metric: "$380K+",
                label: "Generated with Dean Chitren (golf)",
              },
              {
                metric: "297K",
                label: "Dr. Nick Instagram followers monetized",
              },
              { metric: "17,000+", label: "RTD email subscribers built" },
              { metric: "$27K", label: "TCF revenue - first 90 days" },
              {
                metric: "#1",
                label: "All-time on 3 Objection Box leaderboards",
              },
              {
                metric: "10,000+",
                label: "Patients treated in Jason's practice",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-white p-6 text-center"
              >
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                  {item.metric}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Dr. Nick Video - Real Deployment Example */}
          <div className="mx-auto mt-12 max-w-3xl">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Dr. Nick - A Real Ghost Factory Deployment
            </p>
            <p className="mx-auto mb-6 max-w-xl text-center text-sm text-muted-foreground">
              297K Instagram followers. We extracted his clinical DNA, validated
              with his audience, built the full product and revenue system. This
              is what the output looks like.
            </p>
            <VidalyticsEmbed
              videoId="JHNBBRwjatnIdLG8"
              className="shadow-2xl shadow-black/40"
            />
          </div>

          {/* Objection Box Screenshot */}
          <div className="mx-auto mt-12 max-w-2xl">
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
            <p className="mt-2 text-center text-xs text-muted-foreground">
              328 sessions logged. #1 across Money Objection, Stall
              Objection, and Decision Maker Objection.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 5: WHAT THIS COULD LOOK LIKE FOR YOU
          ============================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            For Performance Golf
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
            What a deployment could look like for your operation.
          </h2>

          <div className="mt-10 space-y-4">
            {[
              {
                title: "DNA Extraction",
                desc: "I interview you to capture everything: your methodology, your competitive edge, your customer language, your success stories. The system maps it against the market and identifies positioning opportunities your competitors are missing.",
              },
              {
                title: "Audience Validation",
                desc: "Before we build anything permanent, we deploy an MVP to your existing audience or a test segment. Real traffic, real data, real purchasing signals. If it works, we know exactly what to scale. If it does not, we adjust before committing resources.",
              },
              {
                title: "Full Infrastructure Build",
                desc: "Website, funnels, email automation, payment systems, affiliate program, video pipeline, compliance review. All of it. Engineered to work together as one system, not duct-taped from 15 different platforms.",
              },
              {
                title: "Launch and Optimization",
                desc: "Everything goes live simultaneously. Traffic hits tested pages. Automation handles follow-up. Conversion data flows back into optimization. The system compounds from day one.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-warm p-6"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-border bg-navy p-6 text-center">
            <p className="text-sm leading-relaxed text-white/70">
              I already know the golf space. The infrastructure is proven. The
              question is whether your operation is the right fit for this
              system, and the only way to figure that out is a conversation.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 6: THE ASK
          ============================================ */}
      <section className="navy-gradient py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Next Step
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Let&apos;s talk and see if this makes sense.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
            No pitch. No deck. Just a conversation about what you are building,
            where the gaps are, and whether this system could close them. Pick a
            time or reply to Amber and we will set something up directly.
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
          <p className="mt-6 text-xs text-white/40">
            Or reply to Amber and we will set something up directly.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 7: THE SITE
          ============================================ */}
      <section className="bg-warm py-12">
        <div className="mx-auto max-w-xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            See the full system, all case studies, and everything The Ghost
            Factory does:
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
