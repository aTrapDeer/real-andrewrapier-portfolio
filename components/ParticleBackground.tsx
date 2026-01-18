'use client';

export function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />

      {/* Grid lines - horizontal */}
      <div className="absolute inset-0 motion-safe:animate-[grid-drift_26s_linear_infinite]">
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Grid lines - vertical */}
      <div className="absolute inset-0 motion-safe:animate-[grid-drift-horizontal_32s_linear_infinite]">
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200/60 to-transparent"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Diagonal tech lines */}
      <svg className="absolute inset-0 h-full w-full opacity-30">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Diagonal lines from top-left */}
        <line x1="0" y1="20%" x2="30%" y2="0" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="0" y1="40%" x2="50%" y2="0" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="0" y1="60%" x2="70%" y2="0" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="0" y1="80%" x2="90%" y2="0" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="10%" y1="100%" x2="100%" y2="10%" stroke="url(#lineGradient1)" strokeWidth="1" />

        {/* Diagonal lines from top-right */}
        <line x1="100%" y1="20%" x2="70%" y2="0" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="100%" y1="40%" x2="50%" y2="0" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="100%" y1="60%" x2="30%" y2="0" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="100%" y1="80%" x2="10%" y2="0" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="90%" y1="100%" x2="0" y2="10%" stroke="url(#lineGradient2)" strokeWidth="1" />
      </svg>

      {/* Floating particles - small dots */}
      <div className="absolute inset-0">
        {/* Layer 1 - larger faded circles */}
        <div className="absolute left-[8%] top-[15%] h-32 w-32 rounded-full border border-slate-200/70 motion-safe:animate-[float-slow_14s_ease-in-out_infinite]" />
        <div className="absolute right-[12%] top-[25%] h-48 w-48 rounded-full border border-slate-200/60 motion-safe:animate-[float-slow_18s_ease-in-out_infinite]" />
        <div className="absolute left-[65%] top-[45%] h-40 w-40 rounded-full border border-slate-200/70 motion-safe:animate-[float-slow_16s_ease-in-out_infinite]" />
        <div className="absolute left-[25%] top-[70%] h-36 w-36 rounded-full border border-slate-200/60 motion-safe:animate-[float-slow_20s_ease-in-out_infinite]" />
        <div className="absolute right-[20%] top-[80%] h-44 w-44 rounded-full border border-slate-200/70 motion-safe:animate-[float-slow_22s_ease-in-out_infinite]" />

        {/* Layer 2 - small particles */}
        <div className="absolute left-[5%] top-[10%] h-1 w-1 rounded-full bg-slate-300/70" />
        <div className="absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-slate-300/60" />
        <div className="absolute left-[20%] top-[8%] h-1 w-1 rounded-full bg-sky-200/40" />
        <div className="absolute left-[28%] top-[18%] h-2 w-2 rounded-full bg-slate-300/50" />
        <div className="absolute left-[35%] top-[5%] h-1 w-1 rounded-full bg-slate-400/50" />
        <div className="absolute left-[42%] top-[15%] h-1.5 w-1.5 rounded-full bg-slate-300/60" />
        <div className="absolute left-[55%] top-[12%] h-1 w-1 rounded-full bg-sky-200/30" />
        <div className="absolute left-[68%] top-[8%] h-2 w-2 rounded-full bg-slate-300/50" />
        <div className="absolute left-[75%] top-[20%] h-1 w-1 rounded-full bg-slate-400/40" />
        <div className="absolute left-[85%] top-[10%] h-1.5 w-1.5 rounded-full bg-slate-300/50" />
        <div className="absolute left-[92%] top-[18%] h-1 w-1 rounded-full bg-slate-400/40" />

        {/* Middle section particles */}
        <div className="absolute left-[3%] top-[35%] h-1.5 w-1.5 rounded-full bg-slate-400/40" />
        <div className="absolute left-[15%] top-[45%] h-1 w-1 rounded-full bg-slate-300/60" />
        <div className="absolute left-[22%] top-[38%] h-2 w-2 rounded-full bg-sky-200/30" />
        <div className="absolute left-[38%] top-[42%] h-1 w-1 rounded-full bg-slate-300/50" />
        <div className="absolute left-[48%] top-[35%] h-1.5 w-1.5 rounded-full bg-slate-400/40" />
        <div className="absolute left-[62%] top-[48%] h-1 w-1 rounded-full bg-slate-300/60" />
        <div className="absolute left-[72%] top-[40%] h-2 w-2 rounded-full bg-slate-400/30" />
        <div className="absolute left-[82%] top-[35%] h-1 w-1 rounded-full bg-slate-300/50" />
        <div className="absolute left-[95%] top-[45%] h-1.5 w-1.5 rounded-full bg-slate-400/40" />

        {/* Lower section particles */}
        <div className="absolute left-[8%] top-[60%] h-1 w-1 rounded-full bg-slate-400/40" />
        <div className="absolute left-[18%] top-[72%] h-1.5 w-1.5 rounded-full bg-slate-300/40" />
        <div className="absolute left-[30%] top-[65%] h-1 w-1 rounded-full bg-slate-400/50" />
        <div className="absolute left-[45%] top-[75%] h-2 w-2 rounded-full bg-sky-200/25" />
        <div className="absolute left-[58%] top-[68%] h-1 w-1 rounded-full bg-slate-400/40" />
        <div className="absolute left-[70%] top-[78%] h-1.5 w-1.5 rounded-full bg-slate-300/40" />
        <div className="absolute left-[85%] top-[65%] h-1 w-1 rounded-full bg-slate-400/40" />

        {/* Bottom particles */}
        <div className="absolute left-[10%] top-[88%] h-1.5 w-1.5 rounded-full bg-slate-400/40" />
        <div className="absolute left-[25%] top-[92%] h-1 w-1 rounded-full bg-slate-300/50" />
        <div className="absolute left-[40%] top-[85%] h-2 w-2 rounded-full bg-slate-400/30" />
        <div className="absolute left-[55%] top-[90%] h-1 w-1 rounded-full bg-slate-300/60" />
        <div className="absolute left-[75%] top-[88%] h-1.5 w-1.5 rounded-full bg-slate-400/40" />
        <div className="absolute left-[90%] top-[92%] h-1 w-1 rounded-full bg-slate-300/50" />
      </div>

      {/* Tech corner accents */}
      <svg className="absolute left-0 top-0 h-32 w-32 opacity-30">
        <path d="M0 0 L32 0 L32 4 L4 4 L4 32 L0 32 Z" fill="#cbd5e1" />
        <path d="M0 40 L0 80" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M40 0 L80 0" stroke="#e2e8f0" strokeWidth="1" />
      </svg>

      <svg className="absolute right-0 top-0 h-32 w-32 opacity-30">
        <path d="M128 0 L96 0 L96 4 L124 4 L124 32 L128 32 Z" fill="#cbd5e1" />
        <path d="M128 40 L128 80" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M88 0 L48 0" stroke="#e2e8f0" strokeWidth="1" />
      </svg>

      <svg className="absolute bottom-0 left-0 h-32 w-32 opacity-30">
        <path d="M0 128 L32 128 L32 124 L4 124 L4 96 L0 96 Z" fill="#cbd5e1" />
        <path d="M0 88 L0 48" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M40 128 L80 128" stroke="#e2e8f0" strokeWidth="1" />
      </svg>

      <svg className="absolute bottom-0 right-0 h-32 w-32 opacity-30">
        <path d="M128 128 L96 128 L96 124 L124 124 L124 96 L128 96 Z" fill="#cbd5e1" />
        <path d="M128 88 L128 48" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M88 128 L48 128" stroke="#e2e8f0" strokeWidth="1" />
      </svg>

      {/* Subtle radial gradients for depth */}
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_65%)] motion-safe:animate-[pulse-soft_12s_ease-in-out_infinite]" />
      <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05),transparent_65%)] motion-safe:animate-[pulse-soft_14s_ease-in-out_infinite]" />
    </div>
  );
}
