import { PortfolioData } from '@/data/portfolio';

type BackgroundProps = Pick<PortfolioData, 'education' | 'languages' | 'personal'>;

export default function Background({ education, languages, personal }: BackgroundProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <h3 className="font-mono text-label text-muted">Education</h3>
        <p className="mt-4 text-lead font-semibold">{education.degree}</p>
        <p className="mt-1 text-small text-muted">
          {education.school} · {education.dates}
        </p>
        <p className="mt-4 text-small">
          <span className="text-muted">Coursework: </span>
          {education.coursework.join(', ')}
        </p>

        <h3 className="mt-12 font-mono text-label text-muted">Languages</h3>
        <dl className="mt-4 space-y-1">
          {languages.map((language) => (
            <div key={language.name} className="flex gap-2">
              <dt className="font-semibold">{language.name}</dt>
              <dd className="text-muted">{language.level}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <h3 className="font-mono text-label text-muted">Outside work</h3>
        <p className="mt-4 max-w-[60ch]">{personal}</p>
      </div>
    </div>
  );
}
