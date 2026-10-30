"use client";

// Lightweight glare hover (inspired by React Bits' GlareHover): a soft
// light reflection follows the pointer across the card. Implemented with
// two custom properties written directly to the element, so it never
// triggers a React re-render. The effect is hover/focus gated in CSS and
// disabled for touch devices via the (hover: none) media feature.
export default function GlareHover({ children, className }) {
  function handlePointerMove(event) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--gy", `${event.clientY - rect.top}px`);
  }

  return (
    <div className={`glare ${className || ""}`} onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
}
