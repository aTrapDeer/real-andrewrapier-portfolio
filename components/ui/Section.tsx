import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: 'default' | 'gray';
}

export function Section({
  children,
  id,
  className = '',
  variant = 'default',
}: SectionProps) {
  const bgStyles = {
    default: '',
    gray: 'bg-neutral-50/50',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${bgStyles[variant]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
