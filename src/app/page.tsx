"use client";

import { Check, Copy, Share2, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AdBanner from "@/components/AdBanner";

export default function Page() {
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [showTopAd, setShowTopAd] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // When hero is mostly out of view, allow top ad
          if (!entry.isIntersecting) {
            setShowTopAd(true);
            io.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 },
    );
    io.observe(heroEl);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Discord Time Converter",
      url: "https://discord-time-converter.vercel.app/",
      description:
        "Convert any date/time to Discord’s Unix timestamp format instantly.",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://discord-time-converter.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };
    const appLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Discord Time to Unix Converter",
      applicationCategory: "UtilitiesApplication",
      url: "https://discord-time-converter.vercel.app/",
      operatingSystem: "Web",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify([jsonLd, appLd]);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleShare = (platform: "twitter" | "discord") => {
    const shareText = encodeURIComponent(
      `Convert date/time to Discord timestamps easily! 🕒 ${window.location.href}`,
    );
    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${shareText}`,
        "_blank",
      );
    } else if (platform === "discord") {
      navigator.clipboard.writeText(window.location.href);
      alert("✅ Link copied! Share it on Discord!");
    }
  };

  const handleGenerate = (date: string) => {
    if (!date) return;
    const unix = Math.floor(new Date(date).getTime() / 1000);
    setTimestamp(unix);
  };

  const formatDiscordPreview = (unix: number, style: string) => {
    const date = new Date(unix * 1000);
    switch (style) {
      case "t":
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      case "T":
        return date.toLocaleTimeString();
      case "d":
        return date.toLocaleDateString();
      case "D":
        return date.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      case "f":
        return date.toLocaleString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      case "F":
        return date.toLocaleString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      case "R": {
        const diff = (unix * 1000 - Date.now()) / 1000;
        const abs = Math.abs(diff);
        const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
        if (abs < 60) return rtf.format(Math.round(diff), "second");
        if (abs < 3600) return rtf.format(Math.round(diff / 60), "minute");
        if (abs < 86400) return rtf.format(Math.round(diff / 3600), "hour");
        if (abs < 2592000) return rtf.format(Math.round(diff / 86400), "day");
        if (abs < 31536000)
          return rtf.format(Math.round(diff / 2592000), "month");
        return rtf.format(Math.round(diff / 31536000), "year");
      }
      default:
        return "";
    }
  };

  const formats = timestamp
    ? [
        { label: "Short Time", code: "t" },
        { label: "Long Time", code: "T" },
        { label: "Short Date", code: "d" },
        { label: "Long Date", code: "D" },
        { label: "Short Date/Time", code: "f" },
        { label: "Long Date/Time", code: "F" },
        { label: "Relative Time", code: "R" },
      ]
    : [];

  return (
    <main className="w-full max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div ref={heroRef} className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Discord Time to Unix Converter
        </h1>
        <p className="text-gray-600">
          Convert any date/time to all Discord timestamp formats — with live
          previews and instant copy features.
        </p>
      </div>

      {/* Top Ad: only after hero is mostly out of view */}
      {showTopAd && (
        <div className="my-6">
          <AdBanner slot="1234567890" />
        </div>
      )}

      {/* Main Input Section */}
      <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-8 border border-slate-700/60">
        <label
          htmlFor="dt"
          className="block text-sm font-medium mb-2 text-slate-200"
        >
          Select Date & Time:
        </label>
        <input
          id="dt"
          type="datetime-local"
          onChange={(e) => handleGenerate(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {timestamp && (
          <p className="mt-4 text-center text-gray-300">
            UNIX Timestamp: <span className="font-semibold">{timestamp}</span>
          </p>
        )}
      </div>

      {/* Ad shown only after user generates a timestamp */}
      {timestamp && (
        <div className="mt-6 mb-8">
          <AdBanner slot="1234567890" />
        </div>
      )}

      {/* Formats with Live Previews */}
      {timestamp && (
        <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 space-y-4 border border-slate-700/60">
          {formats.map(({ label, code }) => {
            const tag = `<t:${timestamp}:${code}>`;
            const preview = formatDiscordPreview(timestamp, code);
            return (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-700/60 pb-3"
              >
                <div>
                  <span className="font-medium text-gray-100">{label}</span>
                  <div className="text-gray-300 text-sm italic">
                    {preview || "—"}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-slate-700 px-2 py-1 rounded text-sm text-gray-100">
                    {tag}
                  </code>
                  <button
                    type="button"
                    onClick={() => handleCopy(tag)}
                    className="p-2 hover:text-blue-400 transition text-gray-200"
                  >
                    {copied === tag ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Educational / About Section (SEO + AdSense content) */}
      <section className="mt-12 text-gray-300 leading-relaxed space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">
          About Discord Timestamps
        </h2>
        <p>
          Discord supports a special timestamp format using Unix time, allowing
          bots and users to display dynamic times that adapt to each viewer’s
          timezone. For example, writing <code>&lt;t:1739059200:F&gt;</code>{" "}
          shows a localized date like <em>Sunday, February 9, 2025 10:00 AM</em>{" "}
          depending on who views it.
        </p>
        <p>
          This converter helps you easily generate all seven Discord timestamp
          formats in real time. Simply choose your desired date and time, then
          copy the format tag you need — perfect for event scheduling, bot
          development, and announcements.
        </p>
        <p>
          Created by the community for convenience. Share it with your Discord
          friends or tweet about it using the buttons below!
        </p>
      </section>

      {/* Share Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={() => handleShare("twitter")}
          className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full shadow transition"
        >
          <Twitter size={18} /> Share on X
        </button>
        <button
          type="button"
          onClick={() => handleShare("discord")}
          className="flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full shadow transition"
        >
          <Share2 size={18} /> Share on Discord
        </button>
      </div>

      {/* Bottom Ad (after all content) */}
      {timestamp && (
        <div className="mt-12">
          <AdBanner slot="1234567890" />
        </div>
      )}

      {/* Copy confirmation toast */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
          Copied to clipboard!
        </div>
      )}
    </main>
  );
}
