"use client";

import { motion, useReducedMotion } from "framer-motion";

// Scroll-into-view reveal used across sections. Honors reduced motion by
// rendering children instantly with no transform animation.
export default function Reveal({ children, delay = 0, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
