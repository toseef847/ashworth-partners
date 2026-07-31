# Session Log — Ashworth & Partners

Most recent session at top. Each entry records what changed, why, and the current state.

---

## Session: 2026-07-31

### Completed

**Site built from scratch**
- Next.js 16 App Router + TypeScript + Tailwind v4
- 20 pages statically generated (home, about, 4 practice areas, 4 solicitor profiles, fee guidance, contact, privacy policy, sitemap, robots)
- CMS adapter pattern with mock data (swappable to real API)
- Schema.org JSON-LD (LegalService, Person, BreadcrumbList)
- WCAG 2.1 AA: skip link, focus rings, aria attributes, keyboard nav

**Images**
- Higgsfield account had 0 credits; SVG placeholders created for initial build
- User provided 9 real PNG images; references updated from `.svg` → `.png` across mock data and components

**Design**
- Font changed from Cormorant Garamond (serif) to **Montserrat** (sans-serif) at user request
- Accent: Champagne Gold `#c9a84c`; Base: Navy `#0f172a`; Background: Cream `#faf9f7`

**Fee guidance page**
- Removed amber warning/disclaimer banner at user request

**Testimonials carousel**
- Fixed: auto-advance was calling `scrollIntoView` which scrolled the entire page every 5 seconds
- Fix: replaced with `el.scrollTo({ left: ... })` on the carousel container only

**Mobile nav horizontal overflow**
- All 6 pages had 320px horizontal overflow on mobile (double-width layout)
- Root cause: `position: fixed; right: 0; translateX(100%)` drawer — body overflow-x:hidden cannot clip fixed elements
- Failed attempt: `html { overflow-x: hidden }` shifts ICB, misplaces open drawer to x=−250
- **Fix**: Drawer changed to `left-0` + `-translate-x-full` (slides from left); no CSS hack needed
- Result: 0px overflow on all pages, open and closed

**Mobile nav trigger at desktop**
- Hamburger button was rendering at 1280px viewport despite `lg:hidden` class
- Fixed via `<div className="lg:hidden">` wrapper in `Header.tsx`

### Current State

- Dev server running at `http://localhost:3000`
- All pages return HTTP 200
- 0px horizontal overflow on all mobile viewports tested (390px)
- TypeScript: no errors (`npx tsc --noEmit` clean)

### Open Issue

**Mobile nav: menu items not visible to user**
The user reports the mobile menu is still not showing correctly on a real device (screenshot shows "Menu" header and "Book a Consultation" CTA but nav links appear missing or cut off). The Playwright test shows the drawer bounding rect is correct (`x=0, width=320`) when open. Likely cause: the nav links section is scrolling off-screen or being clipped inside the drawer. Needs investigation on next session.
