## Objectives
- Translate your Figma design into a clean, responsive Nuxt/Vue build.
- Lock design (layout, type, colors, spacing) first; add interactions after.

## Design Tokens
- Extract colors, type scale, spacing, radii, shadows from Figma.
- Map to Tailwind v4 tokens using `@theme` (current: `app/assets/css/main.css`).
- Ensure fonts match Figma (load families/weights and names consistent with tokens).

## Assets
- Export images/SVGs at proper sizes; name consistently.
- Place raster assets in `public/images` and reference via `/images/...`.
- Prefer SVG for icons; ensure crispness across DPRs.

## Layout System
- Define container widths and grid (mobile-first breakpoints).
- Build static versions of sections: Nav, Hero, Showcase, About, Projects.
- Verify spacing rhythm and typographic hierarchy across breakpoints.

## Components
- Align existing components to Figma:
  - Nav: menu, interactions, spacing.
  - Hero: headline, supporting text, CTA, marquee placement.
  - Showcase: card/grid layout, badges.
- Add/adjust props for reusability (sizes, variants).

## Motion Layer (Post-Design)
- Micro-interactions: Magnetic hover, button overlay.
- Continuous elements: marquee (already added) with configurable speed.
- Scroll reveals: lightweight GSAP `opacity/transform` reveals, respecting `prefers-reduced-motion`.
- Performance: transform/opacity only; cleanup on unmount; `ResizeObserver` for measurements.

## Accessibility & Performance
- Heading order, contrast, focus states.
- Reduced motion fallback; avoid motion as sole meaning.