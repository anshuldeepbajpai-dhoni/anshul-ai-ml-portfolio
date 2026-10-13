import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from '../data/portfolio';

import { EASE, Magnetic, SectionHeading } from './fx';

/**
 * Resume section for Anshul Deep Bajpai's AI/ML portfolio.
 *
 * Includes:
 * - Resume preview
 * - Education and work experience
 * - Projects and technical skills
 * - Achievements and certifications
 * - Resume viewing and download actions
 */

export default function ResumeSection({
  onView,
}: {
  onView: () => void;
}) {
  const cgpa =
    education[0]?.score?.replace(/^CGPA\s*/i, '') || 'N/A';

  return (
    <>
      <SectionHeading
        kicker="The professional profile"
        title="The Full Story"
      />

      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        {/* Resume preview */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            rotateX: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          viewport={{
            once: true,
            margin: '-10% 0px',
          }}
          transition={{
            duration: 1.1,
            ease: EASE,
          }}
          style={{
            transformPerspective: 1600,
          }}
        >
          <CollapsibleSheet />
        </motion.div>

        {/* Resume actions */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">
            Engineering intelligence. Building what&apos;s next.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-mist">
            Explore my education, internship experience, AI/ML
            projects, technical skills, achievements, and{' '}
            {certifications.length} certifications in one place.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span aria-hidden="true">↗</span>
                View Full Resume
              </button>
            </Magnetic>

            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Anshul_Deep_Bajpai_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span aria-hidden="true">⤓</span>
                Download Resume
              </a>
            </Magnetic>
          </div>

          {/* Portfolio statistics */}
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              {
                value: cgpa,
                label: 'CGPA',
              },
              {
                value: String(projects.length),
                label: 'Projects',
              },
              {
                value: String(certifications.length),
                label: 'Certifications',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-ink-2 px-2 py-4"
              >
                <dd className="font-display text-3xl leading-none text-bone">
                  {stat.value}
                </dd>

                <dt className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-smoke sm:text-[10px] sm:tracking-[0.2em]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/**
 * On mobile, show a compact preview that can be expanded.
 * On desktop, display the complete resume sheet.
 */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${
          open ? 'max-h-[4000px]' : 'max-h-[560px]'
        }`}
      >
        <ResumeSheet />
      </div>

      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Read Full Resume ↓
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Consistent resume subsection heading.
 */
function H({
  children,
}: {
  children: string;
}) {
  return (
    <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">
      {children}
    </h4>
  );
}

/**
 * Structured resume preview using portfolio.ts as its data source.
 */
export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      {/* Accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent"
      />

      {/* Personal information */}
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">
            AI & MACHINE LEARNING
          </p>

          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">
            {profile.fullName}
          </h3>

          <p className="mt-2 text-xs text-mist">
            {profile.tagline.join(' · ')}
          </p>
        </div>

        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="block break-all transition hover:text-bone"
          >
            {profile.email}
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-bone"
          >
            LinkedIn ↗
          </a>

          {' · '}

          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-bone"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        {/* Education, experience, and projects */}
        <div>
          <H>Education</H>

          {education.map((item) => (
            <div key={item.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {item.school}, {item.place}
                </p>

                <p className="text-xs text-smoke">
                  {item.period}
                </p>
              </div>

              <p className="text-xs text-mist">
                {item.degree} ·{' '}
                <span className="text-bone/80">
                  {item.score}
                </span>
              </p>
            </div>
          ))}

          <H>Experience</H>

          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="mb-5">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {item.company} — {item.role}
                </p>

                <p className="text-xs text-smoke">
                  {item.period}
                </p>
              </div>

              <ul className="mt-2 space-y-1.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-xs leading-relaxed text-mist"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2"
                    />

                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Projects</H>

          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {project.title}
                </p>

                <p className="text-xs text-smoke">
                  {project.year}
                </p>
              </div>

              <p className="mt-1 text-xs leading-relaxed text-mist">
                {project.logline}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-smoke">
                {project.stack.join(', ')}
              </p>
            </div>
          ))}
        </div>

        {/* Skills, achievements, and certifications */}
        <div>
          <H>Technical Skills</H>

          <div className="space-y-2">
            {skillCategories.map((category) => (
              <p
                key={category.id}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {category.title}:{' '}
                </span>

                {category.skills
                  .map((skill) => skill.name)
                  .join(', ')}
              </p>
            ))}
          </div>

          <H>Achievements</H>

          <ul className="space-y-3">
            {achievements.map((achievement) => (
              <li
                key={achievement.id}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {achievement.title}
                  {achievement.org
                    ? ` — ${achievement.org}`
                    : ''}
                  .
                </span>{' '}

                {achievement.detail}
              </li>
            ))}
          </ul>

          <H>Certifications</H>

          <ul className="space-y-2">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {certification.name}
                </span>

                <span className="text-smoke">
                  {' '}— {certification.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/10 pt-4">
        <p className="text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-smoke">
          {profile.displayName} · AI · Machine Learning · Data Science
        </p>
      </footer>
    </article>
  );
}