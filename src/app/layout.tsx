import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Kinderland - Sala Zabaw dla Dzieci w Stargardzie",
    template: "%s | Kinderland Stargard",
  },
  description:
    "Kinderland Stargard to nowoczesna sala zabaw dla dzieci z atrakcjami takimi jak małpi gaj, zjeżdżalnie, trampoliny i kącik malucha. Organizujemy niezapomniane urodziny dla dzieci w Stargardzie.",
  keywords: [
    "sala zabaw Stargard",
    "Kinderland Stargard",
    "urodziny dla dzieci Stargard",
    "atrakcje dla dzieci Stargard",
    "plac zabaw dla dzieci",
    "małpi gaj",
    "trampoliny dla dzieci",
    "zjeżdżalnie dla dzieci",
    "imprezy dla dzieci Stargard",
  ],
  authors: [{ name: "Kinderland Stargard" }],
  creator: "Kinderland Stargard",
  publisher: "Kinderland Stargard",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://kinderland-stargard.pl"),
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    type: "website",
    title: "Kinderland - Nowoczesna Sala Zabaw dla Dzieci w Stargardzie",
    description:
      "Odwiedź Kinderland w Stargardzie - kolorową i bezpieczną salę zabaw z mnóstwem atrakcji dla dzieci w każdym wieku. Organizujemy niezapomniane urodziny i imprezy dla dzieci.",
    url: "https://kinderland-stargard.pl",
    siteName: "Kinderland Stargard",
    images: [
      {
        url: "/images/baner.png",
        width: 1200,
        height: 630,
        alt: "Kinderland - Sala Zabaw dla Dzieci w Stargardzie",
      },
    ],
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinderland - Sala Zabaw dla Dzieci w Stargardzie",
    description:
      "Odwiedź Kinderland w Stargardzie - kolorową i bezpieczną salę zabaw z mnóstwem atrakcji dla dzieci w każdym wieku. Organizujemy niezapomniane urodziny i imprezy dla dzieci.",
    images: ["/images/baner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Rozrywka dla dzieci",
  // verification: {
  //   google: "google-site-verification-code",
  // },
  other: {
    "geo.region": "PL-ZP",
    "geo.placename": "Stargard",
    "geo.position": "53.3364;14.9884",
    ICBM: "53.3364, 14.9884",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
