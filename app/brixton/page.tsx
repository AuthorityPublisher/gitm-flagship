"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// TODO: Replace with actual Vidalytics video ID once available from dashboard
const BRIXTON_VIDEO_ID = "PENDING_VIDEO_ID";

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
            Brixton, this was built for people like us.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-white/60">
            I never intended to sell this. I built it because I needed it. Then
            Amber told me about your post in Nothing Held Back, and I realized
            you need the same thing I did.
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
          SECTION 2: THE GOLF CONNECTION
          ============================================ */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Two of my clients are golfers
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
            This system was proven in golf first.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Dean Chitren */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-dark">
                High-Ticket Golf
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
                Dean Chitren - Low 70s Golf
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-dark">
                6-7 year partnership
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I was tip of the spear for this high-ticket golf coaching
                operation. Engineered the entire funnel from lead capture
                through $10K-$17K program enrollment. Over six to seven years,
                we generated more than $380K together.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  $380K+ generated
                </span>
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  $10K-$17K programs
                </span>
              </div>
            </div>

            {/* Chase Cooper */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-dark">
                Golf + Breath Work
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
                Chase Cooper - Golf Breath Mastery
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-dark">
                Veteran. Breath work for golfers.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Built using the same deployment infrastructure as Dean
                Chitren&apos;s operation. Veteran discipline combined with
                breath work methodology, positioned specifically for the golf
                market.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  Same infrastructure
                </span>
                <span className="rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  Golf-specific positioning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 3: WHAT THE SYSTEM DOES
          ============================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            The Ghost Factory
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
            From idea to deployed business. I handle 90%. You handle 10%.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            I built Atlas (my AI system) to do the research, the positioning,
            the copy, the funnels, the automation, and the deployment. That
            leaves you free to focus on what you actually do best.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Capture",
                desc: "I interview you. Extract your system, your stories, your expertise. Everything that makes your operation unique.",
              },
              {
                step: "2",
                title: "Validate",
                desc: "We test with real money before committing. MVP deployment, real traffic, real data. If it doesn't work, we know fast.",
              },
              {
                step: "3",
                title: "Build",
                desc: "Website, funnels, email automation, video pipeline, Stripe, affiliate program, compliance. All of it. In days.",
              },
              {
                step: "4",
                title: "Scale",
                desc: "Affiliate recruitment, content multiplication, paid traffic optimization, CRO. The flywheel that compounds.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border bg-warm p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                  {item.step}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 4: PROOF - Beyond Golf
          ============================================ */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            The Full Picture
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
            What this system produces.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { metric: "$380K+", label: "Generated with Dean Chitren (golf)" },
              { metric: "297K", label: "Dr. Nick Instagram followers" },
              { metric: "17,000+", label: "RTD email subscribers built" },
              { metric: "$27K", label: "TCF revenue generated" },
              { metric: "#1", label: "All-time on 3 leaderboards" },
              { metric: "10,000+", label: "Patients treated in practice" },
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
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 5: THE ASK
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
            No pitch. No pressure. Just a conversation about what you are
            building and whether this system could accelerate it. I already know
            the golf space. The infrastructure is proven. The question is
            whether we are the right fit.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/ghostoperator/offer"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient inline-flex items-center justify-center rounded-lg px-10 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Book a Call with Jason
            </a>
          </div>
          <p className="mt-6 text-xs text-white/40">
            Or reply to Amber and we will set something up directly.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 6: THE SITE
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
