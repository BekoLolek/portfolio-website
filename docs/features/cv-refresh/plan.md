# Portfolio CV refresh — Plan

Status: Gate 2 approved ("Build it", 2026-10-29).

## Technology
Nothing here is an open choice. The repo already uses Next.js 16, React 19 and Tailwind 4 (C-01).
- Fonts load through `next/font/google`, which ships with Next. That means no new dependency, and fonts are self-hosted and preloaded.
- `framer-motion` is no longer used after the redesign, because all animation is CSS transitions on state changes. It gets removed from `package.json`. `@emailjs/browser` was already unused and `react-icons` becomes unused, so both go too.
- There is no test runner in the repo, and the site is static content. Verification is `npm run lint` plus `npm run build`, then a browser walk through each use case at 360 / 768 / 1440px in light and dark mode (skill: static sites → manual verification, reported).

## Design direction: "spec sheet"
Thesis: the CV says *spec-first, test-first, data correctness*. The site should read like a well-kept engineering document, not a landing page.
- **Layout:** a full-width header with name, role, location, profile, links and Download CV. Each section is a two-column ledger: a mono section label (`01 Experience`) on the left, content on the right. Experience rows put the dates in a mono column. On phones this becomes a single column.
- **Numbers strip:** the CV's real figures (3,000+ web tests, 1,100+ pgTAP tests, 30+ AI tools, +170% API throughput, −40% page load) are set as large numerals. This is the one "show, don't tell" element.
- **Type:** Schibsted Grotesk for text and headings, and JetBrains Mono for dates, labels and stack tags. Two faces, each with one job.
- **Colour:** a warm paper surface (`#F5F3EE`) and near-black ink in light mode, with a true dark theme from `prefers-color-scheme`. There is one accent, vermilion, used only on links, focus and the CV button.
- **Motion:** none on scroll. 160ms ease-out on hover and focus only, and it respects reduced motion.
- **Removed:** the gold gradient text, floating blobs and particles, serif italics, and the fade-in on every section.

## Tasks

### T1 — Content data + CV file
- Serves: R-01–R-10, R-12–R-14, C-03, A-01–A-03 · UC-06
- Files: `src/data/portfolio.ts` (rewrite), `public/LorantBeko.pdf` (new), `public/LórántBekó.pdf` (delete)
- Accept: every CV section and bullet is present in typed data. Other work keeps TikTok, Leaderboard and the 7 Minecraft plugins with their GitHub links. There is no phone number. Types compile.

### T2 — Tokens, fonts, metadata
- Serves: NFR-02, NFR-03 · UC-01
- Files: `src/app/globals.css` (rewrite), `src/app/layout.tsx`
- Accept: spacing, type, colour, radius and border tokens are defined for both themes. Metadata title is "Lóránt Bekó — Full-Stack & Backend Engineer". Focus-visible ring and reduced-motion rules are in place.

### T3 — Page sections
- Serves: R-01–R-12, R-14, NFR-01, NFR-02 · UC-01–UC-05
- Files: `src/app/page.tsx`, new `src/components/{Header,SiteNav,Section,Experience,Numbers,Projects,OtherWork,Skills,Background,Contact}.tsx`. Delete the old `Hero, Navigation, ProjectCard, ProjectCollection, Projects, Skills, Resume, Contact, Footer`.
- Accept: UC-01 to UC-05 steps hold in the browser. Links that are absent render no button. Minecraft plugins sit in a native `<details>` list. Mobile nav works with the keyboard and closes on select and on Escape.

### T4 — Clean up dependencies and README
- Serves: C-01, NFR-04
- Files: `package.json`, `package-lock.json`, `README.md` (replace the create-next-app boilerplate with a 10-line "how to edit/deploy")
- Accept: `npm run lint` and `npm run build` pass.

### T5 — Verify
- Browser QA of UC-01 to UC-05 at 360/768/1440px in both themes. Check the console for errors and that the CV download returns 200. Run the frontend-design pre-launch list.
- Then commit on a branch and **stop before pushing**. A push to `master` deploys to production via Vercel.
