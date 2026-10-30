// Route-level loading UI. Next.js shows this ONLY while a route segment is
// genuinely suspending (e.g. an uncached navigation) — there is no artificial
// delay and it never appears when content is already ready. Pure CSS, and
// reduced-motion users get a static mark (see globals.css).
export default function Loading() {
  return (
    <div
      className="grid min-h-[60vh] place-items-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="font-display text-2xl font-medium tracking-tight text-ink" aria-hidden="true">
          A<span className="text-dim">.</span>
        </span>
        <span className="block h-px w-24 overflow-hidden bg-line">
          <span className="loader-line block h-full w-full bg-ink" aria-hidden="true" />
        </span>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
