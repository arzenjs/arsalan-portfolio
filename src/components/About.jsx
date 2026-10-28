import { site, skillGroups, learning } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="shell pt-24 md:pt-32" aria-labelledby="about-heading">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">02 / About</p>
            <h2 id="about-heading" className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">
              An engineer&apos;s respect for the boring parts.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-10">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-dim">
              {site.about.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "text-ink" : ""}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="bg-bg p-6">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-dim">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="text-sm text-faint">
              Currently learning:{" "}
              {learning.map((item, i) => (
                <span key={item}>
                  <span className="text-dim">{item}</span>
                  {i < learning.length - 1 ? " · " : ""}
                </span>
              ))}
              {" "}— listed separately because I only claim what I can defend.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
