import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink, FileText } from "lucide-react";
import { projects } from "@/lib/projects";
import { site, devLab } from "@/lib/site";
import Reveal from "@/components/Reveal";
import GlareHover from "@/components/GlareHover";

export const metadata = {
  title: "Work",
  description:
    "Selected projects by Arsalan (ARZEN): NexBook, a full-stack web application, plus industry-solution demonstrations for a gym, a clinic and a restaurant — with verified demos and repositories.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Arsalan · ARZEN",
    description:
      "Full-stack web applications and industry-solution demonstrations, each documented with verified links and honest status notes.",
    url: "/work",
  },
};

// CollectionPage + per-project entries. Only confirmed URLs are included —
// projects without a public demo list their repository, and NexBook lists
// its live demo only, exactly as the data file states.
function WorkJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected work — Arsalan",
    url: `${site.url}/work`,
    author: { "@type": "Person", name: site.fullName, url: site.url },
    hasPart: projects.map((p) => ({
      "@type": p.schemaType || "CreativeWork",
      name: p.name,
      description: p.summary,
      url: p.live || `${site.url}/work/${p.slug}`,
      ...(p.repo ? { codeRepository: p.repo } : {}),
      author: { "@type": "Person", name: site.fullName },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <GlareHover className="h-full rounded-2xl">
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-300 hover:border-line-strong">
          <Link
          href={`/work/${project.slug}`}
          className="relative block aspect-[16/10] overflow-hidden border-b border-line"
          aria-label={`${project.name} case study`}
          tabIndex={-1}
        >
          <Image
            src={project.cover}
            alt={`${project.name} interface preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 34rem"
            className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </Link>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              {project.kind}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              {project.category}
            </span>
          </div>

          <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
            <Link href={`/work/${project.slug}`} className="link-sweep">
              {project.name}
            </Link>
          </h2>

          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-dim">
            {project.summary}
          </p>

          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            {project.stack.slice(0, 5).join(" · ")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-line pt-5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-bg"
              >
                <ExternalLink className="size-3" aria-hidden="true" />
                Live demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink hover:border-ink"
              >
                <Code2 className="size-3" aria-hidden="true" />
                Source
              </a>
            )}
            <Link
              href={`/work/${project.slug}`}
              className="group/link inline-flex items-center gap-1.5 rounded-full border border-transparent px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-ink"
            >
              <FileText className="size-3" aria-hidden="true" />
              Case study
              <ArrowUpRight className="size-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        </article>
      </GlareHover>
    </Reveal>
  );
}

export default function WorkPage() {
  return (
    <div className="shell pt-28 md:pt-36">
      <WorkJsonLd />

      <header>
        <Reveal>
          <p className="eyebrow">Work</p>
          <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.5rem)]">
            Everything I&apos;ve <em className="accent-serif">shipped</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">
            Four documented builds, labelled plainly: full-stack web
            applications are complete products, and industry-solution
            demonstrations are realistic builds for fictional businesses, made
            to show how I&apos;d solve that industry&apos;s problems. None of them are
            presented as paid client work.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            <div className="bg-bg p-5">
              <p className="eyebrow">Full-stack web application</p>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                A complete product: authentication, data layer, API routes and a
                deployed build. Everything runs end to end.
              </p>
            </div>
            <div className="bg-bg p-5">
              <p className="eyebrow">Industry solution demonstration</p>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                A realistic build for a fictional business in a real industry.
                The business is invented; the engineering is not.
              </p>
            </div>
          </div>
        </Reveal>
      </header>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <Reveal>
        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-dim">
            {devLab.note}{" "}
            <a
              href={devLab.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-ink"
            >
              Browse the {devLab.label}
            </a>
            .
          </p>
          <Link
            href="/#contact"
            className="pressable group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bg"
          >
            Discuss your project
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
