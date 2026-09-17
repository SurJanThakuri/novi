# Novi — Landing Page

A responsive marketing landing page for **Novi**, a project and task management tool built for small, fast-moving teams.

**Live preview:** [novi-eosin.vercel.app](https://novi-eosin.vercel.app)

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — custom design tokens for spacing, typography, colors, and border radius
- **Framer Motion** — scroll-reveal, stagger animations, hover/tap states, layout transitions, and parallax
- **Lenis** — buttery smooth scrolling with momentum
- **Material Symbols Outlined** — icon system
- **Google Fonts** — Space Grotesk (display), Geist (body/labels)

## Getting Started

```bash
git clone https://github.com/SurJanThakuri/novi.git
cd novi
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # run production build locally
npm run lint    # run eslint
```

## Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky header with scroll-aware glass blur, animated mobile menu with staggered link reveal |
| **Hero** | Headline with SVG underline draw, cursor-tracked parallax mockup, floating pills, magnetic CTAs, draggable kanban cards |
| **Integrated Lifecycle** | 4 interactive stage selector cards with animated counters (0 Tabs, <30s, 48ms, 100%), cross-fade showcase panels |
| **Product Features** | Tabbed view (Board, List, Timeline, Notes) with animated tab indicator, project header with avatar stack |
| **Core Capabilities** | 4 asymmetric feature cards with 3D tilt, animated sprint velocity bar, timeline gantt animation, migration selector |
| **Teams** | 3 use-case cards (Startups, Agencies, Product & Design) with 3D tilt and spring-animated icons |
| **Integrations** | 3x2 grid of tools (Figma, GitHub, Slack, Notion, Linear, Google Drive) with magnetic hover |
| **CTA** | Pulsing ambient gradients, dual magnetic CTAs |
| **Footer** | Email subscribe form, 4-column link grid, social links |

## Interactive Components

| Component | File | Description |
|---|---|---|
| `MagneticButton` | `src/components/ui/interactive.tsx` | Cursor-following magnetic pull with configurable strength |
| `TiltCard` | `src/components/ui/interactive.tsx` | 3D perspective tilt tracking cursor position with glare effect |
| `AnimatedCounter` | `src/components/ui/interactive.tsx` | Scroll-triggered count-up with cubic easing |
| `FadeIn` | `src/components/ui/motion.tsx` | Scroll-triggered fade + directional slide |
| `Stagger` / `StaggerItem` | `src/components/ui/motion.tsx` | Staggered children reveal on scroll |
| `ScaleIn` | `src/components/ui/motion.tsx` | Scroll-triggered scale-up entrance |

## Design System

Custom Tailwind v4 theme tokens defined in `src/app/globals.css`:

- **Colors**: Warm "Studio Precision" palette — primary terracotta `#aa3015`, warm parchment surfaces, charcoal text
- **Typography**: Space Grotesk for display/headlines, Geist for body/labels
- **Spacing**: `space-xs` through `space-xl`, `gutter`, `margin` tokens
- **Border Radius**: `sm: 0.125rem`, `lg: 0.25rem`, `xl: 0.5rem`, `full: 0.75rem`

## File Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 theme tokens
│   ├── layout.tsx           # Root layout with Google Fonts
│   └── page.tsx             # Main page assembly
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Sticky navbar with mobile menu
│   │   ├── footer.tsx       # Footer with email form
│   │   └── smooth-scroll.tsx # Lenis wrapper
│   ├── sections/
│   │   ├── hero.tsx         # Hero with parallax mockup
│   │   ├── lifecycle.tsx    # 4-stage interactive lifecycle
│   │   ├── product-features.tsx # Tabbed product view
│   │   ├── core-capabilities.tsx # 4 feature cards
│   │   ├── teams.tsx        # 3 use-case cards
│   │   ├── design-system.tsx # Integrations grid
│   │   └── cta.tsx          # Final CTA
│   └── ui/
│       ├── motion.tsx       # Animation wrappers
│       └── interactive.tsx  # Magnetic, tilt, counter components
└── lib/
    └── constants.ts         # Nav links, footer data
```

## Notes

No backend/API is connected — this is a static marketing page. Email signup and CTAs are UI-only.
