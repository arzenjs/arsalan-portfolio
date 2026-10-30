// Re-mounts on every navigation, giving each route a soft opacity fade-in.
// Opacity-only, 400ms, and disabled under prefers-reduced-motion (globals.css).
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
