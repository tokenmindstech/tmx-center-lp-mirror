---
name: tokenminds-web-designer
description: >-
  Design and build premium, conversion-ready B2B websites in the TokenMinds
  house style — landing pages, product/SaaS marketing sites, and agency or
  service sites aimed at founders, CMOs, and C-level buyers. Use this whenever
  the user wants to create, redesign, refine, or critique a marketing website,
  landing page, product page, hero section, or "premium B2B" web page, even if
  they don't name a framework or say "TokenMinds." Also use when a page needs to
  look like a real company shipped it rather than a generic SaaS template or an
  AI-generated landing page, when they want strong section variety instead of
  repeated card grids, big scannable USPs, bold meaningful icons, business-
  relevant visuals (maps, workflow diagrams, product mockups, UI composites), or
  clear background/contrast logic. This skill is
  color-agnostic — it follows whatever palette, type, and brand the brief or
  design system supplies. Do NOT use it for app dashboards/admin UIs, blog
  article layouts, or pure copywriting with no design.
---

# TokenMinds Web Designer

Design premium B2B websites that look like a real, credible company published
them — highly scannable, visually rich, and built to convert business buyers.

The single failure mode to design against is **the generic page**: the
templated-SaaS look and the AI-generated-landing-page look. Both share the same
tells — a stack of near-identical card-grid sections, small faded icons, abstract
dashboard visuals with no real-world context, walls of body copy, and colored
panels that sit behind cards for no clear reason. Everything in this skill exists
to avoid that outcome and produce a page that reads as *intentionally designed*.

This skill is **color- and brand-agnostic.** It never imposes a palette. Colors,
typography, and brand voice come from the project brief or the supplied design
system. (TokenMinds' own brand is purple/magenta, but this skill is used across
many clients — do not default to purple, and specifically avoid the
purple-on-purple, low-contrast trap called out below.) What the skill *does*
carry is a consistent standard of **composition, contrast, scannability, and
craft** that holds across any palette.

## Deliverable

Lead with a short **design plan**, then build the **code** the brief calls for
(usually a single self-contained HTML/CSS file so it renders and hands off
cleanly; use a component/framework if the brief or an existing codebase asks for
it). Match the deliverable to the request — a redesign of one section is not a
whole site. When you also have the `frontend-design` skill available, read it
too: this skill sits on top of it and adds the premium-B2B, high-scannability
point of view.

## Workflow

Work in this order. The planning passes are where quality is won — don't skip to
code.

1. **Pin the brief.** Name the concrete subject, the audience (founders, CMOs,
   technical buyers, procurement…), and the page's single conversion job. If the
   brief leaves the palette/type/brand open, decide a specific, non-generic
   direction and state it. Never invent a fake brand or fake proof.
2. **Set the design system.** Lock 4–6 named hex colors, a display + body type
   pairing with a real scale, spacing rhythm, corner/border language, and one
   *signature* device the page will be remembered by. Everything downstream
   derives from this.
3. **Plan the section architecture.** List the sections in order and, beside
   each, name its *distinct composition* — the point is variety, so no two
   adjacent sections should share the same layout skeleton. See
   `references/section-library.md` for a catalogue of section types and layouts
   to draw from and vary between.
4. **Decide imagery per section.** Choose what visual actually carries each
   section's message (custom diagram, product mockup, UI composite, map,
   workflow strip, photo slot…). Business-relevance beats decoration every time.
   See `references/craft-details.md` → *Imagery* for how to decide, and how to
   handle photos when you can't generate them.
5. **Build with the craft rules** below and in `references/craft-details.md`
   (contrast, icons, background logic, composition unity).
6. **Self-critique against the anti-patterns** in
   `references/craft-details.md` → *Anti-patterns* before you present. This pass
   is not optional — it's what separates a shipped-looking page from a first
   draft. Fix what fails, then hand off.

## Core principles

These are the load-bearing ideas. Each has a *why*, because a page succeeds when
these are understood and applied with judgment — not when a checklist is pattern-
matched.

### Scannability is the product

A business buyer scans before they read. The page must land its message even for
someone who reads *zero* full paragraphs. So:

- **Headlines carry the argument.** Big, readable, clear hierarchy. The most
  important USPs get the biggest headers — never bury a key selling point in a
  small label.
- **Copy is short and specific.** Replace paragraphs with tight lines. One idea
  per line. Say the value plainly ("cut onboarding from weeks to days"), not
  cleverly or theoretically.
- **Every section is scannable on its own.** A visitor should be able to jump in
  at any section and understand it from the headline, the visual, and one line
  of support — without reading the section above it.

If a section only makes sense once you read a full paragraph, it has failed the
scan test — redesign it around a headline and a visual.

### Show, don't tell — with business-relevant visuals

The page should communicate through strong visuals more than long explanations.
Critically, visuals must *mean something about the business*, not just decorate.

- **Open on real-world / business context**, not a digital-only hero. A strong
  opening visual — a product moment, a map, an executive-review scene, a real UI
  composite — beats floating abstract cards or a lone dashboard. (What "real-
  world" means flexes to the subject; the point is concrete and relevant, not
  literal stock photography.)
- **Custom diagrams** explain the product or service clearly. **Product mockups**
  should feel like a real preloaded preview, not a screenshot dump. **Workflow
  strips** show process. **Comparison blocks** make the difference obvious.
- Place each visual *right next to the copy it explains.* A visual stranded far
  from its text reads as filler.
- Avoid: abstract shapes that say nothing, robot/AI-sparkle/sci-fi clichés,
  dashboard-only pages that look like an admin screen, mockups crammed with tiny
  unreadable text or spreadsheet density, and random office photos that don't
  support the story. See `references/craft-details.md` → *Imagery*.

### Icons must be big, bold, and meaningful

Icons are a primary scanning aid, so treat them as real design elements:

- **Large, thick, high-contrast** — filled in a brand color or drawn with thick
  strokes. A thin, small, faded, low-contrast icon is worse than no icon.
- **Each icon means its content** and is **unique** to it. Do not paper every
  feature with the same checkmark — a checklist of identical ticks is the classic
  tell of a page nobody art-directed. Choose an icon whose shape actually maps to
  the idea.

### Section variety, not a stack of card grids

The fastest way a page reads as templated is repeating the same two-/three-/four-
card grid down the whole page. Give each section **its own composition and visual
logic**: alternate split layouts, full-bleed dark anchors, a workflow strip, a
comparison table, an offset visual, a feature with one hero mockup. The
`section-library.md` reference exists to give you options so you're never
reaching for another card row by default.

### Contrast and background logic

This is where most "almost good" pages fall apart, so it gets its own discipline
(full detail in `references/craft-details.md` → *Contrast & background logic*):

- **Cards and tiles must pop** from their background. On dark sections, white
  cards. Never pale-on-pale, and never same-tone-on-same-tone (the purple-on-
  purple trap): if the card, its border, its icon, and its text don't clearly
  separate from the panel, raise the contrast.
- **Every background has a reason, and it covers the whole logical section.** If
  a section gets a colored or dark background, that background wraps the entire
  block — heading, cards, *and* related text — not just the tiles. No random
  partial patches sitting behind only some cards or only one side of a split.
- **Two clean options only:** either standalone cards on a clean section
  background, *or* one full-section background treatment containing the whole
  block. Anything in between (a panel that stops halfway, a border that hugs one
  side for no reason) reads as unfinished.

### Composition unity and efficient space

Each section should feel like *one designed composition*, not two unrelated
halves. A product-UI block and its explanatory copy must feel anchored together.
Use whitespace with intent — generous, but never large empty voids with no
purpose. If a section has an awkward blank area, move the visual closer to the
copy or restructure it.

### Write for the buyer

Copy speaks to founders, CMOs, C-level, and decision-makers in practical business
language that explains value fast. Enough substance to be credible; never so much
text that scanning stops. CTAs are specific and action-led ("Book a strategy
call", "See it on your data") — never vague ("Learn more" everywhere) and never
cluttered with competing buttons.

### Never fake credibility

No fake logos, fake "trusted by" rows, fake awards, fake testimonials, or
invented metrics. If the brief supplies real proof, feature it well. If it
doesn't, design a credible layout with honest placeholders and note it — a strong
composition doesn't need fabricated trust signals.

## The bar

Before presenting, the page should feel like an intentionally art-directed
marketing experience a real company would publish — scannable top to bottom,
visually varied section to section, every visual earning its place next to its
copy, every background and border explainable, and every icon big and meaningful.
Run the *Anti-patterns* self-critique in `references/craft-details.md` and fix
anything that trips it before you hand off.
