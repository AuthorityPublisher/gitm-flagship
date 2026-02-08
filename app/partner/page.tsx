import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CalendlyButton } from "@/components/CalendlyButton";
import { PartnerApplicationForm } from "@/components/PartnerApplicationForm";

export const metadata: Metadata = {
  title: "Partner With The Ghost Factory | Influencers, Builders, Business Owners",
  description:
    "Three partnership paths: JV for influencers and creators, idea-based partnerships for bootstrappers, and DFY deployment for business owners. Apply now.",
  openGraph: {
    title: "Partner With The Ghost Factory",
    description:
      "Whether you have an audience, an idea, or a business that needs deployment, there is a path forward.",
    url: "https://gitm.ai/partner",
    siteName: "The Ghost Factory",
    type: "website",
  },
};

export default function PartnerPage() {
  return (
    <div className="pt-16">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Partnerships
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Partner With{" "}
            <span className="text-gold-gradient">The Ghost Factory</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Whether you have an audience, an idea, or a business that needs
            deployment, there is a path forward.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: FOR INFLUENCERS / CREATORS
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Influencers and Creators"
            title="Have Followers But Struggling to Monetize?"
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            {/* The stat */}
            <div className="rounded-xl bg-navy p-6 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold sm:text-4xl">
                70%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                of creators with 1M+ followers make less than $49K per year from
                AdSense.
              </p>
            </div>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                We build the business infrastructure behind your audience. You
                stay in your zone of genius. We handle the positioning, the
                funnels, the email sequences, the payment systems, and the
                automation. You keep doing the thing that built the audience in
                the first place.
              </p>
            </div>

            {/* The Model */}
            <div className="mt-8 rounded-xl border border-gold/20 bg-gold/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                The Model
              </p>
              <p className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                50/50 JV Partnership. Zero Upfront Cost.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                The Ghost Factory handles 90% of the build. You bring the
                audience and authentic voice. Revenue splits 50/50.
              </p>
            </div>

            {/* Two columns: What We Need / What You Get */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-warm p-6">
                <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                  What We Need From You
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    A responsive audience that trusts your voice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    Willingness to promote what we build together
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    An authentic voice your audience already follows for a reason
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm p-6">
                <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                  What You Get
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    Complete business deployment: site, funnels, email, payments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    A revenue system that works whether you are posting or not
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    An exit-ready asset you actually own
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 3: FOR BOOTSTRAPPERS
          ============================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Bootstrappers"
            title="Have an Incredible Idea But No Money?"
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-warm p-8 shadow-sm sm:p-10">
            <div className="space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                Not everyone needs to buy something. Some ideas deserve to exist,
                and The Ghost Factory might be the partner to make it happen.
              </p>
              <p>
                We evaluate JV opportunities based on idea merit, market
                potential, and the person behind the pitch. If the math works and
                the person is real, we build it together. If it does not, we will
                tell you that directly so you can move forward with clarity
                instead of false hope.
              </p>
            </div>

            {/* Application-based */}
            <div className="mt-8 rounded-xl border border-gold/20 bg-gold/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Application-Based
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                Tell us about your idea, your expertise, and what you have tried
                so far. We review every application. If there is a fit, we will
                schedule a call. If there is not, you will know within 48 hours.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#apply"
                className="gold-gradient inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Submit Your Idea Below
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 4: FOR BUSINESS OWNERS
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Business Owners"
            title="Have the Money But Not the Time?"
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <div className="space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                You have seen what The Ghost Factory deploys. You want one for
                YOUR business. Now.
              </p>
              <p>
                No cohort. No course. No 12-week program. Direct path to a fully
                deployed business system built to your specs and launched fast.
                We handle the positioning, the copy, the tech, the funnels, the
                automation, and the go-live. You focus on running your business.
              </p>
            </div>

            {/* DFY details */}
            <div className="mt-8 rounded-xl bg-navy p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
                Done-For-You Deployment
              </p>
              <p className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                Your expertise. Our infrastructure. Deployed in days.
              </p>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/60">
                Every DFY deployment starts with a strategy call to scope the
                build, identify the fastest path to revenue, and set real
                timelines.
              </p>
              <div className="mt-6">
                <CalendlyButton
                  text="Book Your Strategy Call"
                  variant="gold"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 5: APPLICATION FORM
          ============================================ */}
      <section id="apply" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Apply"
            title="Start the Conversation"
            subtitle="Fill out the form below. We read every application and respond within 48 hours."
          />

          <div className="mt-12">
            <PartnerApplicationForm />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 6: BOTTOM CTA
          ============================================ */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Not Sure?"
            title="We Will Figure It Out Together"
            subtitle="Not sure which path fits? Book a call and we will walk through your situation, your goals, and the fastest route forward."
            light
          />

          <div className="mt-10">
            <CalendlyButton
              text="Book a Call"
              variant="gold"
              size="lg"
            />
          </div>

          <p className="mt-8 text-sm text-white/50">
            No pitch. No pressure. If The Ghost Factory is not the right fit,
            we will tell you directly and point you somewhere better.
          </p>
        </div>
      </section>
    </div>
  );
}
