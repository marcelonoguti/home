# home

Personal landing page for recruiters — a static React site built with Vite.

## Stack

- React 18
- TypeScript
- Vite

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Customize content

Edit `src/content/site.ts` to update your name, links, projects, experience, and skills. Section components live in `src/components/`.

## Deploy

Build the static site with:

```bash
npm run build
```

The output is in `dist/` and can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.
