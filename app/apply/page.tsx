"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendlyButton } from "@/components/CalendlyButton";
import { CalendlyInline } from "@/components/CalendlyInline";
import { SectionHeading } from "@/components/SectionHeading";
import { VidalyticsEmbed } from "@/components/VidalyticsEmbed";

type Track = "business" | "influencer" | "bootstrapper";

const pricingTiers = [
  {
    name: "Go/No-Go Assessment",
    price: "$97",
    badge: "Start Here",
    whoFor: "Anyone considering a deployment",
    description:
      "Complete deployment readiness diagnostic. We map your market positioning, competitive landscape, tech requirements, copy strategy, automation architecture, and compliance obligations. You receive a detailed scope document covering every component your deployment needs, with a clear recommended path forward. One call. Full clarity on what it takes.",
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
    name: "Custom Deployment",
    price: "Let's Talk",
    badge: "",
    whoFor: "Larger scope projects, enterprise, or unique situations",
    description:
      "Some deployments require more. Multi-brand architectures, complex integrations, multi-tier value ladders, or industry-specific builds that go beyond a standard launch. If your project does not fit the tiers above, tell us what you need and we will scope it together.",
    highlighted: false,
  },
];

const tierOptions = pricingTiers.map((t) => t.name);

export default function ApplyPage() {
  const [activeTrack, setActiveTrack] = useState<Track>("business");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    track: "business" as Track,
    tier: "",
    audienceSize: "",
    platform: "",
    oneThingToDeploy: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleTrackChange(track: Track) {
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
    // Future: wire to GHL/Springboard webhook
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
            <p className="mt-4 text-sm text-white/50">
              No ghosting. That is not what we mean by Ghost.
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
            Apply for a Ghost Factory Deployment
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Whether you have a business, an audience, or an idea, there is a
            path forward. One standard: premier engineering for every deployment
            we touch.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: THREE-WAY TRACK SELECTOR
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Track Toggle - 3 options */}
          <div className="mx-auto flex max-w-2xl overflow-hidden rounded-xl border border-border bg-white">
            <button
              type="button"
              onClick={() => handleTrackChange("business")}
              className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                activeTrack === "business"
                  ? "bg-navy text-white"
                  : "text-muted-foreground hover:bg-warm-dark"
              }`}
            >
              Business Owner
              <span className="block text-xs font-normal opacity-70">
                Paid Deployment
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleTrackChange("influencer")}
              className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                activeTrack === "influencer"
                  ? "bg-navy text-white"
                  : "text-muted-foreground hover:bg-warm-dark"
              }`}
            >
              Influencer / Creator
              <span className="block text-xs font-normal opacity-70">
                JV Partnership
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleTrackChange("bootstrapper")}
              className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                activeTrack === "bootstrapper"
                  ? "bg-navy text-white"
                  : "text-muted-foreground hover:bg-warm-dark"
              }`}
            >
              Bootstrapper
              <span className="block text-xs font-normal opacity-70">
                Idea-Based JV
              </span>
            </button>
          </div>

          {/* ========================
              TRACK 1: BUSINESS OWNER
              ======================== */}
          {activeTrack === "business" && (
            <div className="mt-12">
              <SectionHeading
                eyebrow="Paid Deployment"
                title="You Have the Business. We Build the Machine."
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
                <p className="text-sm font-semibold text-navy">
                  Important: Business owners are responsible for their own ad
                  spend.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The Ghost Factory builds the machine. You fuel it. We create
                  the infrastructure, the funnels, the automation, and the
                  systems. You control the budget for traffic and advertising.
                </p>
              </div>
            </div>
          )}

          {/* ========================
              TRACK 2: INFLUENCER / CREATOR
              ======================== */}
          {activeTrack === "influencer" && (
            <div className="mt-12">
              <SectionHeading
                eyebrow="JV Partnership"
                title="You Built the Audience. We Build the Revenue."
                subtitle="Zero upfront cost. We only win when you win."
              />

              <div className="mx-auto mt-12 max-w-3xl">
                {/* The stat */}
                <div className="rounded-xl bg-navy p-6 text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold sm:text-4xl">
                    70%
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    of creators with 1M+ followers make less than $49K per year
                    from AdSense. Followers are not revenue. Infrastructure is.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border-2 border-gold/30 bg-white p-8 shadow-sm sm:p-10">
                  {/* How we use your platform */}
                  <div className="rounded-xl bg-warm p-6">
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                      How It Works: We Use Your Existing Platform
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      You already have the audience. Instagram, YouTube, TikTok,
                      an email list, a podcast. We do not ask you to run ads or
                      spend money. We use your existing platform to validate
                      demand first.
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 font-bold text-gold">1.</span>
                        <span>
                          <strong className="text-navy">
                            We send your audience to a waitlist, quiz, or
                            &ldquo;coming soon&rdquo; page
                          </strong>{" "}
                          to gauge real interest before we build anything. No
                          guessing. Real data from real people who already follow
                          you.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 font-bold text-gold">2.</span>
                        <span>
                          <strong className="text-navy">
                            If demand is there, we build the full deployment
                          </strong>{" "}
                          around your expertise: product, funnels, email
                          sequences, payment systems, automation. All of it.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 font-bold text-gold">3.</span>
                        <span>
                          <strong className="text-navy">
                            If demand is not there, we know early
                          </strong>{" "}
                          and you lose nothing. No money spent. No time wasted.
                          Real data instead of assumptions.
                        </span>
                      </li>
                    </ul>
                    <p className="mt-4 text-xs italic text-muted-foreground">
                      This is exactly how we deployed Dr. Nick (297K Instagram
                      followers). We validated with his audience first, then
                      built the full product and revenue system behind it.
                    </p>
                  </div>

                  {/* The deal */}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
                        Your audience, your expertise, your authentic voice
                      </p>
                    </div>
                  </div>

                  {/* Who qualifies */}
                  <div className="mt-6 border-t border-border pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy">
                      Who Qualifies
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        Active audience on Instagram, YouTube, TikTok, or an
                        email list (50K+ preferred, but engagement matters more
                        than vanity numbers)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        A transformative message, method, or process your
                        audience already responds to
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        Healthcare practitioners, coaches, or experts with a
                        following
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">+</span>
                        Willingness to promote what we build together to your
                        existing audience
                      </li>
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="mt-6 border-t border-border pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy">
                      Timeline
                    </h4>
                    <div className="mt-3 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-navy px-2 py-0.5 text-xs font-bold text-gold">
                          Week 1-2
                        </span>
                        Validate demand with your audience
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-navy px-2 py-0.5 text-xs font-bold text-gold">
                          Week 3-6
                        </span>
                        Build full deployment
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-navy px-2 py-0.5 text-xs font-bold text-gold">
                          Week 7+
                        </span>
                        Launch and scale together
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================
              TRACK 3: BOOTSTRAPPER
              ======================== */}
          {activeTrack === "bootstrapper" && (
            <div className="mt-12">
              <SectionHeading
                eyebrow="Idea-Based JV"
                title="You Have the Idea. We Have the Infrastructure."
                subtitle="Not everyone needs to buy something. Some ideas deserve to exist."
              />

              <div className="mx-auto mt-12 max-w-3xl">
                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
                  <div className="space-y-5 text-base leading-relaxed text-foreground/80">
                    <p>
                      The Ghost Factory evaluates JV opportunities based on idea
                      merit, market potential, and the person behind the pitch.
                      If the math works and the person is real, we build it
                      together. If it does not, we will tell you directly so you
                      can move forward with clarity instead of false hope.
                    </p>
                  </div>

                  {/* What we look for */}
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl bg-warm p-6">
                      <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                        What We Look For
                      </h4>
                      <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          A real problem you have firsthand experience solving
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          A definable market that will pay for the solution
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          Your willingness to be the face and voice of the
                          deployment
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
                          Full deployment: site, funnels, email, payments
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          Revenue system that works whether you are online or not
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          A business you actually own
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* The model */}
                  <div className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                      The Model
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                      Application-Based JV. 50/50 Split. Zero Upfront.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      Tell us about your idea, your expertise, and what you have
                      tried so far. We review every application. If there is a
                      fit, we schedule a call. If there is not, you will know
                      within 48 hours.
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
          SECTION 3: DR. NICK - A REAL DEPLOYMENT
          ============================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A Real Deployment"
            title="Dr. Nick - 297K Followers to a Revenue System"
            subtitle="We validated with his Instagram audience first. Then built the full product, funnels, and automation behind it. This is what a Ghost Factory deployment looks like."
          />

          <div className="mt-10">
            <VidalyticsEmbed
              videoId="JHNBBRwjatnIdLG8"
              className="shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 4: APPLICATION FORM
          ============================================ */}
      <section id="apply-form" className="bg-warm py-20 sm:py-28">
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
                className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
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
                className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
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
                className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="https://yoursite.com or @handle"
              />
            </div>

            {/* Track Selection */}
            <fieldset>
              <legend className="block text-sm font-semibold text-navy">
                Which track are you applying for?
              </legend>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-6">
                <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="business"
                    checked={formData.track === "business"}
                    onChange={() => handleTrackChange("business")}
                    className="h-4 w-4 border-border text-gold accent-gold focus:ring-gold"
                  />
                  Business Owner (Paid)
                </label>
                <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="influencer"
                    checked={formData.track === "influencer"}
                    onChange={() => handleTrackChange("influencer")}
                    className="h-4 w-4 border-border text-gold accent-gold focus:ring-gold"
                  />
                  Influencer / Creator (JV)
                </label>
                <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="bootstrapper"
                    checked={formData.track === "bootstrapper"}
                    onChange={() => handleTrackChange("bootstrapper")}
                    className="h-4 w-4 border-border text-gold accent-gold focus:ring-gold"
                  />
                  Bootstrapper (JV)
                </label>
              </div>
            </fieldset>

            {/* Tier dropdown (only for Business track) */}
            {formData.track === "business" && (
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
                  className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
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

            {/* Platform (for Influencer track) */}
            {formData.track === "influencer" && (
              <div>
                <label
                  htmlFor="platform"
                  className="block text-sm font-semibold text-navy"
                >
                  Primary platform and audience size
                </label>
                <input
                  type="text"
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="e.g. 50K on YouTube, 100K on Instagram, 5K email list"
                />
              </div>
            )}

            {/* Audience / Revenue (for Business and Bootstrapper) */}
            {(formData.track === "business" ||
              formData.track === "bootstrapper") && (
              <div>
                <label
                  htmlFor="audienceSize"
                  className="block text-sm font-semibold text-navy"
                >
                  {formData.track === "business"
                    ? "Current revenue or business stage"
                    : "What have you tried so far?"}
                </label>
                <input
                  type="text"
                  id="audienceSize"
                  name="audienceSize"
                  value={formData.audienceSize}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder={
                    formData.track === "business"
                      ? "e.g. $10K/month, pre-revenue, $500K/year"
                      : "e.g. Built a landing page, ran a test, nothing yet"
                  }
                />
              </div>
            )}

            {/* The ONE thing */}
            <div>
              <label
                htmlFor="oneThingToDeploy"
                className="block text-sm font-semibold text-navy"
              >
                {formData.track === "bootstrapper"
                  ? "Describe your idea and the problem it solves"
                  : "What is the ONE thing you need deployed?"}
              </label>
              <textarea
                id="oneThingToDeploy"
                name="oneThingToDeploy"
                required
                rows={4}
                value={formData.oneThingToDeploy}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
                placeholder={
                  formData.track === "bootstrapper"
                    ? "What problem do you solve? Who is the customer? Why are you the right person to be the face of this?"
                    : "Be specific. One sentence is better than a paragraph."
                }
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
          SECTION 5: INLINE CALENDLY
          ============================================ */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Or Skip the Form"
            title="Book a Call and We Will Figure It Out Together"
            subtitle="Not sure which track fits? Pick a time and we will walk through your situation together."
            light
          />

          <div className="mt-10 overflow-hidden rounded-2xl bg-white">
            <CalendlyInline height={700} />
          </div>
        </div>
      </section>
    </div>
  );
}
