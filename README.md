# Basit Bashir Portfolio

A minimal, responsive Next.js portfolio for Basit Bashir, built with TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production check, run `npm run build`, then `npm start`.

## Edit content

All portfolio content is centralized in `src/lib/content.ts`. Update that file to change profile copy, experience, projects, skills, education, or navigation without touching presentation components.

## Deploy to Vercel

Push the project to a Git repository, import it in [Vercel](https://vercel.com/new), and deploy using the default Next.js settings. Before deploying, update the `metadataBase`, canonical URL, sitemap URL, and JSON-LD URL in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/page.tsx` to the final domain.
