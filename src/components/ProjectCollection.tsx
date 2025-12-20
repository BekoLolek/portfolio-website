'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiGithub, FiFolder } from 'react-icons/fi';

export interface CollectionProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  learnings?: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface ProjectCollectionData {
  id: string;
  type: 'collection';
  title: string;
  description: string;
  icon?: 'minecraft' | 'web' | 'mobile' | 'api' | 'default';
  projects: CollectionProject[];
}

interface ProjectCollectionProps {
  collection: ProjectCollectionData;
  index: number;
}

export default function ProjectCollection({ collection, index }: ProjectCollectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [flipCount, setFlipCount] = useState(0);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    setFlipCount(prev => prev + 1);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered || isExpanded ? 0.6 : 0.3,
          scale: isHovered || isExpanded ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-gold)]/20 via-[var(--accent-champagne)]/25 to-[var(--accent-bronze)]/20 blur-2xl rounded-lg pointer-events-none"
      />

      {/* Main Card */}
      <motion.div
        whileHover={{ y: isExpanded ? 0 : -5 }}
        animate={{
          borderColor: isHovered || isExpanded ? 'rgba(212, 175, 55, 0.6)' : 'rgba(212, 175, 55, 0.2)',
        }}
        transition={{ duration: 0.3 }}
        className="relative border bg-[var(--bg-secondary)]/50 backdrop-blur-sm"
        style={{ borderRadius: '2px' }}
      >
        {/* Corner accents */}
        <motion.div
          animate={{ opacity: isHovered || isExpanded ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-px -left-px w-4 h-4 border-t border-l border-[var(--accent-gold)]"
        />
        <motion.div
          animate={{ opacity: isHovered || isExpanded ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-px -right-px w-4 h-4 border-t border-r border-[var(--accent-gold)]"
        />
        <motion.div
          animate={{ opacity: isHovered || isExpanded ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-[var(--accent-gold)]"
        />
        <motion.div
          animate={{ opacity: isHovered || isExpanded ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-[var(--accent-gold)]"
        />

        {/* Shimmer sweep effect */}
        <motion.div
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
        />

        {/* Collection Header - Clickable */}
        <motion.button
          onClick={handleToggle}
          className="w-full text-left"
          style={{ padding: '1.5rem 1.5rem 0.75rem 1.5rem' }}
        >
          {/* Title Row with Folder Icon */}
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1rem' }}>
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]/50" />

            {/* Folder Icon */}
            <motion.div
              animate={{ rotateY: flipCount * 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <FiFolder size={18} className="text-[var(--accent-gold)]" />
              {/* Count badge */}
              <div
                className="absolute -top-2 -right-3 w-4 h-4 bg-[var(--accent-gold)] flex items-center justify-center"
                style={{ borderRadius: '2px', fontSize: '10px', fontWeight: 'bold', color: 'var(--bg-primary)' }}
              >
                {collection.projects.length}
              </div>
            </motion.div>

            <motion.h3
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm tracking-[0.2em] uppercase text-[var(--accent-gold)]"
              style={{ fontFamily: 'var(--font-sans)', marginLeft: '0.5rem' }}
            >
              {collection.title}
            </motion.h3>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]/50" />

            {/* Expand indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              <FiChevronDown size={16} className="text-[var(--accent-gold)]" />
            </motion.div>
          </div>

          {/* Description */}
          <p
            className="text-[var(--text-secondary)] leading-relaxed text-center"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}
          >
            {collection.description}
          </p>
        </motion.button>

        {/* Expanded Content - List of Projects */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div style={{ padding: '0.75rem 1.5rem 1.5rem 1.5rem' }}>
                {/* Divider */}
                <div className="flex items-center justify-center gap-4" style={{ marginBottom: '1.5rem' }}>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]/50" />
                  <div className="w-2 h-2 border border-[var(--accent-gold)]/70 rotate-45" />
                  <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]/50" />
                </div>

                {/* Projects List */}
                <div className="flex flex-col" style={{ gap: '1rem' }}>
                  {collection.projects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="relative border border-[var(--accent-gold)]/10 bg-[var(--bg-primary)]/30"
                      style={{ borderRadius: '2px', padding: '1rem' }}
                    >
                      {/* Inner corner accents */}
                      <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[var(--accent-gold)]/30" />
                      <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[var(--accent-gold)]/30" />
                      <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[var(--accent-gold)]/30" />
                      <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[var(--accent-gold)]/30" />

                      {/* Project Title */}
                      <div className="flex items-center justify-center gap-2" style={{ marginBottom: '0.75rem' }}>
                        <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]/40" />
                        <h4
                          className="text-xs tracking-[0.15em] uppercase text-[var(--accent-gold)]/80"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {project.title}
                        </h4>
                        <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]/40" />
                      </div>

                      {/* Description and Link */}
                      <div className="flex gap-4">
                        <p
                          className="text-[var(--text-secondary)] leading-relaxed flex-1"
                          style={{ textAlign: 'justify', fontFamily: 'var(--font-sans)', fontSize: '0.85rem' }}
                        >
                          {project.description}
                        </p>

                        {/* Git Link */}
                        <div className="flex flex-col justify-center flex-shrink-0">
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-8 h-8 border border-[var(--accent-gold)]/30 flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)] transition-all"
                            style={{ borderRadius: '2px' }}
                          >
                            <FiGithub size={14} />
                          </motion.a>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      {project.techStack.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2" style={{ marginTop: '0.75rem' }}>
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs text-[var(--text-secondary)] cursor-default"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}
