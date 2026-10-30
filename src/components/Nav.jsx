"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site, nav } from "@/lib/site";

const HIDE_THRESHOLD_Y = 96; // nav always visible near the top
const HIDE_DELTA = 8; // dead-zone so small scroll jitters never flicker

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === "undefined") return null;
    return window.location.hash ? window.location.hash.slice(1) : null;
  });
  const [navigationIntent, setNavigationIntent] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const navigationIntentRef = useRef(null);
  const lastScrollY = useRef(0);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    let settleFrame = 0;
    let stableFrames = 0;
    let previousScrollY = window.scrollY;
    lastScrollY.current = window.scrollY;

    const syncActiveSection = () => {
      if (pathname !== "/") return;

      const activationLine = Math.min(window.innerHeight * 0.35, 128);
      const currentSection = nav
        .map((item) => document.getElementById(item.section))
        .filter((section) => section && section.getBoundingClientRect().top <= activationLine)
        .at(-1);
      setActiveSection(currentSection?.id ?? null);
    };

    const finishNavigation = () => {
      if (!navigationIntentRef.current) return;

      navigationIntentRef.current = null;
      setNavigationIntent(null);
      syncActiveSection();
    };

    const monitorScrollSettlement = () => {
      if (!navigationIntentRef.current) {
        settleFrame = 0;
        return;
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY === previousScrollY) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
      }
      previousScrollY = currentScrollY;

      if (stableFrames >= 6) {
        finishNavigation();
        settleFrame = 0;
        return;
      }

      settleFrame = requestAnimationFrame(monitorScrollSettlement);
    };

    const updateScrollState = () => {
      // Hide on scroll down, reveal on scroll up, always visible near the
      // top. The dead-zone (HIDE_DELTA) prevents flicker from small moves,
      // and identical positions never trigger a state update.
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y <= HIDE_THRESHOLD_Y) {
        setHidden(false);
      } else if (delta > HIDE_DELTA) {
        setHidden(true);
      } else if (delta < -HIDE_DELTA) {
        setHidden(false);
      }

      if (navigationIntentRef.current) {
        if (!("onscrollend" in document) && !settleFrame) {
          stableFrames = 0;
          previousScrollY = window.scrollY;
          settleFrame = requestAnimationFrame(monitorScrollSettlement);
        }
        return;
      }

      syncActiveSection();
    };

    const interruptNavigation = () => {
      if (!navigationIntentRef.current) return;

      navigationIntentRef.current = null;
      setNavigationIntent(null);
      setHoveredSection(null);
      if (settleFrame) cancelAnimationFrame(settleFrame);
      settleFrame = 0;
      syncActiveSection();
    };

    const onScrollEnd = () => finishNavigation();
    const onKeyDown = (event) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
        interruptNavigation();
      }
    };
    const onHashChange = () => {
      if (navigationIntentRef.current === window.location.hash.slice(1)) return;

      navigationIntentRef.current = null;
      setNavigationIntent(null);
      requestAnimationFrame(syncActiveSection);
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    window.addEventListener("wheel", interruptNavigation, { passive: true });
    window.addEventListener("touchstart", interruptNavigation, { passive: true });
    window.addEventListener("pointerdown", interruptNavigation);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);
    document.addEventListener("scrollend", onScrollEnd);
    const initialUpdate = requestAnimationFrame(updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      window.removeEventListener("wheel", interruptNavigation);
      window.removeEventListener("touchstart", interruptNavigation);
      window.removeEventListener("pointerdown", interruptNavigation);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onHashChange);
      document.removeEventListener("scrollend", onScrollEnd);
      cancelAnimationFrame(initialUpdate);
      if (settleFrame) cancelAnimationFrame(settleFrame);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function isActive(item) {
    if (item.match && pathname.startsWith(item.match)) return true;
    return pathname === "/" && activeSection === item.section;
  }

  const routeActiveSection =
    pathname === "/" ? activeSection : nav.find(isActive)?.section;

  function handleNavigationIntent(section) {
    if (pathname !== "/") return;

    navigationIntentRef.current = section;
    setNavigationIntent(section);
    setHoveredSection(null);
  }

  function handleNavigationHover(section) {
    setHoveredSection(section);
  }

  function closeMenuAfterClick(event) {
    const target = document.getElementById(event.currentTarget.hash.slice(1));
    if (!target || Math.abs(target.getBoundingClientRect().top - 80) < 2) {
      setOpen(false);
      return;
    }

    let settleFrame = 0;
    let stableFrames = 0;
    let previousScrollY = window.scrollY;

    const close = () => {
      document.removeEventListener("scrollend", close);
      window.removeEventListener("scroll", monitorScroll);
      if (settleFrame) cancelAnimationFrame(settleFrame);
      setOpen(false);
    };

    const monitorScroll = () => {
      const currentScrollY = window.scrollY;
      stableFrames = currentScrollY === previousScrollY ? stableFrames + 1 : 0;
      previousScrollY = currentScrollY;

      if (stableFrames >= 6) {
        close();
        return;
      }

      settleFrame = requestAnimationFrame(monitorScroll);
    };

    const onScroll = () => {
      if (!("onscrollend" in document) && !settleFrame) {
        settleFrame = requestAnimationFrame(monitorScroll);
      }
    };

    document.addEventListener("scrollend", close, { once: true });
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // The nav never hides while the mobile menu is open.
  const navHidden = hidden && !open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out"
      style={{ transform: navHidden ? "translateY(-110%)" : "translateY(0)" }}
    >
      <div className="shell relative z-20 flex h-20 items-center justify-between">
        {/* The floating rounded bar is the only chrome: no extra header
            borders, background bars or ring shadows around it. */}
        <div className="w-full rounded-full border border-line/80 bg-bg/60 px-3.5 py-2.5 backdrop-blur-md md:px-5">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex items-baseline gap-2"
              aria-label={`${site.name} — home`}
            >
              <span className="font-display text-lg font-medium tracking-tight text-ink">
                {site.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim transition-colors group-hover:text-ink">
                {site.alias}
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
              {nav.map((item) => {
                const indicatorActive =
                  (navigationIntent || hoveredSection || routeActiveSection) === item.section;
                return (
                  <a
                    key={item.section}
                    href={pathname === "/" ? `#${item.section}` : item.href}
                    onClick={() => handleNavigationIntent(item.section)}
                    onMouseEnter={() => handleNavigationHover(item.section)}
                    onMouseLeave={() => setHoveredSection(null)}
                    onFocus={() => handleNavigationHover(item.section)}
                    onBlur={() => setHoveredSection(null)}
                    aria-current={
                      (navigationIntent || routeActiveSection) === item.section
                        ? "true"
                        : undefined
                    }
                    className={`relative px-1.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                      indicatorActive ? "text-ink" : "text-dim hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {indicatorActive && !reduce && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-1 -bottom-1.5 block h-px rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 500, damping: 42 }}
                        aria-hidden="true"
                      />
                    )}
                    {indicatorActive && reduce && (
                      <span className="absolute inset-x-1 -bottom-1.5 block h-px rounded-full bg-ink" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
              <a
                href={pathname === "/" ? "#contact" : "/#contact"}
                className="pressable group inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-ink px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bg transition-colors hover:border-ink hover:bg-panel hover:text-ink"
              >
                Start a project
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </nav>

            <button
              type="button"
              className="pressable inline-flex size-10 items-center justify-center rounded-full border border-line-strong bg-panel text-ink md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-4 rounded-2xl border border-line bg-bg/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-5 py-3">
              {nav.map((item, index) => {
                const active = (navigationIntent || routeActiveSection) === item.section;
                return (
                  <motion.li
                    key={item.section}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: index * 0.04, duration: 0.18 }}
                  >
                    <a
                      href={pathname === "/" ? `#${item.section}` : item.href}
                      onClick={(event) => {
                        handleNavigationIntent(item.section);
                        closeMenuAfterClick(event);
                      }}
                      aria-current={
                        (navigationIntent || routeActiveSection) === item.section
                          ? "true"
                          : undefined
                      }
                      className={`group flex items-center justify-between border-b border-line py-3.5 font-display text-xl tracking-tight transition-colors ${
                        active ? "text-ink" : "text-dim"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.label}
                        {active && (
                          <span className="size-1.5 rounded-full bg-crimson" aria-label="Current section" />
                        )}
                      </span>
                      <ArrowUpRight
                        className="size-5 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ delay: nav.length * 0.04, duration: 0.18 }}
                className="py-4"
              >
                <a
                  href={pathname === "/" ? "#contact" : "/#contact"}
                  onClick={closeMenuAfterClick}
                  className="pressable inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bg"
                >
                  Start a project
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
