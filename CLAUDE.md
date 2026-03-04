# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website for Wen-Hao Lue, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. Deployed to Vercel.

## Commands

### Local Development
```bash
pnpm install    # Install dependencies
pnpm dev        # Run local dev server (localhost:3000)
```

### Build and Deploy
```bash
pnpm build      # Build production site
pnpm start      # Serve production build locally
```

Deployed automatically via Vercel on push to `master`.

## Architecture

- **Next.js 15** with App Router for routing and static generation
- **Tailwind CSS v4** for styling with custom `@theme` tokens in `globals.css`
- **Framer Motion** for page transitions and scroll-reveal animations
- **MDX** (via `next-mdx-remote`) for blog posts
- **Lucide React** for icons
- **next/font/local** loads self-hosted Metropolis font
- **@next/third-parties** for Google Analytics 4

### Key Directories

- `src/app/` — Pages and layouts (App Router)
- `src/components/` — Shared React components
- `src/lib/` — Utilities (post parsing, metadata constants)
- `src/content/posts/` — MDX blog posts with frontmatter
- `public/` — Static assets (fonts, images, resume, favicon)

### Content Pages

- `/` — Home (hero, currently, previously, contact)
- `/music` — Music/compositions with lazy-loaded YouTube embeds
- `/projects` — Project cards with animations
- `/blog` — Blog listing + individual MDX posts (`/blog/[slug]`)
- `/sitemap.xml` — Auto-generated sitemap
- `/robots.txt` — Auto-generated robots.txt

### Dark Mode

- Class-based (`dark` class on `<html>`) with `ThemeProvider` context
- System preference detection + localStorage persistence
- Inline `<script>` in layout prevents FOUC
- All colors use Tailwind `dark:` variants

### Adding Blog Posts

Create a new `.mdx` file in `src/content/posts/` with frontmatter:
```mdx
---
title: "Post Title"
date: "2026-01-01"
description: "Brief description"
tags: ["tag1", "tag2"]
---

Post content in MDX...
```

### SEO

- Root layout sets default metadata with title template
- Per-page `metadata` exports for title/description
- Dynamic `sitemap.ts` includes all pages and blog posts
- `robots.ts` allows all crawlers
