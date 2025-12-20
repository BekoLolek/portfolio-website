'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

interface ContactProps {
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export default function Contact({ email, socials }: ContactProps) {
  const links = [
    { name: 'GitHub', href: socials.github, icon: FiGithub },
    { name: 'LinkedIn', href: socials.linkedin, icon: FiLinkedin },
    { name: 'Email', href: `mailto:${email}`, icon: FiMail },
  ].filter(link => link.href);

  return (
    <section id="contact" className="relative" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]">
        {/* Gradient blobs */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 18, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[var(--accent-champagne)]/4 rounded-full blur-[100px]"
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
            className="absolute rounded-full bg-[var(--accent-gold)]"
            style={{
              width: `${3 + i}px`,
              height: `${3 + i}px`,
              top: `${25 + i * 15}%`,
              left: `${20 + i * 12}%`,
            }}
          />
        ))}

        {/* Decorative rotating shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute top-16 right-[15%] w-14 h-14 border border-[var(--accent-gold)]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-[10%] w-12 h-12 border border-[var(--accent-champagne)]/10"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
      </div>

      <div className="relative z-10" style={{ width: '100%', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span
            className="text-[var(--text-muted)] text-sm tracking-[0.3em] uppercase block mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Get in Touch
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Let&apos;s <span className="gold-text">Connect</span>
          </h2>
          <p
            className="text-[var(--text-secondary)] text-lg"
            style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', width: '100%', textAlign: 'center' }}
          >
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
          <div className="divider" style={{ marginBottom: '2rem' }} />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
          style={{ gap: '3rem' }}
        >
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, color: 'var(--accent-gold)' }}
                className="flex flex-col items-center gap-3 text-[var(--text-secondary)] transition-colors"
              >
                <div
                  className="w-16 h-16 rounded-full border border-[var(--accent-gold)]/30 flex items-center justify-center hover:border-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-all"
                >
                  <Icon size={24} className="text-[var(--accent-gold)]" />
                </div>
                <span
                  className="text-sm tracking-wider"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
