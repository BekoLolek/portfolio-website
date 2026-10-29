export default function Skills({ skills }: { skills: Record<string, string[]> }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt className="font-mono text-label text-muted sm:pt-1">{category}</dt>
          <dd>{items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  );
}
