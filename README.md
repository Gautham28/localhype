# LocalHype

A responsive landing page for LocalHype — a marketing company that helps local businesses grow with local creators through paid story campaigns, collabs, photoshoots, reels, and content creation.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                  # Next.js app router (layout, page, styles)
components/landing/   # Landing page sections (nav, hero, …)
components/ui/        # shadcn/ui primitives
lib/                  # Shared utilities
prd.md                # Product requirements & design system
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |
