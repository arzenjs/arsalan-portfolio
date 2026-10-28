import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site, socials } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} | ${site.alias}`,
    template: `%s — ${site.name} · ${site.alias}`,
  },
  description:
    "Arsalan (Mohammad Arsalan Sheikh / ARZEN) is a full-stack web developer in Patna, India, building business websites, full-stack web applications and custom web solutions with Next.js, React, Node.js and MongoDB.",
  keywords: [
    "Arsalan", "Mohammad Arsalan Sheikh", "ARZEN", "arzenjs",
    "full-stack web developer", "freelance web developer India",
    "Next.js developer", "React developer", "web developer Patna",
    "business websites", "web applications",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role} | ${site.alias}`,
    description:
      "Business websites and full-stack web applications, designed and built end-to-end with Next.js, React and MongoDB. Based in Patna, working worldwide.",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} — ${site.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@arzenjs",
    title: `${site.name} — ${site.role} | ${site.alias}`,
    description: "Business websites and full-stack web applications, built end-to-end with Next.js and React.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

// JSON-LD: describe the person honestly — no invented job titles, awards
// or client counts. sameAs links every confirmed public profile.
function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.alias,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    image: `${site.url}${site.portrait}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    knowsAbout: ["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Web development"],
    sameAs: socials.map((s) => s.href),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh bg-bg font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        <PersonJsonLd />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
