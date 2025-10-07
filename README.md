# Discord Time to Unix Converter

Convert any date/time to Discord’s Unix timestamp formats with live previews.

## Features
- Dark, Discord-inspired UI with gradient background
- Convert to all Discord formats: `t`, `T`, `d`, `D`, `f`, `F`, `R`
- Live preview for each format
- One-click copy for generated tags
- Share links for X (Twitter) and Discord
- Google AdSense placeholders (dev) and production ad support

## Tech Stack
- Next.js App Router (TypeScript)
- Tailwind CSS (custom layers, tokens, animations)
- Lucide Icons
- PostCSS with `@tailwindcss/postcss`

## Getting Started
1. Install dependencies:
```bash
pnpm install
```
2. Run the dev server:
```bash
pnpm dev
```
Open http://localhost:3000

## Project Structure
- `src/app/` – App Router pages and layout
  - `layout.tsx` – global layout and styles import
  - `page.tsx` – converter UI and logic
  - `globals.css` – theme tokens, base layers, animations
- `src/components/AdBanner.tsx` – AdSense integration (dev placeholder)
- `tailwind.config.js` – Tailwind config (darkMode: class)
- `postcss.config.mjs` – PostCSS config

## Scripts
```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm start      # start production server
pnpm lint       # run lints
```

## Ads
- In development, a styled placeholder renders.
- In production, AdSense script is loaded and `<ins class="adsbygoogle" />` is used.
- Customize the slot id in `src/app/page.tsx` and `src/components/AdBanner.tsx`.

## Deployment
- Optimized for Vercel, but any Node host works.
- Build with `pnpm build`, then `pnpm start`.

## Notes
- Time formatting uses native Intl APIs and updates previews instantly.
- The UI has been tuned for dark mode aesthetics; adjust tokens in `globals.css` for color tweaks.
