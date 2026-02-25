---
trigger: always_on
---

# Section Build Rules — LLM Instruction File
> Attach this file to every section build request. Read and follow ALL rules before writing code.

---

## ⚠️ PRIME DIRECTIVE — 100% PIXEL-PERFECT, 1:1 FIGMA MATCH

**This is the single most important rule. Everything else serves this goal.**

The output must be a **100% faithful, pixel-perfect reproduction** of the Figma design — not an interpretation, not an approximation, not "close enough." Every spacing value, font size, color, border-radius, shadow, alignment, gap, icon size, and layer order must match the design **exactly** at every breakpoint.

**What pixel-perfect means in practice:**
- Every spacing value (padding, margin, gap) matches Figma to the pixel.
- Every color matches the Figma hex/rgba value exactly — no similar shades.
- Every font size, weight, line-height, and letter-spacing matches the type spec.
- Every border-radius, box-shadow, and opacity matches exactly.
- Every element's width, height, and aspect ratio matches exactly.
- Every icon is the correct size and stroke weight.
- Layout, alignment, and grid structure match at desktop, tablet, and mobile.
- If you cannot replicate something exactly → **stop and ask**. Do not approximate.

**Approximation is a failure.** If a spacing is 24px in Figma, it is 24px in code — not `p-6` if that resolves to a different value. Trace every value back to the design.

---

## 0. BEFORE CODING — ASK IF UNCLEAR

Always ask before assuming. Never guess on:
- Brand hex colors not listed in this file
- Any spacing / gap / padding / margin not explicitly stated
- Hover, focus, active, or transition states
- Breakpoint-specific layout changes
- Animation or scroll behavior
- Font weight, style, or letter-spacing variants
- Any visual detail that is ambiguous

---

## 1. STACK

| Concern | Decision |
|---|---|
| Framework | React + TypeScript |
| Styling | **Tailwind CSS v4** (CSS-first config) |
| Icons | `lucide-react` |
| Animation | CSS transitions + `framer-motion` |
| Class merging | `cn()` via clsx + tailwind-merge |
| Images | `next/image` or lazy `<img>` |

---

## 2. FILE STRUCTURE

```
src/
├── components/sections/
│   └── [SectionName]/
│       ├── index.tsx               ← named export only
│       ├── [SectionName].tsx       ← main component
│       ├── [SectionName].types.ts  ← all interfaces
│       └── components/             ← local sub-components
├── lib/constants/tokens.ts         ← JS token constants (mirrors CSS vars)
└── styles/
    └── globals.css                 ← ALL theme config lives here (Tailwind v4)
```

> ⚠️ **No `tailwind.config.ts` for theme in v4.** All design tokens, colors, fonts, and spacing are defined in `globals.css` using `@theme`. The config file (if present) is only for plugins or content paths.

Rules: one component per file · export from index only · no business logic in UI components · no `any` types · components under 150 lines (split if longer).

---

## 3. TAILWIND V4 THEME — globals.css

In Tailwind v4, the theme is defined entirely in CSS using `@theme`. All tokens become native CSS custom properties and are automatically available as Tailwind utility classes.

```css
/* src/styles/globals.css */
@import "tailwindcss";

@theme {
  /* ── Brand Colors ─────────────────────────────── */
  --color-brand-primary:   #______;
  --color-brand-secondary: #______;
  --color-brand-accent:    #______;

  /* ── Surface ──────────────────────────────────── */
  --color-surface:         #______;
  --color-surface-raised:  #______;

  /* ── Text ─────────────────────────────────────── */
  --color-text-primary:    #______;
  --color-text-secondary:  #______;
  --color-text-inverse:    #______;

  /* ── Feedback ─────────────────────────────────── */
  --color-success:         #______;
  --color-warning:         #______;
  --color-error:           #______;

  /* ── Typography ───────────────────────────────── */
  --font-display: "/* Brand Display Font */", serif;
  --font-body:    "/* Brand Body Font */", sans-serif;

  /* ── Type Scale ───────────────────────────────── */
  --text-display-lg: 56px;
  --text-display-lg--line-height: 1.1;
  --text-display-lg--letter-spacing: -0.02em;
  --text-display-lg--font-weight: 700;

  --text-display-md: 48px;
  --text-display-md--line-height: 1.1;
  --text-display-md--letter-spacing: -0.02em;
  --text-display-md--font-weight: 700;

  --text-display-sm: 36px;
  --text-display-sm--line-height: 1.15;
  --text-display-sm--letter-spacing: -0.01em;
  --text-display-sm--font-weight: 700;

  --text-headline-lg: 32px;
  --text-headline-lg--line-height: 1.2;
  --text-headline-lg--letter-spacing: -0.01em;
  --text-headline-lg--font-weight: 600;

  --text-headline-md: 28px;
  --text-headline-md--line-height: 1.25;
  --text-headline-md--letter-spacing: -0.01em;
  --text-headline-md--font-weight: 600;

  --text-headline-sm: 24px;
  --text-headline-sm--line-height: 1.3;
  --text-headline-sm--font-weight: 600;

  --text-title-lg: 22px;
  --text-title-lg--line-height: 1.35;
  --text-title-lg--font-weight: 600;

  --text-title-md: 16px;
  --text-title-md--line-height: 1.4;
  --text-title-md--font-weight: 600;

  --text-title-sm: 14px;
  --text-title-sm--line-height: 1.4;
  --text-title-sm--font-weight: 600;

  --text-label-lg: 14px;
  --text-label-lg--line-height: 1.4;
  --text-label-lg--letter-spacing: 0.01em;
  --text-label-lg--font-weight: 500;

  --text-label-md: 12px;
  --text-label-md--line-height: 1.4;
  --text-label-md--letter-spacing: 0.01em;
  --text-label-md--font-weight: 500;

  --text-label-sm: 11px;
  --text-label-sm--line-height: 1.4;
  --text-label-sm--letter-spacing: 0.02em;
  --text-label-sm--font-weight: 500;

  --text-body-lg: 16px;
  --text-body-lg--line-height: 1.6;
  --text-body-lg--font-weight: 400;

  --text-body-md: 14px;
  --text-body-md--line-height: 1.6;
  --text-body-md--font-weight: 400;

  --text-body-sm: 12px;
  --text-body-sm--line-height: 1.5;
  --text-body-sm--font-weight: 400;

  /* ── Layout ───────────────────────────────────── */
  --spacing-section-y:  96px;   /* vertical section padding */
  --spacing-container-x: 24px; /* horizontal page padding  */
  --width-container:   1280px;  /* max container width      */

  /* ── Transitions ──────────────────────────────── */
  --transition-fast: all 0.15s ease;
  --transition-base: all 0.25s ease;
  --transition-slow: all 0.4s ease;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

> **How v4 tokens become utilities:** Defining `--color-brand-primary` in `@theme` auto-generates `bg-brand-primary`, `text-brand-primary`, `border-brand-primary`, etc. Defining `--text-display-lg` generates `text-display-lg`. No JS config needed.

---

## 4. JS TOKENS MIRROR

```ts
// src/lib/constants/tokens.ts
// Mirror of CSS vars for use in framer-motion or inline logic only.
// Never use these to set styles directly in JSX — use Tailwind classes.
export const TOKENS = {
  transitions: {
    fast: 'all 0.15s ease',
    base: 'all 0.25s ease',
    slow: 'all 0.4s ease',
  },
} as const
```

---

## 5. TYPE SCALE USAGE

Always use the semantic token class. Never use raw sizes or hex in JSX.

| Class | px | Class | px |
|---|---|---|---|
| `text-display-lg` | 56 | `text-title-lg` | 22 |
| `text-display-md` | 48 | `text-title-md` | 16 |
| `text-display-sm` | 36 | `text-title-sm` | 14 |
| `text-headline-lg` | 32 | `text-label-lg` | 14 |
| `text-headline-md` | 28 | `text-label-md` | 12 |
| `text-headline-sm` | 24 | `text-label-sm` | 11 |
| `text-body-lg` | 16 | `text-body-md` | 14 | `text-body-sm` | 12 |

HTML heading hierarchy: `h1` → Display · `h2` → Headline · `h3` → Title.
Color: `text-text-primary` / `text-text-secondary` — never raw hex.

---

## 6. RESPONSIVE RULES

Build **mobile-first**. Default classes = mobile, `lg:` = desktop.

| Alias | Min Width |
|---|---|
| default | 0px |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

- Mentally verify at 375px, 768px, 1280px — layout must match Figma at each.
- No fixed pixel widths — use `max-w-(--width-container)` + `w-full`.
- Scale typography: `text-display-sm lg:text-display-lg`.
- Images: `w-full h-auto` or `aspect-[w/h]`.
- Touch targets: `min-h-11 min-w-11` (44px).

> **v4 CSS variable syntax in classes:** Use `max-w-(--width-container)` not `max-w-[var(--width-container)]`.

---

## 7. COMPONENT TEMPLATE

```tsx
// [SectionName].tsx
import { cn } from '@/lib/utils'
import type { SectionNameProps } from './[SectionName].types'

export function SectionName({ ...props }: SectionNameProps) {
  return (
    <section id="section-name" aria-labelledby="section-name-heading">
      <div className="mx-auto w-full max-w-(--width-container) px-(--spacing-container-x)">
        {/* content */}
      </div>
    </section>
  )
}
```

---

## 8. INTERACTION & ACCESSIBILITY

- All hover/focus states must be explicitly coded.
- Use CSS var transitions: `transition-(--transition-base)` or inline `style` only for `framer-motion`.
- Semantic HTML always: `<section>`, `<nav>`, `<header>`, `<footer>`, `<main>`.
- All images need descriptive `alt`. All interactive elements need `aria-*` labels.

---

## 9. OUTPUT ORDER PER SECTION

1. `[SectionName].types.ts`
2. Sub-components (if any)
3. `[SectionName].tsx`
4. `index.tsx`
5. Any new `@theme` tokens to add to `globals.css`
6. One-line usage example

---

## 10. SELF-CHECK BEFORE CODING

If any answer is unknown → ask first. Do not proceed with unknowns.

- [ ] All brand hex values known?
- [ ] Every spacing value (padding, gaps, margins) confirmed to the pixel?
- [ ] Grid columns, gutters, and gaps known per breakpoint?
- [ ] Font families, sizes, weights, letter-spacing confirmed?
- [ ] Hover / focus / active states known?
- [ ] Border-radius and shadow values confirmed exactly?
- [ ] Animations or scroll behavior known?
- [ ] Image dimensions and aspect ratios confirmed?
- [ ] Container max-width confirmed?
- [ ] All icon sizes and stroke weights confirmed?
- [ ] Is it properly responsive in all screen sizes? 

---

## 11. NEVER DO

- ❌ **Approximate a Figma value — match exactly or ask**
- ❌ **Round spacing to a nearby Tailwind step if it doesn't match the design**
- ❌ **Use a "similar" color — use the exact Figma hex**
- ❌ **Skip shadows, radius, or opacity — minor details are not optional**
- ❌ Define theme tokens in `tailwind.config.ts` — use `@theme` in CSS (v4)
- ❌ Use `@apply` for design tokens — use utility classes directly
- ❌ Use old `theme()` function — use CSS vars `var(--color-*)` instead
- ❌ Inline styles except for dynamic/JS-driven values
- ❌ Hardcoded colors or sizes in JSX
- ❌ `any` TypeScript type
- ❌ Skipping responsive behavior
- ❌ Missing accessibility attributes
- ❌ Components over 150 lines without splitting
- ❌ Guessing ambiguous Figma values — always ask