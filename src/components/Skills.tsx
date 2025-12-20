'use client';

import { motion } from 'framer-motion';
import {
  SiPython, SiDocker, SiPostgresql, SiGit, SiRedis,
  SiLaravel, SiElasticsearch, SiMysql, SiSelenium, SiCelery,
  SiPhp,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbCube, TbApi } from 'react-icons/tb';
import { IconType } from 'react-icons';

const skillIcons: Record<string, IconType> = {
  'java': FaJava,
  'python': SiPython,
  'php': SiPhp,
  'docker': SiDocker,
  'postgresql': SiPostgresql,
  'mysql': SiMysql,
  'git': SiGit,
  'redis': SiRedis,
  'laravel': SiLaravel,
  'elasticsearch': SiElasticsearch,
  'selenium': SiSelenium,
  'celery': SiCelery,
  'ollama': TbCube,
  'spigot api': TbApi,
};

interface SkillsProps {
  skills: Record<string, string[]>;
}

export default function Skills({ skills }: SkillsProps) {
  const getIcon = (skillName: string): IconType | null => {
    return skillIcons[skillName.toLowerCase()] || null;
  };

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative section-padding">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]">
        {/* Gradient blobs */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--accent-bronze)]/6 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-[var(--accent-gold)]/5 rounded-full blur-[100px]"
        />

        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.2,
            }}
            className="absolute rounded-full bg-[var(--accent-gold)]"
            style={{
              width: `${3 + i}px`,
              height: `${3 + i}px`,
              top: `${20 + i * 20}%`,
              right: `${15 + i * 12}%`,
            }}
          />
        ))}

        {/* Decorative rotating shape */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-16 left-[8%] w-20 h-20 border border-[var(--accent-gold)]/10 rounded-full"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-[var(--text-muted)] text-sm tracking-[0.3em] uppercase block mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Skills & <span className="gold-text">Technologies</span>
          </h2>
          <p
            className="text-[var(--text-secondary)] text-lg"
            style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', width: '100%', textAlign: 'center' }}
          >
            Technologies I work with to bring ideas to life.
          </p>
          <div className="divider" style={{ marginBottom: '2rem' }} />
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem', width: '100%', maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto', alignItems: 'stretch' }}>
          {categories.map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
              style={{ height: '100%' }}
            >
              {/* Category Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative border border-[var(--accent-gold)]/20 bg-[var(--bg-secondary)]/50 backdrop-blur-sm flex flex-col"
                style={{ borderRadius: '2px', padding: '1.5rem', minHeight: '180px' }}
              >
                {/* Corner accents */}
                <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-[var(--accent-gold)]/40" />
                <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-[var(--accent-gold)]/40" />
                <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-[var(--accent-gold)]/40" />
                <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-[var(--accent-gold)]/40" />

                {/* Category Title */}
                <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1rem' }}>
                  <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]/50" />
                  <h3
                    className="text-sm tracking-[0.2em] uppercase text-[var(--accent-gold)]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {category}
                  </h3>
                  <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]/50" />
                </div>

                {/* Skills in Category */}
                <div className="flex flex-wrap justify-center items-center gap-3 flex-1">
                  {categorySkills.map((skill, skillIndex) => {
                    const Icon = getIcon(skill);
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-2 px-4 py-2 cursor-default"
                        style={{ borderRadius: '2px' }}
                      >
                        {Icon ? (
                          <Icon size={18} className="text-[var(--accent-gold)]" />
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-[var(--accent-gold)]/30 flex items-center justify-center">
                            <span className="text-[var(--accent-gold)] text-xs font-medium">
                              {skill.charAt(0)}
                            </span>
                          </div>
                        )}
                        <span
                          className="text-sm text-[var(--text-secondary)]"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Decorative glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, var(--accent-gold)/8 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
          style={{ marginTop: '4rem' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]/30" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-3 h-3 border border-[var(--accent-gold)]/40 rotate-45"
            />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
