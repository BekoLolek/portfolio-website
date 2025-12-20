'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  title: string;
}

export default function Hero({ name, title }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gold accent line - left */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '40%' }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute left-[10%] top-0 w-[1px] bg-gradient-to-b from-[var(--accent-gold)] to-transparent opacity-30"
        />

        {/* Gold accent line - right */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '30%' }}
          transition={{ duration: 1.5, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute right-[15%] bottom-0 w-[1px] bg-gradient-to-t from-[var(--accent-gold)] to-transparent opacity-30"
        />

        {/* Decorative corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-20 right-20 w-32 h-32 border border-[var(--accent-gold)]/10"
        />

        {/* Small gold dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-[var(--accent-gold)]/50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--text-secondary)] text-sm tracking-[0.3em] uppercase mb-8"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
        >
          <span className="text-[var(--text-primary)]">I&apos;m </span>
          <span className="gold-text">{name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic' }}
        >
          {title}
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-[1px] bg-[var(--accent-gold)] mx-auto"
          style={{ marginBottom: '6rem' }}
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-elegant-filled"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-elegant"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute left-1/2 flex flex-col items-center gap-3"
        style={{ bottom: '4rem', transform: 'translateX(-50%)' }}
      >
        <span
          className="text-[var(--text-muted)] text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-[var(--accent-gold)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
