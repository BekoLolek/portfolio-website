export default function Tags({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-sm border border-line px-2 py-1 font-mono text-label text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
