import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  skillCategories,
  skillEvidence,
  type Skill,
} from '../data/portfolio';

import { EASE, SectionHeading } from './fx';

const HUES = [
  '#ff3d5a',
  '#4cc9ff',
  '#46e3a8',
  '#ffb547',
  '#b98bff',
  '#ff8a5c',
  '#7ee0ff',
];

interface SkillCardProps {
  skill: Skill;
  hue: string;
  reducedMotion: boolean;
}

export default function Skills() {
  const [cat, setCat] = useState(0);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const category = skillCategories[cat];
  const hue = HUES[cat % HUES.length];

  if (!category) {
    return null;
  }

  return (
    <>
      <SectionHeading
        kicker="Technical Arsenal"
        title="My Skill Universe"
        aside={
          <p className="max-w-xs text-sm text-mist">
            Explore the technologies I use across AI, machine learning,
            data analytics, and software development. Select a skill
            to discover its supporting projects and experience.
          </p>
        }
      />

      <div className="gutter grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        {/* Skill categories */}
        <div
          className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0"
          role="tablist"
          aria-label="Technical skill categories"
        >
          {skillCategories.map((item, index) => {
            const isActive = index === cat;

            return (
              <button
                key={item.id}
                id={`skill-category-${item.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="skill-category-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setCat(index)}
                className={`group relative shrink-0 rounded-lg px-4 py-3 text-left transition lg:px-5 ${
                  isActive
                    ? 'text-bone'
                    : 'text-smoke hover:text-bone'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-tab"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10"
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.45,
                      ease: EASE,
                    }}
                  />
                )}

                {isActive && (
                  <motion.span
                    layoutId="skill-bar"
                    aria-hidden="true"
                    className="absolute bottom-2 left-0 top-2 hidden w-[3px] rounded lg:block"
                    style={{ background: hue }}
                  />
                )}

                <span className="relative block font-display text-2xl tracking-wide lg:text-3xl">
                  {item.title}
                </span>

                <span className="relative hidden text-xs text-smoke lg:block">
                  {item.skills.length} skills · {item.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected category */}
        <div
          id="skill-category-panel"
          role="tabpanel"
          aria-labelledby={`skill-category-${category.id}`}
          tabIndex={0}
          className="min-h-[340px] outline-none"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={category.id}
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.3,
                ease: EASE,
              }}
            >
              <p className="mb-5 text-sm text-mist">
                <span className="font-semibold text-bone">
                  {category.title}
                </span>{' '}
                — {category.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    hue={hue}
                    reducedMotion={prefersReducedMotion}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function SkillCard({
  skill,
  hue,
  reducedMotion,
}: SkillCardProps) {
  const [open, setOpen] = useState(false);
  const evidence = skillEvidence[skill.name];
  const hasEvidence = Boolean(evidence?.length);

  const toggleEvidence = () => {
    if (hasEvidence) {
      setOpen((current) => !current);
    }
  };

  return (
    <motion.button
      type="button"
      onHoverStart={() => {
        if (!reducedMotion && hasEvidence) {
          setOpen(true);
        }
      }}
      onHoverEnd={() => {
        if (!reducedMotion) {
          setOpen(false);
        }
      }}
      onFocus={() => {
        if (hasEvidence) {
          setOpen(true);
        }
      }}
      onBlur={() => setOpen(false)}
      onClick={toggleEvidence}
      aria-expanded={hasEvidence ? open : undefined}
      aria-label={
        hasEvidence
          ? `${skill.name}: ${open ? 'hide' : 'show'} project evidence`
          : skill.name
      }
      variants={{
        hidden: {
          opacity: 0,
          y: reducedMotion ? 0 : 24,
          scale: reducedMotion ? 1 : 0.94,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: reducedMotion ? 0 : 0.4,
            ease: EASE,
          },
        },
        exit: {
          opacity: 0,
          y: reducedMotion ? 0 : -12,
          transition: {
            duration: reducedMotion ? 0 : 0.2,
          },
        },
      }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      className="group relative flex min-h-[148px] flex-col overflow-hidden rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition-shadow duration-500 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      style={{
        boxShadow: open
          ? `0 18px 50px -12px ${hue}55, 0 0 0 1px ${hue}66`
          : undefined,
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-60"
        style={{ background: hue }}
      />

      {/* Skill monogram */}
      <motion.span
        className="relative flex h-12 w-12 items-center justify-center rounded-lg font-display text-2xl tracking-wide"
        style={{
          background: `${hue}1f`,
          color: hue,
          boxShadow: `inset 0 0 0 1px ${hue}55`,
        }}
        animate={
          open && !reducedMotion
            ? { rotate: [0, -8, 8, 0], scale: 1.08 }
            : { rotate: 0, scale: 1 }
        }
        transition={{
          duration: reducedMotion ? 0 : 0.5,
        }}
        aria-hidden="true"
      >
        {skill.mono}
      </motion.span>

      {/* Skill name and optional label */}
      <span className="relative mt-4 flex flex-wrap items-center gap-2 text-[15px] font-semibold text-bone">
        {skill.name}

        {skill.note && (
          <span
            className="rounded px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ink"
            style={{ background: hue }}
          >
            {skill.note}
          </span>
        )}
      </span>

      {/* Project and certification evidence */}
      <AnimatePresence initial={false}>
        {open && hasEvidence && (
          <motion.span
            className="relative mt-2 block overflow-hidden text-[11px] leading-snug text-mist"
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, height: 0 }
            }
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.25,
            }}
          >
            {evidence?.join(' · ')}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}