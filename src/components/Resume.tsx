'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiArrowRight } from 'react-icons/fi';

interface ResumeProps {
  resumeUrl?: string;
}

export default function Resume({ resumeUrl = '/resume.pdf' }: ResumeProps) {
  return (
    <section id="resume" className="relative section-padding">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]">
        {/* Gradient blobs */}
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[var(--accent-champagne)]/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -18, 0],
            y: [0, 20, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-1/4 right-1/3 w-[280px] h-[280px] bg-[var(--accent-gold)]/4 rounded-full blur-[90px]"
        />

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            className="absolute rounded-full bg-[var(--accent-gold)]"
            style={{
              width: `${4 + i}px`,
              height: `${4 + i}px`,
              top: `${30 + i * 25}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}

        {/* Decorative rotating shape */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-[12%] w-16 h-16 border border-[var(--accent-champagne)]/10"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
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
            Credentials
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            My <span className="gold-text">Resume</span>
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 md:p-12"
        >
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Document Icon */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex-shrink-0"
            >
              <div className="w-24 h-32 md:w-32 md:h-40 border border-[var(--accent-gold)]/30 flex items-center justify-center relative">
                <FiFileText size={40} className="text-[var(--accent-gold)]" />

                {/* Corner accent */}
                <div className="absolute -top-px -right-px w-6 h-6 border-t border-r border-[var(--accent-gold)]" />
                <div className="absolute -bottom-px -left-px w-6 h-6 border-b border-l border-[var(--accent-gold)]" />
              </div>

              {/* Decorative dot */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[var(--accent-gold)] opacity-20" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center">
              <h3
                className="text-2xl md:text-3xl text-[var(--text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Curriculum Vitae
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed" style={{ width: '100%', paddingBottom: '2rem' }}>
                Download my resume to explore my professional background, education,
                skills, and the projects I&apos;ve contributed to throughout my career.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '2rem' }}>
                <motion.a
                  href={resumeUrl}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-elegant-filled inline-flex items-center justify-center gap-3"
                  style={{ width: '250px' }}
                >
                  <FiDownload size={16} />
                  Download PDF
                </motion.a>

                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-elegant inline-flex items-center justify-center gap-3"
                  style={{ width: '250px' }}
                >
                  View Online
                  <FiArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
          style={{ marginTop: '3rem', marginBottom: '3rem' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]/30" />
            <div className="w-2 h-2 bg-[var(--accent-gold)]/30 rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
