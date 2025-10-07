"use client";

import { Check, Copy, Share2, Twitter } from "lucide-react";
import { useState } from "react";
import AdBanner from "@/components/AdBanner";

export default function Page() {
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

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
        if (abs < 2592000)
          return rtf.format(Math.round(diff / 86400), "day");
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
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Discord Time to Unix Converter
        </h1>
        <p className="text-gray-600">
          Convert any date/time to all Discord timestamp formats — with live
          previews.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-8 border border-slate-700/60">
        <label htmlFor="dt" className="block text-sm font-medium mb-2 text-slate-200">
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

      {/* Ad Section */}
      <div className="mt-12">
        <AdBanner slot="1234567890" />
      </div>

      {/* Copy confirmation */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
          Copied to clipboard!
        </div>
      )}
    </main>
  );
}
