"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendlyButton } from "@/components/CalendlyButton";
import { SectionHeading } from "@/components/SectionHeading";
import { VidalyticsEmbed } from "@/components/VidalyticsEmbed";

const pricingTiers = [
  {
    name: "Go/No-Go Assessment",
    price: "$97",
    badge: "Start Here",
    whoFor: "Anyone considering a deployment",
    description:
      "Full deployment readiness diagnostic. See everything your deployment requires: positioning, tech, copy, automation, compliance. Most people see the scope and immediately book DFY.",
    highlighted: false,
  },
  {
    name: "Ghost Sprint",
    price: "$2,500",
    badge: "",
    whoFor: "Entrepreneurs who want to build alongside Jason",
    description:
      "DNA extraction, market validation, positioning framework, and MVP microsite. 30-day done-with-you sprint. You leave with a working deployment, not a binder full of homework.",
    highlighted: false,
  },
  {
    name: "Ghost Launch",
    price: "$7,500 - $15,000",
    badge: "Most Popular",
    whoFor: "Business owners ready for full done-for-you deployment",
    description:
      "Full website, email automation, affiliate program, lead magnet, Stripe integration, VSL production, compliance review, and 30-day post-launch optimization. The complete deployment.",
    highlighted: true,
  },
  {
    name: "Ghost Scale",
    price: "$5,000/month",
    badge: "",
    whoFor: "Live deployments that need sustained growth",
    description:
      "Monthly optimization, affiliate recruitment, content multiplication, paid traffic management, and conversion rate optimization. For businesses already generating revenue.",
    highlighted: false,
  },
  {
    name: "Ghost Empire",
    price: "$25,000 - $50,000 + equity",
    badge: "",
    whoFor: "Serious ventures building for acquisition or exit",
    description:
      "Complete exit-ready venture. Multi-tier value ladder, investor-ready documentation, full team deployment, and equity partnership. Built to sell from day one.",
    highlighted: false,
  },
];

const tierOptions = pricingTiers.map((t) => t.name);

export default function ApplyPage() {
  const [activeTrack, setActiveTrack] = useState<"pay" | "jv">("pay");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    track: "pay" as "pay" | "jv",
    tier: "",
    audienceOrRevenue: "",
    oneThingToDeploy: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleTrackChange(track: "pay" | "jv") {
    setActiveTrack(track);
    setFormData((prev) => ({ ...prev, track, tier: "" }));
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Future: wire to server action or API
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="pt-16">
        <section className="navy-gradient relative overflow-hidden">
          <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
              Application Received
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
              We Got It.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Your application is in. We review every submission personally and
              will get back to you within 24-48 hours with next steps.
            </p>
            <div className="mt-10">
              <Link
                href="/thank-you"
                className="gold-gradient inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                See What Happens Next
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            The Ghost Factory
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Apply for a Ghost Deployment
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Two tracks. One standard: premier engineering for every deployment
            we touch.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: TRACK SELECTOR + CONTENT
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Track Toggle */}
          <div className="mx-auto flex max-w-md overflow-hidden rounded-xl border border-border bg-white">
            <button
              type="button"
              onClick={() => handleTrackChange("pay")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-all ${
                activeTrack === "pay"
                  ? "bg-navy text-white"
                  : "text-muted-foreground hover:bg-warm-dark"
              }`}
            >
              Business Owner (Paid)
            </button>
            <button
              type="button"
              onClick={() => handleTrackChange("jv")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-all ${
                activeTrack === "jv"
                  ? "bg-navy text-white"
                  : "text-muted-foreground hover:bg-warm-dark"
              }`}
            >
              Influencer Partnership (JV)
            </button>
          </div>

          {/* Track 1: Pay for Deployment */}
          {activeTrack === "pay" && (
            <div className="mt-12">
              <SectionHeading
                eyebrow="Track 1"
                title="Pay for Deployment"
                subtitle="Choose the level of deployment that fits your stage. Every tier includes positioning, compliance review, and real infrastructure."
              />

              <div className="mx-auto mt-12 max-w-4xl space-y-4">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-xl border-2 bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                      tier.highlighted
                        ? "border-gold/50 ring-2 ring-gold/20"
                        : "border-border hover:border-gold/30"
                    }`}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                          {tier.name}
                        </h3>
                        {tier.badge && (
                          <span className="rounded-full bg-navy px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-gold">
                            {tier.badge}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex shrink-0 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-sm font-bold text-gold-dark">
                        {tier.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold-dark/70">
                      {tier.whoFor}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ad spend note */}
              <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-border bg-white/80 px-6 py-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Businesses (Track 1) are responsible for their own ad spend.
                  The Ghost Factory builds the machine. You fuel it.
                </p>
              </div>
            </div>
          )}

          {/* Track 2: Performance Partnership */}
          {activeTrack === "jv" && (
            <div className="mt-12">
              <SectionHeading
                eyebrow="Track 2"
                title="Influencer Partnership (JV)"
                subtitle="You've built the audience. We'll build the revenue. Zero upfront cost. We only win when you win."
              />

              <div className="mx-auto mt-12 max-w-3xl">
                <div className="rounded-2xl border-2 border-gold/30 bg-white p-8 shadow-sm sm:p-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-lg bg-warm p-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-gold-dark">
                        Revenue Split
                      </p>
                      <p className="mt-1 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
                        50/50
                      </p>
                    </div>
                    <div className="rounded-lg bg-warm p-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-gold-dark">
                        Your Cost
                      </p>
                      <p className="mt-1 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
                        $0
                      </p>
                    </div>
                    <div className="rounded-lg bg-warm p-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-gold-dark">
                        The Ghost Factory Builds
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">
                        Product, funnel, automation, copy, optimization
                      </p>
                    </div>
                    <div className="rounded-lg bg-warm p-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-gold-dark">
                        You Bring
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">
                        Your audience, your expertise, your content
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy">
                      Who Qualifies
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        50K+ followers on Instagram, TikTok, or YouTube
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        3%+ engagement rate (engaged followers, not vanity numbers)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        A transformative message, method, or process
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        Healthcare practitioners, coaches, or experts with an audience
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy">
                      How It Works
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      14 days to validate. 30-45 days to build. Launch. We test
                      with real money first, then scale. If it works, we grow
                      together. If it does not, we part as friends with real data
                      instead of assumptions. In 2 years, this becomes a
                      sellable asset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 3: APPLICATION FORM
          ============================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Apply"
            title="Tell Us About Your Deployment"
            subtitle="Every application is reviewed personally. We will get back to you within 24-48 hours."
          />

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-navy"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-navy"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="you@example.com"
              />
            </div>

            {/* Website / Social */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-semibold text-navy"
              >
                Website or Social Profile
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="https://yoursite.com or @handle"
              />
            </div>

            {/* Track Selection */}
            <fieldset>
              <legend className="block text-sm font-semibold text-navy">
                Which track are you interested in?
              </legend>
              <div className="mt-3 flex gap-6">
                <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="pay"
                    checked={formData.track === "pay"}
                    onChange={() => handleTrackChange("pay")}
                    className="h-4 w-4 border-border text-gold accent-gold focus:ring-gold"
                  />
                  Business Owner (Paid)
                </label>
                <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="jv"
                    checked={formData.track === "jv"}
                    onChange={() => handleTrackChange("jv")}
                    className="h-4 w-4 border-border text-gold accent-gold focus:ring-gold"
                  />
                  Influencer Partnership (JV)
                </label>
              </div>
            </fieldset>

            {/* Tier dropdown (only for Pay track) */}
            {formData.track === "pay" && (
              <div>
                <label
                  htmlFor="tier"
                  className="block text-sm font-semibold text-navy"
                >
                  Which tier interests you?
                </label>
                <select
                  id="tier"
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">Select a tier</option>
                  {tierOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Audience Size / Revenue */}
            <div>
              <label
                htmlFor="audienceOrRevenue"
                className="block text-sm font-semibold text-navy"
              >
                Audience size or current revenue
              </label>
              <input
                type="text"
                id="audienceOrRevenue"
                name="audienceOrRevenue"
                value={formData.audienceOrRevenue}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="e.g. 5K email list, $10K/month, 50K followers"
              />
            </div>

            {/* The ONE thing */}
            <div>
              <label
                htmlFor="oneThingToDeploy"
                className="block text-sm font-semibold text-navy"
              >
                What is the ONE thing you need deployed?
              </label>
              <textarea
                id="oneThingToDeploy"
                name="oneThingToDeploy"
                required
                rows={4}
                value={formData.oneThingToDeploy}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
                placeholder="Be specific. One sentence is better than a paragraph."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="gold-gradient w-full rounded-lg px-8 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 4: VIDEO + CALENDLY
          ============================================ */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Prefer to Talk First?"
            title="Book a Call or Watch a Deployment in Action"
            light
          />

          <div className="mt-10 flex justify-center">
            <CalendlyButton
              text="Book a Strategy Call"
              variant="gold"
              size="lg"
            />
          </div>

          <div className="mt-16">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gold-light">
              Dr. Nick - A Real Deployment
            </p>
            <VidalyticsEmbed
              videoId="JHNBBRwjatnIdLG8"
              className="shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
