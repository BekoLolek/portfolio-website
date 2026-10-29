import ExternalLink from './ExternalLink';
import Tags from './Tags';
import { FeaturedProject } from '@/data/portfolio';

export default function Projects({ projects }: { projects: FeaturedProject[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {projects.map((project) => (
        <article key={project.name} className="py-12 first:pt-8 last:pb-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-title font-extrabold tracking-tight">
              {project.name}
              <span className="font-normal text-muted"> · {project.tagline}</span>
            </h3>
            <p className="font-mono text-label text-muted">{project.context}</p>
          </div>
          <ul className="mt-6 max-w-[70ch] space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="relative pl-6 before:absolute before:left-0 before:text-muted before:content-['–']">
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Tags items={project.stack} label={`${project.name} tech stack`} />
          </div>
          {project.links.length > 0 && (
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {project.links.map((link) => (
                <ExternalLink key={link.href} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
