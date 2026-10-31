import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import { site, heroSocials } from "@/lib/site";
import Marquee from "@/components/Marquee";
import FluxLines from "@/components/FluxLines";

const marqueeItems = [
  "JavaScript", "React", "Next.js", "Node.js", "MongoDB",
  "Tailwind CSS", "Auth.js", "REST APIs", "Framer Motion", "Git & GitHub",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28" aria-labelledby="hero-heading">
      <FluxLines />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_28rem_at_76%_-12%,rgba(255,255,255,0.08),transparent_62%)]" />

      <div className="shell relative pb-14 md:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="relative z-10">
            <p className="stagger inline-flex flex-wrap items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-dim">
              <span style={{ "--stagger": 0 }} className="text-faint">
                {site.role} • {site.tagline}
              </span>
              {/* <span style={{ "--stagger": 1 }} className="text-faint">•</span> */}
              {/* <span style={{ "--stagger": 2 }}>{site.tagline}</span> */}
            </p>

            <h1 id="hero-heading" className="display mt-6 text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.07em]">
              <span className="line-mask block">
                <span style={{ "--stagger": 3 }}>Arsalan</span>
              </span>
              <span className="mt-2 block font-mono text-[0.17em] font-medium uppercase tracking-[0.22em] text-dim">
                Full-Stack Web Developer
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-[1.15rem]">
              <span className="text-ink">Building <em className="accent-serif text-ink">high-craft</em> business websites and full-stack web applications.</span>
            </p>

            <p className="stagger mt-5 max-w-xl text-base leading-relaxed text-dim" style={{ "--stagger": 5 }}>
              <span>{site.intro}</span>
            </p>

            <div className="stagger mt-8 flex flex-wrap items-center gap-4" style={{ "--stagger": 6 }}>
              <Link
                href="/#contact"
                className="pressable group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bg transition-colors hover:bg-panel hover:text-ink"
              >
                Start a conversation
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="pressable group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-panel"
              >
                Explore my work
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="stagger mt-8 flex flex-wrap items-center gap-x-5 gap-y-3" style={{ "--stagger": 7 }}>
              {heroSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-ink"
              >
                <Mail className="size-3.5 text-faint transition-colors group-hover:text-ink" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] lg:max-w-none">
            <div className="absolute -right-1 bottom-6 z-10 hidden rounded-full bg-bg/80 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-dim md:block">
              Next.js · React · Node
            </div>

            <figure className="stagger relative" style={{ "--stagger": 4 }}>
              <div className="relative overflow-hidden rounded-[2rem]">
                <div className="absolute left-5 top-5 z-10 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/80 backdrop-blur-sm">
                  {site.alias}.dev
                </div>
                <Image
                  src={site.portrait}
                  alt="Portrait of Arsalan (Mohammad Arsalan Sheikh), full-stack web developer"
                  width={880}
                  height={1100}
                  priority
                  className="h-[22rem] w-full object-cover grayscale transition-all duration-700 ease-out hover:scale-[1.015] sm:h-[28rem] lg:h-[31rem]"
                />
              </div>
            </figure>
          </div>
        </div>

        <div className="stagger mt-12" style={{ "--stagger": 8 }}>
          <div className="grid gap-8 sm:grid-cols-3">
            {site.facts.map((fact) => (
              <div key={fact.label} className="bg-bg/95 px-5 py-4 transition-colors duration-300 hover:bg-panel">
                <p className="eyebrow text-[10px]">{fact.label}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-ink">
                  {fact.live && (
                    <span className="relative flex size-1.5" aria-hidden="true">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                    </span>
                  )}
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Marquee items={marqueeItems} ariaLabel="Technologies I work with" />
      </div>
    </section>
  );
}
