---
name: andrewrapier-portfolio-redesign
overview: Redesign the current Next.js app into a clean, high-converting portfolio for Andrew Rapier, featuring a revolving “program window” carousel of live site previews (iframes) that open the real site in a new tab when clicked.
todos:
  - id: replace-homepage
    content: Replace `app/page.tsx` with the new landing layout (Hero, Work carousel, Services, Industries, Process, Contact).
    status: in_progress
  - id: build-carousel
    content: Implement the revolving carousel + program-window project cards with iframe previews and new-tab click behavior.
    status: pending
  - id: update-metadata
    content: Update `app/layout.tsx` metadata for Andrew Rapier (title/description/OG placeholders).
    status: pending
  - id: design-system
    content: Create minimal reusable UI components (Button/Section) and align styling with Tailwind v4 design tokens.
    status: pending
  - id: perf-accessibility
    content: Add lazy iframe mounting, keyboard controls, and prefers-reduced-motion handling for the carousel.
    status: pending
---

# AndrewRapierPortfolioRedesignPlan

## Goals

- Build a **simple, clean, high-converting** portfolio site for **Andrew Rapier**.
- Make the primary value proposition clear: **expert web developer/designer/web application programmer** who increases conversions and solves complex client problems.
- Emphasize target industries: **construction**, **SaaS**, **e-commerce**.
- Add a **revolving carousel** of project sites that:
- Looks like **program windows** (title bar + controls + URL)
- Shows a **live preview** via iframe
- **Opens the project site in a new tab** on click

## Current repo observations

- Next.js App Router is set up; the homepage is still the starter template in [`app/page.tsx`](/Users/idonotknow/Coding/andrewrapier-port-new/app/page.tsx).
- Global styles are minimal and Tailwind v4 is configured in [`app/globals.css`](/Users/idonotknow/Coding/andrewrapier-port-new/app/globals.css).
- Site metadata is still default in [`app/layout.tsx`](/Users/idonotknow/Coding/andrewrapier-port-new/app/layout.tsx).

## IA (information architecture) and page layout

Single-page landing (fast, focused, conversion-first) implemented in `app/page.tsx`:

- **Header (sticky)**
- Left: “Andrew Rapier”
- Right: nav anchors (Work, Services, Industries, Process, Contact)
- Primary CTA button: “Book a call” (or “Get a quote”)

- **Hero (above the fold)**
- Headline: clear outcome-focused promise (conversion + problem solving)
- Subheadline: “Web development, design, and web applications”
- Primary CTA: “Book a call”
- Secondary CTA: “View work” (scroll to carousel)
- 1–3 credibility bullets (speed, SEO, conversion, reliability)

- **Work (carousel section)**
- “Selected work” intro copy
- Revolving carousel of “program windows” with:
- title bar, favicon placeholder, project name
- address bar (domain)
- iframe preview area
- click opens `project.url` in new tab (`target="_blank" rel="noopener noreferrer"`)

- **Services (conversion-oriented)**
- Web design (UX/UI, brand-aligned)
- Web development (Next.js/React, performance)
- Web applications (dashboards, integrations, complex workflows)
- Each card: outcomes + typical deliverables

- **Industries (positioning)**
- Construction: lead gen, trust signals, quote funnels
- SaaS: product marketing pages, onboarding, activation
- E-commerce: CRO, speed, PDP/collection improvements

- **Process (reduce risk)**
- Discovery → Design → Build → Launch → Iterate
- Set expectations: timeline ranges + communication cadence

- **Proof (optional but recommended for conversion)**
- Testimonials, metrics, mini case-study bullets
- If not available: “Results you can expect” with realistic claims

- **Contact (final CTA)**
- Short form or mailto + scheduling link
- Clear offer: “Free 15-minute consult”
- Footer with socials

## Carousel: technical approach

Because you confirmed **all sites can be embedded**, implement a true “live preview” carousel using iframes.

### Data model (hardcoded for now)

Define an array in `app/page.tsx` or a small module (recommended even if hardcoded):

- `id`
- `name`
- `url`
- `industry` (construction|saas|ecommerce|other)
- `tagline` (1-liner)
- `tech` (optional)

### UI behavior

- **Revolving / ring effect**: 3D carousel with CSS transforms (perspective + rotateY + translateZ).
- Controls:
- Prev/Next buttons
- Optional autoplay (pause on hover/focus)
- Keyboard support (Left/Right arrows)
- Respect `prefers-reduced-motion` (disable autoplay + heavy motion)
- Performance:
- Lazy mount iframes: only active + neighbors render iframes; others show a lightweight placeholder to avoid loading many sites at once.
- Use `loading="lazy"` where applicable.
- Security:
- Add `sandbox` on iframes with only what you need (start restrictive; expand if previews break).

### “Program window” styling

- Window chrome: rounded container, subtle border, shadow, title bar with 3 dots.
- Address bar: truncated URL.
- Preview area: iframe with fixed aspect ratio (e.g. 16:10) and a loading skeleton.

## Design system (simple + premium)

- Color: neutral base (zinc/stone) + one accent for CTAs.
- Typography: keep Geist Sans already configured.
- Spacing: generous vertical rhythm; max width ~ 1100–1200px.
- Components: consistent button styles, section headings, cards.

## SEO + conversion essentials

- Update `metadata` in `app/layout.tsx`:
- Title: “Andrew Rapier — Web Developer & Designer”
- Description: conversion-focused positioning + industries
- Open Graph + Twitter cards (add later if you have images)
- Add clear CTAs and a repeated CTA near Work and at Contact.
- Add lightweight analytics hook later (optional).

## Files to change / add

- Update: [`app/page.tsx`](/Users/idonotknow/Coding/andrewrapier-port-new/app/page.tsx)
- Replace starter content with the landing layout and sections.
- Update: [`app/layout.tsx`](/Users/idonotknow/Coding/andrewrapier-port-new/app/layout.tsx)
- Replace default metadata; add header/footer layout wrapper if desired.
- Update: [`app/globals.css`](/Users/idonotknow/Coding/andrewrapier-port-new/app/globals.css)
- Keep minimal; add any global base styles needed (selection, smooth scrolling, etc.)
- Add (recommended): `components/Carousel.tsx`, `components/ProjectWindow.tsx`, `components/Section.tsx`, `components/Button.tsx`
- Keep components small and reuse across sections.

## Implementation notes (guardrails)

- Ensure all external links opened in a new tab include `rel="noopener noreferrer"`.
- Validate the iframe embedding works for each project URL.
- Make it mobile-first:
- Carousel becomes swipeable and shows 1 card centered.
- Desktop shows 3D ring/stack.

## Test plan

- Verify carousel:
- Prev/Next works
- Clicking a project opens correct URL in a new tab
- Autoplay pauses on hover/focus and respects reduced motion
- Verify responsiveness: iPhone width → tablet → desktop.
- Verify Lighthouse basics (no major CLS from iframe sizing; stable layout).