# Nathan Traxler - Personal Website

A modern personal portfolio website built with Next.js, showcasing my work as a software engineer at Apple.

## About

This is a personal portfolio showcasing Nathan Traxler, a software engineer based in San Francisco who is passionate about Artificial Intelligence and its applications in software engineering. Currently working at Apple supporting Apple TV+.

## Features

- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-first experience
- **Blog Integration**: Markdown-based blog posts with automatic routing
- **Component Architecture**: Modular React components for easy maintenance
- **TypeScript**: Full TypeScript support for type safety
- **Modern Styling**: Custom CSS variables and Tailwind CSS

## Tech Stack

- **Framework**: Next.js app router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: Markdown with gray-matter and remark
- **Icons**: Heroicons
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── blog/[slug]/     # Dynamic blog post pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── AboutSection.tsx
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   ├── FooterSection.tsx
│   ├── HeroSection.tsx
│   └── PortfolioNav.tsx
└── lib/
    └── posts.ts         # Blog post utilities

content/
└── blog/               # Markdown blog posts
    ├── nothin-better-than.md
    └── specificity.md
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Blog Posts

The site includes a blog section with posts written in Markdown. Blog posts are stored in the `content/blog/` directory and automatically rendered with proper routing.

## Deployment

The site is optimized for deployment on Vercel and other modern hosting platforms.
