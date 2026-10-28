import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { site, socials, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="hairline-t mt-24">
      <div className="shell py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="link-sweep mt-4 inline-block font-display text-xl font-medium tracking-tight text-ink sm:text-2xl break-all"
            >
              {site.email}
            </a>
            <p className="mt-5 flex items-center gap-2 text-sm text-dim">
              <MapPin className="size-4 text-faint" aria-hidden="true" />
              {site.location} — working worldwide
            </p>
            <p className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </p>
          </div>

          <nav aria-label="Site">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-sweep text-sm text-dim transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social profiles">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-dim transition-colors hover:text-ink"
                  >
                    {s.label}
                    <ArrowUpRight className="size-3 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
          <p>JavaScript · Next.js · Tailwind — no TypeScript, by choice</p>
        </div>
      </div>
    </footer>
  );
}
