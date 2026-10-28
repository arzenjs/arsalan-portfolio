import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { site, skillGroups } from "@/lib/site";
import Marquee from "@/components/Marquee";

const marqueeItems = [
  "JavaScript", "React", "Next.js", "Node.js", "MongoDB",
  "Tailwind CSS", "Auth.js", "REST APIs", "Framer Motion", "Git & GitHub",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36" aria-labelledby="hero-heading">
      {/* faint vertical hairlines in the background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 shell grid grid-cols-2 md:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`border-l border-line/50 ${i === 3 ? "border-r" : ""} ${i > 1 ? "hidden md:block" : ""}`} />
        ))}
      </div>

      <div className="shell relative grid items-end gap-12 pb-16 md:grid-cols-[1.5fr_1fr] md:pb-24 lg:gap-20">
        <div className="stagger">
          <p style={{ "--stagger": 0 }} className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>{site.fullName}</span>
            <span aria-hidden="true" className="text-faint">/</span>
            <span>{site.role} · {site.tagline}</span>
          </p>

          <h1
            id="hero-heading"
            style={{ "--stagger": 1 }}
            className="display mt-6 text-[clamp(2.6rem,7.5vw,5.75rem)]"
          >
            Websites that win clients.
            <span className="block text-dim">Apps that survive production.</span>
          </h1>

          <p style={{ "--stagger": 2 }} className="mt-7 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            {site.intro}
          </p>

          <div style={{ "--stagger": 3 }} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bg transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink"
            >
              View selected work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>

          <p style={{ "--stagger": 4 }} className="mt-9 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            <MapPin className="size-3.5" aria-hidden="true" />
            {site.location}
            <span aria-hidden="true" className="text-line-strong">—</span>
            <span className="text-emerald-400/90 normal-case tracking-normal font-sans text-xs">{site.availability}</span>
          </p>
        </div>

        {/* Portrait — deliberately labelled as an AI placeholder. */}
        <figure style={{ "--stagger": 2 }} className="stagger relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-panel">
            <Image
              src={site.portrait}
              alt="Temporary AI-generated placeholder portrait standing in for a photograph of Arsalan"
              width={880}
              height={1100}
              priority
              className="h-auto w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.02]"
            />
            <span aria-hidden="true" className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
              {site.alias}.dev
            </span>
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            Temporary AI-generated portrait · real photo coming soon
          </figcaption>
        </figure>
      </div>

      <Marquee items={marqueeItems} ariaLabel="Technologies I work with" />
    </section>
  );
}
