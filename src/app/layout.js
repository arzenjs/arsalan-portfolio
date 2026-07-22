import { Geist } from "next/font/google";
import { siteData } from "@/constants/siteData";

import "@/styles/globals.css";

import GridBackground from "@/components/GridBackground/GridBackground";
import CursorGlow from "@/components/CursorGlow/CursorGlow";
import Navbar from "@/components/Navbar/Navbar";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata = {
  metadataBase: new URL(siteData.site.url),

  title: {
    default: `${siteData.site.name} | ${siteData.site.title}`,
    template: `%s | ${siteData.site.name}`,
  },

  description: siteData.site.description,

  keywords: siteData.site.keywords,

  authors: [
    {
      name: siteData.site.author,
    },
  ],

  icons: {
    icon: `${siteData.site.favicon}`,
    shortcut: `${siteData.site.favicon}`
  },

  creator: siteData.site.creator,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteData.site.name}`,
    description: siteData.site.description,
    url: siteData.site.url,
    siteName: siteData.site.name,
    locale: siteData.site.locale,
    type: "website",
    images: [
      {
        url: siteData.site.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteData.site.name} Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteData.site.name} | ${siteData.site.title}`,
    description: siteData.site.description,
    images: [siteData.site.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <GridBackground/>
        <CursorGlow/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}