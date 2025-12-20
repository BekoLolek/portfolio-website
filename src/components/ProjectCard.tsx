'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  learnings?: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  type?: 'project';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
          opacity: isHovered ? 0.6 : 0.3,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-gold)]/20 via-[var(--accent-champagne)]/25 to-[var(--accent-bronze)]/20 blur-2xl rounded-lg pointer-events-none"
      />

      {/* Main Card */}
      <motion.div
        whileHover={{ y: -5 }}
        animate={{
          borderColor: isHovered ? 'rgba(212, 175, 55, 0.6)' : 'rgba(212, 175, 55, 0.2)',
        }}
        transition={{ duration: 0.3 }}
        className="relative border bg-[var(--bg-secondary)]/50 backdrop-blur-sm flex flex-col"
        style={{ borderRadius: '2px', padding: '1.5rem', minHeight: '220px' }}
      >
        {/* Corner accents */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-px -left-px w-4 h-4 border-t border-l border-[var(--accent-gold)]"
        />
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-px -right-px w-4 h-4 border-t border-r border-[var(--accent-gold)]"
        />
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-[var(--accent-gold)]"
        />
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-[var(--accent-gold)]"
        />

        {/* Shimmer sweep effect */}
        <motion.div
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
        />

        {/* Title Row */}
        <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1rem' }}>
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]/50" />
          <motion.h3
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
            className="text-sm tracking-[0.2em] uppercase text-[var(--accent-gold)]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {project.title}
          </motion.h3>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]/50" />
        </div>

        {/* Content area - Description and Link */}
        <div className="flex-1 flex flex-col">
          {/* Description with Git link on right */}
          <div className="flex gap-6 flex-1">
            {/* Description - Left aligned, justified */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--text-secondary)] leading-relaxed flex-1"
              style={{ textAlign: 'justify', fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}
            >
              {project.description}
            </motion.p>

            {/* Git Link - Middle right */}
            <div className="flex flex-col justify-center gap-2 flex-shrink-0">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 border border-[var(--accent-gold)]/30 flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)] transition-all duration-300"
                style={{ borderRadius: '2px' }}
              >
                <FiGithub size={18} />
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-[var(--accent-gold)]/30 flex items-center justify-center text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)] transition-all duration-300"
                  style={{ borderRadius: '2px' }}
                >
                  <FiExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Tech Stack - Bottom */}
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: '1.5rem' }}>
              {project.techStack.map((tech, i) => {
                const totalItems = project.techStack.length;
                const hoverDelay = 0.15 + i * 0.05;
                const unhoverDelay = 0.15 + (totalItems - 1 - i) * 0.05;

                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      color: isHovered ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    }}
                    transition={{
                      opacity: { duration: 0.4, delay: i * 0.05 },
                      scale: { duration: 0.4, delay: i * 0.05 },
                      color: {
                        duration: 0.3,
                        delay: isHovered ? hoverDelay : unhoverDelay,
                      },
                    }}
                    className="px-3 py-1 text-sm cursor-default"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {tech}
                  </motion.span>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}
