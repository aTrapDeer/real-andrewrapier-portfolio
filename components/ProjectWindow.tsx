'use client';

import { type Project } from '@/lib/projects';

interface ProjectWindowProps {
  project: Project;
  isActive: boolean;
  shouldLoadIframe: boolean;
}

export function ProjectWindow({
  project,
  isActive,
  shouldLoadIframe,
}: ProjectWindowProps) {
  const handleClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="group relative cursor-pointer transition-all duration-500"
      role="button"
      tabIndex={isActive ? 0 : -1}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View ${project.name} - ${project.tagline}`}
    >
      {/* Window Chrome - Tech Style */}
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-2xl shadow-neutral-200/50 transition-all duration-500 group-hover:border-neutral-300 group-hover:shadow-neutral-300/50">
        {/* Title Bar */}
        <div className="flex items-center justify-between border-b border-neutral-100 bg-gradient-to-r from-neutral-50 to-white px-4 py-2.5">
          <div className="flex items-center gap-2">
            {/* Traffic Light Buttons */}
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-300 transition-colors group-hover:bg-red-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-300 transition-colors group-hover:bg-yellow-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-300 transition-colors group-hover:bg-green-400"></div>
            </div>
          </div>

          {/* Window Title */}
          <div className="flex-1 text-center">
            <span className="text-xs font-medium tracking-wide text-neutral-500">
              {project.name}
            </span>
          </div>

          {/* Spacer for centering */}
          <div className="w-[44px]"></div>
        </div>

        {/* Address Bar */}
        <div className="border-b border-neutral-100 bg-white px-3 py-1.5">
          <div className="flex items-center gap-2 rounded bg-neutral-50 px-2.5 py-1">
            <svg
              className="h-3 w-3 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <span className="flex-1 truncate text-xs text-neutral-400">
              {project.url.replace(/^https?:\/\//, '')}
            </span>
          </div>
        </div>

        {/* Preview Area */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-50">
          {shouldLoadIframe ? (
            <iframe
              src={project.url}
              className="h-full w-full"
              title={`Preview of ${project.name}`}
              loading="eager"
              sandbox="allow-same-origin allow-scripts allow-popups"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="rounded bg-neutral-100 px-3 py-1">
                <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  {project.industry}
                </span>
              </div>
              <h3 className="text-lg font-medium text-neutral-700">
                {project.name}
              </h3>
              <p className="max-w-xs text-xs text-neutral-400">
                {project.tagline}
              </p>
            </div>
          )}

          {/* Hover overlay */}
          {isActive && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-500/0 transition-all duration-300 group-hover:bg-slate-500/5">
              <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-600 shadow-lg">
                  Visit Site →
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
