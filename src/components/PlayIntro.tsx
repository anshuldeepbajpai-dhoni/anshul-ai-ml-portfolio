import { useCallback, useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from 'framer-motion';

import { introSlides, profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';

const SLIDE_MS = 3600;

type Phase = 'zoom' | 'reel' | 'end';

/**
 * Anshul's portfolio highlight reel.
 *
 * Portrait zoom → professional highlights → project and skill
 * showcase → closing title → return to portfolio.
 *
 * All slide content comes from portfolio.ts.
 */
export default function PlayIntro({
  onClose,
}: {
  onClose: () => void;
}) {
  useScrollLock(true);

  const reduced = useReducedMotionPref();

  const [phase, setPhase] = useState<Phase>(
    reduced ? 'reel' : 'zoom',
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const progress = useMotionValue(0);

  // Skip the portrait zoom when reduced motion is enabled.
  useEffect(() => {
    if (reduced) {
      setPhase('reel');
      return;
    }

    if (phase !== 'zoom') return;

    const timer = window.setTimeout(() => {
      setPhase('reel');
    }, 1700);

    return () => window.clearTimeout(timer);
  }, [phase, reduced]);

  // Advance to the next highlight.
  const next = useCallback(() => {
    progress.set(0);

    setIndex((current) => {
      if (current >= introSlides.length - 1) {
        setPhase('end');
        return current;
      }

      return current + 1;
    });
  }, [progress]);

  // Return to the previous highlight.
  const prev = useCallback(() => {
    progress.set(0);

    setIndex((current) => Math.max(0, current - 1));
  }, [progress]);

  // One animation clock controls both slide progress and auto-advance.
  useEffect(() => {
    if (phase !== 'reel' || paused || reduced) return;

    let animationFrame = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = (now - lastTime) / SLIDE_MS;
      lastTime = now;

      const value = progress.get() + delta;

      if (value >= 1) {
        next();
        return;
      }

      progress.set(value);
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [phase, paused, reduced, index, next, progress]);

  // Close after the final title.
  useEffect(() => {
    if (phase !== 'end') return;

    const timer = window.setTimeout(onClose, 2200);

    return () => window.clearTimeout(timer);
  }, [phase, onClose]);

  // Keyboard navigation.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (phase !== 'reel') return;

      if (event.key === 'ArrowRight') {
        next();
      } else if (event.key === 'ArrowLeft') {
        prev();
      } else if (event.code === 'Space') {
        event.preventDefault();
        setPaused((current) => !current);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, next, prev, phase]);

  const slide = introSlides[index];

  return (
    <motion.div
      className="fixed inset-0 z-[130] overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: reduced ? 'none' : 'blur(10px)',
      }}
      transition={{
        duration: reduced ? 0.15 : 0.6,
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${profile.displayName} portfolio highlight reel`}
    >
      {/* Portrait zoom transition */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 flex items-end justify-center"
        initial={{
          scale: 1,
          opacity: 1,
        }}
        animate={
          phase === 'zoom'
            ? {
                scale: reduced ? 1 : [1, 1.08, 2.6],
                opacity: reduced ? 0 : [0.9, 1, 0],
              }
            : {
                opacity: 0.1,
                scale: reduced ? 1 : 1.25,
                filter: reduced ? 'none' : 'blur(4px)',
              }
        }
        transition={{
          duration: reduced ? 0 : phase === 'zoom' ? 1.7 : 1.2,
          ease: [0.7, 0, 0.2, 1],
          times: phase === 'zoom' && !reduced ? [0, 0.3, 1] : undefined,
        }}
        style={{
          transformOrigin: '50% 30%',
        }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet}
          sizes="100vw"
          alt=""
          className="h-[88vh] w-auto max-w-none object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
        />
      </motion.div>

      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(120,10,25,0.35),transparent_70%)]"
      />

      {/* Highlight progress indicators */}
      {phase !== 'zoom' && (
        <div className="absolute inset-x-0 top-0 z-20 flex gap-1.5 px-4 pt-4 sm:px-10 sm:pt-6">
          {introSlides.map((item, itemIndex) => (
            <div
              key={item.kicker}
              className="h-[3px] flex-1 overflow-hidden rounded bg-white/15"
            >
              <motion.div
                className="h-full origin-left bg-bone"
                style={{
                  scaleX:
                    itemIndex === index && phase === 'reel'
                      ? progress
                      : itemIndex < index || phase === 'end'
                        ? 1
                        : 0,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Highlight content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 pb-16 pt-20 text-center">
        <AnimatePresence mode="wait">
          {phase === 'reel' && slide && (
            <motion.div
              key={index}
              className="max-w-4xl"
              initial={{
                opacity: 0,
                scale: reduced ? 1 : 1.06,
                filter: reduced ? 'none' : 'blur(14px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                scale: reduced ? 1 : 0.96,
                filter: reduced ? 'none' : 'blur(10px)',
              }}
              transition={{
                duration: reduced ? 0 : 0.7,
                ease: EASE,
              }}
            >
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-crimson-2 sm:text-xs sm:tracking-[0.5em]">
                CHAPTER {String(index + 1).padStart(2, '0')}
                {' · '}
                {slide.kicker}
              </p>

              <h2
                className="font-display leading-[0.88] text-bone"
                style={{
                  fontSize: 'clamp(2.8rem, 10vw, 8.5rem)',
                }}
              >
                {slide.title}
              </h2>

              <div className="mt-6 space-y-2">
                {slide.lines.map((line, lineIndex) => (
                  <motion.p
                    key={`${index}-${lineIndex}`}
                    className="text-base text-bone/80 sm:text-xl"
                    initial={{
                      opacity: reduced ? 1 : 0,
                      y: reduced ? 0 : 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: reduced ? 0 : 0.35 + lineIndex * 0.15,
                      duration: reduced ? 0 : 0.6,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              {slide.chips && slide.chips.length > 0 && (
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {slide.chips.map((chip, chipIndex) => (
                    <motion.span
                      key={chip}
                      className="glass rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-bone"
                      initial={{
                        opacity: reduced ? 1 : 0,
                        scale: reduced ? 1 : 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: reduced ? 0 : 0.6 + chipIndex * 0.06,
                      }}
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              )}

              <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-smoke">
                AI · MACHINE LEARNING · BUILDING WHAT'S NEXT
              </p>
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div
              key="end"
              initial={{
                opacity: 0,
                letterSpacing: reduced ? '0.2em' : '0.6em',
              }}
              animate={{
                opacity: 1,
                letterSpacing: '0.2em',
              }}
              transition={{
                duration: reduced ? 0 : 1.2,
                ease: EASE,
              }}
            >
              <p className="font-display text-5xl text-bone sm:text-7xl">
                THE NEXT CHAPTER
              </p>

              <p className="mt-4 text-xs font-semibold tracking-[0.3em] text-mist sm:tracking-[0.4em]">
                {profile.displayName.toUpperCase()}
              </p>

              <p className="mt-4 text-sm text-mist">
                AI & ML · DATA · INNOVATION
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile-friendly previous and next zones */}
      {phase === 'reel' && (
        <>
          <button
            type="button"
            aria-label="Previous highlight"
            className="absolute inset-y-0 left-0 z-[5] w-1/4 cursor-pointer"
            onClick={prev}
          />

          <button
            type="button"
            aria-label="Next highlight"
            data-cursor="play"
            className="absolute inset-y-0 right-0 z-[5] w-1/4 cursor-pointer"
            onClick={next}
          />
        </>
      )}

      {/* Playback controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10 sm:pb-8">
        <div className="flex items-center gap-3">
          {phase === 'reel' && !reduced && (
            <button
              type="button"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? 'Resume highlights' : 'Pause highlights'}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-bone transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {paused ? '▶' : '❚❚'}
            </button>
          )}

          {phase === 'reel' && reduced && (
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-bone transition hover:bg-white/10"
            >
              NEXT HIGHLIGHT →
            </button>
          )}

          <span className="hidden text-[11px] tracking-[0.2em] text-smoke sm:block">
            {reduced ? '← → NAVIGATE · ESC CLOSE' : 'SPACE · ← → · ESC'}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          data-cursor="close"
          className="rounded-full bg-bone px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          BACK TO PORTFOLIO
        </button>
      </div>
    </motion.div>
  );
}