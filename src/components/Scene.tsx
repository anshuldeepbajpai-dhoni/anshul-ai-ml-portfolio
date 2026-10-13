import { useRef, type ReactNode } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import { useTrackProgress } from '../hooks/sectionProgress';
import { useReducedMotionPref } from '../hooks/useMedia';

/**
 * Scene — reusable cinematic section wrapper.
 *
 * Features:
 * - Scroll-based fade and scale animations.
 * - Section progress tracking for Continue Exploring.
 * - Reduced-motion accessibility.
 * - Reusable section IDs and custom styling.
 */

interface SceneProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Scene({
  id,
  children,
  className = '',
}: SceneProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotionPref();

  // Track section visibility and viewing progress.
  useTrackProgress(id, ref);

  // Track the section's position in the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.55'],
  });

  // Cinematic fade-in.
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.15, 1],
  );

  // Subtle scale transition.
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.97, 1],
  );

  return (
    <motion.section
      id={id}
      ref={ref}
      style={
        reducedMotion
          ? undefined
          : {
              opacity,
              scale,
            }
      }
      className={`relative scroll-mt-16 py-16 sm:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}