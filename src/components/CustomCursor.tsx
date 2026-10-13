import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

const LABELS: Record<string, string> = {
  view: 'VIEW',
  play: 'EXPLORE',
  link: 'OPEN',
  drag: 'DRAG',
  close: 'CLOSE',
};

export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, {
    stiffness: 600,
    damping: 40,
    mass: 0.4,
  });

  const sy = useSpring(y, {
    stiffness: 600,
    damping: 40,
    mass: 0.4,
  });

  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('has-custom-cursor');

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const tagged = target?.closest<HTMLElement>('[data-cursor]');

      setMode(tagged?.dataset.cursor ?? null);

      setHoverLink(
        !tagged &&
          !!target?.closest('a, button, [role="button"]')
      );
    };

    const leave = () => {
      setVisible(false);
    };

    const enter = () => {
      setVisible(true);
    };

    const press = () => {
      setDown(true);
    };

    const release = () => {
      setDown(false);
    };

    window.addEventListener('pointermove', move, {
      passive: true,
    });

    document.addEventListener('pointerleave', leave);
    document.addEventListener('pointerenter', enter);

    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);
    window.addEventListener('blur', leave);
    window.addEventListener('focus', enter);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');

      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerenter', enter);

      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('blur', leave);
      window.removeEventListener('focus', enter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const label = mode ? LABELS[mode] : null;

  const size = label
    ? mode === 'view'
      ? 72
      : 64
    : hoverLink
      ? 34
      : 10;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        scale: down ? 0.85 : 1,

        backgroundColor: label
          ? 'rgba(229,19,43,0.92)'
          : hoverLink
            ? 'rgba(244,241,236,0.08)'
            : 'rgba(244,241,236,1)',

        borderColor:
          hoverLink && !label
            ? 'rgba(244,241,236,0.7)'
            : 'rgba(244,241,236,0)',
      }}
      transition={{
        type: 'spring',
        stiffness: 420,
        damping: 30,
      }}
    >
      {/* Cursor border */}
      <span
        className="absolute inset-0 rounded-full border"
        style={{
          borderColor: 'inherit',
        }}
      />

      {/* Interactive cursor label */}
      <AnimatePresence mode="wait">
        {label && (
          <motion.span
            key={label}
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
            }}
            transition={{
              duration: 0.15,
            }}
            className="whitespace-nowrap font-sans text-[9px] font-bold tracking-[0.12em] text-white sm:text-[10px]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}