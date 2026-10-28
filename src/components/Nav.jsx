"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site, nav } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Reading progress hairline */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left bg-ink/60"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-baseline gap-2"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — home`}
        >
          <span className="font-display text-lg font-medium tracking-tight">
            {site.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim transition-colors group-hover:text-ink">
            {site.alias}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-sweep font-mono text-[11px] uppercase tracking-[0.2em] text-dim transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg"
          >
            Start a project
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="shell flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-2xl tracking-tight text-ink"
                >
                  {item.label}
                  <ArrowUpRight className="size-5 text-dim" aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bg"
              >
                Start a project
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
