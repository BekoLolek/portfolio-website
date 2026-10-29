interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}

// Ledger row: mono label column on the left, content on the right.
export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[12rem_1fr] md:gap-12 md:px-8">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="font-mono text-label text-accent">{index}</p>
          <h2 id={`${id}-title`} className="mt-1 text-title font-extrabold tracking-tight">
            {title}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
