import {
  useEffect,
  useRef,
  type ReactNode,
  type PointerEvent as RPointerEvent,
} from 'react';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from 'framer-motion';

import {
  useFinePointer,
  useReducedMotionPref,
} from '../hooks/useMedia';

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Magnetic interaction for buttons and links.
 * Moves toward the pointer on desktop and remains static
 * on touch devices or when reduced motion is enabled.
 */
export function Magnetic({
  children,
  strength = 0.25,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();

  const x = useSpring(0, {
    stiffness: 220,
    damping: 18,
  });

  const y = useSpring(0, {
    stiffness: 220,
    damping: 18,
  });

  const active = fine && !reduced;

  const onMove = (event: RPointerEvent<HTMLSpanElement>) => {
    if (!active) return;

    const rect = event.currentTarget.getBoundingClientRect();

    x.set(
      (event.clientX - (rect.left + rect.width / 2)) * strength
    );

    y.set(
      (event.clientY - (rect.top + rect.height / 2)) * strength
    );
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className={`inline-flex ${className}`}
      style={{ x: active ? x : 0, y: active ? y : 0 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
}

/**
 * Interactive 3D tilt effect for project cards and visual panels.
 * Includes a subtle glare that follows the pointer.
 */
export function Tilt({
  children,
  max = 6,
  className = '',
  glare = true,
  ...rest
}: {
  children: ReactNode;
  max?: number;
  className?: string;
  glare?: boolean;
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();

  const active = fine && !reduced;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(
    useTransform(py, [0, 1], [max, -max]),
    { stiffness: 180, damping: 20 }
  );

  const ry = useSpring(
    useTransform(px, [0, 1], [-max, max]),
    { stiffness: 180, damping: 20 }
  );

  const gx = useTransform(px, (value) => `${value * 100}%`);
  const gy = useTransform(py, (value) => `${value * 100}%`);

  const glareBg = useTransform(
    [gx, gy],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.16), transparent 55%)`
  );

  const handlePointerMove = (
    event: RPointerEvent<HTMLDivElement>
  ) => {
    if (!active) return;

    const rect = event.currentTarget.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    px.set(
      Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
    );

    py.set(
      Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))
    );
  };

  const resetTilt = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      {...rest}
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={
        active
          ? {
              ...rest.style,
              rotateX: rx,
              rotateY: ry,
              transformPerspective: 1000,
            }
          : rest.style
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      {children}

      {active && glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-overlay"
          style={{
            background: glareBg,
          }}
        />
      )}
    </motion.div>
  );
}

/**
 * Word-by-word blur-to-focus animation for portfolio headings.
 */
export function RevealText({
  text,
  className = '',
  delay = 0,
  as = 'span',
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: 'span' | 'h2' | 'h3' | 'p';
}) {
  const Tag = motion[as];
  const words = text.split(' ');

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: '-4% 0px',
      }}
      transition={{
        staggerChildren: 0.06,
        delayChildren: delay,
      }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: {
                y: '105%',
                opacity: 0,
                filter: 'blur(8px)',
              },
              show: {
                y: '0%',
                opacity: 1,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.9,
                  ease: EASE,
                },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Standard heading shared across portfolio sections.
 */
export function SectionHeading({
  kicker,
  title,
  aside,
}: {
  kicker: string;
  title: string;
  aside?: ReactNode;
}) {
  return (
    <div className="gutter mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-9">
      <div>
        <motion.div
          initial={{
            opacity: 0,
            x: -16,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="mb-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2"
        >
          <span className="h-px w-8 bg-crimson-2" />
          {kicker}
        </motion.div>

        <RevealText
          as="h2"
          text={title}
          className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.9] tracking-wide text-bone"
        />
      </div>

      {aside}
    </div>
  );
}

/**
 * Lightweight ambient particles for cinematic backgrounds.
 * Animation pauses when the canvas leaves the viewport.
 */
export function Particles({
  count = 46,
  color = '255,90,110',
  className = '',
}: {
  count?: number;
  color?: string;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas || reduced) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let last = performance.now();

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const dots = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.00012,
      vy: -Math.random() * 0.00028 - 0.00006,
      a: Math.random() * 0.6 + 0.15,
      tw: Math.random() * Math.PI * 2,
    }));

    const tick = (now: number) => {
      if (!running) return;

      const dt = Math.min(50, now - last);
      last = now;

      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        dot.x += dot.vx * dt;
        dot.y += dot.vy * dt;
        dot.tw += dt * 0.002;

        if (dot.y < -0.02) {
          dot.y = 1.02;
          dot.x = Math.random();
        }

        if (dot.x < -0.02) dot.x = 1.02;
        if (dot.x > 1.02) dot.x = -0.02;

        const alpha =
          dot.a * (0.6 + 0.4 * Math.sin(dot.tw));

        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.arc(
          dot.x * width,
          dot.y * height,
          dot.r,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      }
    );

    intersectionObserver.observe(canvas);

    return () => {
      running = false;

      intersectionObserver.disconnect();
      resizeObserver.disconnect();

      cancelAnimationFrame(raf);
    };
  }, [count, color, reduced]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}