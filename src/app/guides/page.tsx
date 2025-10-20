import { Award, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Discord Timestamp Guides - Step-by-Step Tutorials",
  description:
    "In-depth guides and tutorials for mastering Discord timestamps, server management, and community coordination.",
};

export default function GuidesPage() {
  const difficultyColors = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
            Comprehensive Guides
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Step-by-step tutorials and in-depth guides to master Discord
            timestamps and server management.
          </p>
        </div>

        <div className="mb-12">
          <AdBanner slot="1234567896" />
        </div>

        <div className="space-y-8">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="group block glass-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                    {guide.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-4">{guide.excerpt}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${difficultyColors[guide.difficulty]}`}
                  >
                    <Award className="inline h-4 w-4 mr-1" />
                    {guide.difficulty}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {guide.readTime}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                <span className="text-sm text-gray-500">
                  Last updated:{" "}
                  {new Date(guide.lastUpdated).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="text-blue-400 group-hover:text-blue-300 transition">
                  Read guide →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <AdBanner slot="1234567897" />
        </div>
      </div>
      </section>
    </main>
  );
}
