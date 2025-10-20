import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const siteUrl = "https://discord-time-converter.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Discord Time to Unix Converter",
    template: "%s | Discord Time Converter",
  },
  description:
    "Convert any date/time to Discord’s Unix timestamp format instantly.",
  keywords: [
    "discord timestamp",
    "unix time",
    "discord time formatter",
    "discord time converter",
    "epoch",
    "relative time",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Discord Time to Unix Converter",
    description:
      "Convert any date/time to Discord’s Unix timestamp format instantly.",
    siteName: "Discord Time Converter",
    images: [
      {
        url: "/window.svg",
        width: 1200,
        height: 630,
        alt: "Discord Time Converter",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Time to Unix Converter",
    description:
      "Convert any date/time to Discord’s Unix timestamp format instantly.",
    images: ["/window.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9834040670618472"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="antialiased font-sans">
        <Header />
        <div className="flex-1 bg-slate-950">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
