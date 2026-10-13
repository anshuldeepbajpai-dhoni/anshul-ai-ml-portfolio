import { useCallback, useEffect, useState, type RefObject } from 'react';

/**
 * Desktop navigation controls for horizontally scrollable project rails.
 *
 * - Automatically hides arrows when scrolling is unnecessary.
 * - Uses native horizontal scrolling with smooth animation.
 * - Shows controls on hover-capable devices.
 * - Preserves touch scrolling on mobile.
 */

export function RailButtons({
  rail,
}: {
  rail: RefObject<HTMLDivElement | null>;
}) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = useCallback(() => {
    const element = rail.current;

    if (!element) {
      setCanLeft(false);
      setCanRight(false);
      return;
    }

    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    const currentScrollLeft = element.scrollLeft;

    setCanLeft(currentScrollLeft > 8);
    setCanRight(maxScrollLeft > 8 && currentScrollLeft < maxScrollLeft - 8);
  }, [rail]);

  useEffect(() => {
    const element = rail.current;
    if (!element) return;

    update();

    element.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const observer = new ResizeObserver(update);
    observer.observe(element);

    if (element.firstElementChild) {
      observer.observe(element.firstElementChild);
    }

    return () => {
      element.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, [rail, update]);

  const scrollPage = useCallback(
    (direction: 1 | -1) => {
      const element = rail.current;
      if (!element) return;

      element.scrollBy({
        left: direction * element.clientWidth * 0.8,
        behavior: 'smooth',
      });
    },
    [rail],
  );

  const base =
    'absolute top-8 bottom-8 z-20 hidden w-[var(--gutter)] min-w-10 items-center justify-center bg-gradient-to-r text-3xl text-bone opacity-0 transition duration-300 group-hover/rail:opacity-100 hover:text-white focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white [@media(hover:hover)]:flex';

  return (
    <>
      {/* Previous page */}
      {canLeft && (
        <button
          type="button"
          aria-label="Scroll projects left"
          title="Previous projects"
          onClick={() => scrollPage(-1)}
          className={`${base} left-0 from-ink/90 to-transparent`}
        >
          <span aria-hidden="true">‹</span>
        </button>
      )}

      {/* Next page */}
      {canRight && (
        <button
          type="button"
          aria-label="Scroll projects right"
          title="Next projects"
          onClick={() => scrollPage(1)}
          className={`${base} right-0 from-transparent to-ink/90`}
        >
          <span aria-hidden="true">›</span>
        </button>
      )}
    </>
  );
}