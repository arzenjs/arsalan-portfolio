import { MapPin, Mail } from "lucide-react";
import { site, skillGroups, learning } from "@/lib/site";
import Reveal from "@/components/Reveal";

// Left column: sticky identity card ("index card" of verified facts) so the
// column carries real information and stays useful while the bio scrolls.
function IdentityCard() {
  const rows = [
    ["Name", site.fullName],
    ["Alias", site.alias],
    ["Role", `${site.role} · ${site.tagline}`],
    ["Base", "India · remote worldwide"],
    ["Focus", "Business websites · web applications"],
  ];

  return (
    <div className="relative">
      <p className="eyebrow">Identity card</p>
      <dl className="mt-5">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
          >
            <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              {label}
            </dt>
            <dd className="text-right text-sm text-dim">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-5 space-y-2.5 pt-5">
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center gap-2.5 text-sm text-dim transition-colors hover:text-ink"
        >
          <Mail className="size-4 text-faint transition-colors group-hover:text-ink" aria-hidden="true" />
          <span className="link-sweep break-all">{site.email}</span>
        </a>
              <p className="flex items-center gap-2.5 text-sm text-dim">
                <MapPin className="size-4 text-faint" aria-hidden="true" />
                {site.region}
              </p>
      </div>
      <p className="mt-5 pt-5 text-xs leading-relaxed text-faint">
        Design, copy, components and the contact API on this site are all
        hand-built by me.
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="shell pt-12 md:pt-16" aria-labelledby="about-heading">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.35fr] md:gap-16">
        <div className="md:self-start md:sticky md:top-24">
          <Reveal>
            <p className="eyebrow">02 / About</p>
            <h2 id="about-heading" className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">
              An engineer&apos;s respect for the{" "}
              <em className="accent-serif">boring</em> parts.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-dim">
              The headline is easy. The handover, the edge cases, and the email
              that still sends when the happy path breaks — that is where I try
              to earn the fee.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <IdentityCard />
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
            <div className="grid gap-8 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="group bg-bg p-6 transition-colors duration-300 hover:bg-panel">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint transition-colors group-hover:text-dim">
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
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
