# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 14.2.3 using App Router architecture, TypeScript, and Tailwind CSS v4. Features a file-based blog system with Markdown content.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Architecture

**App Router Structure**: Uses Next.js 14 App Router with TypeScript strict mode. The site functions as a single-page application with smooth scrolling navigation between sections.

**Key Directories**:
- `src/app/` - App Router pages, layouts, and route handlers
- `src/components/` - Six main section components (Nav, Hero, About, Blog, Contact, Footer)
- `src/lib/` - Blog utility functions using gray-matter and remark
- `content/blog/` - Markdown blog posts with frontmatter (title, date, image)
- `public/` - Static assets including images and resume

**Blog System**: File-based content management using gray-matter for frontmatter parsing and remark for Markdown-to-HTML conversion. Dynamic routing handles `/blog/[slug]` pages. Blog posts require frontmatter with `title`, `date`, and `image` fields.

**Styling**: Custom CSS variables defined in `src/app/globals.css`:
- `--color-header-footer: #A8B5A7`
- `--color-header-footer-text: #405946`
- `--main-background: #F3EAD0`

Uses Tailwind CSS v4 with PostCSS, Lora variable font from Google Fonts, and mobile-first responsive design.

**TypeScript Configuration**: Path mapping configured (`@/*` → `./src/*`) with strict mode enabled. All components use proper TypeScript interfaces, particularly `PostMeta` and `Post` for blog content.

**Next.js Optimizations**: Image optimization configured for Unsplash domains, Heroicons package import optimization, React Strict Mode, and compression enabled.

## Testing

No testing framework currently configured. ESLint provides code quality checks with Next.js recommended rules.