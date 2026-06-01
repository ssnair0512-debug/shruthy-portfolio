# CLAUDE.md — Portfolio Website

This file defines the rules, patterns, and best practices Claude must follow when building, editing, or extending this portfolio website. Read this before touching any code.

---

## Project Overview

A personal portfolio website for a designer/engineer. Inspired by [rachelchen.tech](https://www.rachelchen.tech) — clean, minimal, typography-driven, with a focus on work and personality over flashy effects.

**Stack:** Next.js (App Router) + Tailwind CSS + TypeScript  
**Goal:** Fast, responsive, accessible, and easy to update.

---

## Responsive Design — Core Rules

### Mobile-First Always
Write styles for mobile first, then scale up with breakpoints. Never start with desktop and work down.

```css
/* ✅ Correct — mobile first */
.container {
  padding: 1rem;          /* mobile */
}
@media (min-width: 768px) {
  .container {
    padding: 2rem;        /* tablet+ */
  }
}

/* ❌ Wrong — desktop first */
.container {
  padding: 2rem;
}
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
```

### Tailwind Breakpoints to Use
| Prefix | Min Width | Target |
|--------|-----------|--------|
| (none) | 0px       | Mobile (320px–767px) |
| `sm:`  | 640px     | Large mobile / small tablet |
| `md:`  | 768px     | Tablet |
| `lg:`  | 1024px    | Laptop |
| `xl:`  | 1280px    | Desktop |
| `2xl:` | 1536px    | Wide screens |

Always test at: 320px, 375px, 390px (iPhone), 768px (iPad), 1024px, 1440px.

### Fluid Typography
Use `clamp()` for headings so they scale smoothly without breakpoint jumps:

```css
/* In globals.css or as a Tailwind plugin */
h1 { font-size: clamp(2rem, 5vw, 4rem); }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.5rem); }
h3 { font-size: clamp(1.125rem, 2.5vw, 1.75rem); }
body { font-size: clamp(0.9rem, 1.5vw, 1rem); }
```

### Layout Containers
Every page section must use a max-width container centered with auto margins:

```tsx
// Use this pattern for all page sections
<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  {children}
</main>
```

Never hard-code pixel widths on layout elements. Use `max-w-*` and let it be fluid inside.

### Flexible Grids
Use CSS Grid or Flexbox with responsive column counts:

```tsx
// Project cards grid — 1 col on mobile, 2 on tablet, 2 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {projects.map(p => <ProjectCard key={p.id} {...p} />)}
</div>

// Navigation — stack on mobile, row on desktop
<nav className="flex flex-col sm:flex-row gap-4">
```

### Images
- Always use `next/image` — never a raw `<img>` tag
- Always provide `width`, `height`, and a meaningful `alt`
- Use `sizes` prop to serve correct image size per viewport
- Use `priority` on above-the-fold images (hero, profile photo)

```tsx
// ✅ Correct
<Image
  src="/projects/openai-cover.jpg"
  alt="OpenAI hardware concept — main interface screen"
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
  className="w-full h-auto rounded-lg"
  priority
/>
```

---

## Design System

### Aesthetic
Minimal, clean, typographic. Let content breathe. No cards with heavy shadows, no gradients unless intentional. Think editorial, not SaaS dashboard.

### Color Tokens
Define all colors as CSS variables in `globals.css`. Never hardcode hex values in components.

```css
:root {
  --color-bg: #ffffff;
  --color-surface: #f5f5f5;
  --color-text-primary: #0a0a0a;
  --color-text-secondary: #666666;
  --color-text-muted: #999999;
  --color-accent: #0a0a0a;        /* Adjust to your accent color */
  --color-border: #e5e5e5;
}

[data-theme="dark"] {
  --color-bg: #0a0a0a;
  --color-surface: #141414;
  --color-text-primary: #fafafa;
  --color-text-secondary: #a3a3a3;
  --color-text-muted: #666666;
  --color-border: #262626;
}
```

### Typography Scale
Use a single font family (e.g. Inter, Geist, or a system font stack). Consistency over variety.

```css
/* Font pairing — pick one of these approaches */

/* Option A: Single clean sans-serif */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Option B: System font stack (fastest) */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Spacing
Follow an 8px base unit. Use Tailwind spacing scale (4 = 16px, 8 = 32px, etc.).

Comfortable section padding:
- Mobile: `py-12` (48px)
- Tablet: `md:py-16` (64px)
- Desktop: `lg:py-24` (96px)

---

## Component Patterns

### Navigation
```tsx
// components/Nav.tsx
// - Logo/name left, links right on desktop
// - Hamburger or stacked links on mobile
// - Use position: sticky with backdrop blur
// - Active link should be visually distinct (not just bold)

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[--color-border]">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
    <a href="/" className="font-semibold text-sm">Your Name</a>
    <nav className="hidden sm:flex gap-6 text-sm text-[--color-text-secondary]">
      <a href="/work">Work</a>
      <a href="/about">About</a>
      <a href="/resume.pdf" target="_blank">Resume</a>
    </nav>
    {/* Mobile menu button — implement with useState */}
  </div>
</header>
```

### Hero Section
No full-screen takeover. Keep it tight and confident:

```tsx
<section className="pt-20 pb-12 md:pt-28 md:pb-16">
  <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-3xl">
    I'm [Name], a [role] who [does X].
  </h1>
</section>
```

### Project Cards
```tsx
// Minimal card — image + title + label only
// Hover shows subtle overlay or scale
<a href={`/projects/${slug}`} className="group block">
  <div className="overflow-hidden rounded-lg bg-[--color-surface] aspect-video mb-3">
    <Image ... className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
  </div>
  <p className="text-xs text-[--color-text-muted] mb-1">{label}</p>
  <h3 className="font-medium text-[--color-text-primary]">{title}</h3>
</a>
```

### Footer
```tsx
// Minimal — name, social links, built-with note
<footer className="border-t border-[--color-border] py-8 mt-20">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-[--color-text-muted]">
    <span>Designed & built by [Your Name]</span>
    <div className="flex gap-4">
      <a href="https://linkedin.com/in/..." target="_blank">LinkedIn</a>
      <a href="https://github.com/..." target="_blank">GitHub</a>
    </div>
  </div>
</footer>
```

---

## Accessibility (A11y) — Non-Negotiable

Every component Claude writes must meet WCAG 2.1 AA as a minimum.

- **Color contrast:** Text on background must be ≥ 4.5:1 (body), ≥ 3:1 (large text/UI)
- **Focus styles:** Never do `outline: none` without a replacement. Use `:focus-visible` for custom styles
- **Keyboard navigation:** All interactive elements reachable and operable by keyboard
- **Semantic HTML:** Use `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>` — not just `<div>` everywhere
- **Skip link:** Add a "Skip to main content" link as the first focusable element on every page
- **Alt text:** Every `<Image>` must have descriptive alt text. Decorative images get `alt=""`
- **ARIA labels:** Icon-only buttons must have `aria-label`
- **Reduced motion:** Wrap all animations in `@media (prefers-reduced-motion: no-preference)`

```css
/* Wrap animations — always */
@media (prefers-reduced-motion: no-preference) {
  .animated-element {
    transition: transform 0.3s ease;
  }
}
```

```tsx
// Skip link — paste at top of root layout
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-[100]"
>
  Skip to main content
</a>
```

---

## Performance

- Use `next/image` for all images (automatic WebP, lazy loading, size optimization)
- Use `next/font` to self-host fonts — never `@import` from Google Fonts at runtime
- Keep bundle size small: no UI libraries (no MUI, no Chakra) — use Tailwind only
- Lazy-load below-the-fold sections with `loading="lazy"` or `dynamic()` imports
- Target Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Avoid layout shift: always define `width` and `height` on images, reserve space for dynamic content

---

## File & Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout — Nav + Footer live here
│   ├── page.tsx            # Home / work listing
│   ├── about/
│   │   └── page.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx    # Dynamic project case study
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── ui/                 # Primitives (Button, Tag, etc.)
├── content/
│   └── projects/           # MDX or JSON project data
├── public/
│   └── images/
│       └── projects/       # Project cover images
├── styles/
│   └── globals.css         # CSS variables + base styles
└── CLAUDE.md               # ← You are here
```

---

## Content Editing

Project data lives in `/content/projects/`. Each project is a `.json` or `.mdx` file. Claude must never hardcode project content inside component files.

```json
// content/projects/openai.json
{
  "slug": "openai",
  "title": "The future of AI & hardware",
  "label": "OpenAI x Hardware • Concept 2025",
  "coverImage": "/images/projects/openai-cover.jpg",
  "tags": ["Product Design", "Hardware", "AI"],
  "year": 2025,
  "featured": true
}
```

---

## What Claude Should NOT Do

- Do not use `px` for font sizes — use `rem`
- Do not hardcode colors — use CSS variables
- Do not use `!important` unless absolutely unavoidable (and comment why)
- Do not install UI component libraries (MUI, Chakra, Radix UI base layer, etc.) — Tailwind only
- Do not use `<img>` — always `next/image`
- Do not write inline styles except for dynamic values (e.g., progress bar width from JS)
- Do not skip `alt` text
- Do not create separate CSS files per component — use Tailwind classes in JSX
- Do not make components longer than ~150 lines — split them up
- Do not use `any` in TypeScript

---

## Git Commit Convention

```
feat: add project case study page
fix: correct nav mobile overflow on 320px screens
style: tighten hero spacing on tablet breakpoint
a11y: add skip-to-content link
perf: switch to next/font for Inter
content: add 1password project data
```

---

## Quick Reference Checklist

Before marking any task done, verify:

- [ ] Looks correct at 375px (mobile), 768px (tablet), 1440px (desktop)
- [ ] No horizontal scroll on any viewport
- [ ] Images use `next/image` with alt text and `sizes`
- [ ] All interactive elements are keyboard accessible
- [ ] Color contrast passes AA
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No hardcoded colors or font sizes in px
- [ ] TypeScript has no `any` or type errors
- [ ] Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices
