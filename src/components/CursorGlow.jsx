"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let active = false;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    function handlePointerMove(event) {
      if (event.pointerType === "touch") return;

      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const glow = glowRef.current;
        if (glow) {
          glow.style.setProperty("--cursor-x", `${pointerX}px`);
          glow.style.setProperty("--cursor-y", `${pointerY}px`);
        }
        frame = 0;
      });
    }

    function updateTracking() {
      const shouldTrack = pointerQuery.matches && !motionQuery.matches;
      if (shouldTrack === active) return;
      active = shouldTrack;

      if (active) {
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        return;
      }

      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      glowRef.current?.style.setProperty("--cursor-x", "-1000px");
      glowRef.current?.style.setProperty("--cursor-y", "-1000px");
    }

    updateTracking();
    pointerQuery.addEventListener("change", updateTracking);
    motionQuery.addEventListener("change", updateTracking);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      pointerQuery.removeEventListener("change", updateTracking);
      motionQuery.removeEventListener("change", updateTracking);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
