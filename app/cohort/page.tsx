import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyButton } from "@/components/CalendlyButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Founder's Circle | The Ghost Factory",
  description:
    "The Founder's Circle is a $2,500 done-with-you 30-day sprint. Limited to 10 people per cohort. You leave with a working deployment, not a PDF.",
  openGraph: {
    title: "Founder's Circle | The Ghost Factory",
    description:
      "30-day sprint. 10 people max. You leave with a working deployment.",
    url: "https://gitm.ai/cohort",
    siteName: "The Ghost Factory",
    type: "website",
  },
};

const includedItems = [
  {
    title: "Live Sessions with Jason",
    description:
      "Direct access to the person who built the system. Not a community manager. Not a recording. Jason in the room, working your deployment live.",
  },
  {
    title: "DNA Extraction of Your Business",
    description:
      "We pull out everything that makes your expertise unique: your story, your positioning, your mechanism, your voice. This becomes the foundation for everything we build.",
  },
  {
    title: "MVP Microsite Built During the Sprint",
    description:
      "You do not leave with a plan. You leave with a live, deployed microsite built on real infrastructure. Hosting, domain, copy, design - done.",
  },
  {
    title: "Positioning Framework Applied",
    description:
      "ERRC Grid completed. One word identified to own. Competitive landscape mapped. You will know exactly where you stand and why people should choose you.",
  },
  {
    title: "All Interviews Conducted",
    description:
      "We conduct the research interviews that most people skip. Customer language extracted. Objections documented. Awareness levels mapped.",
  },
  {
    title: "System Stress-Tested",
    description:
      "Before the sprint ends, we pressure-test your deployment. Broken links, missing sequences, conversion gaps - all caught and fixed before you go live.",
  },
];

export default function CohortPage() {
  return (
    <div className="pt-16">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Done-With-You Sprint
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Founder&apos;s Circle
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            $2,500 Done-With-You Sprint
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50">
            30 days. 5-10 people per cohort. You leave with a working
            deployment, not a binder full of homework.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: WHAT THIS IS
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What This Is"
            title="System Hardening, Not a Course"
            subtitle="Most programs teach you what to do and leave you to figure out how. The Founder's Circle is the opposite. We build alongside you for 30 days straight."
          />

          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-center text-base leading-relaxed text-muted-foreground">
              This is not a group coaching program. There are no PDFs. No
              pre-recorded modules. No &ldquo;accountability partners.&rdquo;
              You show up with your expertise, and we extract, position, build,
              and stress-test your deployment in real time. When the sprint ends,
              you have a live system generating results.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 3: WHAT'S INCLUDED
          ============================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Included"
            title="Everything in the Sprint"
          />

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {includedItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-warm p-6 transition-all hover:border-gold/30 hover:shadow-md"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============================================
          SECTION 4: PRICING + SCARCITY
          ============================================ */}
      <section className="navy-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Investment
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            $2,500
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Founder&apos;s Circle pricing will not last. This program evolves
            into a $5,000 done-for-you engagement as we refine the system with
            each cohort. Early participants get the best deal and the most
            direct access.
          </p>

          {/* Scarcity */}
          <div className="mx-auto mt-10 max-w-md rounded-xl border border-gold/30 bg-white/5 px-6 py-6 backdrop-blur-sm">
            <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gold">
              Limited to 10 Spots Per Cohort
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Small groups by design. Every participant gets direct attention
              from Jason. When a cohort fills, the next one opens. No
              exceptions, no overflows.
            </p>
          </div>

          {/* Path to DFY */}
          <div className="mx-auto mt-10 max-w-lg">
            <p className="text-sm leading-relaxed text-white/50">
              Graduates who want The Ghost Factory to take over entirely can
              transition into a full DFY deployment. The sprint gives you
              clarity on whether that is the right move, and the foundation is
              already built.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: CTA
          ============================================ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Next Step"
            title="Apply for the Founder's Circle"
            subtitle="If you have the expertise and need the infrastructure, this sprint was built for you."
          />

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <CalendlyButton
              text="Apply for the Founder's Circle"
              variant="gold"
              size="lg"
            />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Or go straight to done-for-you.{" "}
            <Link
              href="/apply"
              className="font-semibold text-gold-dark underline underline-offset-2 transition-colors hover:text-gold"
            >
              Apply for a full Ghost Deployment
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
