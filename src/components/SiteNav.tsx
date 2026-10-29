'use client';

import { useEffect, useState } from 'react';

export interface NavItem {
  id: string;
  label: string;
}

interface SiteNavProps {
  name: string;
  items: NavItem[];
  cvUrl: string;
}

export default function SiteNav({ name, items, cvUrl }: SiteNavProps) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Active section: the last one whose top has passed 40% of the viewport, or the
  // last section once the page is scrolled to the bottom.
  useEffect(() => {
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const passed = items.filter((item) => {
        const section = document.getElementById(item.id);
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.4;
      });
      setActive(atBottom ? items[items.length - 1].id : passed.at(-1)?.id ?? '');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [items]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `flex min-h-11 items-center transition-colors duration-150 hover:text-accent ${
      active === id ? 'text-ink underline decoration-accent decoration-2 underline-offset-8' : 'text-muted'
    }`;

  return (
    <nav aria-label="Main" className="sticky top-0 z-10 border-b border-line bg-surface">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex min-h-11 items-center font-extrabold tracking-tight">
          {name}
        </a>

        <ul className="hidden items-center gap-8 text-small md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={linkClass(item.id)} aria-current={active === item.id ? 'true' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={cvUrl} download className="link flex min-h-11 items-center font-mono text-label">
              CV.pdf
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex min-h-11 items-center px-2 font-mono text-label md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <ul id="mobile-menu" className="border-t border-line px-4 pb-4 md:hidden">
          {items.map((item) => (
            <li key={item.id} className="border-b border-line">
              <a href={`#${item.id}`} className={linkClass(item.id)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={cvUrl} download className="link flex min-h-11 items-center" onClick={() => setOpen(false)}>
              Download CV (PDF)
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
