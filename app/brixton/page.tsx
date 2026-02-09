"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pt-16">
      {/* ============================================
          HERO + VIDEO
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-light">
            Built for Brixton Albert
          </p>
          <h1 className="mt-4 text-balance text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Amber sent me your NHB post.
            <br />
            I already built what you&apos;re looking for.
          </h1>

          <div className="mx-auto mt-10 max-w-sm">
            <VidalyticsEmbed
              videoId={BRIXTON_VIDEO_ID}
              aspectRatio="177.78%"
              className="rounded-2xl border-2 border-gold/20 shadow-2xl shadow-black/40"
            />
            <p className="mt-3 text-center text-xs text-white/40">
              3:47 - No pitch. Just the real story.
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:text-lg">
            You described a system that reduces fragmentation, turns messy
            inputs into distilled direction, and keeps a CEO focused on two or
            three priorities instead of five or six. I built that for myself
            over the last three months, sometimes until 3am. I never intended
            to sell it to anybody. Then I read your post and realized you
            might need the same thing.
          </p>
        </div>
      </section>

      {/* ============================================
          WHAT THE GHOST FACTORY ACTUALLY IS
          ============================================ */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
            Here is what I actually built.
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              I call it The Ghost Factory. Ghost as in Holy Spirit, not
              Halloween. It is an executive function operating system I built
              on top of Claude Code. It runs my businesses. All of them.
              Simultaneously. 40 custom skills, 130+ operational files, session
              protocols for starting and closing work, an intake system that
              processes any input (Slack messages, voice notes, email threads,
              uploaded files) and routes it to the right place automatically.
            </p>

            <p>
              Atlas is what I named my Claude Code instance. Atlas handles 90%
              of the execution: research, positioning, copy, builds,
              automation, compliance, documentation. I handle 10%: strategy,
              direction, final approvals, and the conversations that matter.
              The system keeps me focused on two or three priorities instead
              of drowning in five or six.
            </p>

            <p>
              That is exactly what you described in your NHB post. You wrote
              about someone who &ldquo;reduces fragmentation,&rdquo; who
              &ldquo;turns messy inputs into clean, decision-ready
              summaries,&rdquo; who is &ldquo;proactive by default.&rdquo; You
              asked for someone fluent in Claude Code who thinks in workflows,
              agents, and automations. This already exists and it works.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          BUILDING IN PUBLIC - THE SCREENSHOTS
          ============================================ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
            This page was built by the system.
            <br />
            Tonight.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Amber sent me your post a few hours ago. I recognized the
            alignment immediately. Within minutes, The Ghost Factory was
            custom-building this page specifically for you. That is the speed.
            Not because it is rushed, but because the infrastructure already
            exists. I give direction, Atlas executes. Here is what that looks
            like in real time:
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <Image
                src="/images/brixton-claude-terminal.png"
                alt="Claude Code terminal building the Brixton page with task phases and checkmarks"
                width={800}
                height={600}
                className="w-full"
              />
              <div className="bg-warm p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Building Your Page
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Atlas working through the Brixton page build. Task list,
                  phases, checkmarks. Multi-agent parallel execution.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <Image
                src="/images/cerebrating-deploy.png"
                alt="Deploy success with green checkmark after pushing to production"
                width={800}
                height={600}
                className="w-full"
              />
              <div className="bg-warm p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Deployed to Production
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Green checkmark. Live on the internet. From idea to deployed
                  in the same session.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <Image
                src="/images/brixton-work-in-progress.png"
                alt="Terminal session showing the Brixton page being built in real-time"
                width={800}
                height={600}
                className="w-full"
              />
              <div className="bg-warm p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  The Session in Progress
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  This is how I work. I get an idea, give direction, and then
                  custom-build everything. No templates. No agencies. Just the
                  system executing.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <Image
                src="/images/linda-downey-deployment.png"
                alt="Full deployment package output in terminal showing Ghost Factory building a complete business"
                width={800}
                height={600}
                className="w-full"
              />
              <div className="bg-warm p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  A Full Deployment Package
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  What it looks like when the system builds a complete business
                  deployment. Every piece, documented and delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          DR. NICK SOCIAL PROOF
          ============================================ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-gold/20 bg-warm p-6 sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                  Authority Publisher Deployment
                </p>
                <p className="mt-2 font-[family-name:var(--font-playfair)] text-xl font-bold text-navy sm:text-2xl">
                  Dr. Nick - @thefittestdoc
                </p>
                <p className="mt-1 text-sm font-medium text-gold-dark">
                  297K Instagram followers. Zero revenue infrastructure.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Dr. Nick had the audience, the credibility, and the clinical
                  methodology. What he did not have was a way to turn any of it
                  into revenue. I extracted his Metabolic Sleep protocol and
                  deployed a complete Whop storefront: $27 core program, $47
                  group coaching, $150 private calls. From zero digital products
                  to fully operational in one deployment cycle.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/thefittestdoc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                  >
                    @thefittestdoc &rarr;
                  </a>
                  <a
                    href="https://whop.com/thefittestyou/metabolicsleep/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                  >
                    Whop Store &rarr;
                  </a>
                </div>
              </div>
              <div>
                <VidalyticsEmbed videoId="JHNBBRwjatnIdLG8" />
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Dr. Nick - The Fittest Doc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          EXPAND BUTTON
          ============================================ */}
      {!expanded && (
        <section className="bg-white pb-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gold/30 bg-warm px-8 py-4 text-base font-semibold text-navy transition-all hover:border-gold hover:shadow-md cursor-pointer"
            >
              See the deployments, proof, and full breakdown
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </section>
      )}

      {/* ============================================
          EXPANDABLE CONTENT
          ============================================ */}
      {expanded && (
        <>
          <div className="section-divider" />

          {/* WHAT THE SYSTEM HAS DEPLOYED */}
          <section className="bg-warm py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
                Active deployments.
                <br />
                Each one custom.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">
                Every deployment starts the same way: I have an initial
                conversation to figure out if there is a fit. If there is, I go
                deep. That might be one long interview, it might be multiple
                sessions, it might just be a URL and some source material. I
                extract their DNA: the methodology, the stories, the positioning,
                the competitive advantages. Then the system builds everything
                around it. Custom. Not templated. Here is what is running right
                now:
              </p>

              <div className="mt-10 space-y-6">
                {/* RTD */}
                <div className="rounded-xl border border-border bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    Rethink Dieting
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    Math-based weight loss. 10 days from first
                    interview to live deployment.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Alan Thomas lost 129 pounds in 260 days by posting his scale
                    on Facebook every single morning. His method is not a diet.
                    It is math: know your burn rate, know your intake, know
                    exactly where you will be on any given date. His wife Angie
                    lost 63 pounds using the same system. I interviewed them,
                    extracted their methodology, and deployed everything custom
                    to their business. This is what Atlas built in 10 days:
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-warm px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">Strategy</p>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                        <li>560-line COMPANY_DNA.md (full methodology extraction)</li>
                        <li>Positioning framework: ONE WORD = &ldquo;Certainty&rdquo;</li>
                        <li>Validation report (82/100 viability score)</li>
                        <li>5-phase go-to-market plan</li>
                        <li>80/20 JV partnership structure</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-warm px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">Technology</p>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                        <li>Personalized BMR/TDEE calculator (5,303 lines)</li>
                        <li>Custom PDF report generation per user</li>
                        <li>Stripe payment processing</li>
                        <li>GHL CRM integration via webhooks</li>
                        <li>Google Sheets lead queue with auto-processing</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-warm px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">Content &amp; Copy</p>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                        <li>19 digital product packages ($7 to $97 tiers)</li>
                        <li>7-email nurture sequence</li>
                        <li>30-day social media plan with 30 pre-written posts</li>
                        <li>Platform profiles (FB, IG, YT, LinkedIn, TikTok)</li>
                        <li>Full compliance review (Florida Dietetics Act + FTC)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-warm px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">Operations</p>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                        <li>Deployment SOP (one-command deploy to production)</li>
                        <li>Task Master with 46 prioritized tasks for Alan</li>
                        <li>VSL script + Vidalytics video hosting</li>
                        <li>Domain, DNS, hosting, SSL all configured</li>
                        <li>Operator share-ready package (single handoff doc)</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    All custom to Alan and Angie. None of it templated. A PE
                    investor has been telling Alan for four years: &ldquo;You
                    find a way to scale it, I will find a bunch of money for
                    it.&rdquo; This is the way.
                  </p>

                  <a
                    href="https://rethinkdieting.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
                  >
                    rethinkdieting.org &rarr;
                  </a>
                  <div className="mt-4">
                    <VidalyticsEmbed videoId="GRX2dadxln68ziGE" />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Alan &amp; Angie tell their story
                    </p>
                  </div>
                </div>

                {/* TCF */}
                <div className="rounded-xl border border-border bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    The Cleanup Firm
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    CPA-grade QuickBooks cleanups. 90/10 partner model.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    My wife Amber&apos;s business. 30+ years of financial
                    management experience across three multi-million dollar
                    companies. The Ghost Factory built the positioning
                    (&ldquo;We clean the books. You keep the client.&rdquo;),
                    the forensic diagnostic scoring engine, white-label partner
                    portals co-branded to each CPA firm, and a two-funnel
                    go-to-market strategy (CPA partnerships and direct business
                    owner outreach). The partner keeps 10% and the ongoing
                    client relationship forever. First cleanup: $3,690 in
                    revenue plus $300/month recurring. Model proved on
                    transaction one.
                  </p>
                  <a
                    href="https://thecleanupfirm.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
                  >
                    thecleanupfirm.com &rarr;
                  </a>
                </div>

                {/* AP */}
                <div className="rounded-xl border border-border bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    Authority Publisher
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    Turn experts into digital product businesses. Zero upfront for
                    qualified partners.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    This is the publishing arm. I extract an expert&apos;s DNA
                    (their method, their stories, their audience) and build
                    complete revenue infrastructure around it. Products, funnels,
                    email automation, affiliate programs, Stripe integration,
                    compliance review. 50/50 revenue share, zero upfront cost for
                    qualified partners. Dr. Nick had 297K Instagram followers and
                    no revenue system. I extracted his clinical methodology and
                    deployed the full product, funnel, and automation behind it.
                    That is the model. The expert stays in their zone. The system
                    handles everything else.
                  </p>
                </div>

                {/* WPI */}
                <div className="rounded-xl border border-border bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    WellnessPI
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    SaaS platform. Mobile-first wellness assessment for
                    practitioners.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Built from my own 20+ years in clinical practice (10,000+
                    patients treated). A comprehensive substance database with
                    modern categories competitors do not carry: GLP-1
                    medications, PFAS compounds, cannabinoid profiles, tick-borne
                    pathogens. Purpose-built for naturopaths, chiropractors, and
                    integrative medicine practitioners. No hardware required
                    (unlike the $5K+ systems currently on the market). Next.js,
                    MongoDB Atlas, Vercel.
                  </p>
                  <a
                    href="https://wellnesspi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
                  >
                    wellnesspi.com &rarr;
                  </a>
                </div>
              </div>

              {/* Dr. Nick video */}
              <div className="mt-12">
                <p className="text-balance font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                  Dr. Nick had 297K Instagram followers and zero revenue infrastructure.
                  <br />
                  Here is what the system built.
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

          {/* THE GOLF DEPLOYMENTS */}
          <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
                I already have two golf deployments running.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                This is not me pitching into a market I do not understand. I have
                been in the golf world for years. Two active deployments, real
                revenue, real results.
              </p>

              <div className="mt-10 space-y-6">
                {/* Dean */}
                <div className="rounded-xl border border-border bg-warm p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    Dean Chitren / Low 70s Golf
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Dean and I worked together for over six years. $380K+
                    generated together. $10K to $17K high-ticket coaching
                    enrollment. I built every funnel, wrote every piece of copy,
                    and closed every deal. The story of how we connected says a
                    lot about how I work: we were both in John Benson&apos;s
                    Clients on Demand program. It was not working for Dean. I
                    wanted to help, so I built his pages myself. Then I ended up
                    becoming his enrollment closer and we closed serious money
                    together, all before the pandemic. That is how this always
                    starts. I see someone, I help, and it turns into something
                    real.
                  </p>
                  <a
                    href="https://droptenstrokes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
                  >
                    droptenstrokes.com &rarr;
                  </a>
                </div>

                {/* Chase */}
                <div className="rounded-xl border border-border bg-warm p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    Chase Cooper / Golf Breath Mastery
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Chase served with the 425th FA Brigade out of Fort Drum. On
                    June 5, 2011, in Afghanistan, his LT stepped on a 40-pound
                    IED. Took his LT&apos;s legs. Chase took shrapnel to the
                    neck, nearly bled out. Multiple surgeries. Walter Reed.
                    Months learning to use his right hand again. He turned his
                    recovery breathing techniques into a golf performance method
                    and won the 2025 VGA National Championship (Wounded Veteran
                    B Flight). That methodology became Golf Breath Mastery:
                    a 50/50 Authority Publisher partnership.
                  </p>
                  <a
                    href="https://golfbreathmastery.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
                  >
                    golfbreathmastery.com &rarr;
                  </a>
                </div>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-foreground/70">
                Six years in golf high-ticket sales. Two active deployments. I
                know the objections. I know what moves golfers from a free video
                to a paid program. I know the difference between positioning that
                works in this market and positioning that sounds good in a meeting
                but dies on a landing page.
              </p>

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
                  Bill Walsh Objection Box Elite. #1 on all 3 leaderboards. Level
                  5, Top 3%. That is not a course completion badge. That is
                  competitive sales performance against thousands of closers.
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* THE RANGE */}
          <section className="bg-warm py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
                Same system. Same conversation.
                <br />
                Any scale.
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
                <p>
                  There is a guy in New Smyrna Beach who hand-makes rainbow
                  memorial bridges for people who lost their pets. Older. Not
                  tech-savvy. He does it because he loves it and it serves people
                  in grief. That is a Ghost deployment.
                </p>

                <p>
                  Performance Golf: $110M in revenue, 200+ employees, Inc. 5000
                  two years running, Hank Haney on the instructor roster. That is
                  also a Ghost deployment.
                </p>

                <p>
                  Same initial conversation. Same system. Same person (me and
                  Atlas). For you, that would mean sitting down with you and your
                  team, getting the exact input of what you are looking for, and
                  building it with The Ghost Factory. Some people get their own
                  full Ghost deployment. Some people get plugged into an existing
                  deployment as a backend piece, an upsell, or a flywheel
                  component. Nobody needs to be good at everything. They just need
                  something they are good at and care about.
                </p>

                <p>
                  That is the model I am building toward: an infrastructure of
                  human beings who each bring something specific, orchestrated
                  through one system. Not a franchise. Not a consulting firm. A
                  machine that connects people to the right piece of the right
                  offer in the right flywheel.
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* NHB MAPPING */}
          <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
                Your NHB post. My system.
                <br />
                Line by line.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">
                You wrote a spec sheet for what I already built.
              </p>

              <div className="mt-10 space-y-4">
                <div className="rounded-lg border border-border bg-warm px-5 py-4">
                  <p className="text-sm font-semibold text-navy">
                    &ldquo;Claude Code fluent, builds workflows and
                    automations&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Claude Code is the engine. 40 custom skills, multi-agent
                    parallel execution, persistent memory across sessions. Not a
                    ChatGPT subscription. Engineered infrastructure with SOPs.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-warm px-5 py-4">
                  <p className="text-sm font-semibold text-navy">
                    &ldquo;Take a founder from 5-6 priorities to 2-3&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    First Principle #13: &ldquo;Pick the top three and hit them
                    and build them and make them then next.&rdquo; Hard gate in
                    the system: max 3 active items per deployment. Adding a
                    fourth requires completing or killing one first.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-warm px-5 py-4">
                  <p className="text-sm font-semibold text-navy">
                    &ldquo;Turn messy inputs into clean, decision-ready
                    summaries&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The Ghost Intake system. Any input (Slack, email, files,
                    voice notes) gets coded into 8 categories and routed
                    automatically. 459+ files processed in a single session.
                    What comes out is a brief, not a pile.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-warm px-5 py-4">
                  <p className="text-sm font-semibold text-navy">
                    &ldquo;Proactive by default. Stay two steps ahead.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Atlas does not wait for instructions. The system has session
                    protocols (SITREP at start, Ghost Out at close), an execution
                    tracker, a deployment registry, and proactive gap detection
                    built into every session. I audit what was missed and fix it
                    before the next session starts.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-warm px-5 py-4">
                  <p className="text-sm font-semibold text-navy">
                    &ldquo;Thinks in inputs, outputs, and decision points&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You use TAO (Triggers, Actions, Outcomes) and FIT
                    (Frustration, Importance, Time). I already adopted FIT for
                    The Ghost Factory roadmap. The entire deployment pipeline
                    (Capture, Validate, Position, Build, Recruit, Launch, Scale,
                    Exit) is a TAO framework that actually executes. Every skill
                    file is a codified workflow with autonomous execution.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-warm px-5 py-4">
                  <p className="text-sm font-semibold text-navy">
                    &ldquo;Principles over prompts&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    18 hard-coded First Principles that override everything.
                    &ldquo;The simplest solution that works is the correct
                    solution.&rdquo; &ldquo;Complexity is debt.&rdquo;
                    &ldquo;Build for exit from Day 1.&rdquo; These are not
                    guidelines. They are non-negotiable engineering standards.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-warm px-5 py-4">
                  <p className="text-sm font-semibold text-navy">
                    &ldquo;Not a task-taker. A leverage role.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The Ghost Factory is infrastructure. Not an assistant. Not an
                    agency. A system that runs businesses. The distinction matters
                    because what you described is not a person. It is a machine
                    that amplifies one person into many.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* SPEED */}
          <section className="bg-warm py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
                Speed is a feature.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-white p-5">
                  <p className="text-balance font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                    9 pages
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The entire gitm.ai flagship site. Built and deployed to
                    production in a single session.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-white p-5">
                  <p className="text-balance font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                    10 days
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    RTD went from a recorded interview to a live calculator with
                    personalized reports, email automation, and payment
                    processing.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-white p-5">
                  <p className="text-balance font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                    Hours
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    This page. Custom-built for you within hours of your NHB
                    post surfacing through Amber. That is the system in action.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-white p-5">
                  <p className="text-balance font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                    3 months
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Total build time for the entire Ghost Factory infrastructure.
                    40 skills, 130+ files, session protocols, deployment pipeline,
                    multi-agent execution. Built from scratch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* WARM PATHS */}
          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <p className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
                I am not a stranger to your world.
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
                <p>
                  Mario Castelli wrote copy for Performance Golf. He is a friend
                  of mine. John Benson wrote PG copy too. I was in John&apos;s
                  mastermind and was one of the first 100 people in his AI
                  copywriting group. Six years in golf high-ticket sales through
                  Dean Chitren. Two active golf deployments with real results.
                </p>

                <p>
                  I am not pitching from the outside. I already live in the world
                  you operate in.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      <div className="section-divider" />

      {/* ============================================
          CTA - ALWAYS VISIBLE
          ============================================ */}
      <section className="navy-gradient py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            I built the system.
            <br />
            The call figures out how it fits you.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60">
            You might want your own personal Ghost Factory. You might want
            deployments for Performance Golf. You might want the executive
            function system for your team. I have no idea until we talk. The
            page shows you the system. The call figures out the rest.
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
          <p className="mt-4 text-sm text-white/40">
            Or reply to Amber and we will set something up directly.
          </p>
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
