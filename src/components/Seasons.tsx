import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import { seasons } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import { RailButtons } from './Rail';

export default function Seasons() {
  const [active, setActive] = useState(
    Math.max(0, seasons.length - 2),
  );

  const rail = useRef<HTMLDivElement>(null);
  const season = seasons[active];
  const prefersReducedMotion = useReducedMotion();

  // Gracefully handle an empty seasons array.
  if (!season) {
    return null;
  }

  const selectSeason = (index: number) => {
    setActive(index);
    rail.current?.scrollTo({
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <SectionHeading
        kicker={`${seasons.length} Seasons`}
        title="My Journey"
        aside={
          <p className="max-w-xs text-sm text-mist">
            From AI and machine learning foundations to intelligent
            applications, each season represents a stage of my
            technical journey.
          </p>
        }
      />

      {/* Season selector */}
      <div
        className="rail gutter mb-8 flex gap-2 overflow-x-auto"
        role="tablist"
        aria-label="Career and project journey"
      >
        {seasons.map((item, index) => {
          const isActive = index === active;

          return (
            <button
              key={item.number}
              id={`season-tab-${item.number}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`season-panel-${item.number}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectSeason(index)}
              className={`relative shrink-0 rounded-full px-4 py-2.5 text-left transition ${
                isActive
                  ? 'text-ink'
                  : 'text-mist hover:text-bone'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="season-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-bone"
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.5,
                    ease: EASE,
                  }}
                />
              )}

              <span className="relative block text-[10px] font-bold tracking-[0.24em]">
                SEASON {String(item.number).padStart(2, '0')}
              </span>

              <span className="relative block whitespace-nowrap text-sm font-semibold">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected season */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={season.number}
          id={`season-panel-${season.number}`}
          role="tabpanel"
          aria-labelledby={`season-tab-${season.number}`}
          tabIndex={0}
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, x: 40, filter: 'blur(8px)' }
          }
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, x: 0, filter: 'blur(0px)' }
          }
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, x: -40, filter: 'blur(8px)' }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            ease: EASE,
          }}
        >
          <div className="gutter mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
              <span className="mr-3 text-outline">
                S{String(season.number).padStart(2, '0')}
              </span>
              {season.title}
            </h3>

            <span className="text-sm text-mist">
              {season.period} · {season.episodes.length}{' '}
              {season.episodes.length === 1 ? 'Episode' : 'Episodes'}
            </span>
          </div>

          <p className="gutter max-w-3xl text-[15px] leading-relaxed text-bone/75">
            {season.synopsis}
          </p>

          {/* Horizontal project and experience rail */}
          <div className="group/rail relative">
            <div
              ref={rail}
              className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto py-8 [perspective:1200px]"
            >
              {season.episodes.map((episode, index) => (
                <EpisodeCard
                  key={episode.code}
                  episode={episode}
                  index={index}
                />
              ))}
            </div>

            <RailButtons rail={rail} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}