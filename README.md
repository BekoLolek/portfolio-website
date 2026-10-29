# bekololek portfolio

Personal portfolio for Lóránt Bekó, built with Next.js and Tailwind. Live at https://bekololek.vercel.app.

## Editing content
All content lives in `src/data/portfolio.ts` and mirrors the CV in `public/LorantBeko.pdf`. When the CV changes, replace the PDF and update the data file together.

## Commands
```bash
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deploying
Vercel deploys every push to `master` to production automatically.

Design notes, requirements and the plan for the current version are in `docs/features/cv-refresh/`.
