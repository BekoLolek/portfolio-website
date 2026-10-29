import ExternalLink from './ExternalLink';
import { Role } from '@/data/portfolio';

export default function Experience({ roles }: { roles: Role[] }) {
  return (
    <ol className="space-y-16">
      {roles.map((role) => (
        <li key={`${role.company}-${role.dates}`} className="grid gap-4 lg:grid-cols-[11rem_1fr] lg:gap-8">
          <p className="font-mono text-label text-muted lg:pt-1">{role.dates}</p>
          <article>
            <h3 className="text-lead font-semibold">{role.title}</h3>
            <p className="mt-1 text-small text-muted">
              {role.company} · {role.place}
              {role.link && (
                <>
                  {' · '}
                  <ExternalLink href={role.link.href}>{role.link.label}</ExternalLink>
                </>
              )}
            </p>
            <ul className="mt-6 max-w-[70ch] space-y-3">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-6 before:absolute before:left-0 before:text-muted before:content-['–']">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
