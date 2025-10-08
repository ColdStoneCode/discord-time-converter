"use client";

import { Check, Copy, Share2, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AdBanner from "@/components/AdBanner";

export default function Page() {
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [showTopAd, setShowTopAd] = useState(false);
  const [templateText, setTemplateText] = useState<string>("");

  // Time utilities state
  const commonTimeZones = [
    "UTC",
    "America/New_York",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Asia/Tokyo",
    "Asia/Kolkata",
    "Australia/Sydney",
  ];
  const [lookupTz, setLookupTz] = useState<string>("UTC");
  const [compareInput, setCompareInput] = useState<string>(""); // local datetime string
  const [compareZones, setCompareZones] = useState<string[]>([
    "UTC",
    "America/New_York",
    "Europe/London",
  ]);
  const [countdownTarget, setCountdownTarget] = useState<string>("");
  const [countdownText, setCountdownText] = useState<string>("");

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

  const templates = [
    {
      label: "Event Announcement",
      build: (unix: number) => `Event starts <t:${unix}:F> — join us then!`,
      description: "Full date & time in viewer’s locale",
    },
    {
      label: "Countdown",
      build: (unix: number) => `Counting down: <t:${unix}:R>`,
      description: "Relative time e.g. in 2 hours",
    },
    {
      label: "Deadline (Date Only)",
      build: (unix: number) => `Deadline: <t:${unix}:D>`,
      description: "Long date only",
    },
    {
      label: "Meeting (Short)",
      build: (unix: number) => `Meeting at <t:${unix}:t> on <t:${unix}:d>`,
      description: "Short time + short date",
    },
    {
      label: "Reminder",
      build: (unix: number) => `Reminder set for <t:${unix}:f>`,
      description: "Friendly short date/time",
    },
  ];

  const applyTemplate = (build: (unix: number) => string) => {
    const unix = timestamp ?? Math.floor(Date.now() / 1000);
    setTemplateText(build(unix));
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

  // Time utilities helpers
  const safeFormatInZone = (date: Date, timeZone: string) => {
    try {
      return new Intl.DateTimeFormat(undefined, {
        timeZone,
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    } catch {
      return "Invalid time zone";
    }
  };

  const timeZoneNameShort = (date: Date, timeZone: string) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone,
        timeZoneName: "short",
        hour: "2-digit",
      })
        .formatToParts(date)
        .find((p) => p.type === "timeZoneName")?.value;
    } catch {
      return undefined;
    }
  };

  const handleCountdownUpdate = (value: string) => {
    setCountdownTarget(value);
    if (!value) {
      setCountdownText("");
      return;
    }
    const target = new Date(value).getTime();
    const diff = Math.floor((target - Date.now()) / 1000);
    const abs = Math.abs(diff);
    const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
    let text = "";
    if (abs < 60) text = rtf.format(Math.round(diff), "second");
    else if (abs < 3600) text = rtf.format(Math.round(diff / 60), "minute");
    else if (abs < 86400) text = rtf.format(Math.round(diff / 3600), "hour");
    else if (abs < 2592000) text = rtf.format(Math.round(diff / 86400), "day");
    else if (abs < 31536000) text = rtf.format(Math.round(diff / 2592000), "month");
    else text = rtf.format(Math.round(diff / 31536000), "year");
    setCountdownText(text);
  };

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
          {[
            { label: "Short Time", code: "t" },
            { label: "Long Time", code: "T" },
            { label: "Short Date", code: "d" },
            { label: "Long Date", code: "D" },
            { label: "Short Date/Time", code: "f" },
            { label: "Long Date/Time", code: "F" },
            { label: "Relative Time", code: "R" },
          ].map(({ label, code }) => {
            const tag = `<t:${timestamp}:${code}>`;
            const preview = formatDiscordPreview(timestamp, code);
            return (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-700/60 pb-3"
              >
                <div>
                  <span className="font-medium text-gray-100">{label}</span>
                  <div className="text-gray-300 text-sm italic">{preview || "—"}</div>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-slate-700 px-2 py-1 rounded text-sm text-gray-100">{tag}</code>
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

      {/* Templates Library */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Templates</h2>
        <p className="text-gray-300 mb-4">
          Pick a preset, then tweak the message. If no date is selected, we’ll
          use the current time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {templates.map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => applyTemplate(t.build)}
              className="text-left bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 hover:border-slate-600 transition"
            >
              <div className="font-medium text-gray-100">{t.label}</div>
              <div className="text-sm text-gray-400">{t.description}</div>
            </button>
          ))}
        </div>

        <div className="mt-6 bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4">
          <label htmlFor="templateText" className="block text-sm font-medium mb-2 text-slate-200">
            Your message
          </label>
          <textarea
            id="templateText"
            rows={4}
            value={templateText}
            onChange={(e) => setTemplateText(e.target.value)}
            className="w-full rounded-lg p-3 bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Event starts <t:XXXXXXXXX:F> — join us then!"
          />
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={() => handleCopy(templateText)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition flex items-center gap-2"
              disabled={!templateText}
            >
              <Copy size={16} /> Copy Message
            </button>
          </div>
        </div>
      </section>

      {/* Time Zone Utilities */}
      <section className="mt-12 space-y-8">
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-3">Time Zone Lookup</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <select
              className="bg-slate-700 text-gray-100 border border-slate-600 rounded-lg p-2"
              value={lookupTz}
              onChange={(e) => setLookupTz(e.target.value)}
            >
              {commonTimeZones.map((tz) => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
            <div className="flex-1 rounded-lg p-3 bg-slate-700 text-gray-100 border border-slate-600">
              <div className="text-sm text-gray-300">Current time in {lookupTz}</div>
              <div className="font-medium">{safeFormatInZone(new Date(), lookupTz)}</div>
              <div className="text-sm text-gray-400 mt-1">{timeZoneNameShort(new Date(), lookupTz) || ""}</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-3">Compare Times Across Zones</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label htmlFor="cmp" className="block text-sm font-medium mb-1 text-slate-200">Your local time</label>
              <input
                id="cmp"
                type="datetime-local"
                value={compareInput}
                onChange={(e) => setCompareInput(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-200">Zones to compare</label>
              <div className="flex flex-wrap gap-2">
                {commonTimeZones.map((tz) => {
                  const selected = compareZones.includes(tz);
                  return (
                    <button
                      key={tz}
                      type="button"
                      onClick={() => setCompareZones((prev) => selected ? prev.filter((z) => z !== tz) : [...prev, tz])}
                      className={`px-2 py-1 rounded border ${selected ? "bg-blue-600 border-blue-500 text-white" : "bg-slate-700 border-slate-600 text-gray-200"}`}
                    >
                      {tz}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {compareInput && (
            <div className="grid sm:grid-cols-2 gap-3">
              {compareZones.map((tz) => (
                <div key={tz} className="rounded-lg p-3 bg-slate-700 text-gray-100 border border-slate-600">
                  <div className="text-sm text-gray-300">{tz}</div>
                  <div className="font-medium">
                    {safeFormatInZone(new Date(compareInput), tz)}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{timeZoneNameShort(new Date(compareInput), tz) || ""}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-3">Countdown / Until</h3>
          <div className="grid sm:grid-cols-2 gap-3 items-end">
            <div>
              <label htmlFor="cd" className="block text-sm font-medium mb-1 text-slate-200">Target date & time</label>
              <input
                id="cd"
                type="datetime-local"
                value={countdownTarget}
                onChange={(e) => handleCountdownUpdate(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="rounded-lg p-3 bg-slate-700 text-gray-100 border border-slate-600">
              <div className="text-sm text-gray-300">Time remaining</div>
              <div className="font-medium min-h-6">{countdownText || "—"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational / About Section (SEO + AdSense content) */}
      <section className="mt-12 text-gray-300 leading-relaxed space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">About Discord Timestamps</h2>
        <p>
          Discord supports a special timestamp format using Unix time, allowing
          bots and users to display dynamic times that adapt to each viewer’s
          timezone. For example, writing <code>&lt;t:1739059200:F&gt;</code> shows
          a localized date like <em>Sunday, February 9, 2025 10:00 AM</em> depending
          on who views it.
        </p>
        <p>
          There are seven formats: <code>t</code>, <code>T</code>, <code>d</code>,
          <code>D</code>, <code>f</code>, <code>F</code>, and <code>R</code> (relative).
          Use the presets above to quickly generate the right one for your message.
        </p>
        <h3 className="text-lg font-semibold text-gray-100">Unix Time & DST</h3>
        <p>
          Unix time (epoch) counts seconds since Jan 1, 1970 UTC. Time zones and
          daylight saving time (DST) are regional rules that offset from UTC. The
          tools above use your browser’s Intl API to display local times correctly
          per zone.
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
