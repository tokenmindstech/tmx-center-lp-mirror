# TMX — Website & Landing Page Design System

The visual language for **TMX marketing pages** (landing pages, product pages, microsites).
Scope: colors, typography, buttons, and core component styling.

> TMX has its **own brand, separate from TokenMinds**. This website/landing style is also **distinct from the TMX App / Dashboard** — this system is for public marketing pages only.

**The feel:** a premium B2B product brand. Soft lavender paper, white cards that pop, deep plum as the dark anchor, and a purple→magenta gradient used only for energy. Big confident headlines, short scannable copy, large thick icons, high contrast everywhere.

**Product context:** TMX Visibility monitors how a brand, its products, and its category appear across AI answers, search engines, and third-party sources — ending each cycle with an expert-approved action plan, not another dashboard. Audience: founders, CMOs, decision-makers.

**Source:** a single pasted HTML + markdown spec ("TMX — Website & Landing Page Design System"). No Figma, codebase, logo files, or font binaries were provided.

---

## CONTENT FUNDAMENTALS

- **Voice:** confident, direct, business-first. Speaks to "you" (the buyer); the product is the subject ("TMX Visibility monitors…").
- **Headlines:** big, declarative, benefit-led. Sentence case with terminal period allowed ("Know how your brand shows up."). One gradient-clipped highlight word/phrase max per headline.
- **Body copy:** short, scannable — value in one or two sentences, never long paragraphs. "Short, scannable copy that explains value quickly to founders, CMOs, and decision-makers."
- **Eyebrows:** UPPERCASE, 2–4 words, category labels ("FOUNDATIONS", "THE OPERATING PRINCIPLE").
- **CTAs:** specific, one line, verb-first. Canonical labels: **Create Account** (primary), **Try Platform** (secondary), "Explore TMX Visibility" (ghost). Avoid vague/cluttered CTAs.
- **No emoji.** No exclamation marks. No hype-speak or AI-sparkle language.
- Status language: "Strong", "Improving", "Gap flagged".

## VISUAL FOUNDATIONS

- **Backgrounds:** lavender-tinted paper `#F7F5FA`; alt sections `#F4F0F9`; tint panels `#EDE7F6`; white cards. Dark anchor sections use the radial plum surface `--grad-brand` with a soft magenta corner glow and a faint grid pattern (44px lines at 4% white, radial-masked) for depth. No photography, no stock people, no robot/AI imagery.
- **Color logic:** high contrast everywhere; never purple-on-purple or same-tone card/background. Gradient (135° purple→magenta) reserved for CTAs, rails/dividers, selected states, icon accents, headline word clips, glows. Semantic green/amber used sparingly.
- **Type:** Geist only (fallback Inter/system grotesk). Headlines weight 600, tight negative tracking (-0.015 to -0.025em). Body 400, lh 1.6. No italics, serifs, or display faces. Geist Mono for token/code specimens only.
- **Radii:** sm 8 / md 12 / lg 16 (cards) / xl 24 (dark demo panels) / pill 999 (buttons, eyebrows, pills). Icon boxes 14px.
- **Shadows:** plum-tinted — card `0 8px 24px -12px rgba(44,7,64,.18)`; pop (hover) `0 18px 40px -16px rgba(44,7,64,.28)`; dark sections `0 20px 50px -20px rgba(0,0,0,.55)`; primary CTAs carry a magenta glow `0 12px 30px -8px rgba(214,45,253,.45)`.
- **Borders:** 1px hairlines — `#E9E4F0` on light, `#DED7EA` for stronger dividers/secondary buttons, `rgba(255,255,255,.14)` on plum.
- **Hover states:** cards lift 2px and upgrade to pop shadow; primary buttons brighten 6% and lift 1px with stronger glow; secondary buttons swap border+text to purple; ghost buttons widen the gap to nudge the arrow. Transitions ~160–200ms ease.
- **Press:** primary returns to y=0 and dims to 98% brightness.
- **Focus:** 2px magenta outline, 3px offset.
- **Transparency/blur:** only on plum — translucent cards `rgba(255,255,255,.06)` with `backdrop-filter: blur(4px)`.
- **Layout:** 1120px max wrap, 28px side padding, 72px section padding. Every colored/dark section covers its full logical block — headline, cards, and visuals together; no partial panels. Each section gets its own composition — never the same card grid repeated down the page.

## ICONOGRAPHY

- **Style:** large (26px in a 50px box), 2px stroke, round caps/joins, outline style — Lucide/Feather-compatible. Each icon unique and meaningful; never repeated checkmarks.
- **Treatment:** icons sit in a 50px rounded (14px) tinted box: gradient-tinted background `linear-gradient(135deg, rgba(124,58,237,.12), rgba(214,45,253,.12))` with `rgba(124,58,237,.18)` border, stroke painted with the brand gradient via SVG `<linearGradient id="tmxgrad">`. Emphasis variant: solid gradient fill, white stroke, magenta glow.
- **Source:** no icon assets were provided. Components use **Lucide-style inline paths** (matching the spec's own 2px-stroke svgs). If TMX has a proprietary icon set, drop it into `assets/` and swap.
- **No emoji, no unicode-as-icons.**
- **Logo:** provided by the user (uploads/TMX LOGO.png) — plum "TM" with a purple→magenta gradient X. Stored trimmed as `assets/tmx-logo.png` (light backgrounds) and `assets/tmx-logo-white.png` (all-white, for plum/dark). Use `components/core/Brandmark` to place it; never redraw it.

## INDEX

- `styles.css` — global entry (imports everything below)
- `tokens/` — `colors.css`, `typography.css`, `effects.css`, `fonts.css`
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, Eyebrow, Pill, IconBox, TCard, SectionHead, DarkCard, Rail, Brandmark
- `assets/` — `tmx-logo.png`, `tmx-logo-white.png`
- `ui_kits/landing/` — TMX landing-page UI kit (`index.html`)
- `templates/` — starting-point templates for consuming projects
- `SKILL.md` — agent skill entry point

## Intentional additions

- `Rail` — the gradient divider is used pervasively in the spec; wrapped as a one-liner component.
- `SectionHead` — eyebrow + h2 + lede pattern repeated in every section of the spec.

## CAVEATS

- Fonts load from Google Fonts (`Geist`, `Geist Mono`) — no binaries provided.
- No icon/illustration assets provided; icons are Lucide-style inline SVG per the spec's own examples.
