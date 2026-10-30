# Arsalan — Portfolio (ARZEN)

A personal portfolio for **Mohammad Arsalan Sheikh (Arsalan / ARZEN)** — full-stack
web developer and freelancer based in Patna, Bihar, India.

Built with **Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion and
100% plain JavaScript** — there is deliberately no TypeScript anywhere in this
project. The only `.ts` files are tool-generated (e.g. `next-env.d.ts`), and
`tsconfig.json` exists solely so editors/`tsc` can resolve the `@/*` alias and
syntax-check plain JavaScript (`allowJs: true`, no TS source files).

---

## 1. Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run build      # production build
npm start          # serve the production build
```

For the contact form to persist messages locally:

```bash
# .env needs DATABASE_URL (Postgres). Then create the table once:
npx drizzle-kit push
```

## 2. Where to change things (the file tour)

| You want to change… | Edit this file |
| --- | --- |
| Name, headline, bio, email, hero facts | `src/lib/site.js` |
| Social profile URLs | `src/lib/site.js` (`socials` array) |
| Skills, services, process steps | `src/lib/site.js` |
| Projects (add / remove / reorder) | `src/lib/projects.js` |
| Replace the temporary portrait | overwrite `public/images/portrait.png` |
| Replace Open Graph share image | overwrite `public/images/og.jpg` |
| Colors, fonts, spacing, animations | `src/app/globals.css` (`@theme` tokens) |
| SEO title / description / OG / JSON-LD | `src/app/layout.jsx` |
| Site URL (canonical, sitemap, OG) | `src/lib/site.js` (`url`) or `NEXT_PUBLIC_SITE_URL` |
| Work archive page | `src/app/work/page.jsx` |
| Case-study page design | `src/app/work/[slug]/page.jsx` |
| Scroll-aware navigation | `src/components/Nav.jsx` |
| Contact form behaviour | `src/components/Contact.jsx` + `src/app/api/contact/route.js` |
| AI-engine summary | `public/llms.txt` |

### Replacing the portrait

`public/images/portrait.png` is a **temporary AI-generated placeholder** and is
labelled as such in the UI. To use a real photograph: export a ~880×1100 px (4:5)
image as `portrait.png`, overwrite that one file, update the alt text in
`src/components/Hero.jsx`, and remove the placeholder caption below the photo.

## 3. Architecture notes

- **Navigation** (`src/components/Nav.jsx`): fixed header with a scroll-progress
  hairline, an IntersectionObserver scroll-spy (band: `-30% 0px -60% 0px`) that
  tracks `#work / #about / #services / #contact` on the homepage, `layoutId`
  animated underline, pathname-based active state for `/work/*` routes, and a
  keyboard-accessible mobile menu.
- **Anchors/scrolling**: the fixed header is offset by BOTH `scroll-padding-top`
  on `html` and `scroll-margin-top: 5rem` on every `[id]` target in
  `globals.css` — the latter is what client-side fragment navigation respects
  reliably. Do not remove either.
- **Loading** (`src/app/loading.jsx`): shown by Next.js only while a route is
  genuinely suspending; CSS-only hairline animation; static under
  `prefers-reduced-motion`. `src/app/template.jsx` gives each navigation a
  400 ms opacity fade-in.
- **Motion system**: one easing (`cubic-bezier(0.22,1,0.36,1)`) shared by CSS
  classes in `globals.css` (`.stagger`, `.line-mask`, `.pressable`,
  `.link-sweep`, marquee) and the `Reveal` component (framer-motion,
  `whileInView`, reduced-motion aware). Only transform/opacity animate.
- **Data**: `src/db/schema.js` holds one table (`contact_messages`); the API
  route validates input, drops honeypot submissions, and rate-limits per IP
  (in-memory — fine for a single instance).

## 4. Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | for the contact form | Postgres connection string. Without it the form degrades to a clear error and tells visitors to email directly. |
| `NEXT_PUBLIC_SITE_URL` | optional override | Canonical origin used in metadata, Open Graph and `sitemap.xml`. Without it, the confirmed production URL in `src/lib/site.js` is used. |

No other secrets exist in this project. Never commit `.env*`.

## 5. Deployment (Vercel, recommended)

1. Push the repo to GitHub and import it in Vercel.
2. If you deploy under a new domain, set `NEXT_PUBLIC_SITE_URL`; otherwise the
   fallback in `src/lib/site.js` already matches the live production URL.
3. Add a Postgres database (Vercel Postgres/Neon) and set `DATABASE_URL`, then
   run `npx drizzle-kit push` once from your machine.
4. Update `src/lib/site.js` / `public/llms.txt` if links change.

Rollback on Vercel: Deployments → previous deployment → *Redeploy*.

## 6. Honesty rules baked into the content

- Projects carry one of two labels: **Full-stack web application** (NexBook) or
  **Industry solution demonstration** (Ember & Spice, CedarCare, IronVault) —
  none are presented as paid client work.
- Case studies list verified features *and* unresolved caveats ("Honest status").
- No client counts, revenue figures, years of experience, testimonials or
  skill bars anywhere on the site.
- IronVault: payments and automated emails are stated as **pending**. CedarCare
  and IronVault show repository links only (no invented demo URLs).

## 7. Known limitations

- Portrait and the four project covers are AI-generated placeholders/artwork.
- Contact messages are stored in Postgres; there is no admin inbox UI yet —
  read them with `psql $DATABASE_URL -c 'SELECT * FROM contact_messages ORDER BY created_at DESC;'`
  or add email delivery (e.g. Resend) as a follow-up.
- The in-memory contact rate limiter is per-instance only.
- `NexBook`'s repository is private, so the site links only to its live demo.
