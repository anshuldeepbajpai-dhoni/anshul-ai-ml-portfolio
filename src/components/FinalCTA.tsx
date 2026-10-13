import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({
  onReplay,
}: {
  onReplay: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const prefersReducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.2'],
  });

  const spacing = useTransform(
    scrollYProgress,
    [0, 1],
    ['0.6em', '0.02em'],
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(16px)', 'blur(0px)'],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0, 1],
  );

  const ctas = [
    {
      label: "Let's Collaborate",
      href: `mailto:${profile.email}?subject=${encodeURIComponent(
        'AI/ML Collaboration Opportunity',
      )}`,
      primary: true,
      cursor: 'play',
    },
    {
      label: 'LinkedIn',
      href: profile.links.linkedin,
      cursor: 'link',
    },
    {
      label: 'GitHub',
      href: profile.links.github,
      cursor: 'link',
    },
    {
      label: 'Email Me',
      href: `mailto:${profile.email}`,
      cursor: 'link',
    },
  ];

  const externalLink = (href: string) =>
    href.startsWith('https://') || href.startsWith('http://');

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      {/* Cinematic background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]"
      />

      {!prefersReducedMotion && <Particles count={36} />}

      {/* Closing message */}
      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.6,
        }}
      >
        The Journey Continues
      </motion.p>

      {/* Main headline */}
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={
          prefersReducedMotion
            ? undefined
            : {
                fontSize: 'clamp(3.4rem, 13vw, 12rem)',
                letterSpacing: spacing,
                filter: blur,
                opacity,
              }
        }
      >
        LET'S BUILD
        <br />
        WHAT'S NEXT.
      </motion.h2>

      {/* Professional identity */}
      <motion.div
        className="relative mt-12"
        initial={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 30 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.9,
          ease: EASE,
          delay: prefersReducedMotion ? 0 : 0.2,
        }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">
          {profile.displayName.toUpperCase()}
        </p>

        <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-mist sm:text-sm">
          {profile.role.toUpperCase()}
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist">
          Interested in artificial intelligence, machine learning,
          Generative AI, intelligent agents, and data-driven
          applications? Let's connect and turn meaningful ideas
          into working solutions.
        </p>
      </motion.div>

      {/* Contact links */}
      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          staggerChildren: prefersReducedMotion ? 0 : 0.08,
          delayChildren: prefersReducedMotion ? 0 : 0.35,
        }}
      >
        {ctas.map((cta) => (
          <motion.div
            key={cta.label}
            variants={{
              hidden: {
                opacity: 0,
                y: prefersReducedMotion ? 0 : 20,
                scale: prefersReducedMotion ? 1 : 0.9,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: prefersReducedMotion ? 0 : 0.6,
                  ease: EASE,
                },
              },
            }}
          >
            <Magnetic>
              <a
                href={cta.href}
                target={
                  externalLink(cta.href) ? '_blank' : undefined
                }
                rel={
                  externalLink(cta.href)
                    ? 'noopener noreferrer'
                    : undefined
                }
                data-cursor={cta.cursor}
                className={`flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold tracking-[0.12em] transition ${
                  cta.primary
                    ? 'bg-crimson text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] hover:bg-crimson-2'
                    : 'border border-white/25 text-bone hover:border-bone hover:bg-white/10'
                }`}
              >
                {cta.primary && <span aria-hidden="true">✦</span>}

                {cta.label.toUpperCase()}

                {!cta.primary && (
                  <span className="text-mist" aria-hidden="true">
                    ↗
                  </span>
                )}
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation controls */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button
          type="button"
          onClick={() => scrollTo(0, { offset: 0 })}
          className="transition hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          ↺ BACK TO TOP
        </button>

        <button
          type="button"
          onClick={onReplay}
          className="transition hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          ▶ REPLAY INTRO
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>

        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. Built
          with curiosity, code, and AI.
        </p>

        <p className="mt-1 text-[10px] text-smoke/70">
          AI · Machine Learning · Data Science · Generative AI
        </p>
      </footer>
    </section>
  );
}