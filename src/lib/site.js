// ---------------------------------------------------------------------------
// Central site configuration — edit text, links and section content here.
// Components read from this file so repeated content has a single home.
// ---------------------------------------------------------------------------

export const site = {
  // Identity
  name: "Arsalan",
  fullName: "Mohammad Arsalan Sheikh",
  alias: "ARZEN",
  role: "Full-Stack Web Developer",
  tagline: "Freelancer",
  location: "Patna, Bihar, India",
  email: "mohammadarsalan02013@gmail.com",

  // Used for canonical URLs, Open Graph and the sitemap. Set
  // NEXT_PUBLIC_SITE_URL in production; the fallback is a placeholder.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://arzenjs.vercel.app",

  // Temporary AI-generated placeholder portrait. Replace this ONE file
  // (public/images/portrait.png) with a real photograph later — every
  // reference points here, and the current file is clearly labelled as
  // a placeholder wherever it is displayed.
  portrait: "/images/portrait.png",
  ogImage: "/images/og.jpg",

  headline: "Websites that win clients. Apps that survive production.",
  intro:
    "I design and build business websites and full-stack web applications — " +
    "from the first pixel to a deployed, working product. Based in Patna, " +
    "working with clients in India and abroad.",

  about: [
    "I'm Mohammad Arsalan Sheikh — I go by Arsalan, and ARZEN is my online handle. I'm a full-stack web developer from Patna, India, working with clients who need a website or web application built properly: fast, accessible, and easy to maintain after handover.",
    "My day-to-day stack is JavaScript end to end — Next.js and React on the front, Node.js with MongoDB/Mongoose and Auth.js on the back. I care about the unglamorous parts as much as the visuals: semantic HTML, honest content, clean server boundaries, and code the next developer can actually read.",
    "The projects below are my own builds and public demonstrations — designed, developed, and deployed by me. Each one is documented with what it does, how it's built, and what is still unfinished. I'm currently learning TypeScript and deepening my API design work.",
  ],

  availability: "Open to freelance projects and full-time conversations",
};

// Primary navigation — anchors on the single-page layout.
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

// Every public profile, exactly as confirmed. Update hrefs here only.
export const socials = [
  { label: "GitHub", handle: "@arzenjs", href: "https://github.com/arzenjs" },
  { label: "LinkedIn", handle: "arzenjs", href: "https://www.linkedin.com/in/arzenjs/" },
  { label: "X", handle: "@arzenjs", href: "https://x.com/arzenjs" },
  { label: "Instagram", handle: "@arzenjs", href: "https://www.instagram.com/arzenjs/" },
  { label: "Threads", handle: "@arzenjs", href: "https://www.threads.com/@arzenjs" },
  { label: "Facebook", handle: "Arsalan", href: "https://www.facebook.com/profile.php?id=61595323422328" },
  { label: "Fiverr", handle: "arzenjs", href: "https://www.fiverr.com/arzenjs" },
  { label: "Upwork", handle: "Arsalan Sheikh", href: "https://www.upwork.com/freelancers/~018323d6dd0a649d86" },
];

export const devLab = {
  label: "ARZEN Dev Lab",
  href: "https://github.com/arzenjs/arzen-dev-lab",
  note: "Smaller experiments, UI clones and mini-apps live here.",
};

// Confirmed skills, grouped. No skill bars, no invented proficiency numbers.
export const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript (ES2023+)", "React", "Next.js App Router", "HTML & semantic markup", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "REST APIs", "MongoDB", "Mongoose", "Auth.js / NextAuth.js", "Server-side validation"],
  },
  {
    title: "Craft & Workflow",
    items: ["Git & GitHub", "Vercel deployment", "Responsive design", "Accessibility", "SEO fundamentals", "Lucide React"],
  },
];

export const learning = ["TypeScript", "Advanced API design"];

export const services = [
  {
    index: "01",
    title: "Business Websites",
    description:
      "Fast, search-friendly marketing sites that make a small business look established — clear messaging, strong typography, and pages that load before the visitor loses patience.",
    points: ["Marketing & landing pages", "SEO-ready structure and metadata", "Content you can edit without me"],
  },
  {
    index: "02",
    title: "Full-Stack Web Apps",
    description:
      "Products with real state and real users: accounts, dashboards, CRUD workflows, bookings and checkout integrations — built on Next.js, MongoDB and Auth.js.",
    points: ["Authentication & roles", "MongoDB / Mongoose data models", "API routes with validation"],
  },
  {
    index: "03",
    title: "Custom Web Solutions",
    description:
      "The in-between work: rebuilding a slow site, adding a booking or contact flow, wiring a CMS-shaped config, or turning a rough idea into a scoped, working product.",
    points: ["Redesigns & rebuilds", "Forms, booking & payment flows", "Honest scoping before any code"],
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Listen & scope",
    text: "We agree on what the site must achieve, what it must not do, and what 'done' means — in writing, before any design or code.",
  },
  {
    index: "02",
    title: "Design & prototype",
    text: "A focused visual direction and a clickable structure, so you approve the experience rather than imagine it.",
  },
  {
    index: "03",
    title: "Build & verify",
    text: "Clean, documented JavaScript. I test the happy paths and the awkward ones, on real screen sizes, before you ever see a bug.",
  },
  {
    index: "04",
    title: "Launch & hand over",
    text: "Deployed, measured, and documented — with a handover guide so you're never dependent on me for small changes.",
  },
];
