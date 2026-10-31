// Static flux-line background (React Bits inspired): a few long, low-opacity
// sine curves with one slightly brighter neutral strand. Pure SVG, no animation
// loop, no pointer cost. Always decorative: aria-hidden, pointer-events-none.
export default function FluxLines({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 340"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[16rem] w-full ${className || ""}`}
      fill="none"
    >
      <path d="M-40 250 C 240 150, 420 320, 720 250 S 1200 160, 1480 230" stroke="rgba(244,244,242,0.06)" strokeWidth="1" />
      <path d="M-40 280 C 260 190, 460 330, 760 270 S 1220 190, 1480 260" stroke="rgba(244,244,242,0.045)" strokeWidth="1" />
      <path d="M-40 210 C 220 120, 440 290, 740 220 S 1180 130, 1480 200" stroke="rgba(244,244,242,0.055)" strokeWidth="1.2" />
      <path d="M-40 300 C 280 230, 480 340, 780 290 S 1240 220, 1480 290" stroke="rgba(244,244,242,0.035)" strokeWidth="1" />
      <path d="M-40 170 C 200 80, 460 260, 760 190 S 1160 90, 1480 160" stroke="rgba(244,244,242,0.05)" strokeWidth="1" />
    </svg>
  );
}
