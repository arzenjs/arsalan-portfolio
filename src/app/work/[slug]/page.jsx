import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Info, ExternalLink, Code2 } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — case study`,
      description: project.summary,
      images: [{ url: project.cover, alt: `${project.name} interface preview` }],
    },
  };
}

// Structured data for the project itself — only confirmed facts: the live
// demo when one exists, the public repository when one exists, otherwise
// neither. Nothing is fabricated.
function ProjectJsonLd({ project }) {
  const data = {
    "@context": "https://schema.org",
    "@type": project.schemaType || "CreativeWork",
    name: project.name,
    description: project.summary,
    url: project.live || `${site.url}/work/${project.slug}`,
    keywords: project.stack.join(", "),
    author: { "@type": "Person", name: site.fullName, url: site.url },
    ...(project.repo ? { codeRepository: project.repo } : {}),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="shell pt-28 md:pt-36">
      <ProjectJsonLd project={project} />

      <Reveal>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
          All work
        </Link>
      </Reveal>

      <header className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">Case study {String(index + 1).padStart(2, "0")}</p>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              {project.kind}
            </span>
          </div>
          <h1 className="display mt-5 text-[clamp(2.6rem,6vw,4.75rem)]">{project.name}</h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            {project.category}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="p-2">
            <div className="pb-4">
              <dt className="eyebrow">Links</dt>
              <dd className="mt-3 flex flex-wrap gap-3">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bg"
                  >
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    Live demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    Demo not published
                  </span>
                )}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink"
                  >
                    <Code2 className="size-3.5" aria-hidden="true" />
                    {project.repoNote || "Source"}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    <Code2 className="size-3.5" aria-hidden="true" />
                    {project.repoNote || "Source private"}
                  </span>
                )}
              </dd>
            </div>
            <div className="pt-4">
              <dt className="eyebrow">Stack</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-dim"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      <Reveal>
        <figure className="mt-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={project.cover}
              alt={`${project.name} interface preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 72rem"
              className="object-cover"
            />
          </div>
        </figure>
      </Reveal>

      <div className="mt-16 grid gap-12 pb-4 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="eyebrow">Overview</h2>
          <p className="mt-5 text-base leading-relaxed text-dim sm:text-lg">
            {project.description}
          </p>

          <h2 className="eyebrow mt-12">What it does</h2>
          <ul className="mt-5 space-y-3">
            {project.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-dim sm:text-base">
                <Check className="mt-1 size-4 shrink-0 text-emerald-400/80" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="h-fit p-2">
            <h2 className="eyebrow flex items-center gap-2">
              <Info className="size-3.5" aria-hidden="true" />
              Honest status
            </h2>
            <ul className="mt-5 space-y-3">
              {project.caveats.map((caveat) => (
                <li key={caveat} className="text-sm leading-relaxed text-dim">
                  {caveat}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <Link
          href={`/work/${next.slug}`}
          className="group mt-8 flex items-center justify-between py-10"
        >
          <div>
            <p className="eyebrow">Next project</p>
            <p className="display mt-3 text-[clamp(1.75rem,4vw,3rem)] text-ink transition-colors">
              {next.name}
            </p>
          </div>
          <span className="inline-flex size-12 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-bg">
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </Link>
      </Reveal>
    </article>
  );
}
