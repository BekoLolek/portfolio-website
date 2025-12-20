'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavIndex = (section: string) => navItems.findIndex(item => item.href.slice(1) === section);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.slice(1));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            if (section !== activeSection) {
              const newIndex = getNavIndex(section);
              const oldIndex = getNavIndex(activeSection);
              setScrollDirection(newIndex > oldIndex ? 'down' : 'up');
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderColor: isScrolled ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease',
        }}
      >
        <div className="w-full flex items-center justify-center relative" style={{ padding: '2rem 2rem' }}>
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="relative group"
                style={{ paddingTop: '0.3rem', paddingBottom: '0.25rem' }}
              >
                <span
                  className={`text-base tracking-widest uppercase transition-colors duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-[var(--accent-gold)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  {item.name}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--accent-gold)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item.href.slice(1) ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformOrigin: activeSection === item.href.slice(1)
                      ? (scrollDirection === 'down' ? 'left' : 'right')
                      : (scrollDirection === 'down' ? 'right' : 'left')
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - Absolute positioned */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 0 : -4,
              }}
              className="absolute w-6 h-[1px] bg-[var(--accent-gold)]"
              style={{ transformOrigin: 'center' }}
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="absolute w-6 h-[1px] bg-[var(--accent-gold)]"
            />
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? 0 : 4,
              }}
              className="absolute w-6 h-[1px] bg-[var(--accent-gold)]"
              style={{ transformOrigin: 'center' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)]/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-3xl tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
