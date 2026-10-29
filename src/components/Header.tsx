import ExternalLink from './ExternalLink';
import { PortfolioData } from '@/data/portfolio';

type HeaderProps = Pick<PortfolioData, 'name' | 'role' | 'location' | 'profile' | 'email' | 'socials' | 'cvUrl'>;

export default function Header({ name, role, location, profile, email, socials, cvUrl }: HeaderProps) {
  return (
    <header id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
      <p className="font-mono text-label text-muted">
        {role} · {location}
      </p>
      <h1 className="mt-4 text-display font-extrabold tracking-tight">{name}</h1>
      <p className="mt-8 max-w-[65ch] text-lead text-muted">{profile}</p>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href={cvUrl}
          download
          className="inline-flex min-h-11 items-center rounded-sm bg-accent px-6 font-semibold text-accent-ink transition-[filter,transform] duration-150 ease-out hover:brightness-110 active:translate-y-px"
        >
          Download CV (PDF)
        </a>
        <a href={`mailto:${email}`} className="link">
          {email}
        </a>
        <ExternalLink href={socials.linkedin}>LinkedIn</ExternalLink>
        <ExternalLink href={socials.github}>GitHub</ExternalLink>
      </div>
    </header>
  );
}
