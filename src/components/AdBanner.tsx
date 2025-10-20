"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBannerProps {
  slot: string;
}

export default function AdBanner({ slot }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || process.env.NODE_ENV !== "production")
      return;

    const el = containerRef.current;
    if (!el) return;

    const onVisible = () => {
      if (initializedRef.current) return;
      // Wait until the global adsbygoogle array exists (script loaded in layout)
      const checkScript = setInterval(() => {
        if (typeof window.adsbygoogle !== "undefined") {
          try {
            if (!window.adsbygoogle) {
              window.adsbygoogle = [];
            }
            window.adsbygoogle.push({});
            initializedRef.current = true;
            setReady(true);
          } catch (err) {
            console.warn("AdSense initialization error:", err);
          }
          clearInterval(checkScript);
        }
      }, 300);

      // Safety timeout to avoid polling forever
      setTimeout(() => clearInterval(checkScript), 10000);
    };

    // Use IntersectionObserver to defer init until in-view
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            onVisible();
            io.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Show mock banner in development
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className="w-full h-32 flex items-center justify-center bg-transparent rounded-xl text-slate-400 text-sm italic">
        [Ad Placeholder]
      </div>
    );
  }

  // Real AdSense slot (with reserved height to prevent CLS)
  return (
    <section
      ref={containerRef}
      className="w-full h-32 rounded-xl overflow-hidden flex items-center justify-center relative"
      style={{ minHeight: "8rem" }}
      aria-label="Advertisement"
    >
      {!ready && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl" />
      )}

      <ins
        className="adsbygoogle block w-full h-full"
        style={{ display: "block", minHeight: "8rem" }}
        data-ad-client="ca-pub-9834040670618472"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
}
