import ExternalLink from './ExternalLink';
import { PortfolioData } from '@/data/portfolio';

type ContactProps = Pick<PortfolioData, 'name' | 'email' | 'socials' | 'cvUrl'>;

export default function Contact({ name, email, socials, cvUrl }: ContactProps) {
  return (
    <>
      <p className="max-w-[40ch] text-lead">
        Email is the fastest way to reach me.      </p>
      <a
        href={`mailto:${email}`}
        className="mt-8 inline-block break-all text-title font-extrabold tracking-tight text-accent underline decoration-1 underline-offset-8 transition-colors duration-150 hover:text-ink"
      >
        {email}
      </a>
      <p className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
        <ExternalLink href={socials.linkedin}>LinkedIn</ExternalLink>
        <ExternalLink href={socials.github}>GitHub</ExternalLink>
        <a href={cvUrl} download className="link">
          CV (PDF)
        </a>
      </p>
      <p className="mt-16 font-mono text-label text-muted">
        © {new Date().getFullYear()} {name}
      </p>
    </>
  );
}
