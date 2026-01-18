'use client';

import { useState, useEffect, useCallback } from 'react';
import { projects } from '@/lib/projects';
import { ProjectWindow } from './ProjectWindow';

const AUTOPLAY_INTERVAL = 6000;
const TRANSITION_DURATION = 1000;

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const totalProjects = projects.length;
  const anglePerItem = 360 / totalProjects;

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % totalProjects);
  }, [totalProjects]);

  const goToPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplayEnabled || isPaused) return;

    const interval = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [goToNext, isAutoplayEnabled, isPaused]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsAutoplayEnabled(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsAutoplayEnabled(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Calculate position for each card in the 3D ring
  const getCardStyle = (index: number) => {
    const relativeIndex = (index - activeIndex + totalProjects) % totalProjects;
    const angle = relativeIndex * anglePerItem;
    const isActive = index === activeIndex;
    const isSide =
      relativeIndex === 1 ||
      relativeIndex === totalProjects - 1 ||
      relativeIndex === 2 ||
      relativeIndex === totalProjects - 2;
    const isBack = relativeIndex > 2 && relativeIndex < totalProjects - 2;

    // Calculate z-index based on position
    let zIndex = 1;
    if (isActive) zIndex = 10;
    else if (relativeIndex === 1 || relativeIndex === totalProjects - 1)
      zIndex = 8;
    else if (relativeIndex === 2 || relativeIndex === totalProjects - 2)
      zIndex = 6;

    // Calculate opacity
    let opacity = 1;
    if (isActive) opacity = 1;
    else if (relativeIndex === 1 || relativeIndex === totalProjects - 1)
      opacity = 0.7;
    else if (relativeIndex === 2 || relativeIndex === totalProjects - 2)
      opacity = 0.4;
    else opacity = 0.2;

    // Calculate scale
    let scale = 1;
    if (isActive) scale = 1;
    else if (relativeIndex === 1 || relativeIndex === totalProjects - 1)
      scale = 0.8;
    else if (relativeIndex === 2 || relativeIndex === totalProjects - 2)
      scale = 0.65;
    else scale = 0.5;

    // Calculate horizontal position
    let translateX = 0;
    if (relativeIndex === 1) translateX = 55;
    else if (relativeIndex === totalProjects - 1) translateX = -55;
    else if (relativeIndex === 2) translateX = 90;
    else if (relativeIndex === totalProjects - 2) translateX = -90;
    else if (relativeIndex > 2 && relativeIndex <= totalProjects / 2)
      translateX = 100;
    else if (relativeIndex > totalProjects / 2) translateX = -100;

    // Calculate depth (translateZ)
    let translateZ = 0;
    if (isActive) translateZ = 100;
    else if (relativeIndex === 1 || relativeIndex === totalProjects - 1)
      translateZ = 0;
    else if (relativeIndex === 2 || relativeIndex === totalProjects - 2)
      translateZ = -100;
    else translateZ = -200;

    return {
      transform: `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      pointerEvents: isActive ? ('auto' as const) : ('none' as const),
    };
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* 3D Carousel Container */}
      <div
        className="relative mx-auto h-[520px] w-full max-w-5xl"
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const style = getCardStyle(index);

            return (
              <div
                key={project.id}
                className="absolute left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2"
                style={style}
                onClick={() => !isActive && goToSlide(index)}
              >
                <ProjectWindow
                  project={project}
                  isActive={isActive}
                  shouldLoadIframe={true}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          onClick={goToPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-slate-900 hover:text-white active:scale-95"
          aria-label="Previous project"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? 'h-3 w-8 bg-slate-800'
                  : 'h-3 w-3 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to ${project.name}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-slate-900 hover:text-white active:scale-95"
          aria-label="Next project"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Project Info */}
      <div
        className="mt-10 text-center transition-all duration-700"
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <h3 className="text-3xl font-semibold text-slate-900">
          {projects[activeIndex].name}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
          {projects[activeIndex].industry}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          {projects[activeIndex].description}
        </p>
      </div>
    </div>
  );
}
