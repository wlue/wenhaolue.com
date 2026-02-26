# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website for Wen-Hao Lue, built with Jekyll (static site generator) and Compass/SASS for styling. Deployed to AWS S3 with CloudFront CDN.

## Commands

### Local Development
```bash
bundle install              # Install dependencies
foreman start -f Procfile.local  # Run local dev server (Compass watch + Jekyll serve)
```

### Build and Deploy
```bash
rake generate   # Clean, compile SASS, build Jekyll site
rake deploy     # Generate and deploy to S3 + invalidate CloudFront
rake clean      # Remove _site/ directory
```

## Architecture

- **Jekyll** generates static HTML from Markdown/HTML templates
- **Compass/SASS** compiles `_assets/sass/style.scss` to `assets/css/style.css`
- **Susy** provides the 12-column grid system
- **jekyll-sitemap** auto-generates `sitemap.xml` at build time
- Ruby 3.2.0 (see `.ruby-version`)

### Key Directories

- `_layouts/` - Jekyll layout templates (default.html is the main template)
- `_includes/` - Reusable partials (header.html, analytics.html)
- `_assets/sass/` - SASS source files
- `assets/` - Compiled CSS, JS, images, fonts
- `_site/` - Generated output (git-ignored)

### Content Pages

- `index.md` - Home page
- `music.html` - Music/compositions
- `projects.html` - Projects listing (excluded from sitemap)
- `posts.html` - Blog listing (excluded from sitemap, currently unused)

### SEO

- `_config.yml` sets the site `url` and `description` used for meta tags and sitemap
- `_layouts/default.html` renders `<title>` and `<meta name="description">` (supports per-page `description` front matter)
- Pages can set `sitemap: false` in front matter to be excluded from sitemap.xml
