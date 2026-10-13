import { useLayoutEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { profile, projects, type Project } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';

/**
 * ORIGINALS — Anshul's project showcase.
 *
 * Desktop:
 *   Pinned horizontal cinematic project gallery.
 *
 * Mobile / touch / reduced motion:
 *   Native horizontal swipe rail.
 *
 * Projects are sourced from portfolio.ts.
 */

export default function Originals({
  onOpen,
}: {
  onOpen: (project: Project) => void;
}) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();

  return desktop && !reduced ? (
    <PinnedOriginals onOpen={onOpen} />
  ) : (
    <RailOriginals onOpen={onOpen} />
  );
}

/* ─────────────────────────────────────────────
   INTRODUCTION PANEL
───────────────────────────────────────────── */

function Intro() {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
      <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
        <span className="h-px w-8 bg-crimson-2" />

        {projects.length} PROJECTS · AI & TECHNOLOGY
      </p>

      <RevealText
        as="h2"
        text="ORIGINALS"
        className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] text-bone"
      />

      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-mist">
        From intelligent digital twins and financial analytics to computer
        vision and machine learning, explore the projects I've built to turn
        technical ideas into practical solutions.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {['AI & ML', 'Generative AI', 'Data Analytics'].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-mist"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">
        SCROLL TO EXPLORE →
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GITHUB OUTRO CARD
───────────────────────────────────────────── */

function Outro() {
  return (
    <a
      href={profile.links.github}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="link"
      aria-label="Explore Anshul's repositories on GitHub"
      className="group flex aspect-[3/4] w-[70vw] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 text-center transition duration-500 hover:border-crimson-2/60 sm:w-[44vw] lg:aspect-auto lg:h-[66vh] lg:w-[24vw]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-2xl text-bone transition duration-500 group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2">
        ↗
      </span>

      <span className="font-display text-3xl tracking-wide text-bone">
        Explore More
      </span>

      <span className="max-w-[220px] px-4 text-sm leading-relaxed text-mist">
        Discover more projects, experiments, and source code on GitHub.
      </span>

      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-crimson-2">
        VISIT GITHUB
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP: PINNED HORIZONTAL GALLERY
───────────────────────────────────────────── */

function PinnedOriginals({
  onOpen,
}: {
  onOpen: (project: Project) => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  const [dist, setDist] = useState(0);
  const distMV = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;

      const distance = Math.max(
        0,
        track.current.scrollWidth - window.innerWidth,
      );

      setDist(distance);
      distMV.set(distance);
    };

    measure();

    const observer = new ResizeObserver(measure);

    if (track.current) {
      observer.observe(track.current);
    }

    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distMV]);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ['start start', 'end end'],
  });

  const raw = useTransform(
    [scrollYProgress, distMV],
    ([progress, distance]) => {
      return -(progress as number) * (distance as number);
    },
  );

  const x = useSpring(raw, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const progressBar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={wrap}
      style={{ height: `calc(100vh + ${dist}px)` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Ambient crimson lighting */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]"
        />

        {/* Horizontal project track */}
        <motion.div
          ref={track}
          style={{ x }}
          className="gutter relative flex items-center gap-8 pr-[12vw]"
          data-cursor="drag"
        >
          <Intro />

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => onOpen(project)}
            />
          ))}

          <Outro />
        </motion.div>

        {/* Scroll progress indicator */}
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">
            PROJECTS
          </span>

          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div
              className="h-full origin-left bg-crimson"
              style={{ scaleX: progressBar }}
            />
          </div>

          <span className="text-[10px] tracking-wider text-smoke">
            {String(projects.length).padStart(2, '0')} TITLES
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE: NATIVE SWIPEABLE PROJECT RAIL
───────────────────────────────────────────── */

function RailOriginals({
  onOpen,
}: {
  onOpen: (project: Project) => void;
}) {
  return (
    <div className="py-6">
      <div className="gutter mb-6">
        <Intro />
      </div>

      <motion.div
        className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: EASE,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={() => onOpen(project)}
          />
        ))}

        <Outro />
      </motion.div>
    </div>
  );
}