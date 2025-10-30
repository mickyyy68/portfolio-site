import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aristar.it"),
  title: "Michael Aristarco — Fullstack Developer",
  description:
    "Fullstack Developer & CS Undergrad (UniMoRe). Building AI platforms, Electron desktop apps, and modern web experiences.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/aristar-logo.ico",
    shortcut: "/aristar-logo.ico",
  },
  openGraph: {
    title: "Michael Aristarco — Fullstack Developer",
    description:
      "Fullstack Developer & CS Undergrad (UniMoRe). Building AI platforms, Electron desktop apps, and modern web experiences.",
    url: "https://www.aristar.it/",
    siteName: "Michael Aristarco",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Aristarco — Fullstack Developer",
    description:
      "Fullstack Developer & CS Undergrad (UniMoRe). Building AI platforms, Electron desktop apps, and modern web experiences.",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael Aristarco",
    url: "https://www.aristar.it/",
    email: "mailto:aristarcomichael@aristar.it",
    jobTitle: "Fullstack Developer & CS Undergrad",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "University of Modena and Reggio Emilia (UniMoRe)",
    },
    sameAs: [
      "https://github.com/mickyyy68",
      "https://instagram.com/mike.aristarco",
      "https://www.linkedin.com/in/michael-aristarco-8a76382b2/",
      "https://aristar-survivor.vercel.app/",
      "https://app.bonoboai.it/",
    ],
  }
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
