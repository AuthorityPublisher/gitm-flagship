import Link from "next/link";
import { CalendlyButton } from "@/components/CalendlyButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ProofStrip } from "@/components/ProofStrip";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO - Three-Path Entry
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          {/* Subtle background texture */}
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#D4A843_0%,transparent_50%)]" />
          </div>

          <div className="relative z-10">
            {/* Eyebrow */}
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              The Ghost Factory
            </p>

            {/* Main headline */}
            <h1 className="mx-auto mt-6 max-w-4xl text-center font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              You bring the fire.{" "}
              <span className="text-gold-gradient">We build the furnace.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/70">
              Drop anything in - an idea, a skill, a following, a half-built
              business. We deploy the infrastructure that turns it into revenue.
            </p>

            {/* Three Paths */}
            <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
              {/* Path A: Executive Function */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <span className="text-lg font-bold text-gold">A</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                  The Visionary
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 italic">
                  &ldquo;I never thought I had executive function challenges. I
                  just thought everyone had to fight this hard to follow
                  through.&rdquo;
                </p>
                <Link
                  href="/score"
                  className="mt-4 inline-flex text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  Take the Execution Gap Score &rarr;
                </Link>
              </div>

              {/* Path B: Business Deployment */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <span className="text-lg font-bold text-gold">B</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                  The Operator
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Drop anything in. Get a business out. You have the expertise.
                  We build the machine around it.
                </p>
                <Link
                  href="/how-it-works"
                  className="mt-4 inline-flex text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  See How It Works &rarr;
                </Link>
              </div>

              {/* Path C: Partnership */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <span className="text-lg font-bold text-gold">C</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                  The Partner
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Have an audience? Let&apos;s build something together. Your
                  reach, our infrastructure, shared upside.
                </p>
                <Link
                  href="/partner"
                  className="mt-4 inline-flex text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  Explore Partnerships &rarr;
                </Link>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/score"
                className="gold-gradient inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Take the Execution Gap Score
              </Link>
              <CalendlyButton
                text="Book a Strategy Call"
                variant="outline"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: PROOF STRIP
          ============================================ */}
      <ProofStrip />

      {/* ============================================
          SECTION 3: THE SYSTEMS GAP (Problem)
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Problem"
            title="The Systems Gap"
            subtitle="The reason experts fail isn't lack of knowledge. It's the missing infrastructure layer. The ideas are there. The follow-through system isn't."
          />

          <div className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-base leading-relaxed text-muted-foreground">
              You have spent years mastering your craft. You know more than 99%
              of people in your field. But knowing and deploying are two
              different skill sets. Most experts are stuck in what we call the
              Systems Gap: the space between what you know and what you have
              actually built.
            </p>
          </div>

          {/* Failed Solutions Table */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h3 className="mb-8 text-center font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
              The Solutions You&apos;ve Already Tried
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Agency */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-navy">Agencies</h4>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                    $15K-$50K
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  3-6 months to launch. You pay premium rates for junior
                  designers and generic funnels. The deliverables look polished
                  but don&apos;t convert because they never understood your
                  positioning.
                </p>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-xs font-medium text-red-500">
                    Cost: Massive. Speed: Slow. Fit: Generic.
                  </p>
                </div>
              </div>

              {/* DIY Courses */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-navy">DIY Courses</h4>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                    200+ hours
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  You buy the course. You watch week one. Maybe week two. By
                  week four, you are back to your day job. The knowledge sits in
                  your Notion graveyard alongside 47 other &ldquo;game
                  plans.&rdquo;
                </p>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-xs font-medium text-red-500">
                    Cost: Time you don&apos;t have. Completion rate: Under 5%.
                  </p>
                </div>
              </div>

              {/* Coaching */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-navy">
                    Coaching Programs
                  </h4>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                    $5K-$25K
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  They give you the map but not the road. Weekly calls, PDFs,
                  and accountability groups. You leave with clarity about what to
                  build but zero infrastructure to build it.
                </p>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-xs font-medium text-red-500">
                    Cost: High. Output: Plans, not products.
                  </p>
                </div>
              </div>

              {/* SaaS Tools */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-navy">SaaS Tool Stacks</h4>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                    12+ tools
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kajabi for courses. ClickFunnels for funnels. Mailchimp for
                  email. Calendly for booking. Stripe for payments. None of them
                  talk to each other. You spend more time integrating than
                  creating.
                </p>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-xs font-medium text-red-500">
                    Cost: $500+/mo in subscriptions. Integration: Nightmare.
                  </p>
                </div>
              </div>
            </div>

            {/* The contrast */}
            <div className="mt-10 rounded-2xl border-2 border-gold/30 bg-navy p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                The Ghost Factory Alternative
              </p>
              <p className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                We handle 90%. You handle 10%.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60">
                You bring the expertise, the story, and the approvals. We build
                the positioning, the copy, the funnels, the tech, the
                automation, and the deployment. Days, not months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ============================================
          SECTION 4: THE GHOST DEPLOYMENT SYSTEM
          ============================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The System"
            title="The Ghost Deployment System"
            subtitle="Eight stages. One outcome: a deployed, revenue-generating business built for exit from day one."
          />

          {/* Pipeline Visualization */}
          <div className="mx-auto mt-16 max-w-5xl">
            {/* Desktop Pipeline - Horizontal */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between">
                {[
                  { num: 1, label: "CAPTURE", desc: "Extract your expertise" },
                  { num: 2, label: "VALIDATE", desc: "Test with real money" },
                  { num: 3, label: "POSITION", desc: "Own one word" },
                  { num: 4, label: "BUILD", desc: "Full infrastructure" },
                  { num: 5, label: "RECRUIT", desc: "Find the face" },
                  { num: 6, label: "LAUNCH", desc: "Go live fast" },
                  { num: 7, label: "SCALE", desc: "Paid + organic" },
                  { num: 8, label: "EXIT", desc: "Sell the asset" },
                ].map((stage, i) => (
                  <div key={stage.label} className="flex items-center">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                        {stage.num}
                      </div>
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-navy">
                        {stage.label}
                      </p>
                      <p className="mt-1 max-w-[100px] text-[11px] leading-tight text-muted-foreground">
                        {stage.desc}
                      </p>
                    </div>
                    {i < 7 && (
                      <div className="mx-1 h-0.5 w-6 bg-gradient-to-r from-gold to-gold/30 xl:w-10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Pipeline - Vertical */}
            <div className="lg:hidden">
              <div className="space-y-4">
                {[
                  { num: 1, label: "CAPTURE", desc: "Extract your expertise" },
                  { num: 2, label: "VALIDATE", desc: "Test with real money" },
                  { num: 3, label: "POSITION", desc: "Own one word" },
                  { num: 4, label: "BUILD", desc: "Full infrastructure" },
                  { num: 5, label: "RECRUIT", desc: "Find the face" },
                  { num: 6, label: "LAUNCH", desc: "Go live fast" },
                  { num: 7, label: "SCALE", desc: "Paid + organic" },
                  { num: 8, label: "EXIT", desc: "Sell the asset" },
                ].map((stage, i) => (
                  <div key={stage.label}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                        {stage.num}
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-navy">
                          {stage.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                    {i < 7 && (
                      <div className="ml-5 h-4 w-0.5 bg-gradient-to-b from-gold to-gold/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-warm p-6 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                90%
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Handled by The Ghost Factory
              </p>
            </div>
            <div className="rounded-xl bg-warm p-6 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                10%
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your approvals and expertise
              </p>
            </div>
            <div className="rounded-xl bg-warm p-6 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy">
                Days
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Not months. Not quarters.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg bg-navy px-8 py-4 text-base font-semibold text-white transition-all hover:bg-navy-light"
            >
              See the Full System &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ============================================
          SECTION 5: SOCIAL PROOF
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Results"
            title="Deployed. Live. Generating Revenue."
            subtitle="These are not hypotheticals. Every deployment listed here is live, operating, and producing real results."
          />

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="The Ghost Factory built my entire digital presence - website, funnels, email sequences, video hosting - while I focused on treating patients. I went from scattered ideas to a complete online business in weeks."
              name="Dr. Nick"
              role="Health & Wellness Influencer"
              metric="156K Followers"
            />

            <TestimonialCard
              quote="Five years working together. 17,000 subscribers built through real content and real systems. This is not a one-off project. It is a long-term infrastructure partnership."
              name="Alan & Angie Thomas"
              role="Rethink Dieting"
              metric="17K Subscribers"
            />

            <TestimonialCard
              quote="From concept to revenue in record time. The systems handle the backend so the team can focus on what they do best: cleaning up financial messes for CPAs and business owners."
              name="The Cleanup Firm"
              role="Financial Services"
              metric="$27K Generated"
            />

            <TestimonialCard
              quote="A partnership built on trust, execution, and shared vision. The Ghost Factory doesn't just build. It operates alongside you for the long haul."
              name="Dean Chitren"
              role="Strategic Partner"
              metric="$380K+ Partnership"
            />

            <TestimonialCard
              quote="Ranked number one across all three leaderboards. Not through hacks or tricks, but through positioning, copy, and relentless optimization of the offer."
              name="Objection Box Elite"
              role="Sales Training Platform"
              metric="#1 All Leaderboards"
            />

            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gold/40 bg-gold/5 p-6 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                Your Deployment Here
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                We take on a limited number of deployments at a time. Each one
                gets our full attention.
              </p>
              <CalendlyButton
                text="Apply Now"
                variant="gold"
                size="sm"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ============================================
          SECTION 6: FAITH FOUNDATION
          ============================================ */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              The Foundation
            </p>

            <blockquote className="mt-8">
              <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-relaxed text-white sm:text-3xl lg:text-4xl">
                &ldquo;But seek first his kingdom and his righteousness, and all
                these things will be given to you as well.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-gold/80">
                Matthew 6:33
              </footer>
            </blockquote>

            <div className="mx-auto mt-10 h-px w-24 bg-gold/40" />

            <p className="mt-10 text-lg leading-relaxed text-white/70">
              The Ghost Factory was not built from a business plan. It was built
              from a conviction: that the people who carry real knowledge, real
              skill, and real purpose deserve systems as strong as their vision.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We build from the inside out. Faith first, then engineering, then
              execution. Every deployment reflects that order.
            </p>

            <p className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-bold text-gold">
              You bring the fire. We build the furnace.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: FINAL CTA - Three Paths Repeated
          ============================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Next Step"
            title="Three Ways In"
            subtitle="Wherever you are right now, there is a path forward. Pick the one that fits."
          />

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {/* Path A: Score */}
            <div className="rounded-2xl border border-border bg-warm p-8 text-center transition-all hover:border-gold/30 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                <span className="text-xl font-bold text-gold">A</span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                Measure the Gap
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Take the free Execution Gap Score. Two minutes. Immediate
                results. See exactly where your infrastructure is leaking.
              </p>
              <Link
                href="/score"
                className="gold-gradient mt-6 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Take the Score
              </Link>
            </div>

            {/* Path B: Call */}
            <div className="rounded-2xl border border-border bg-warm p-8 text-center transition-all hover:border-gold/30 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                <span className="text-xl font-bold text-gold">B</span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                Talk Strategy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Book a strategy call. We will assess your situation, identify
                the fastest path to deployment, and tell you honestly if we are
                the right fit.
              </p>
              <CalendlyButton
                text="Book a Call"
                variant="gold"
                size="md"
                className="mt-6"
              />
            </div>

            {/* Path C: Partner */}
            <div className="rounded-2xl border border-border bg-warm p-8 text-center transition-all hover:border-gold/30 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                <span className="text-xl font-bold text-gold">C</span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                Partner Up
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Have an audience, a platform, or a network? We build the
                business. You bring the reach. Shared equity, shared upside.
              </p>
              <Link
                href="/partner"
                className="gold-gradient mt-6 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Explore Partnerships
              </Link>
            </div>
          </div>

          {/* Final line */}
          <p className="mx-auto mt-16 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
            The Ghost Factory takes on a limited number of deployments at a
            time. If you are reading this, spots may still be available. If
            they are not, we will tell you directly and put you on the shortlist
            for the next opening.
          </p>
        </div>
      </section>
    </>
  );
}
