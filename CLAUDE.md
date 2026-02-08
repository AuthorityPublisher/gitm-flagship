# CLAUDE.md - GitM.ai Flagship Site

## Commands
- `yarn dev` - Start development server with Turbopack
- `yarn build` - Create production build
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn typecheck` - Run TypeScript checks

## Architecture

### Stack
- **Framework**: Next.js 15 (App Router) with React 19
- **Styling**: Tailwind CSS v4 with custom navy/gold theme
- **Fonts**: Playfair Display (headings) + Inter (body) via next/font/google
- **Icons**: Lucide React
- **Utilities**: clsx + tailwind-merge via cn()

### This is a Marketing Site
No database. No auth. No API routes. Static marketing pages with client-side interactivity for quiz and forms.

### Design System
- **Primary (navy)**: #0A1628
- **Accent (gold)**: #D4A843
- **Background (warm)**: #F8F6F3
- **Heading font**: `font-[family-name:var(--font-playfair)]`
- **Body font**: Inter (default)
- **CSS utilities**: `gold-gradient`, `navy-gradient`, `text-gold-gradient`, `section-divider`

### Pages (9 total)
- `/` - Home (three-path hero, social proof, systems gap)
- `/about` - Jason's origin story
- `/how-it-works` - 8-stage deployment system + full scope
- `/results` - Case studies and proof points
- `/score` - Interactive Execution Gap Score quiz
- `/partner` - Influencer/bootstrapper/business owner applications
- `/cohort` - Founder's Circle $2,500 sprint enrollment
- `/apply` - Two-track deployment application (Pay / JV)
- `/thank-you` - Post-booking confirmation

### Components
- `Header.tsx` - Fixed nav with mobile menu
- `Footer.tsx` - PRM sponsor, Matthew 6:33, links
- `CalendlyButton.tsx` - CTA linking to calendly.com/ghostoperator/offer
- `SectionHeading.tsx` - Consistent section headers
- `TestimonialCard.tsx` - Quote card with optional video
- `VidalyticsEmbed.tsx` - Video embed component
- `ProofStrip.tsx` - Scrolling proof metrics bar
- `StageCard.tsx` - Deployment stage visualization

### Integrations
- **Vidalytics**: Global script in layout.tsx, embed component for videos
- **Calendly**: External link popups (calendly.com/ghostoperator/offer)
- **GHL/Springboard**: Form submissions via webhook (future)

### Deployment
- Deploy to Vercel
- DNS: gitm.ai pointed to Vercel

### NO AI SLOP
- Never use em dashes
- Never use banned phrases (see GHOST_FIRST_PRINCIPLES.md Principle #18)
- Never use "Question? Answer." pattern
- Always "The Ghost Factory" (with "The")
