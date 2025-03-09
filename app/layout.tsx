import type React from "react"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Preloader from "@/components/preloader"
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intelion | Leading SaaS & IT Solutions Provider",
  description:
    "Intelion offers cutting-edge SaaS and IT solutions including cloud services, cybersecurity, data management, and custom software development for businesses of all sizes.",
  keywords:
    "Intelion, SaaS solutions, IT services, cloud computing, cybersecurity, data management, software development, digital transformation",
  authors: [{ name: "Intelion Tech" }],
  creator: "Intelion",
  publisher: "Intelion Technologies",
  openGraph: {
    type: "website",
    locale: "India",
    url: "https://intelion.vercel.app/",
    siteName: "Intelion",
    title: "Intelion | Leading SaaS & IT Solutions Provider",
    description:
      "Innovative SaaS and IT solutions for modern businesses. Cloud services, cybersecurity, data management, and custom software development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Intelion - SaaS & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelion | Leading SaaS & IT Solutions Provider",
    description:
      "Innovative SaaS and IT solutions for modern businesses. Cloud services, cybersecurity, data management, and custom software development.",
    images: ["/twitter-image.jpg"],
    creator: "@intelion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.intelion.com",
    languages: {
      "en-US": "https://www.intelion.com",
    },
  },
  verification: {
    google: "verification_token",
  },
  category: "technology",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Intelion",
              url: "https://intelion.vercel.app/",
              logo: "",
              sameAs: [
                "",
                "",
                "",
                "",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Preloader />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
