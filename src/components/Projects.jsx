import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { devLab } from "@/lib/site";
import Reveal from "@/components/Reveal";

function ProjectRow({ project, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-6 border-t border-line py-10 transition-colors hover:bg-panel/60 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:py-12"
        aria-label={`${project.name} — ${project.summary}`}
      >
        <span className="font-mono text-xs tracking-[0.2em] text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="relative hidden h-24 w-40 shrink-0 overflow-hidden rounded-lg border border-line sm:block">
            <Image
              src={project.cover}
              alt={`${project.name} — ${project.coverNote}`}
              fill
              sizes="160px"
              className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                {project.name}
              </h3>
              <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                {project.kind}
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
              {project.summary}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              {project.stack.slice(0, 4).join(" · ")}
            </p>
          </div>
        </div>

        <span className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-ink transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-bg md:justify-self-end">
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="shell pt-24 md:pt-32" aria-labelledby="work-heading">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-heading" className="display mt-4 text-[clamp(2rem,5vw,3.75rem)]">
              Proof over promises.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-dim">
            Four builds I designed, developed and deployed myself. Each case study
            states what is verified, what is a demo, and what is still unfinished.
          </p>
        </div>
      </Reveal>

      <div role="list">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </div>

      <Reveal>
        <p className="border-t border-line pt-8 text-sm text-dim">
          Smaller experiments, UI clones and mini-apps live in the{" "}
          <a
            href={devLab.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep text-ink"
          >
            {devLab.label}
          </a>{" "}
          — deliberately kept out of the main showcase so this list stays strong.
        </p>
      </Reveal>
    </section>
  );
}
