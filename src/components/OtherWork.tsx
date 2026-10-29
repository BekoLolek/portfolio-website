import ExternalLink from './ExternalLink';
import { ProjectGroup, SideProject } from '@/data/portfolio';

interface OtherWorkProps {
  projects: SideProject[];
  group: ProjectGroup;
}

function Row({ project }: { project: SideProject }) {
  return (
    <li className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
      <ExternalLink href={project.githubUrl} className="link self-start font-semibold">
        {project.name}
      </ExternalLink>
      <p className="text-small text-muted">
        {project.summary}
        {project.stack.length > 0 && <span className="font-mono text-label"> · {project.stack.join(', ')}</span>}
      </p>
    </li>
  );
}

export default function OtherWork({ projects, group }: OtherWorkProps) {
  return (
    <div className="mt-16">
      <h3 className="font-mono text-label text-muted">Other work</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <Row key={project.name} project={project} />
        ))}
        <li className="py-4">
          <details className="group">
            <summary className="flex min-h-11 cursor-pointer list-none flex-wrap items-center gap-x-6 gap-y-1 [&::-webkit-details-marker]:hidden">
              <span className="font-semibold">
                <span aria-hidden="true" className="mr-2 inline-block font-mono text-accent transition-transform duration-150 group-open:rotate-90">
                  ›
                </span>
                {group.name} ({group.items.length})
              </span>
              <span className="text-small text-muted">{group.summary}</span>
            </summary>
            <ul className="mt-2 divide-y divide-line pl-6">
              {group.items.map((project) => (
                <Row key={project.name} project={project} />
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
