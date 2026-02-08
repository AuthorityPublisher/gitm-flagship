import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StageCard } from "@/components/StageCard";
import { CalendlyButton } from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "How It Works | The Ghost Factory",
  description:
    "The 8-stage Ghost Deployment System. From DNA extraction to exit-ready business. See the full scope of what goes into a real deployment.",
  openGraph: {
    title: "How It Works | The Ghost Factory",
    description:
      "The 8-stage Ghost Deployment System. From DNA extraction to exit-ready business.",
    url: "https://gitm.ai/how-it-works",
    siteName: "The Ghost Factory",
    type: "website",
  },
};

const stages = [
  {
    number: 1,
    title: "Capture",
    headline: "We extract everything that makes you an expert.",
    description:
      "Your transcripts, your stories, your knowledge, your audience data. We pull the DNA out of your head and document it so precisely that the deployment can run without you in the room.",
    proof:
      "RTD - Alan Thomas did two interviews. We built an entire coaching platform from them.",
  },
  {
    number: 2,
    title: "Validate",
    headline: "We test with real money before you commit a dollar.",
    description:
      "Market research, competitor mapping, pricing tests. If your idea doesn't survive validation, we kill it and save you $50K+ in wasted build costs. Most agencies skip this step entirely. We lead with it.",
    proof:
      "The Ghost Factory has killed ideas that looked great on paper. That's discipline, not failure.",
  },
  {
    number: 3,
    title: "Position",
    headline: "We find the one word you own.",
    description:
      "ERRC Grid analysis. Competitive de-positioning. Category creation if needed. We don't compete on features. We compete on owning a position in the prospect's mind that nobody else can claim.",
    proof:
      'RTD owns "Certainty." TCF owns "Clean." Each deployment gets ONE word.',
  },
  {
    number: 4,
    title: "Build",
    headline: "This is where most people fail. We don't.",
    description:
      "Website, funnels, email automation, video pipeline, CRM, affiliate program, compliance review, client portals, analytics, SOPs, documentation. All of it. In days, not months.",
    proof:
      "Dr. Nick's entire digital ecosystem was built from scratch. TCF's dual-funnel CPA architecture generates $27K.",
  },
  {
    number: 5,
    title: "Recruit",
    headline: "We find the face. You might be it.",
    description:
      "Not every deployment needs recruitment. But when it does, we find the expert, the influencer, or the partner who becomes the public face. 50/50 JV, zero upfront.",
    proof:
      "We work with 297K-follower doctors, veteran breath work coaches, and forensic bookkeepers.",
  },
  {
    number: 6,
    title: "Launch",
    headline: "Live in days. Validated in weeks.",
    description:
      "Deploy assets, activate automation, begin outreach, monitor initial performance. No 6-month runway. You're live and selling while other agencies are still in their discovery phase.",
    proof:
      "RTD's calculator funnel was live and capturing leads within 10 days of DNA extraction.",
  },
  {
    number: 7,
    title: "Scale",
    headline: "The flywheel that never stops.",
    description:
      "Affiliate recruitment, content multiplication, paid traffic optimization, CRO. One perpetual conversion asset plus distribution assets that drive traffic to it.",
    proof:
      "Dean Chitren partnership generated $380K+ over 6-7 years. All built by hand, before The Ghost Factory existed.",
  },
  {
    number: 8,
    title: "Exit",
    headline: "Everything we build is designed to be sold.",
    description:
      "From Day 1, every deployment is documented, transferable, and sellable. SOPs, handoff docs, investor-ready materials. You're not building a job. You're building an asset.",
    proof:
      "Ghost infrastructure transfers. LTD accounts stay with Jason. The deployment is YOURS.",
  },
];

const scopeItems = [
  "DNA extraction: transcripts, interviews, market research",
  "Competitive analysis: positioning matrix, ERRC grid",
  "Market validation: real money test before commitment",
  "Website: landing pages, VSL pages, thank you flows, quiz funnels",
  "Email automation: welcome, nurture, abandoned cart, re-engagement",
  "Video production: script, voice, edit, host, embed, analytics",
  "Stripe integration: products, pricing, webhooks, subscriptions",
  "Affiliate program: Partnero setup, commission tiers, partner portals",
  "CRM: contact management, tagging, workflows, lead scoring",
  "Content engine: 30-day social launch, blog content, YouTube",
  "Compliance: FTC review, industry regulations, disclaimers",
  "Client portals: FuseBase setup, onboarding, course delivery",
  "Analytics: conversion tracking, split testing, dashboards",
  "Documentation: SOPs, handoff docs, investor-ready materials",
  "Exit prep: everything documented, transferable, sellable from Day 1",
];

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* ============================================ */}
      {/* SECTION 1: HERO */}
      {/* ============================================ */}
      <section className="navy-gradient px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            How{" "}
            <span className="text-gold-gradient">The Ghost Factory</span>{" "}
            Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            This page serves two purposes: show you the system, and show you the
            full scope of what a real deployment requires. By the end, you will
            understand why most people choose to let us handle it.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* SECTION 2: THE 8-STAGE GHOST DEPLOYMENT SYSTEM */}
      {/* ============================================ */}
      <section className="bg-warm px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The System"
            title="The 8-Stage Ghost Deployment System"
            subtitle="Every deployment follows this exact sequence. No shortcuts. No skipped steps. Each stage has a clear deliverable and a clear gate before the next one begins."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {stages.map((stage) => (
              <StageCard
                key={stage.number}
                number={stage.number}
                title={stage.title}
                headline={stage.headline}
                description={stage.description}
                proof={stage.proof}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* SECTION 3: THE FULL SCOPE */}
      {/* ============================================ */}
      <section className="bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Full Scope"
            title="What Actually Goes Into a Deployment"
            subtitle="This is everything that happens in a real Ghost Deployment. Not the methodology - the sheer volume of work."
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scopeItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
                  +
                </span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Every line item above is built, tested, and documented. This is not a
            checklist we hand you. This is what we deliver.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* SECTION 4: THE 90/10 SPLIT */}
      {/* ============================================ */}
      <section className="navy-gradient px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="The Split"
            title="90/10"
            light
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {/* Ghost handles 90% */}
            <div className="rounded-2xl border border-gold/20 bg-white/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
                  90%
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                  What The Ghost Factory Handles
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-white/70">
                All of the above. Every line item. Every stage. Every
                deliverable. Research, positioning, build, automation, content,
                compliance, documentation, exit prep. The entire deployment from
                capture to scale.
              </p>
            </div>

            {/* You handle 10% */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-gold">
                  10%
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                  What You Handle
                </h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-gold">-</span>
                  <span>Provide your DNA (knowledge, stories, expertise)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-gold">-</span>
                  <span>Approve stage transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-gold">-</span>
                  <span>Take sales calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-gold">-</span>
                  <span>Serve your clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-gold">-</span>
                  <span>Promote to your audience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Timeline
            </p>
            <p className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
              Days, not months.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================ */}
      {/* SECTION 5: CTA */}
      {/* ============================================ */}
      <section className="bg-warm px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Next Step"
            title="Ready to stop doing all of this yourself?"
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/apply"
              className="gold-gradient inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              $97 Go/No-Go Assessment
            </Link>
            <CalendlyButton
              text="Book a Call"
              variant="outline"
              size="lg"
            />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            The assessment shows you the full deployment scope for your specific
            idea. Most people see it and realize they need DFY.
          </p>
        </div>
      </section>
    </div>
  );
}
