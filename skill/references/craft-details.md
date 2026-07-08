# Craft Details

Deeper guidance on the four places premium B2B pages usually break, plus the
imagery decision guide and the anti-pattern self-critique to run before handoff.

## Contents

- Contrast & background logic
- Icons
- Imagery
- Composition unity
- Anti-patterns (self-critique before handoff)

---

## Contrast & background logic

More pages fail here than anywhere else, so hold a high standard.

**Cards must pop.** A card, tile, or panel exists to separate content from its
surroundings. If it blends into the section background, it isn't doing its job.
Practical checks:

- On a dark section, cards are white or clearly lighter — not a slightly-different
  dark. On a light section, cards get a clean surface plus a real shadow or a
  defined edge so they lift off the page.
- Icons and text inside a card must read clearly against the card, and the card
  must read clearly against the section. Two levels of separation.
- **The same-tone trap** (often "purple-on-purple", but it applies to any hue):
  purple cards with purple borders and purple icons on a purple panel all melt
  together. When brand color dominates a section, make the cards a contrasting
  surface (white/near-white or a distinctly darker shade) so content pops. Brand
  color belongs in accents, icons, and headlines — not smeared across card,
  border, and background at the same tone.

**Background logic — every background earns its place and covers its whole
section.** Decide per section whether it's a *clean* background with standalone
cards, or a *treated* background (color/dark/texture) that wraps the block. Then
commit:

- A treated background must cover the **entire logical section** — heading,
  cards, and the related copy — not just the row of tiles.
- No partial patches: a colored strip sitting behind only some cards, or a panel
  that stops halfway across a split section, reads as an accident. Extend it to
  the whole section or remove it.
- In split sections, don't give the visual side a heavy background treatment while
  the text side sits on a different plain background with no relationship. Either
  they share the section background, or the treatment wraps both.
- Borders and panels need a structural reason (grouping, separating, anchoring).
  A border hugging one side of a block for no reason, or a decorative shape that
  makes the layout look unfinished, should go. If you can't say what a container
  is *for*, cut it.

Two clean end states, nothing in between:
1. **Standalone cards** on a clean section background (cards carry the contrast), or
2. **One full-section treatment** that contains the whole block (the section
   carries the contrast, cards pop against it).

## Icons

Icons are scanning infrastructure, not garnish.

- **Size and weight:** large and thick enough to register instantly — filled in a
  brand/accent color, or drawn with heavy strokes. Thin, small, pale, low-contrast
  icons read as an afterthought; size them up or restyle them.
- **Meaning:** each icon's shape should map to its content (a route/pin for
  distribution, a shield for security, a stopwatch for speed). A viewer should
  half-guess the point from the icon alone.
- **Uniqueness:** vary icons across a set. Repeating one checkmark down a feature
  list is the classic templated tell — it signals nobody chose the icons. If
  you're using ticks to mean "included", that's fine for a checklist, but don't
  let identical ticks stand in for real feature icons.

## Imagery

The brief decides the imagery approach each time — but the decision is always
driven by *what carries the section's message*, and business-relevance always
beats decoration. Match the approach to what's available and to the environment.

Decide per section, in this order of preference:

1. **Custom vector/diagram/mockup (build it).** For most B2B sections the
   strongest, most controllable visual is one you draw: a workflow diagram, an
   architecture/system diagram, a comparison graphic, a world/coverage map, or a
   product UI composite built in HTML/CSS/SVG. These look bespoke, stay crisp, and
   carry real meaning. Prefer these for anything explaining the product or process.
2. **Product mockups.** Build a clean device/browser frame with realistic,
   legible preloaded content. Never cram in tiny unreadable text or spreadsheet
   density — show a believable, readable slice, not the whole app.
3. **Photography (when the brief calls for a real photo — e.g. executive/founder/
   C-level human moments).** Real photos usually can't be generated in-chat, so:
   - If the brief or design system supplies image URLs/assets, use them.
   - Otherwise, design a clearly-marked, correctly-proportioned image slot with a
     short note on what belongs there (e.g. "executive reviewing results, real
     photo"), styled so the layout looks intentional with the real image dropped
     in. Never fake a person with an obvious AI-generated or fake-stock look, and
     don't drop in a random unrelated office photo.
   - If the brief says avoid placeholders, replace the photo idea with a custom
     illustration or product visual that carries the same message.

Across all of the above, avoid: purely abstract shapes that communicate nothing,
robot/AI-sparkle/sci-fi/space clichés, decorative graphics with no purpose, and
admin-dashboard-only visuals that make a public marketing page look like an
internal tool. Subtle background textures (grids, lines, maps, faint system
diagrams) are welcome when they reinforce a section's meaning.

## Composition unity

Each section should read as one deliberate composition:

- **Anchor visuals to their copy.** A product-UI block and its supporting lines
  should feel bound together — shared background, aligned baselines, deliberate
  overlap or framing — not two unrelated halves parked side by side.
- **Whitespace with intent.** Generous spacing is premium; large purposeless voids
  are not. If a section has an awkward empty area, pull the visual nearer the copy,
  resize it, or restructure the layout so space is doing something.
- **Efficient, not sparse.** Fill the page's job with content and visuals that
  earn their place; don't pad with air, and don't crowd. The test is whether every
  region of the section is contributing.

---

## Anti-patterns (self-critique before handoff)

Run this pass before presenting. For each, check the page and fix what trips it.
These are the specific "tells" of generic-SaaS and AI-generated pages — the whole
point of the skill is to not ship them.

**Structure & rhythm**
- Same 2/3/4-card grid repeated across multiple sections → give sections distinct
  compositions (see `section-library.md`); vary tile sizes, use splits, strips,
  comparisons, dark anchors.
- Page reads as a stack of interchangeable blocks → introduce rhythm: alternate
  layouts, break with a dark anchor, vary section shapes.
- Robotic, evenly-stacked sections with no hierarchy of importance → let the most
  important sections take more space and weight.

**Scannability**
- Important USP in a small header → make it big.
- Long paragraphs where a headline + line would do → cut to scannable copy.
- A section that only makes sense after reading a full paragraph → redesign around
  a headline and a visual.

**Icons & visuals**
- Small/thin/faded/low-contrast icons → size up, thicken, raise contrast.
- Repeated identical checkmarks standing in for feature icons → unique, meaningful
  icons per item.
- Visual floating far from the copy it supports → move it beside its text.
- Digital-only/abstract hero with no real-world or business context → open with a
  business-relevant visual.
- Robot/AI-sparkle/sci-fi/space imagery, or decorative graphics with no purpose →
  replace with a diagram, mockup, or map that means something.
- Product mockup with tiny unreadable text or spreadsheet density → show a clean,
  legible, believable slice.
- Dashboard-only page that looks like an admin screen → it's a public marketing
  page; lead with positioning and business-relevant visuals.

**Contrast & background**
- Cards blending into the background; pale/flat/unfinished tiles → raise contrast;
  white cards on dark sections; add real edges/shadows.
- Same-tone-on-same-tone (purple-on-purple) where cards, icons, borders, and text
  don't pop → make cards a contrasting surface; keep brand color to accents.
- Colored/dark background covering only the cards but not the related heading and
  text → extend the treatment to the whole logical section (or remove it).
- Partial background patch behind only some cards, or a panel that stops halfway
  across a split → make it whole-section or clean-background, nothing in between.
- Split section where the visual half has heavy treatment and the text half sits
  on an unrelated plain background → unify the background relationship.
- Borders/containers with no structural reason; decorative shapes that make the
  layout look accidental or unfinished → cut them or give them a real job.
- Overused gradients standing in for real composition → replace with structure.

**Copy & credibility**
- Vague or cluttered CTAs ("Learn more" everywhere, competing buttons) → one
  specific, action-led primary CTA per section.
- Theoretical, feature-jargon copy that doesn't state value → practical business
  language, value first.
- Any fake proof — invented logos, "trusted by", awards, testimonials, or metrics
  → use only real supplied proof, or an honest placeholder noted as such.

**Whitespace & unity**
- Large empty areas with no purpose → move visuals closer to copy or restructure.
- Product-UI block and its text reading as two unrelated parts → anchor them into
  one composition.

If the page passes all of the above and reads like something a real, credible
company would publish — scannable, varied, business-relevant, high-contrast, and
intentional — it's ready.
