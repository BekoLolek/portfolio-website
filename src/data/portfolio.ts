// =============================================
// EDIT YOUR PORTFOLIO DATA HERE
// Mirrors the CV (public/LorantBeko.pdf). Update both together.
// =============================================

export interface Link {
  label: string;
  href: string;
}

export interface Role {
  title: string;
  company: string;
  place: string;
  dates: string;
  link?: Link;
  highlights: string[];
}

export interface FeaturedProject {
  name: string;
  tagline: string;
  context: string;
  stack: string[];
  highlights: string[];
  links: Link[];
}

export interface SideProject {
  name: string;
  summary: string;
  stack: string[];
  githubUrl: string;
}

export interface ProjectGroup {
  name: string;
  summary: string;
  items: SideProject[];
}

export interface Metric {
  value: string;
  label: string;
}

export const portfolioData = {
  name: 'Lóránt Bekó',
  role: 'Full-Stack & Backend Engineer',
  location: 'Horsens, Denmark',
  email: 'bekololek@gmail.com',
  cvUrl: '/LorantBeko.pdf',
  socials: {
    github: 'https://github.com/BekoLolek',
    linkedin: 'https://linkedin.com/in/bekololek',
  },

  profile:
    'Full-stack and backend engineer who builds and runs production SaaS. I currently develop a multi-tenant scheduling platform with an agentic AI assistant (React, TypeScript, Supabase/PostgreSQL, Anthropic Claude), and have shipped Java/Spring Boot platforms with PostgreSQL, Redis and Docker. I work spec-first and test-first, use AI coding agents in a reviewed, gated workflow, and care about data correctness, security and reliable releases.',

  metrics: [
    { value: '3,000+', label: 'web tests behind CI' },
    { value: '1,100+', label: 'pgTAP database tests' },
    { value: '30+', label: 'role-gated AI assistant tools' },
    { value: '+170%', label: 'API throughput at LiveScoreAPI' },
    { value: '−40%', label: 'page load time, freelance work' },
  ] as Metric[],

  experience: [
    {
      title: 'Full-Stack Engineer',
      company: 'ServiceGuideAI',
      place: 'Denmark',
      dates: 'May 2026 – Present',
      link: { label: 'orvello.io', href: 'https://orvello.io' },
      highlights: [
        'Build Orvello, a multi-tenant shift-scheduling SaaS for hospitality (React, TypeScript, Vite, Supabase/PostgreSQL, Vercel), with strict per-venue isolation through Postgres Row-Level Security, security-definer RPCs and manager/employee role gating.',
        'Engineered “Orvy”, an agentic AI assistant on Anthropic Claude with 30+ role-gated tools and human-in-the-loop approval. Actions such as sick calls run as atomic SQL transactions, and the UI reports partial or failed outcomes honestly.',
        'Moved scheduling rules into a shared, pure TypeScript domain package (eligibility, ranking, week status) used by the planner, AI tools, web and mobile, so every page and the AI give the same answer.',
        'Shipped SSE-streamed AI chat on rate-limited Vercel endpoints with prompt caching and per-tenant cost tracking. Integrated Google Calendar (OAuth, FreeBusy), ICS import and Claude-vision OCR.',
        'Released the React Native/Expo employee app to TestFlight and Google Play via EAS, with push notifications (Expo, Web Push), an outbox delivery worker and a forced-update gate.',
        'Maintain 3,000+ web tests, ~900 domain tests and 1,100+ pgTAP database tests behind CI. Production migrations are applied by hand with deploy notes, and features reach main only after code tests and browser QA.',
        'Run a spec-driven workflow: requirements → use cases → plan, then one AI coding agent per task followed by spec and KISS/SOLID review, isolated-worktree verification and a reviewed commit.',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      place: 'Budapest, Hungary',
      dates: 'May 2024 – Present',
      highlights: [
        'Deliver end-to-end web solutions (React, Node.js, Laravel) from requirements gathering to deployment and hosting.',
        'Cut page load time by 40% through profiling, asset optimisation, caching and lazy loading.',
      ],
    },
    {
      title: 'PHP Developer',
      company: 'LiveScoreAPI',
      place: 'Horsens, Denmark',
      dates: 'Mar 2024 – Aug 2024',
      highlights: [
        'Built backend services in PHP and MySQL for an API serving real-time sports data to paying customers.',
        'Improved API throughput by 170% with Redis caching, query rewrites and indexing.',
        'Took part in code reviews and worked with senior engineers on monitoring and system reliability.',
      ],
    },
  ] as Role[],

  projects: [
    {
      name: 'ConfigTool',
      tagline: 'Production SaaS platform',
      context: 'Jan 2026',
      stack: ['Spring Boot', 'PostgreSQL', 'Redis', 'WebSocket', 'Stripe', 'Docker', 'GitHub Actions'],
      highlights: [
        'Architected a full-stack platform with a Spring Boot backend, PostgreSQL and Redis caching.',
        'Built REST APIs and real-time WebSocket connections. Integrated Stripe payments and third-party services.',
        'Set up CI/CD with GitHub Actions and Docker for automated test, build and deploy.',
      ],
      links: [
        { label: 'configtool.org', href: 'https://configtool.org' },
        { label: 'GitHub', href: 'https://github.com/BekoLolek/AgentGithubReleases' },
      ],
    },
    {
      name: 'PluginFactory',
      tagline: 'AI-powered plugin generator',
      context: 'Apr 2026',
      stack: ['Java 17', 'Spring Boot 3.3', 'PostgreSQL', 'Redis', 'Claude', 'Docker', 'Prometheus', 'Grafana'],
      highlights: [
        'Built a backend (Java 17, Spring Boot 3.3, PostgreSQL, Redis) that uses Claude to generate, compile and test plugin code.',
        'Engineered a containerised build pipeline with Docker-in-Docker execution and Resilience4j circuit breakers.',
        'Deployed the stack with Docker Compose: API, PostgreSQL, Redis, nginx, MinIO and Prometheus/Grafana monitoring.',
      ],
      links: [{ label: 'pluginfactory.org', href: 'https://pluginfactory.org' }],
    },
    {
      name: 'Gambatron',
      tagline: 'Arbitrage detection system',
      context: 'Bachelor’s thesis · Aug 2025 – Jan 2026',
      stack: ['Java 17', 'Spring Boot', 'Selenium WebDriver'],
      highlights: [
        'Built a real-time arbitrage finder in Java 17 and Spring Boot that scans 5+ bookmaker sites.',
        'Automated odds extraction with Selenium WebDriver and concurrent processing.',
        'Implemented algorithms that detect pricing discrepancies across bookmakers in real time.',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/BekoLolek/football-scraper' }],
    },
  ] as FeaturedProject[],

  otherWork: [
    {
      name: 'Automatic Creator for TikTok',
      summary: 'Pipeline that turns Reddit stories into narrated TikTok videos, with a human approval dashboard and Whisper captions.',
      stack: ['Python', 'Celery', 'PostgreSQL', 'Ollama', 'Docker'],
      githubUrl: 'https://github.com/BekoLolek/tiktok-auto',
    },
    {
      name: 'Leaderboard SaaS',
      summary: 'Multi-tenant leaderboard API for game developers, with per-tenant credentials, three scoring modes and an analytics dashboard.',
      stack: ['Laravel 12', 'PHP', 'PostgreSQL', 'Redis', 'React'],
      githubUrl: 'https://github.com/BekoLolek/GameLeaderboardSaaS',
    },
  ] as SideProject[],

  pluginGroup: {
    name: 'Minecraft plugins',
    summary: 'Seven Paper/Spigot server plugins in Java.',
    items: [
      { name: 'Dungeons', summary: 'Instanced party dungeons with quests, loot tables and WorldEdit/MythicMobs integration.', stack: [], githubUrl: 'https://github.com/BekoLolek/Dungeons' },
      { name: 'Quests Revamped', summary: 'Quest and progression system with difficulty tiers, leaderboards and Discord webhooks.', stack: [], githubUrl: 'https://github.com/BekoLolek/QuestsRevamped' },
      { name: 'Version Adapter', summary: 'Runtime enum resolution so one plugin build runs on Minecraft 1.19 to 1.21.4.', stack: [], githubUrl: 'https://github.com/BekoLolek/VersionAdapter' },
      { name: 'PlayerActionTracker', summary: 'Logs suspicious item and container activity to SQLite and alerts staff.', stack: [], githubUrl: 'https://github.com/BekoLolek/PlayerActionTracker' },
      { name: 'NewPlayerProtection', summary: 'Temporary PvP protection for new players.', stack: [], githubUrl: 'https://github.com/BekoLolek/NewPlayerProtection' },
      { name: 'CommandLogger', summary: 'Logs player commands to MySQL with an in-game search GUI.', stack: [], githubUrl: 'https://github.com/BekoLolek/CommandLogger' },
      { name: 'AntiCommandSpam', summary: 'Per-command cooldowns with a whitelist and staff bypass.', stack: [], githubUrl: 'https://github.com/BekoLolek/AntiCommandSpam' },
    ],
  } as ProjectGroup,

  skills: {
    Languages: ['Java', 'TypeScript', 'JavaScript', 'SQL (PL/pgSQL)', 'PHP'],
    Frameworks: ['Spring Boot', 'React', 'Node.js', 'Vite', 'TanStack Query', 'React Native (Expo)', 'Laravel'],
    Databases: ['PostgreSQL', 'Supabase (RLS, RPCs, triggers, Realtime)', 'Redis', 'MongoDB', 'MySQL'],
    Infrastructure: ['Docker', 'AWS', 'Vercel (Edge/Serverless)', 'GitHub Actions', 'CI/CD', 'REST', 'SSE', 'WebSockets', 'EAS'],
    Testing: ['Vitest', 'Jest', 'Playwright', 'pgTAP', 'JUnit', 'Testing Library', 'MSW'],
    Practices: ['System Design', 'TDD', 'Code Review', 'Trunk-Based Development', 'SCRUM', 'LLM Tool-Calling', 'AI-Assisted Development'],
  } as Record<string, string[]>,

  education: {
    degree: 'Bachelor of Software Technology Engineering',
    school: 'VIA University College, Denmark',
    dates: 'Jan 2026',
    coursework: ['Algorithms and Data Structures', 'Advanced Linear Algebra', 'Calculus', 'User Experience'],
  },

  languages: [
    { name: 'Hungarian', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ],

  personal:
    'Passionate about building systems that work reliably at scale. Played competitive ice hockey for 15 years in Hungary, which taught me teamwork, discipline and performing under pressure. In my free time I create and play video games and enjoy movies and series.',
};

export type PortfolioData = typeof portfolioData;
