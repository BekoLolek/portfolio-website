# Portfolio CV refresh — Requirements

Status: Gate 1 approved. The owner chose "New design" and "Keep non-CV projects as 'Other work'" (2026-10-29).
Source of truth for content: `LorantBeko.pdf` (CV, Oct 2026).

## Roles
- **Visitor**: a recruiter, hiring manager or engineer who opens the site, usually from the CV's "Portfolio" link or LinkedIn.
- **Owner**: Lóránt, who edits the site content.

## Functional requirements
- R-01 As a visitor, I want to see the owner's name, role and location, so that I know within seconds who this is.
- R-02 As a visitor, I want to read a short professional profile, so that I understand what kind of engineer the owner is.
- R-03 As a visitor, I want to see the owner's work experience with role, company, dates and achievements, so that I can judge seniority.
- R-04 As a visitor, I want to see the featured projects from the CV with their stack and outcomes, so that I can see what the owner has built.
- R-05 As a visitor, I want to open a project's live site or source code, so that I can verify the work.
- R-06 As a visitor, I want to see the technical skills grouped by category, so that I can match them to a job description.
- R-07 As a visitor, I want to see the owner's education, so that I know their qualification.
- R-08 As a visitor, I want to see the languages the owner speaks, so that I know they can work in English.
- R-09 As a visitor, I want to download the current CV as a PDF, so that I can attach it to an application.
- R-10 As a visitor, I want to reach the owner by email, LinkedIn or GitHub, so that I can contact them.
- R-11 As a visitor, I want to jump to any section from the navigation, so that I can skip to what I care about.
- R-12 As a visitor, I want to see a short personal note, so that I get a sense of the person behind the CV.
- R-13 As the owner, I want all CV content in one data file, so that I can update the site when the CV changes.
- R-14 As a visitor, I want to see the owner's other projects in a compact list, so that I can see the range of their side work.

## Constraints
- C-01 Stays on the existing stack: Next.js 16 (App Router), React 19, Tailwind 4, framer-motion, react-icons. No new dependencies.
- C-02 Deploys through the existing Vercel project from the GitHub repo `BekoLolek/portfolio-website`, branch `master`.
- C-03 Content must match the CV wording and facts; nothing on the site may claim more than the CV does.
- C-04 Static page; no backend, no form submission service.

## Non-functional requirements
- NFR-01 Responsive from 360px phone width to desktop with no horizontal scroll.
- NFR-02 Accessible: semantic headings, visible focus, WCAG AA contrast, respects `prefers-reduced-motion`.
- NFR-03 Page metadata (title, description, Open Graph) names the owner and role, not "Portfolio | Developer".
- NFR-04 `npm run lint` and `npm run build` pass.

## Out of scope
- Phone number on the site (it stays on the PDF only — public pages get scraped).
- A contact form, blog, CMS, i18n, or analytics.
- Changes to the Vercel project settings or domain.

## Assumptions
- A-01 Orvello is shown under the ServiceGuideAI experience entry with a link to orvello.io, not as a separate project card.
- A-03 Gambatron's source link is the existing `football-scraper` repo, and ConfigTool keeps the existing `AgentGithubReleases` link. PluginFactory shows only its live site.
- A-02 The new `LorantBeko.pdf` replaces `public/LórántBekó.pdf` (also fixes the non-ASCII filename in the URL).
