import { Metric } from '@/data/portfolio';

export default function Numbers({ metrics }: { metrics: Metric[] }) {
  return (
    <section aria-label="By the numbers" className="border-t border-line bg-raised">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-12 md:grid-cols-5 md:px-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col-reverse gap-1">
            <dt className="text-small text-muted">{metric.label}</dt>
            <dd className="font-mono text-title font-medium tabular-nums">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
