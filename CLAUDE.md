# CLAUDE.md — Astor Website

## Project Overview

Astor is a marketing website for an AI consulting firm targeting small businesses (2–50 employees) in South Florida. The site is a static Next.js 14 application — no database, no API routes, no authentication. It serves as a lead-generation funnel driving visitors to a Calendly booking link.

**Live URL:** https://tryastor.com

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 with custom theme
- **Fonts:** DM Sans (body) + DM Serif Display (headings), loaded from Google Fonts
- **Node target:** ES5 (broad browser support)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, fonts, global CSS)
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Tailwind directives + base styles
│   ├── case-studies/
│   │   └── page.tsx        # /case-studies
│   └── team/
│       └── page.tsx        # /team
├── components/             # Reusable React components
│   ├── Navbar.tsx          # Navigation (scroll detection, mobile menu)
│   ├── Header.tsx          # Alternative header with mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── Stats.tsx           # Statistics display
│   ├── SocialProof.tsx     # Social proof section
│   ├── HowItWorks.tsx      # Process/workflow steps
│   ├── CaseStudiesPreview.tsx  # Case study cards grid
│   ├── BigStat.tsx         # Large stat callout
│   ├── WhyAstor.tsx        # Value proposition section
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Site footer
└── lib/
    └── caseStudies.ts      # Case study data (typed CaseStudy[])
public/
├── logo.png               # Primary logo
├── logo.jpg               # Logo variant
├── logo-preview.jpg        # Small logo preview
└── peyton.jpg             # Team member photo
```

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Next.js ESLint
```

There are no test commands — no testing framework is configured.

## Path Aliases

Use `@/*` to import from `src/*`:
```tsx
import { caseStudies } from '@/lib/caseStudies'
import Navbar from '@/components/Navbar'
```

## Styling Conventions

- **Pure Tailwind utility classes** — no CSS modules, no styled-components, no inline `style` props.
- Custom color tokens defined in `tailwind.config.ts`:
  - `brand-*` (blue, primary CTA/accents)
  - `teal-*` (secondary accents)
  - `warm-*` (yellow highlights)
- Standard Tailwind `slate-*` for text and neutral backgrounds.
- Font families: `font-sans` for body text, `font-display` for headings (also set in `globals.css` on `h1, h2, h3`).
- Responsive: mobile-first using `md:` and `lg:` breakpoints.
- Consistent spacing: `px-6` horizontal padding, `py-20`/`py-24` section vertical padding, `max-w-6xl mx-auto` containers.
- Hover/transition patterns: `hover:scale-105 transition-all duration-300`, subtle shadow changes.
- Touch-friendly: minimum `min-h-[44px]` on interactive elements.

## Component Conventions

- Most components use `'use client'` since they include interactive behavior (scroll listeners, mobile menus, hover effects).
- Components are functional React components with TypeScript.
- No prop-types — rely on TypeScript interfaces.
- Data is co-located in `src/lib/` as typed arrays, not fetched from external sources.
- No global state management (no Redux, Zustand, or Context providers).

## Content & Data

All content is hardcoded in TypeScript files — there is no CMS:
- Case studies live in `src/lib/caseStudies.ts` as a typed `CaseStudy[]` array.
- Page copy is inline in each component/page file.
- External links:
  - Calendly: `https://calendly.com/peytonbrooks6`
  - Email: `peytonbrooks6@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/peytondbrooks/`

## SEO & Metadata

- Root metadata in `src/app/layout.tsx` (title, description, OpenGraph, Twitter cards).
- Page-specific metadata exported from each `page.tsx`.
- `metadataBase` set to `https://tryastor.com`.

## Environment & Configuration

- No environment variables are used — all config is hardcoded.
- `next.config.js` is empty/default.
- `postcss.config.js` includes Tailwind and autoprefixer plugins.
- No CI/CD pipelines, Docker, or deployment config files in the repo.

## Git Conventions

- Commit messages follow the pattern: `<type>: <description>` (e.g., `style: Revert website headline to original`, `Fix mobile spacing throughout`).
- The `main` branch is the production branch.
- No git hooks or pre-commit checks are configured.

## Key Guidelines for AI Assistants

1. **This is a static marketing site** — keep it simple. No need for API routes, databases, or complex state management.
2. **Tailwind only** for styling. Do not introduce CSS modules or other styling libraries.
3. **Preserve the design system** — use the custom `brand`, `teal`, and `warm` color tokens rather than raw hex values or default Tailwind colors.
4. **Use `font-display` for headings** and `font-sans` for body text to maintain typographic consistency.
5. **Mobile-first** — always ensure changes are responsive. Test at mobile, `md:`, and `lg:` breakpoints.
6. **Keep content inline** — case studies go in `src/lib/caseStudies.ts`; page copy stays in component files.
7. **No new dependencies** unless explicitly requested — the minimal dependency footprint is intentional.
8. **Run `npm run build`** to verify changes compile without errors before committing.
