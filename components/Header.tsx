'use client';

import Link from 'next/link';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-lg font-semibold text-slate-900 transition-colors hover:text-slate-600"
          >
            AR
          </Link>

          {/* CTA Button */}
          <Button href="#contact" variant="primary" className="text-sm">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
