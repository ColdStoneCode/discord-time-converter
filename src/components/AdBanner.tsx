"use client";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBannerProps {
  slot: string;
}

export default function AdBanner({ slot }: AdBannerProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      try {
        // initialize ads
        window.adsbygoogle = window.adsbygoogle || [];
        (window.adsbygoogle as unknown[]).push({});
      } catch (err) {
        console.warn("AdSense error:", err);
      }
    }
  }, []);

  // Show mock placeholder in dev
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className="w-full h-32 flex items-center justify-center bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl text-slate-500 text-sm italic shadow-inner" />
    );
  }

  // Real ad in production
  return (
    <div className="w-full h-32">
      <Script
        id="adsbygoogle-loader"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9834040670618472"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle block w-full h-32 rounded-xl overflow-hidden"
        style={{ display: "block", minHeight: "8rem" }}
        data-ad-client="ca-pub-9834040670618472"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
