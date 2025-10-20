import {
  BookOpen,
  Calendar,
  Clock,
  Globe,
  MessageSquare,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Discord Time to Unix Converter - Convert Timestamps for Discord",
  description:
    "Free Discord timestamp converter tool. Convert any date and time to Discord's Unix timestamp format with live previews. Perfect for events, reminders, and server management.",
};

export default function HomePage() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Instant Conversion",
      description:
        "Convert any date and time to Discord timestamp format in seconds with real-time previews.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Timezone Support",
      description:
        "Automatic timezone conversion ensures your timestamps display correctly for everyone.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Multiple Formats",
      description:
        "Choose from 7 different Discord timestamp formats for any use case.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      title: "Event Templates",
      description:
        "Pre-built templates for announcements, countdowns, deadlines, and more.",
    },
  ];

  const useCases = [
    "Schedule server events and announcements",
    "Create countdown timers for launches",
    "Set reminders for community activities",
    "Coordinate international team meetings",
    "Display deadlines in user timezones",
    "Track game release dates globally",
  ];

  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Discord Time to Unix Converter
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Convert any date and time to Discord timestamp formats with live
              previews and instant copy features. Perfect for server admins, bot
              developers, and community managers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/converter"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Start Converting
              </Link>
              <Link
                href="/guides"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <AdBanner slot="1234567890" />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto glass-card">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Why Use Our Converter?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              The most comprehensive Discord timestamp tool with everything you
              need
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto glass-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Common Use Cases
              </h2>
              <p className="text-gray-400 mb-8">
                Discord timestamps are essential for communities that span
                multiple timezones. Our converter makes it easy to create
                timestamps that work for everyone.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, _index) => (
                  <li key={useCase} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    </span>
                    <span className="text-gray-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Example Output
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/60">
                  <div className="text-gray-400 mb-2">Event announcement:</div>
                  <div className="text-blue-400">&lt;t:1739059200:F&gt;</div>
                  <div className="text-gray-500 text-xs mt-2">
                    Displays: Sunday, February 9, 2025 10:00 AM
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/60">
                  <div className="text-gray-400 mb-2">Countdown:</div>
                  <div className="text-purple-400">&lt;t:1739059200:R&gt;</div>
                  <div className="text-gray-500 text-xs mt-2">
                    Displays: in 2 hours (updates automatically)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <AdBanner slot="1234567891" />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto glass-card">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4">
              Learn More
            </h2>
            <p className="text-lg text-gray-400">
              Explore our guides and blog posts to master Discord timestamps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/guides" className="group relative glass-card">
              <BookOpen className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Comprehensive Guides
              </h3>
              <p className="text-gray-400 mb-4">
                Step-by-step tutorials on using Discord timestamps effectively
                in your server
              </p>
              <span className="text-blue-400 group-hover:text-blue-300 transition">
                Explore Guides →
              </span>
            </Link>
            <Link href="/blog" className="group relative glass-card">
              <MessageSquare className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Latest Blog Posts
              </h3>
              <p className="text-gray-400 mb-4">
                Tips, tricks, and best practices for Discord server management
                and timing
              </p>
              <span className="text-purple-400 group-hover:text-purple-300 transition">
                Read Blog →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto text-center glass-card">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Start converting timestamps for your Discord server today
          </p>
          <Link
            href="/converter"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            <Clock className="mr-2 h-5 w-5" />
            Open Converter Tool
          </Link>
        </div>
      </section>
    </main>
  );
}
