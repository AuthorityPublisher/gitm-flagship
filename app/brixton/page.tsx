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
          HERO - Personal Message + Video
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

          {/* Portrait Video */}
          <div className="mx-auto mt-10 max-w-sm">
            <VidalyticsEmbed
              videoId={BRIXTON_VIDEO_ID}
              aspectRatio="177.78%"
              className="rounded-2xl border-2 border-gold/20 shadow-2xl shadow-black/40"
            />
            <p className="mt-3 text-center text-xs text-white/40">
              3:47 - Watch on mobile for best experience
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE REAL STORY
          ============================================ */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
              I have been in golf for years. Dean Chitren and I worked together
              for over six years.
            </p>

            <p>
              I was tip of the spear for his high-ticket coaching operation. Low
              70s Golf. $10K to $17K program enrollment. I built every funnel,
              wrote every piece of copy, closed every deal. Over six to seven
              years together, we generated more than $380K. All of it by hand.
            </p>

            <p>
              Chase Cooper was the same approach, different angle. Veteran.
              Breath work methodology applied specifically to golf. I built his
              operation the same way I built Dean&apos;s. Manually.
            </p>

            <p>
              That was not the only vertical. Weight loss. Health. Affiliate
              marketing. I have been interviewed on the news hundreds of times
              for my clinic. Over 10,000 patients treated. I could always see the
              entire project the second I heard the idea. The positioning, the
              funnel, the revenue model, the exit strategy. All of it, instantly.
            </p>

            <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
              But I could not get it out of my head fast enough.
            </p>

            <p>
              Which email to send. What color the button should be. Which
              platform to use. I would see the whole thing and then get buried in
              the production. The vision was never the problem. The execution
              was. And that gap between what I could see and what I could ship
              was costing me every single day.
            </p>

            <p>
              So starting in November, I stopped building businesses by hand and
              started building the system that builds businesses.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          WHAT I ACTUALLY BUILT
          ============================================ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
              I named it Atlas. It handles 90%. I handle 10%.
            </p>

            <p>
              Atlas is an AI-powered deployment system. I feed it an idea and an
              expert&apos;s DNA - their methodology, their stories, their
              competitive advantages, their customer language. Atlas handles the
              research, the positioning, the copy, the funnels, the email
              sequences, the payment integrations, the compliance review, and the
              automation. My role dropped from doing everything to providing the
              strategy, the direction, and the final approval.
            </p>

            <p>
              I did not build this as a theory. I built it by deploying real
              businesses, live, with real people. That is the only way I would
              trust it.
            </p>

            <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
              Here is what happened in the first 90 days.
            </p>
          </div>

          {/* Real deployments - honest, specific */}
          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-border bg-warm p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                Rethink Dieting - Complete Deployment in 10 Days
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Alan and Angie had a proven weight loss method and an existing
                audience. What they did not have was infrastructure. In 10 days
                (January 9-18, 2026), Atlas deployed a personalized calculator,
                VSL integration, a 3-email follow-up sequence, a 7-email nurture
                sequence, Stripe payment processing, and 19 product tier copy
                packages ranging from $7 to $97. Their first email blast to
                their existing list generated immediate optins. The system is
                live and converting.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                PRM Spray - $1,155 in 4 Days from a Dead List
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A shingles topical spray I created for my mother, Judi Laird,
                Mayor of Casper, Wyoming, before she passed in 2024. The product
                had been sitting dormant. The email list was six years old.
                Nobody thought it was still alive. Atlas built the launch
                sequence, and within four days of the first send, $1,155 in
                revenue from a list everyone had written off.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                The Cleanup Firm - Model Validated in One Transaction
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                My wife Amber&apos;s bookkeeping cleanup business. Atlas built
                the positioning, the CRM pipeline, and the partner acquisition
                strategy. The very first cleanup generated $3,690 in revenue and
                created an ongoing $300/month recurring client for the partner.
                The model proved out on the first transaction.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                WellnessPI - Full SaaS Application from Scratch
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Built from 37 years of clinical experience. A substance testing
                platform with a 47,109-substance database, the largest in the
                industry. Patient management, protocol builder, progressive web
                app for iOS and Android. From concept to working software,
                deployed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          DR. NICK - SHOW DON'T TELL
          ============================================ */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-base leading-relaxed text-foreground/80">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
              Dr. Nick had 297K followers and no revenue infrastructure.
            </p>
            <p>
              He is a physician with a massive Instagram following. People trust
              him. They watch his content. But there was no system turning that
              attention into a business. I sat down with him, extracted his
              clinical DNA - his methodology, his unique protocols, his
              patient language - and built the full product and revenue system
              behind it. This is what the output looks like.
            </p>
          </div>

          <div className="mt-8">
            <VidalyticsEmbed
              videoId="JHNBBRwjatnIdLG8"
              className="shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          PROOF - OBJECTION BOX
          ============================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-base leading-relaxed text-foreground/80">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
              I close deals. That is not a claim. It is documented.
            </p>
            <p>
              Bill Walsh&apos;s Objection Box Elite is a sales training program
              where you go head-to-head handling live objections. Money
              objections. Stall objections. Decision maker objections. Three
              leaderboards. I am #1 on all three.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
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
          THE POINT
          ============================================ */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
              Why I am sending this to you.
            </p>

            <p>
              I spent six years in the golf space building by hand. That is how I
              know the market, the language, the objections, and what moves
              golfers to buy. That manual experience is what I fed into Atlas. It
              is the foundation the system was built on.
            </p>

            <p>
              What used to take me months now deploys in days. The same quality.
              The same positioning discipline. The same compliance rigor. But at
              a speed that was not possible when every email and every funnel was
              written by one person at a keyboard.
            </p>

            <p>
              I do not know exactly what your operation needs. I do not know what
              Performance Golf looks like on the inside. But I know the golf
              space. I know what it takes to move someone from a free video to a
              high-ticket enrollment. And I have a system that can deploy that
              infrastructure faster than any agency or team you could assemble.
            </p>

            <p>
              That is it. No pitch. I just wanted you to see what exists and
              decide for yourself whether a conversation makes sense.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          CTA
          ============================================ */}
      <section className="navy-gradient py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            If you want to talk, pick a time.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
            Or reply to Amber and we will set something up directly.
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
