# Design Brief — EL-Shaddai Technologies Inc

**Tone:** Premium corporate minimalism. Navy authority + Crimson red strategic accents + Gold premium positioning. Information-first hierarchy with refined surface treatments.

## Color Palette

| Token | OKLCH | Purpose |
| --- | --- | --- |
| Primary (Navy) | `0.22 0.048 258` | Authority, trust, corporate credibility |
| Accent (Crimson) | `0.52 0.22 18` | CTAs, leadership moments, strategic highlights |
| Secondary (Gold) | `0.78 0.14 82` | Premium accents, sparingly used |
| Background (Light) | `0.98 0.004 240` | Clean white, information neutral |
| Foreground (Dark) | `0.12 0.02 250` | Deep navy text, high contrast |
| Card | `1 0 0` | Elevated surfaces, shadow depth |
| Muted | `0.94 0.008 250` | Secondary sections, subtle hierarchy |

## Typography

| Role | Font | Usage |
| --- | --- | --- |
| Display / Headings | Space Grotesk (700) | H1–H6, primary navigation, hero headlines |
| Body / UI | General Sans (400–700) | Body text, labels, form inputs, prose |
| Mono / Code | Geist Mono (400–500) | Code blocks, technical details, data display |

**Type Scale:** H1 (2.5rem), H2 (2rem), H3 (1.5rem), H4 (1.25rem), Body (1rem), Small (0.875rem)

## Structural Zones

| Zone | Background | Border | Notes |
| --- | --- | --- | --- |
| Header | Navy (`--brand-navy`) | None | White text, company name text-only, navigation |
| Hero | Subtle gradient overlay | None | Depth via layered transparency, 60/40 split (content left, image right) |
| Content Sections | Alternating `bg-background` / `bg-muted/20` | Optional navy border-t | Clean white sections with subtle rhythm |
| Cards | `bg-card` | `border-border` | Navy box shadows, hover state lifts |
| Footer | Navy (`--brand-navy`) | None | White text, company info, no "Built with" branding |

## Component Patterns

- **Buttons:** Primary (navy bg, white text), Secondary (gold border, navy text), Destructive (crimson)
- **Links:** Crimson underline, hover state lifts opacity
- **Forms:** Navy labels, muted borders, gold focus ring
- **Cards:** Subtle navy shadow, hover elevation (+2px), rounded corners (8px)
- **Navigation:** Caps weight 500, crimson active state indicator

## Motion & Animation

- **Entrance:** Fade-up (0.6s ease-out) for sections
- **Hover:** Subtle scale (1.02) + shadow lift on cards
- **State Change:** Navy→Crimson transition (0.2s ease-out) on links/buttons
- **No decorative motion** — focus on functional clarity

## Elevation & Depth

- **Level 1 (Base):** No shadow, flat background
- **Level 2 (Cards):** `shadow-navy` (4px offset, 24px blur, navy/30%)
- **Level 3 (Hover):** Same shadow + 2px translateY
- **Level 4 (Modals):** Larger blur, higher navy opacity

## Spacing & Rhythm

- **Gutter:** 2rem (desktop), 1rem (mobile)
- **Section padding:** 4rem vertical (desktop), 2rem (mobile)
- **Component spacing:** 8px, 12px, 16px, 24px, 32px (base unit: 4px)

## Signature Details

- Navy header anchor (full-width, persistent)
- Crimson strategic accents on primary CTAs (sparingly)
- Gold sparingly on premium elements (icons, hover states)
- No decorative graphics — focus on typography and surface hierarchy
- Text-only company branding (no logo images)

## Constraints

- Max 3–4 core colors per page
- Cabinet Grotesk headings only (no other display fonts)
- No gradients on backgrounds (depth via shadows/layering only)
- No animations on page load (focus on content-first experience)
- Minimum 0.7 lightness difference for AA+ contrast

