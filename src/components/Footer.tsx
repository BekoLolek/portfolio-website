'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

interface FooterProps {
  name: string;
  email: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function Footer({ name, email, socials }: FooterProps) {
  const socialLinks = [
    { icon: FiGithub, href: socials?.github, label: 'GitHub' },
    { icon: FiLinkedin, href: socials?.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: socials?.twitter, label: 'Twitter' },
    { icon: FiMail, href: `mailto:${email}`, label: 'Email' },
  ].filter(link => link.href);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[var(--accent-gold)]/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <motion.a
            href="#hero"
            whileHover={{ opacity: 0.8 }}
            className="text-xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <span className="text-[var(--text-primary)]">{name.split(' ')[0]}</span>
            <span className="text-[var(--accent-gold)]">.</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, color: 'var(--accent-gold)' }}
                className="text-[var(--text-muted)] transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-[var(--text-muted)] text-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-8">
          <motion.a
            href="#hero"
            whileHover={{ y: -3 }}
            className="text-[var(--text-muted)] text-xs tracking-[0.2em] uppercase hover:text-[var(--accent-gold)] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
