import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord Time to Unix Converter",
  description: "Convert any date/time to Discord’s Unix timestamp format instantly.",
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
      <body className="antialiased font-sans transition-colors duration-500 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
