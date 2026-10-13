import { useEffect } from 'react';
import { motion } from 'framer-motion';

import {
  profile,
  viewerProfiles,
  type ProfileId,
} from '../data/portfolio';

import { EASE } from './fx';

/**
 * Portfolio viewer profiles.
 *
 * Anshul    — Complete portfolio experience
 * Recruiter — Experience, achievements, and professional skills
 * Developer — Projects, technologies, and technical work
 * Creative  — Visual presentation and experimentation
 */

export function ProfileAvatar({
  id,
  size = 'lg',
}: {
  id: ProfileId;
  size?: 'sm' | 'lg';
}) {
  const viewer = viewerProfiles.find((item) => item.id === id);

  const box =
    size === 'lg'
      ? 'h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-xl'
      : 'h-8 w-8 rounded-md';

  // Main portfolio profile: Anshul's portrait.
  if (id === 'anshul') {
    return (
      <span
        className={`relative block overflow-hidden ${box}`}
        style={{
          background:
            'radial-gradient(circle at 50% 30%, #7a0f24, #1a0509)',
        }}
      >
        <img
          src="/assets/portrait-420.webp"
          alt=""
          className="absolute inset-x-0 bottom-0 mx-auto h-[115%] w-auto max-w-none -translate-x-[3%] object-cover object-top"
        />
      </span>
    );
  }

  // Profile-specific symbols.
  const glyphs: Record<string, string> = {
    recruiter: 'R',
    developer: '</>',
    creative: '✦',
  };

  const glyph = glyphs[id] ?? 'AI';

  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden font-display text-bone ${box}`}
      style={{
        background: `linear-gradient(145deg, ${
          viewer?.color ?? '#e5132b'
        }, #0b0b10 120%)`,
      }}
    >
      <span
        className={
          size === 'lg'
            ? 'text-4xl sm:text-5xl'
            : 'text-sm'
        }
      >
        {glyph}
      </span>
    </span>
  );
}

export default function ProfileSelector({
  onPick,
}: {
  onPick: (id: ProfileId) => void;
}) {
  // Escape selects Anshul's main portfolio profile.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onPick('anshul');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: 'blur(10px)',
      }}
      transition={{
        duration: 0.7,
        ease: EASE,
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-selector-title"
    >
      {/* Cinematic background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(229,19,43,0.14),transparent_70%)]"
      />

      {/* Heading */}
      <motion.h2
        id="profile-selector-title"
        className="relative mb-10 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl"
        initial={{
          opacity: 0,
          y: 20,
          filter: 'blur(8px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        transition={{
          duration: 0.8,
          ease: EASE,
        }}
      >
        Choose Your Experience
      </motion.h2>

      {/* Viewer profiles */}
      <motion.ul
        className="relative grid grid-cols-2 gap-6 sm:flex sm:gap-8"
        initial="hidden"
        animate="show"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 0.2,
        }}
      >
        {viewerProfiles.map((viewer) => (
          <motion.li
            key={viewer.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: EASE,
                },
              },
            }}
          >
            <button
              type="button"
              onClick={() => onPick(viewer.id)}
              data-cursor="play"
              className="group flex flex-col items-center gap-3 text-center focus-visible:outline-none"
              aria-label={`Explore portfolio as ${
                viewer.id === 'anshul'
                  ? profile.displayName
                  : viewer.name
              }`}
            >
              {/* Profile avatar and selection ring */}
              <span className="relative rounded-xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-bone group-focus-visible:ring-bone">
                <ProfileAvatar id={viewer.id} />

                {viewer.id === 'anshul' && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-crimson px-2 py-0.5 text-[9px] font-bold tracking-[0.18em] text-white">
                    MAIN
                  </span>
                )}
              </span>

              {/* Profile name */}
              <span className="font-sans text-sm font-medium text-mist transition group-hover:text-bone sm:text-base">
                {viewer.id === 'anshul'
                  ? profile.displayName
                  : viewer.name}
              </span>

              {/* Profile description */}
              <span className="max-w-[9rem] text-[11px] leading-snug text-smoke">
                {viewer.blurb}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Footer */}
      <p className="relative mt-12 max-w-md text-center text-xs leading-relaxed text-smoke">
        One portfolio. Multiple perspectives. Explore the projects,
        skills, and achievements behind {profile.displayName}&apos;s
        journey in AI and Machine Learning.
      </p>
    </motion.div>
  );
}