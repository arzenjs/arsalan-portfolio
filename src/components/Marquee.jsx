// Pure-CSS marquee: the track contains the list twice and translates -50%.
// Honors prefers-reduced-motion via globals.css.
export default function Marquee({ items, ariaLabel }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden py-4" aria-label={ariaLabel}>
      <div className="marquee-track items-center gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center" aria-hidden={i >= items.length}>
            <span className="px-6 font-mono text-xs uppercase tracking-[0.25em] text-dim">
              {item}
            </span>
            <span className="size-1 rounded-full bg-line-strong" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
