import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';

import {
  sectionMeta,
  viewerProfiles,
  type ProfileId,
  type SectionId,
} from '../data/portfolio';

import { useSmoothScroll } from '../hooks/smoothScroll';
import { SeriesMark } from './Poster';
import { ProfileAvatar } from './ProfileSelector';
import { EASE } from './fx';

export default function Navbar({
  order,
  profileId,
  onSwitch,
}: {
  order: SectionId[];
  profileId: ProfileId;
  onSwitch: (id: ProfileId) => void;
}) {
  const { scrollY } = useScroll();

  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState<string>('top');

  const { scrollTo } = useSmoothScroll();
  const menuRef = useRef<HTMLDivElement>(null);

  // Navbar background and hide-on-scroll behavior
  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;

    setSolid(y > 40);
    setHidden(y > 400 && y > previous && !menu && !mobileNav);
  });

  // Detect the section currently visible on screen
  useEffect(() => {
    const ids = ['top', ...order, 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -50% 0px',
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [order]);

  // Close the profile menu when clicking outside it
  useEffect(() => {
    if (!menu) return;

    const close = (event: PointerEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node)
      ) {
        setMenu(false);
      }
    };

    window.addEventListener('pointerdown', close);

    return () => {
      window.removeEventListener('pointerdown', close);
    };
  }, [menu]);

  // Close menus using Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenu(false);
        setMobileNav(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Navigate to a portfolio section
  const go = (id: string) => {
    setMobileNav(false);
    setMenu(false);

    scrollTo(`#${id}`, {
      offset: id === 'top' ? 0 : -64,
    });
  };

  const current = viewerProfiles.find(
    (profile) => profile.id === profileId
  );

  if (!current) {
    return null;
  }

  const links = [
    { id: 'top', label: 'Home' },
    ...order.map((id) => ({
      id,
      label: sectionMeta[id].nav,
    })),
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[60]"
      animate={{
        y: hidden ? '-100%' : '0%',
      }}
      transition={{
        duration: 0.45,
        ease: EASE,
      }}
    >
      {/* Main navigation bar */}
      <div
        className={`gutter flex h-16 items-center justify-between gap-6 transition-[background,backdrop-filter] duration-500 md:h-[72px] ${
          solid || mobileNav
            ? 'bg-ink/80 backdrop-blur-xl'
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        {/* Branding and desktop links */}
        <div className="flex items-center gap-8 lg:gap-10">
          <button
            type="button"
            onClick={() => go('top')}
            className="text-[22px]"
            aria-label="Anshul Deep Bajpai — back to home"
          >
            <SeriesMark />
          </button>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <NavLink
                key={link.id}
                label={link.label}
                active={active === link.id}
                onClick={() => go(link.id)}
              />
            ))}
          </nav>
        </div>

        {/* Contact, profile selector, and mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-cursor="link"
            onClick={() => go('contact')}
            className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-bone transition hover:border-crimson-2 hover:text-crimson-2 sm:block"
          >
            LET&apos;S CONNECT
          </button>

          {/* Viewer profile selector */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenu((value) => !value)}
              aria-haspopup="menu"
              aria-expanded={menu}
              aria-label={`Viewing as ${current.name}. Switch profile`}
              className="flex items-center gap-2 rounded-md p-1"
            >
              <ProfileAvatar id={profileId} size="sm" />

              <motion.span
                animate={{
                  rotate: menu ? 180 : 0,
                }}
                className="text-[10px] text-mist"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {menu && (
                <motion.div
                  role="menu"
                  initial={{
                    opacity: 0,
                    y: -8,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: EASE,
                  }}
                  className="absolute right-0 top-12 w-60 origin-top-right rounded-xl border border-white/10 bg-ink-2/95 p-2 shadow-2xl backdrop-blur-xl"
                >
                  <p className="px-3 pb-2 pt-1 text-[10px] font-semibold tracking-[0.24em] text-smoke">
                    EXPLORE AS
                  </p>

                  {viewerProfiles.map((viewer) => (
                    <button
                      key={viewer.id}
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onSwitch(viewer.id);
                        setMenu(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-white/5 ${
                        viewer.id === profileId
                          ? 'bg-white/[0.06]'
                          : ''
                      }`}
                    >
                      <ProfileAvatar
                        id={viewer.id}
                        size="sm"
                      />

                      <span>
                        <span className="block text-sm text-bone">
                          {viewer.name}
                        </span>

                        <span className="block text-[11px] text-smoke">
                          {viewer.blurb}
                        </span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            data-cursor="view"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileNav ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileNav}
            aria-controls="mobile-navigation"
            onClick={() => setMobileNav((value) => !value)}
          >
            <motion.span
              className="block h-0.5 w-5 bg-bone"
              animate={{
                rotate: mobileNav ? 45 : 0,
                y: mobileNav ? 4 : 0,
              }}
            />

            <motion.span
              className="block h-0.5 w-5 bg-bone"
              animate={{
                rotate: mobileNav ? -45 : 0,
                y: mobileNav ? -4 : 0,
              }}
            />
          </button>
        </div>
      </div>

      {/* Responsive mobile navigation */}
      <AnimatePresence>
        {mobileNav && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="gutter border-b border-white/5 bg-ink/95 pb-6 pt-2 backdrop-blur-xl lg:hidden"
            initial={{
              clipPath: 'inset(0 0 100% 0)',
            }}
            animate={{
              clipPath: 'inset(0 0 0% 0)',
            }}
            exit={{
              clipPath: 'inset(0 0 100% 0)',
            }}
            transition={{
              duration: 0.45,
              ease: EASE,
            }}
          >
            {links.map((link, index) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.05 * index,
                }}
                className={`block w-full py-3 text-left font-display text-3xl tracking-wide transition ${
                  active === link.id
                    ? 'text-crimson-2'
                    : 'text-bone'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'location' : undefined}
      className={`relative text-[13px] font-medium transition ${
        active
          ? 'text-bone'
          : 'text-mist hover:text-bone'
      }`}
    >
      {label}

      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded bg-crimson"
        />
      )}
    </button>
  );
}