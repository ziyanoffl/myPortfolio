# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio (Create React App, React 16, plain CSS, no animation libraries). Deployed to GitHub Pages (`homepage` in package.json).

## Commands

```bash
npm start            # dev server on localhost:3000
npm run build        # production build to build/ (CI=true makes warnings fatal)
npm test             # jest smoke test (src/App.test.js); single test: npm test -- -t "name"
npm run check-format # prettier check (js, css, json)
npm run format       # prettier write
npm run deploy       # gh-pages -b master -d build (publishes the build to the master branch)
```

## Architecture

- **All content lives in `src/portfolio.js`** (greeting, stats, skills, experience, education, contact). Components import from it; edit content there. The Projects section renders only when `projects.items` is non-empty and its nav link is added automatically in `App.js`.
- **Composition:** `App.js` renders `Backdrop`, `Nav`, then `Hero → Marquee → About → Skills → Experience → Education → Projects → Contact` (all sections except Hero live in `components/Sections.js`) and `Footer`.
- **Motion primitives** (`components/Motion.js`): `Reveal` (springy scroll-in via the shared IntersectionObserver in `hooks/useInView.js`), `Tilt` (mouse 3D tilt + glow via CSS variables), `Magnetic`, `Counter` (`hooks/useCountUp.js`). Animate only `transform`/`opacity`; bounce comes from the `--spring` cubic-bezier in CSS. Pointer effects are mouse-only and rAF-throttled.
- **Styling:** `src/index.css` holds design tokens (dark/light themes keyed on `html[data-theme]`) and base styles; `src/App.css` holds everything else plus keyframes and a `prefers-reduced-motion` block. Theme state is in `App.js`, persisted with `hooks/useLocalStorage`.
- **Icons:** Font Awesome 6 loaded from cdnjs in `public/index.html`; `portfolio.js` stores icon class names.
- jsdom has no `matchMedia`/`IntersectionObserver`; the hooks guard for that so tests render without mocks.

## Formatting

Prettier 2 via `.prettierrc` (no bracket spacing, `v => ...` arrows). Run `npm run format` rather than hand-formatting.
