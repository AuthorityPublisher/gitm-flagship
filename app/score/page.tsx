"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendlyButton } from "@/components/CalendlyButton";
import { SectionHeading } from "@/components/SectionHeading";

// ============================================
// TYPES
// ============================================

interface QuizOption {
  label: string;
  points: number;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface ScoreRange {
  min: number;
  max: number;
  label: string;
  description: string;
  color: string;
}

// ============================================
// DATA
// ============================================

const questions: QuizQuestion[] = [
  {
    question:
      "How many ideas have you started but not finished in the last year?",
    options: [
      { label: "0-1", points: 4 },
      { label: "2-3", points: 3 },
      { label: "4-6", points: 2 },
      { label: "7+", points: 1 },
    ],
  },
  {
    question:
      "How many hours per week do you spend on systems and tech vs your actual expertise?",
    options: [
      { label: "0-2 hours", points: 4 },
      { label: "3-5 hours", points: 3 },
      { label: "6-10 hours", points: 2 },
      { label: "10+ hours", points: 1 },
    ],
  },
  {
    question: "Do you have automated lead generation running right now?",
    options: [
      { label: "Yes, multiple channels", points: 4 },
      { label: "Yes, one channel", points: 3 },
      { label: "Sort of, it's manual", points: 2 },
      { label: "No", points: 1 },
    ],
  },
  {
    question:
      "Could someone else run your business for 30 days without you?",
    options: [
      { label: "Yes, fully documented", points: 4 },
      { label: "Mostly, with some guidance", points: 3 },
      { label: "They'd struggle", points: 2 },
      { label: "It would collapse", points: 1 },
    ],
  },
  {
    question:
      "How many tools and apps do you use daily for your business?",
    options: [
      { label: "1-3 integrated", points: 4 },
      { label: "4-6 somewhat connected", points: 3 },
      { label: "7-10 mostly separate", points: 2 },
      { label: "10+ chaos", points: 1 },
    ],
  },
  {
    question:
      "Do you have a documented process for turning an idea into revenue?",
    options: [
      { label: "Yes, repeatable system", points: 4 },
      { label: "Rough process", points: 3 },
      { label: "Wing it every time", points: 2 },
      { label: "Ideas just pile up", points: 1 },
    ],
  },
  {
    question:
      "How long does it take you to go from idea to something live and generating revenue?",
    options: [
      { label: "Under 2 weeks", points: 4 },
      { label: "1-3 months", points: 3 },
      { label: "3-6 months", points: 2 },
      { label: "Ideas rarely become real", points: 1 },
    ],
  },
  {
    question:
      "Do you ever feel like you fight harder than everyone else just to follow through?",
    options: [
      { label: "Rarely", points: 4 },
      { label: "Sometimes", points: 3 },
      { label: "Often", points: 2 },
      { label: "Every single day", points: 1 },
    ],
  },
];

const scoreRanges: ScoreRange[] = [
  {
    min: 28,
    max: 32,
    label: "Operational Machine",
    description:
      "Your infrastructure is solid. You might be ready to scale or acquire.",
    color: "text-emerald-400",
  },
  {
    min: 20,
    max: 27,
    label: "Growth Ready",
    description:
      "Good foundation but gaps are costing you. A Ghost Sprint could close them fast.",
    color: "text-gold",
  },
  {
    min: 12,
    max: 19,
    label: "Execution Gap",
    description:
      "Your expertise is being wasted on infrastructure. This is exactly what The Ghost Factory was built for.",
    color: "text-orange-400",
  },
  {
    min: 8,
    max: 11,
    label: "Infrastructure Emergency",
    description:
      "You're running on willpower alone. The Ghost Factory can deploy your entire infrastructure in days.",
    color: "text-red-400",
  },
];

function getScoreRange(score: number): ScoreRange {
  return (
    scoreRanges.find((r) => score >= r.min && score <= r.max) ??
    scoreRanges[scoreRanges.length - 1]
  );
}

// ============================================
// COMPONENT
// ============================================

export default function ScorePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [quizComplete, setQuizComplete] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalScore = answers.reduce<number>(
    (sum, pts) => sum + (pts ?? 0),
    0
  );
  const range = getScoreRange(totalScore);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  function selectOption(points: number) {
    const updated = [...answers];
    updated[currentQuestion] = points;
    setAnswers(updated);

    // Auto-advance after a brief delay so user sees their selection
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setQuizComplete(true);
      }
    }, 300);
  }

  function goBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setIsSubmitting(true);
    // Simulate brief submission delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setEmailCaptured(true);
  }

  // Score breakdown bar width percentages
  const maxScore = 32;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  return (
    <>
      {/* ============================================
          SECTION 1: INTRO
          ============================================ */}
      <section className="navy-gradient relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Subtle background texture */}
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#D4A843_0%,transparent_50%)]" />
          </div>

          <div className="relative z-10">
            <SectionHeading
              eyebrow="Free Assessment"
              title="What's Your Execution Gap Score?"
              subtitle="8 questions. 2 minutes. Find out if your business infrastructure matches your expertise."
              light
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: THE QUIZ
          ============================================ */}
      {!quizComplete && (
        <section className="bg-warm py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            {/* Progress Bar */}
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-navy">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-navy/10">
              <div
                className="gold-gradient h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold leading-snug text-navy sm:text-2xl">
                {questions[currentQuestion].question}
              </h3>

              <div className="mt-6 space-y-3">
                {questions[currentQuestion].options.map((option, idx) => {
                  const isSelected =
                    answers[currentQuestion] === option.points;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectOption(option.points)}
                      className={`w-full rounded-xl border-2 px-5 py-4 text-left text-sm font-medium transition-all sm:text-base ${
                        isSelected
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-border bg-warm text-navy hover:border-gold/40 hover:bg-gold/5"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={goBack}
                  disabled={currentQuestion === 0}
                  className={`text-sm font-medium transition-colors ${
                    currentQuestion === 0
                      ? "cursor-not-allowed text-muted-foreground/40"
                      : "text-navy hover:text-gold"
                  }`}
                >
                  &larr; Back
                </button>
                <div className="flex gap-1.5">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        idx === currentQuestion
                          ? "bg-gold"
                          : answers[idx] !== null
                            ? "bg-navy/40"
                            : "bg-navy/10"
                      }`}
                    />
                  ))}
                </div>
                <div className="w-12" /> {/* Spacer for alignment */}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          SECTION 3: EMAIL CAPTURE (after quiz, before results)
          ============================================ */}
      {quizComplete && !emailCaptured && (
        <section className="bg-warm py-16 sm:py-20">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            {/* Score Preview */}
            <div className="mb-10 rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Your Score
              </p>
              <p className="mt-3 font-[family-name:var(--font-playfair)] text-6xl font-bold text-navy">
                {totalScore}
                <span className="text-2xl text-muted-foreground">
                  /32
                </span>
              </p>
              <p
                className={`mt-2 font-[family-name:var(--font-playfair)] text-xl font-bold ${range.color}`}
              >
                {range.label}
              </p>
            </div>

            {/* Email Form */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-center font-[family-name:var(--font-playfair)] text-xl font-bold text-navy sm:text-2xl">
                Enter your email to get your personalized Execution Gap
                Report
              </h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Includes a full breakdown, category analysis, and specific
                recommendations based on your answers.
              </p>

              <form
                onSubmit={handleEmailSubmit}
                className="mt-6 space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-navy"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-navy"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-gradient w-full rounded-lg px-6 py-3 text-sm font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Get My Report"}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          SECTION 4: FULL RESULTS (after email capture)
          ============================================ */}
      {quizComplete && emailCaptured && (
        <>
          <section className="bg-warm py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              {/* Score Hero */}
              <div className="rounded-2xl navy-gradient p-8 text-center sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
                  Your Execution Gap Score
                </p>
                <p className="mt-4 font-[family-name:var(--font-playfair)] text-7xl font-bold text-white sm:text-8xl">
                  {totalScore}
                </p>
                <p className="mt-1 text-lg text-white/50">out of 32</p>
                <p
                  className={`mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold ${range.color}`}
                >
                  {range.label}
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  {range.description}
                </p>
              </div>

              {/* Score Breakdown Bar */}
              <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                  Score Breakdown
                </h3>

                {/* Visual bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                    <span>8</span>
                    <span>16</span>
                    <span>24</span>
                    <span>32</span>
                  </div>
                  <div className="relative mt-1 h-4 w-full overflow-hidden rounded-full bg-navy/10">
                    {/* Range zones */}
                    <div
                      className="absolute left-0 top-0 h-full bg-red-400/20"
                      style={{ width: "12.5%" }}
                    />
                    <div
                      className="absolute top-0 h-full bg-orange-400/20"
                      style={{ left: "12.5%", width: "25%" }}
                    />
                    <div
                      className="absolute top-0 h-full bg-gold/20"
                      style={{ left: "37.5%", width: "25%" }}
                    />
                    <div
                      className="absolute top-0 h-full bg-emerald-400/20"
                      style={{ left: "62.5%", width: "37.5%" }}
                    />
                    {/* Score marker */}
                    <div
                      className="absolute top-0 h-full gold-gradient transition-all duration-700"
                      style={{ width: `${scorePercent}%` }}
                    />
                  </div>
                </div>

                {/* Range labels */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {scoreRanges
                    .slice()
                    .reverse()
                    .map((r) => {
                      const isActive =
                        totalScore >= r.min && totalScore <= r.max;
                      return (
                        <div
                          key={r.label}
                          className={`rounded-lg border p-3 text-center text-xs transition-all ${
                            isActive
                              ? "border-gold bg-gold/10 font-semibold text-navy"
                              : "border-border bg-warm text-muted-foreground"
                          }`}
                        >
                          <p className="font-bold">
                            {r.min}-{r.max}
                          </p>
                          <p className="mt-0.5 leading-tight">
                            {r.label}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Per-Question Breakdown */}
              <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
                  Your Answers
                </h3>
                <div className="mt-4 divide-y divide-border">
                  {questions.map((q, idx) => {
                    const pts = answers[idx] ?? 0;
                    const barWidth = (pts / 4) * 100;
                    return (
                      <div key={idx} className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-sm leading-relaxed text-navy">
                            <span className="mr-2 font-bold text-gold">
                              Q{idx + 1}.
                            </span>
                            {q.question}
                          </p>
                          <span className="shrink-0 font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
                            {pts}/4
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              pts >= 4
                                ? "bg-emerald-400"
                                : pts >= 3
                                  ? "bg-gold"
                                  : pts >= 2
                                    ? "bg-orange-400"
                                    : "bg-red-400"
                            }`}
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="section-divider" />

          {/* CTA Section */}
          <section className="navy-gradient py-16 sm:py-20">
            <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
                Your Next Step
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
                {totalScore >= 28
                  ? "Ready to Scale"
                  : totalScore >= 20
                    ? "Close the Gaps"
                    : "Let's Fix Your Score"}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
                {totalScore >= 28
                  ? "Your systems are working. A call can identify the best path to your next level, whether that is scaling, acquiring, or partnering."
                  : totalScore >= 20
                    ? "You have a real foundation. The gaps between where you are and where you could be are fixable, often in a single sprint. Let's talk about what that looks like."
                    : "The distance between your expertise and your infrastructure is costing you every day. The Ghost Factory was built for exactly this situation."}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CalendlyButton
                  text="Let's Fix Your Score"
                  variant="gold"
                  size="lg"
                />
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-gold px-8 py-4 text-base font-semibold text-gold transition-all hover:bg-gold hover:text-navy"
                >
                  Apply to Work With Us
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
