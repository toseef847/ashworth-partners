<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Ashworth & Partners — Agent Rules

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 App Router, TypeScript strict |
| Styling | Tailwind CSS v4 (CSS-first — **no tailwind.config.ts**) |
| Icons | lucide-react |
| Fonts | next/font/google (Montserrat display, Plus Jakarta Sans body) |
| Images | next/image with PNG assets in `/public/images/` |
| Data | Mock CMS adapter (swappable to real API) |

## Critical Rules

### Next.js 16: `params` is a Promise
Every dynamic route and `generateMetadata` must `await` params:
```ts
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
```

### Tailwind v4: CSS-first — no config file
Design tokens live in `src/app/globals.css` inside `@theme inline {}`.  
Do NOT create `tailwind.config.ts`. Use `@import "tailwindcss"` and `@plugin` directives.

### CMS Adapter Pattern
- **Never** import mock data files directly in pages or components.
- **Always** import and call `cms` from `@/lib/cms/adapter`.
- `cms` is a singleton — only use it in Server Components.
- To swap the data source, replace `MockCMSAdapter` in `adapter.ts`. Zero UI changes required.

### Server vs Client Components
- All pages and data-fetching components are Server Components by default.
- Only add `"use client"` for: interactivity (`useState`, `useEffect`), browser APIs, event handlers.
- Client Components: `MobileNav`, `TestimonialsCarousel`, `FAQAccordion`, `ContactForm`, `CookieBanner`, `NavLink`.

### `position: fixed` + Mobile Overflow
The mobile nav drawer uses `left-0` + `-translate-x-full` (slides from left).  
**Never** change it to `right-0` + `translate-x-full` — that creates 320px horizontal overflow on mobile that `body { overflow-x: hidden }` cannot fix because fixed elements escape the body scroll container.  
`html { overflow-x: hidden }` also breaks it by shifting the ICB, misplacing the drawer.

### Images
All images are PNG files in `/public/images/`. The `dangerouslyAllowSVG` option in `next.config.ts` exists for the SVG fallbacks — do not remove it.  
Always use `next/image` with a non-empty `alt` attribute.

## File Structure

```
src/
  app/                        # App Router pages + layouts
    globals.css               # Tailwind v4 tokens, base styles
    layout.tsx                # Root layout: fonts, Header, Footer, CookieBanner
    page.tsx                  # Homepage
    practice-areas/[slug]/    # Dynamic — generateStaticParams required
    our-team/[slug]/          # Dynamic — generateStaticParams required
  components/
    layout/                   # Header, Footer, MobileNav, NavLink
    home/                     # HeroSection, TestimonialsCarousel, PracticeAreaGrid, etc.
    shared/                   # ContactForm, FAQAccordion, FeeTable, CookieBanner, etc.
  data/mock/                  # Mock CMS data (siteConfig, practiceAreas, solicitors, etc.)
  lib/
    cms/adapter.ts            # Abstract CMSAdapter + MockCMSAdapter singleton
    seo.ts                    # generatePageMetadata, JSON-LD schema helpers
  types/cms.ts                # All TypeScript interfaces for CMS entities
public/
  images/
    hero-banner.png
    team/                     # 4 solicitor headshots (.png)
    practice-areas/           # 4 practice area images (.png)
scripts/
  generate-assets.ts          # Higgsfield prompts for all 9 images (for future regen)
```

## Running the Project

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build (20 static pages)
npx tsc --noEmit # Type check only
```

## Design Tokens (from globals.css)

| Token | Value |
|---|---|
| `--color-navy` | `#0f172a` |
| `--color-gold` | `#c9a84c` |
| `--color-cream` | `#faf9f7` |
| `--font-display` | Montserrat (sans-serif headings) |
| `--font-body` | Plus Jakarta Sans |

Use `font-display` class for headings, `font-body` for body copy.  
Gold (`#c9a84c`) is for accents and headings only — contrast is too low for body text at small sizes.

## SRA Compliance Notes

- Footer must always display SRA number and regulatory text.
- `lang="en-GB"` on `<html>` is required.
- Fee pages: fees are estimates only; confirm in writing at the outset of each matter.
- All forms must have associated `<label>` elements (not just `placeholder`).
- Colour contrast: navy on cream = 17.8:1 (AAA). Gold on navy = ~4.6:1 (AA for large text only).
