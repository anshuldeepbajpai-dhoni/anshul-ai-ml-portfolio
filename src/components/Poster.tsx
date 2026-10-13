import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Cinematic artwork backdrop.
 *
 * Generates project-specific visuals using gradients, lighting,
 * texture, and the project's configured color palette.
 * No external stock images are required.
 */

export function PosterBackdrop({
  palette,
  children,
  className = '',
}: {
  palette: Palette;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(
            120% 90% at 85% 10%,
            ${palette.via} 0%,
            transparent 60%
          ),
          radial-gradient(
            90% 80% at 0% 100%,
            ${palette.from} 0%,
            transparent 70%
          ),
          linear-gradient(
            160deg,
            ${palette.from} 0%,
            ${palette.to} 100%
          )
        `,
      }}
    >
      {/* Ambient accent lighting */}
      <div
        aria-hidden="true"
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${palette.accent}55,
            transparent
          )`,
        }}
      />

      {/* Fine cinematic texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]"
      />

      {children}

      {/* Bottom vignette for readable project titles */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
      />
    </div>
  );
}

/**
 * Project-specific vector artwork.
 *
 * Supported motifs:
 * - shield: security and intelligent verification
 * - flow: workflows, pipelines, and connected systems
 * - tenants: modular platforms and distributed architecture
 */

export function ProjectArt({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) {
  const accent = project.palette.accent;

  return (
    <PosterBackdrop
      palette={project.palette}
      className={className}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id={`g-${project.id}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor={accent}
              stopOpacity="0.55"
            />

            <stop
              offset="100%"
              stopColor={accent}
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* Central atmospheric glow */}
        <circle
          cx="290"
          cy="120"
          r="130"
          fill={`url(#g-${project.id})`}
        />

        {/* Security / verification motif */}
        {project.motif === 'shield' && (
          <g
            transform="translate(232 40)"
            fill="none"
            stroke={accent}
            strokeOpacity="0.85"
          >
            <path
              d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z"
              strokeWidth="2"
            />

            <path
              d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z"
              strokeWidth="1"
              strokeOpacity="0.4"
            />

            {[0, 1, 2, 3, 4].map((index) => (
              <line
                key={index}
                x1="30"
                x2={index % 2 ? 72 : 86}
                y1={56 + index * 14}
                y2={56 + index * 14}
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity={0.35 + index * 0.1}
              />
            ))}

            <path
              d="M40 124 l12 12 l26 -28"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {/* AI workflows / connected pipeline motif */}
        {project.motif === 'flow' && (
          <g fill="none" stroke={accent}>
            <rect
              x="200"
              y="56"
              width="150"
              height="94"
              rx="12"
              strokeWidth="2"
              strokeOpacity="0.85"
            />

            <rect
              x="214"
              y="72"
              width="28"
              height="20"
              rx="4"
              strokeOpacity="0.7"
            />

            <line
              x1="214"
              x2="330"
              y1="124"
              y2="124"
              strokeWidth="3"
              strokeOpacity="0.4"
              strokeDasharray="18 8"
            />

            <g transform="translate(176 196)">
              <circle
                cx="16"
                cy="16"
                r="16"
                strokeWidth="2"
              />

              <path
                d="M34 16 h46"
                strokeWidth="2"
              />

              <circle
                cx="96"
                cy="16"
                r="16"
                strokeWidth="2"
                strokeOpacity="0.8"
              />

              <path
                d="M112 8 l38 -22 M112 24 l38 22"
                strokeWidth="2"
                strokeOpacity="0.6"
              />

              <circle
                cx="166"
                cy="-18"
                r="10"
                fill={accent}
                fillOpacity="0.8"
                stroke="none"
              />

              <circle
                cx="166"
                cy="50"
                r="10"
                strokeWidth="2"
                strokeOpacity="0.5"
              />
            </g>
          </g>
        )}

        {/* Modular / multi-component architecture motif */}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={accent}>
            {[0, 1, 2].map((row) =>
              [0, 1, 2, 3].map((column) => (
                <rect
                  key={`${row}-${column}`}
                  x={196 + column * 44}
                  y={50 + row * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={
                    0.25 + ((row + column) % 3) * 0.25
                  }
                  fill={
                    (row + column) % 4 === 0
                      ? accent
                      : 'none'
                  }
                  fillOpacity="0.25"
                />
              )),
            )}

            <path
              d="M188 200 h190"
              strokeWidth="2"
              strokeOpacity="0.7"
            />

            <path
              d="M188 214 h190"
              strokeWidth="1"
              strokeOpacity="0.35"
            />

            <path
              d="M188 228 h190"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/**
 * Personal portfolio identity mark.
 *
 * Uses an abstract AI-inspired monogram rather than
 * the original template's fictional SERIES branding.
 */

export function SeriesMark({
  className = '',
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Anshul Deep Bajpai — AI and ML Portfolio"
    >
      {/* Abstract neural / A-inspired symbol */}
      <svg
        viewBox="0 0 32 32"
        className="h-[1.4em] w-auto shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 26 L16 5 L26 26"
          stroke="#e5132b"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M10 19 H22"
          stroke="#e5132b"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle
          cx="16"
          cy="5"
          r="2.5"
          fill="#e5132b"
        />

        <circle
          cx="6"
          cy="26"
          r="2.5"
          fill="#e5132b"
        />

        <circle
          cx="26"
          cy="26"
          r="2.5"
          fill="#e5132b"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.72em] font-bold tracking-[0.12em] text-bone">
          ANSHUL DEEP
        </span>

        <span className="mt-1 font-sans text-[0.48em] font-semibold tracking-[0.24em] text-mist">
          AI & ML PORTFOLIO
        </span>
      </span>
    </span>
  );
}