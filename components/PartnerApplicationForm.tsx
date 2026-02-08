"use client";

import { useState, type FormEvent } from "react";

export function PartnerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border-2 border-gold/30 bg-white p-10 text-center shadow-sm sm:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <svg
            className="h-8 w-8 text-gold-dark"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy sm:text-3xl">
          Application Received
        </h3>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          We review every application personally. If there is a fit, you will
          hear from us within 48 hours. If we are at capacity, we will let you
          know that directly too.
        </p>
        <p className="mt-6 text-sm font-medium text-gold-dark">
          No ghosting. That is not what we mean by Ghost.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10"
    >
      <div className="space-y-6">
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
            className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
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
            className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            placeholder="you@example.com"
          />
        </div>

        {/* Path Selection */}
        <div>
          <label
            htmlFor="path"
            className="block text-sm font-semibold text-navy"
          >
            Which path best describes you?
          </label>
          <select
            id="path"
            name="path"
            required
            className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select your path
            </option>
            <option value="influencer">Influencer / Creator</option>
            <option value="bootstrapper">Bootstrapper with Idea</option>
            <option value="business-owner">Business Owner</option>
            <option value="referral">Referral Partner</option>
          </select>
        </div>

        {/* Social / Website */}
        <div>
          <label
            htmlFor="social"
            className="block text-sm font-semibold text-navy"
          >
            Social Media Handle or Website
          </label>
          <input
            type="text"
            id="social"
            name="social"
            className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            placeholder="@handle or https://yoursite.com"
          />
        </div>

        {/* Audience / Stage */}
        <div>
          <label
            htmlFor="audience"
            className="block text-sm font-semibold text-navy"
          >
            Audience Size or Business Stage
          </label>
          <input
            type="text"
            id="audience"
            name="audience"
            className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            placeholder="e.g. 50K on YouTube, $200K/yr revenue, pre-launch"
          />
        </div>

        {/* What You Want to Build */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-navy"
          >
            Tell Us About What You Want to Build
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            className="mt-2 block w-full rounded-lg border border-border bg-warm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none"
            placeholder="What is your idea, your expertise, your audience? What have you tried so far? What does success look like for you?"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="gold-gradient w-full rounded-lg px-8 py-4 text-base font-semibold text-navy transition-all hover:shadow-lg hover:shadow-gold/20"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
