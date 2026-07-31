# Project Memory — Ashworth & Partners Solicitors

A record of non-obvious decisions, resolved bugs, and architectural choices made during development. Read before making changes.

---

## Architecture Decisions

### CMS Adapter
`MockCMSAdapter` reads from `src/data/mock/*.ts` files. The abstract `CMSAdapter` class defines the contract. Swapping to a live API means only replacing `MockCMSAdapter` with an `HttpCMSAdapter` — zero UI changes. The singleton `cms` is imported only inside Server Components to prevent accidental client-side usage.

### Tailwind v4 CSS-first
No `tailwind.config.ts` exists by design. All tokens, colours, and fonts are declared in `src/app/globals.css` using the `@theme inline {}` block. The PostCSS plugin is `@tailwindcss/postcss`, not the legacy `tailwindcss` plugin.

### Fonts
Originally Cormorant Garamond (serif) for headings. Changed to **Montserrat** (sans-serif) at user request. Font variables:
- `--font-montserrat` → `--font-display` (headings)
- `--font-plus-jakarta` → `--font-body` (body)

Both loaded via `next/font/google` in `layout.tsx` and injected as CSS variables on `<html>`.

---

## Resolved Bugs

### Mobile nav horizontal overflow (critical)
**Problem:** `position: fixed; right: 0; transform: translateX(100%)` creates 320px horizontal overflow on mobile. `body { overflow-x: hidden }` does NOT fix this because fixed elements escape the body scroll container and are positioned relative to the ICB (viewport).  
**Failed approach:** `html { overflow-x: hidden }` shifts the ICB, placing the drawer at x=−250 when open — the drawer disappears.  
**Fix:** Drawer now uses `left-0` + `-translate-x-full` (slides from left). Off-screen-left never contributes to horizontal scroll width. No CSS hack required.

### Testimonials carousel auto-scrolling the page
**Problem:** `scrollIntoView({ block: "nearest", inline: "center" })` auto-advances the carousel every 5 seconds but also scrolls the page vertically to bring the card into view.  
**Fix:** Replaced `scrollIntoView` with `el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" })` on the scroll container directly. This only changes `scrollLeft` on the carousel `<div>`, never the page scroll position.

### `lucide-react` has no `Linkedin` export
The installed version of `lucide-react` does not export `Linkedin`. Footer uses `ExternalLink` instead for the LinkedIn social link icon.

### Next.js 16 `params` is a Promise
All dynamic routes (`/practice-areas/[slug]`, `/our-team/[slug]`) and their `generateMetadata` functions must use `const { slug } = await params`. This is a breaking change from Next.js 14/15.

### Mobile nav trigger visible at desktop (`lg:hidden` conflict)
`"lg:hidden flex items-center..."` on the trigger button caused a Tailwind v4 specificity conflict. Fixed by wrapping `<MobileNav>` in `<div className="lg:hidden">` in `Header.tsx` instead. `display: none` on a parent hides `position: fixed` descendants too.

---

## Image Strategy

9 PNG images generated via Higgsfield (`gpt_image_2` model) and placed in `/public/images/`:
- `hero-banner.png`
- `team/eleanor-ashworth.png`, `james-pemberton.png`, `priya-sharma.png`, `oliver-hartley.png`
- `practice-areas/commercial-law.png`, `private-client.png`, `employment-law.png`, `dispute-resolution.png`

SVG placeholder equivalents remain alongside each PNG. `dangerouslyAllowSVG: true` in `next.config.ts` is intentional — do not remove.

Higgsfield prompts for all 9 images are documented in `scripts/generate-assets.ts` for reproducibility.

---

## Mock Data

| File | Content |
|---|---|
| `siteConfig.ts` | Firm name, SRA number, address, nav, footer links, cookie text |
| `practiceAreas.ts` | 4 areas: commercial-law, private-client, employment-law, dispute-resolution |
| `solicitors.ts` | 4 solicitors: Eleanor Ashworth, James Pemberton, Priya Sharma, Oliver Hartley |
| `testimonials.ts` | 6 testimonials (4 featured) |
| `feeGuides.ts` | 4 fee guides with hourly/fixed/CFA rates and VAT notes |

---

## Pages

| Route | Type | Notes |
|---|---|---|
| `/` | SSG | Homepage — all sections |
| `/about` | SSG | About page |
| `/practice-areas` | SSG | Grid listing |
| `/practice-areas/[slug]` | SSG ×4 | `generateStaticParams` from mock data |
| `/our-team` | SSG | Grid listing |
| `/our-team/[slug]` | SSG ×4 | `generateStaticParams` from mock data |
| `/fee-guidance` | SSG | Fee tables (no warning banner) |
| `/contact` | SSG | Form + office info |
| `/privacy-policy` | SSG | SRA-compliant boilerplate |
| `/sitemap.xml` | Dynamic | Includes all dynamic routes |
| `/robots.txt` | Static | Disallows `/api/` |

---

## Pending Work

- **Real Higgsfield image generation**: When credits are available on the Higgsfield account (`toseefhasan@gmail.com`, workspace `c442db0e-3b0a-4aa7-910c-605c33916435`), run `npx tsx scripts/generate-assets.ts`. PNG files already placed manually.
- **Mobile nav menu items**: The mobile nav drawer shows "Menu" and "Book a Consultation" but the nav link list items need verifying in a real device browser. The Playwright screenshot shows the open state looks correct — links render in the `<nav>` section of the drawer between the header and CTA footer.
