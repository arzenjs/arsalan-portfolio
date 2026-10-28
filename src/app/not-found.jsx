import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-[clamp(2.5rem,8vw,5rem)]">
        This page took a wrong turn.
      </h1>
      <p className="mt-5 max-w-md text-dim">
        The link may be outdated, or the page never existed. The work, however,
        is very real.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bg transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </section>
  );
}
