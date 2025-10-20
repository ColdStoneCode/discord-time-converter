# Discord Time to Unix Converter

## Overview
A comprehensive Next.js website that converts dates and times to Discord timestamp formats. Originally a simple converter tool, the site has been expanded into a full-featured, AdSense-compliant multi-page website with rich content including blog posts, guides, legal pages, and complete SEO optimization.

## Features
- Dark, Discord-inspired UI with gradient background
- Convert to all Discord formats: `t`, `T`, `d`, `D`, `f`, `F`, `R`
- Live preview for each format
- One-click copy for generated tags
- Share links for X (Twitter) and Discord
- Google AdSense placeholders (dev) and production ad support

### Technology Stack
- **Frontend**: React 19.1.0, Next.js 15.5.4
- **Styling**: Tailwind CSS 4, PostCSS, Autoprefixer
- **UI Components**: Lucide React icons
- **Analytics**: Vercel Analytics and Speed Insights
- **Monetization**: Google AdSense integration
- **Type Safety**: TypeScript 5
- **Code Quality**: Biome for linting and formatting

### Project Structure
```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Home page
│   │   ├── converter/          # Timestamp converter tool
│   │   ├── blog/               # Blog section
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/         # Individual blog posts
│   │   ├── guides/             # Guides section
│   │   │   ├── page.tsx        # Guides listing
│   │   │   └── [slug]/         # Individual guide articles
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── privacy/            # Privacy Policy
│   │   ├── terms/              # Terms of Service
│   │   ├── disclaimer/         # Disclaimer
│   │   ├── globals.css         # Global styles
│   │   ├── robots.ts           # SEO robots configuration
│   │   └── sitemap.ts          # Dynamic sitemap generation
│   ├── components/
│   │   ├── Header.tsx          # Site header with navigation
│   │   ├── Footer.tsx          # Site footer with links
│   │   └── AdBanner.tsx        # AdSense ad component
│   └── data/
│       ├── blogPosts.ts        # Blog posts data (5 posts)
│       └── guides.ts           # Guides data (3 guides)
├── public/                     # Static assets
└── package.json               # Dependencies and scripts
```

## Getting Started
- `pnpm run dev` - Start development server on port 5000
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server on port 5000
- `pnpm run lint` - Run Biome linter
- `pnpm run format` - Format code with Biome



### SEO & Analytics
- **Metadata**: Comprehensive meta tags on all pages
- **OpenGraph**: Social sharing optimization
- **Twitter Cards**: Twitter-specific sharing tags
- **Sitemap**: Dynamic sitemap with all pages, blog posts, and guides
- **Robots.txt**: Proper crawling configuration
- **Canonical URLs**: Page-specific canonical links (fixed for proper SEO)
- **Analytics**: Vercel Analytics and Speed Insights integration

## Deployment
- Optimized for Vercel, but any Node host works.
- Build with `pnpm build`, then `pnpm start`.

## Notes
- Time formatting uses native Intl APIs and updates previews instantly.
- The UI has been tuned for dark mode aesthetics; adjust tokens in `globals.css` for color tweaks.
