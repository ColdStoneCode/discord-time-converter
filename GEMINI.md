# GEMINI.md

## Project Overview

This is a Next.js web application that converts dates and times to Discord timestamp formats. The project is designed as a full-featured, AdSense-compliant multi-page website with a blog, guides, and legal pages. The user interface is a dark, Discord-inspired theme with a gradient background.

The core functionality of the application is to convert a user-selected date and time into various Discord timestamp formats. The application provides a live preview for each format and allows for one-click copying of the generated tags. It also includes features for sharing on social media, as well as time zone utilities.

The project is built with React 19, Next.js 15, and styled with Tailwind CSS. It uses TypeScript for type safety and Biome for linting and formatting.

## Building and Running

The following scripts are available to run, build, and test the application:

*   `pnpm run dev`: Starts the development server with Turbopack on port 3000.
*   `pnpm run build`: Builds the application for production with Turbopack.
*   `pnpm run start`: Starts the production server.
*   `pnpm run lint`: Runs the Biome linter to check for code quality.
*   `pnpm run format`: Formats the code with Biome.

## Development Conventions

*   **Styling**: The project uses Tailwind CSS for styling. Global styles are defined in `src/app/globals.css`.
*   **Components**: Reusable components are located in the `src/components` directory.
*   **Data**: Static data for blog posts and guides is stored in the `src/data` directory.
*   **Linting and Formatting**: The project uses Biome for linting and formatting. The configuration can be found in the `biome.json` file.
*   **SEO**: The application is optimized for SEO with comprehensive metadata, OpenGraph and Twitter card support, a dynamic sitemap, and a `robots.ts` file.
*   **Monetization**: The application is integrated with Google AdSense. Ad banners are displayed in various locations on the site.
