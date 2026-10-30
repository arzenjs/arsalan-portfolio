export const projects = [
  {
    slug: "nexbook",
    name: "NexBook",
    kind: "Full-stack web application",
    category: "Secure multi-user notebook",
    schemaType: "SoftwareApplication",
    summary:
      "A secure, multi-user notebook with a rich-text editor - my most complete end-to-end build: authentication, CRUD, data modelling and deployment.",
    description:
      "NexBook is a full-stack note-taking application I designed and built solo. Users register, sign in, and manage rich-text notes in a clean, responsive interface. It demonstrates the complete workflow I offer clients: a server-rendered Next.js front end, authenticated API routes, a MongoDB data layer modelled with Mongoose, and a deployed production build.",
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Mongoose", "Auth.js", "Tiptap", "TanStack Query"],
    highlights: [
      "Email-based authentication and session handling with Auth.js",
      "Rich-text note editing powered by the Tiptap editor",
      "Full create / read / update / delete for notes, persisted in MongoDB",
      "Server-state management and cache handling with TanStack Query",
      "Responsive interface across phone to desktop widths",
    ],
    caveats: [
      "The source repository is private by choice; the live demo is public.",
      "Core areas require a signed-in session - that is the product, not a broken demo.",
    ],
    live: "https://nexbook-one.vercel.app/",
    repo: null,
    repoNote: "Source private",
    cover: "/images/work/nexbook.png",
    coverNote: "An application screenshot",
  },
  {
    slug: "ironvault-fitness",
    name: "IronVault Fitness",
    kind: "Industry solution demonstration",
    category: "Gym website with membership flow",
    schemaType: "SoftwareApplication",
    summary:
      "A premium gym website exploring how a fitness business could run memberships online - accounts, checkout architecture, webhooks and an admin console.",
    description:
      "IronVault is a strength-gym website built as an industry-solution demonstration: a distinctive animated public site, customer accounts, a checkout architecture with server-trusted pricing and webhook verification, and role-based staff and admin areas. The repository README documents the architecture and security decisions in depth. Payment processing (Razorpay) and automated email (Resend) integrations are deliberately still pending production readiness - they are works in progress, not finished, certified systems.",
    stack: ["Next.js 16", "React 19", "JavaScript", "Tailwind CSS v4", "MongoDB", "Mongoose", "Auth.js v5", "Razorpay", "Resend", "Zod"],
    highlights: [
      "Role-based access (customer / staff / admin), re-checked against the database per request",
      "Checkout and webhook architecture with HMAC signature verification (Razorpay)",
      "Admin console: members, payments, reconciliation, invitations and audit log",
      "Editorial motion system with an explicit reduced-motion path",
    ],
    caveats: [
      "Payment processing and automated email integrations are pending - not production-ready.",
      "Gym name, coaches, photography and stats are declared placeholder content for a fictional business.",
      "No public live demo is published here; the full source is available in the repository.",
    ],
    live: "https://ironvault-fitness-weld.vercel.app/",
    repo: "https://github.com/arzenjs/ironvault-fitness",
    repoNote: "Open source",
    cover: "/images/work/ironvault.png",
    coverNote: "An application screenshot",
  },
  {
    slug: "cedarcare",
    name: "CedarCare",
    kind: "Industry solution demonstration",
    category: "Clinic website with appointment booking",
    schemaType: "SoftwareApplication",
    summary:
      "A family-clinic website demonstrating account-free appointment booking, server-validated scheduling and a staff dashboard with roles.",
    description:
      "CedarCare is a fictional clinic website focused on the workflow clinics actually need: patients book an appointment without creating an account, the server validates the slot against working hours, breaks, leave and booking windows, and a unique slot key makes double-booking impossible at the database level. Staff sign in with Auth.js, manage appointments through a dashboard, and admins invite colleagues with expiring single-use tokens.",
    stack: ["Next.js 16", "React 19", "JavaScript", "Tailwind CSS v4", "MongoDB", "Mongoose", "Auth.js v5", "Resend", "motion"],
    highlights: [
      "Account-free booking with server-validated scheduling rules",
      "Double-booking prevented by a unique, sparse slot index (documented in the README)",
      "Staff dashboard with search, filters, pagination and status actions",
      "Invitation-only staff onboarding with hashed, expiring tokens",
    ],
    caveats: [
      "CedarCare is fictional - all doctors, qualifications and contact details are placeholders by design.",
      "No public live demo is published here; the full source is available in the repository.",
    ],
    live: "https://cedarcare-sandy.vercel.app/",
    repo: "https://github.com/arzenjs/cedarcare",
    repoNote: "Open source",
    cover: "/images/work/cedarcare.png",
    coverNote: "An Application screenshot",
  },
  {
    slug: "ember-spice",
    name: "Ember & Spice",
    kind: "Industry solution demonstration",
    category: "Restaurant marketing website",
    schemaType: "WebSite",
    summary:
      "A live-fire restaurant website with an editorial visual identity - the design-and-typography end of what I build for small businesses.",
    description:
      "Ember & Spice is a fictional wood-fired restaurant built with Next.js 14 and Tailwind CSS. It focuses on the craft of the marketing layer: a distinctive dark visual identity, animated sections with Framer Motion, config-driven content, and production touches like Open Graph metadata and JSON-LD structured data. The live deployment is publicly verifiable.",
    stack: ["Next.js 14", "React", "JavaScript", "Tailwind CSS 3", "Framer Motion", "Lucide React"],
    highlights: [
      "Editorial menu, gallery, story and visit sections with animation",
      "All restaurant content centralised in one config file for easy client handover",
      "SEO metadata, Open Graph and JSON-LD structured data configured",
      "Responsive layouts verified on the live deployment",
    ],
    caveats: [
      "A fictional restaurant - menu, address and hours are declared demonstration data.",
    ],
    live: "https://ember-spice-seven.vercel.app/",
    repo: "https://github.com/arzenjs/ember-spice",
    repoNote: "Open source",
    cover: "/images/work/emberandspice.png",
    coverNote: "An application screenshot",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
