# Portfolio CV refresh — Use cases

## UC-01: Size up the candidate
- **Actor:** Visitor
- **Requirements:** R-01, R-02, R-11, R-12
- **Preconditions:** Visitor opens the site root.
- **Steps:**
  1. Visitor lands on the page.
  2. System shows name, role ("Full-Stack & Backend Engineer"), location (Horsens, Denmark) and the profile text above the fold.
  3. Visitor uses the navigation to jump to a section.
  4. System scrolls to that section and marks it active in the navigation.
- **Outcome:** Visitor knows who the owner is and can reach every section in one click.
- **Alternate flows:**
  - 3a. On a phone, the navigation is a menu toggle; selecting an item closes the menu and scrolls.
  - 2a. With reduced motion enabled, content appears without animation.

## UC-02: Review experience
- **Actor:** Visitor
- **Requirements:** R-03
- **Preconditions:** UC-01 step 2.
- **Steps:**
  1. Visitor opens the Experience section.
  2. System lists the three roles newest first: ServiceGuideAI (May 2026 – Present), Freelance (May 2024 – Present), LiveScoreAPI (Mar 2024 – Aug 2024), each with company, place, dates and the CV bullet points.
  3. For ServiceGuideAI, system names Orvello and links to orvello.io.
- **Outcome:** Every CV experience bullet is visible on the site.

## UC-03: Inspect a project
- **Actor:** Visitor
- **Requirements:** R-04, R-05
- **Preconditions:** None.
- **Steps:**
  1. Visitor opens the Projects section.
  2. System shows ConfigTool, PluginFactory and Gambatron with subtitle, date, stack tags and the CV bullet points.
  3. Visitor clicks a project's live link (configtool.org, pluginfactory.org) or source link.
  4. System opens the link in a new tab.
- **Outcome:** Visitor reaches the live product or the code.
- **Alternate flows:**
  - 3a. A project with no public link (e.g. Gambatron if no repo is given) shows no dead button.

## UC-04: Check skills and background
- **Actor:** Visitor
- **Requirements:** R-06, R-07, R-08
- **Steps:**
  1. Visitor opens Skills.
  2. System shows the six CV categories (Languages, Frameworks, Databases, Infrastructure, Testing, Practices) with every listed item.
  3. Visitor reads Education and Languages.
  4. System shows the VIA University College degree (Jan 2026) with coursework, and Hungarian (Native) / English (Professional).
- **Outcome:** Visitor can match skills and qualifications against a job spec.

## UC-05: Get the CV and make contact
- **Actor:** Visitor
- **Requirements:** R-09, R-10
- **Steps:**
  1. Visitor clicks "Download CV".
  2. System serves `/LorantBeko.pdf` (the new CV).
  3. Visitor clicks email, LinkedIn or GitHub in Contact.
  4. System opens a `mailto:bekololek@gmail.com` link or the profile in a new tab.
- **Outcome:** Visitor has the CV and a way to reach the owner.

## UC-06: Update content
- **Actor:** Owner
- **Requirements:** R-13
- **Steps:**
  1. Owner edits `src/data/portfolio.ts`.
  2. Owner pushes to `master`; Vercel rebuilds.
- **Outcome:** The site reflects the edit; no component changes were needed.
