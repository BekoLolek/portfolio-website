'use client';

import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import ProjectCollection, { ProjectCollectionData } from './ProjectCollection';

export type ProjectItem = (Project & { type?: 'project' }) | ProjectCollectionData;

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative flex justify-center" style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
      {/* Decorative element - positioned to overlap sections */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
        className="absolute left-1/2 -translate-x-1/2 flex justify-center"
        style={{ top: '-2rem', zIndex: 30 }}
      >
        <div className="relative">
          {/* Orbiting dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-[var(--accent-gold)] rounded-full" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[var(--accent-champagne)] rounded-full" />
          </motion.div>

          {/* Center diamond */}
          <div className="w-16 h-16 border-2 border-[var(--accent-gold)]/40 rotate-45 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent rotate-0" />
          </div>
        </div>
      </motion.div>
      {/* Fun Animated Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]">
        {/* Large gradient blobs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)]/8 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--accent-bronze)]/6 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-champagne)]/5 rounded-full blur-[200px]"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
            className="absolute rounded-full bg-[var(--accent-gold)]"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              top: `${15 + i * 15}%`,
              left: `${10 + i * 15}%`,
              filter: `blur(${i * 0.5}px)`,
            }}
          />
        ))}

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          <motion.div
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(var(--accent-gold) 1px, transparent 1px),
                linear-gradient(90deg, var(--accent-gold) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Decorative shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-[10%] w-32 h-32 border border-[var(--accent-gold)]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-32 left-[5%] w-24 h-24 border border-[var(--accent-champagne)]/10"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginTop: '3rem', marginBottom: '4rem' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Featured{' '}
            <span className="relative inline-block">
              <span className="gold-text">Projects</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-champagne)] to-[var(--accent-bronze)]"
              />
            </span>
          </motion.h2>

        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col" style={{ gap: '3rem' }}>
          {projects.map((project, index) => {
            if (project.type === 'collection') {
              return (
                <ProjectCollection
                  key={project.id}
                  collection={project as ProjectCollectionData}
                  index={index}
                />
              );
            }
            return (
              <ProjectCard
                key={project.id}
                project={project as Project}
                index={index}
              />
            );
          })}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-24"
        >
          <div className="relative">
            {/* Pulsing rings */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-8 h-8 border border-[var(--accent-gold)] rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 w-8 h-8 border border-[var(--accent-gold)] rounded-full"
            />
            {/* Center dot */}
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-3 h-3 bg-[var(--accent-gold)] rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
