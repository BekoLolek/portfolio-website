import { Project } from '@/components/ProjectCard';
import { ProjectCollectionData } from '@/components/ProjectCollection';

// =============================================
// EDIT YOUR PORTFOLIO DATA HERE
// =============================================

export const portfolioData = {
  // Your personal information
  name: 'Lóránt Bekó', // Replace with your full name
  title: 'Software Engineer', // Replace with your professional title
  email: 'bekololek@gmail.com', // Replace with your contact email

  // Social media links (optional - leave empty string if not applicable)
  socials: {
    github: 'https://github.com/BekoLolek',
    linkedin: 'https://linkedin.com/in/bekololek',
    twitter: '', // Leave empty if you don't want to show Twitter
  },

  // Resume file path (place your resume.pdf in the public folder)
  resumeUrl: '/LórántBekó.pdf',

  // Your skills - organized by category
  skills: {
    'Languages': ['Java', 'Python', 'PHP'],
    'Databases': ['PostgreSQL', 'MySQL', 'Redis', 'ElasticSearch'],
    'Frameworks': ['Laravel', 'Spigot API', 'Celery', 'Selenium'],
    'DevOps & Tools': ['Docker', 'Git', 'Ollama'],
  },

  // Your projects - supports both individual projects and collections (folders)
  // Use type: 'collection' for grouped projects like Minecraft plugins
  projects: [
    // Individual projects
    {
      id: 1,
      title: 'Automatic Creator for TikTok',
      description:
        'An automated pipeline that converts Reddit stories into TikTok videos with AI-powered narration and automated uploads. Features human-in-the-loop approval via a web dashboard, multi-part series support for lengthy stories, and LLM-enhanced hooks and calls-to-action. Uses Whisper for AI-generated captions and Puppeteer for browser automation with graceful fallback to manual uploads.',
      techStack: ['Python', 'Docker', 'PostgreSQL', 'Ollama', 'Celery', 'Elasticsearch'],
      learnings:
        '',
      githubUrl: 'https://github.com/BekoLolek/tiktok-auto',
      liveUrl: '',
    },
    {
      id: 2,
      title: 'Arbitrage Opportunity Finder',
      description:
        'An intelligent web scraper that extracts football betting odds from multiple betting sites using LLM-powered CSS selector discovery. Leverages Ollama to analyze HTML structures and automatically identify correct selectors, making the scraper adaptable when websites change their layouts. Calculates arbitrage opportunities by comparing odds across bookmakers and identifies both profitable and near-profitable betting scenarios.',
      techStack: ['Java', 'Docker', 'Ollama', 'PostgreSQL', 'Selenium'],
      learnings:
        '',
      githubUrl: 'https://github.com/BekoLolek/football-scraper',
      liveUrl: '',
    },
    {
      id: 3,
      title: 'Leaderboard SaaS Application',
      description:
        'A multi-tenant Software-as-a-Service platform that enables game developers to manage player scores and leaderboards with unique API credentials per tenant. Supports three scoring modes including highest score, cumulative totals, and fastest time competitions with automatic player creation and cross-game tracking. Features a React 19 dashboard with comprehensive analytics including top performers, player counts, and average performance metrics.',
      techStack: ['PHP', 'Laravel 12', 'Redis', 'PostgreSQL'],
      learnings:
        '',
      githubUrl: 'https://github.com/BekoLolek/GameLeaderboardSaaS',
    },

    // Minecraft Plugins Collection (at the end)
    {
      id: 'minecraft-plugins',
      type: 'collection' as const,
      title: 'Minecraft Plugins',
      description: 'A collection of custom Minecraft server plugins built with Java and the Paper API',
      icon: 'minecraft' as const,
      projects: [
        {
          id: 101,
          title: 'Dungeons',
          description: 'A grid-based dungeon plugin for Minecraft 1.21.4 that enables multiplayer dungeon experiences with party systems and isolated instances. Features six quest types including mob elimination, item collection, and time survival challenges with chance-based loot tables. Integrates with WorldEdit for schematic loading, WorldGuard for region protection, MythicMobs for custom enemies, and Vault for economy rewards.',
          techStack: [],
          learnings: '',
          githubUrl: 'https://github.com/BekoLolek/Dungeons',
          liveUrl: '',
        },
        {
          id: 102,
          title: 'Quests Revamped',
          description: 'A comprehensive quest and progression system plugin for Minecraft Paper/Spigot servers with three quest categories and eight specific types including parkour, combat, and collection challenges. Features difficulty tiers with scaling rewards, point-based player tracking, and economy integration via Vault. Includes social features like multi-page leaderboards, monthly winner recognition, and Discord webhook integration for automated weekly posts.',
          techStack: [],
          learnings: '',
          githubUrl: 'https://github.com/BekoLolek/QuestsRevamped',
        },
        {
          id: 103,
          title: 'Version Adapter',
          description: 'A cross-version compatibility library for Minecraft plugins that solves API breaking changes between Minecraft versions through automatic runtime enum name resolution. Provides version-safe utilities for materials, attributes, particles, and sounds with pre-resolved constants and dynamic lookups. Enables plugins to work seamlessly across Minecraft versions 1.19 through 1.21.4 without requiring code changes or multiple builds.',
          techStack: [],
          learnings: '',
          githubUrl: 'https://github.com/BekoLolek/VersionAdapter',
        },
      ],
    },
  ] as (Project | ProjectCollectionData)[],
};

// =============================================
// DO NOT EDIT BELOW THIS LINE
// =============================================
export type PortfolioData = typeof portfolioData;
