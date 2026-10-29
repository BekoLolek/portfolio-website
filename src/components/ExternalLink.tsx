interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, children, className = 'link' }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
