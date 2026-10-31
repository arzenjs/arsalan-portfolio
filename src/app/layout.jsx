import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { site, socials } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.role} | ${site.alias}`,
    template: `%s - ${site.name} · ${site.alias}`,
  },
  description:
    "Arsalan (Mohammad Arsalan Sheikh / ARZEN) is a freelance full-stack web developer in Patna, India, building high-craft business websites and full-stack web applications with Next.js, React, Node.js and MongoDB.",
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
    siteName: `${site.name} - ${site.role}`,
    title: `${site.name} - ${site.role} | ${site.alias}`,
    description:
      "Building high-craft business websites and full-stack web applications with Next.js, React, Node.js and MongoDB. Based in Patna, working worldwide.",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} - ${site.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@arzenjs",
    title: `${site.name} - ${site.role} | ${site.alias}`,
    description: "Building high-craft business websites and full-stack web applications with Next.js, React and MongoDB.",
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

const personLd = {
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

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} - ${site.role}`,
  url: site.url,
  author: { "@type": "Person", name: site.fullName, url: site.url },
  inLanguage: "en",
};

function JsonLdScripts() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable} ${instrument.variable}`}>
      <body className="min-h-dvh bg-bg font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        <CursorGlow />
        <JsonLdScripts />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
