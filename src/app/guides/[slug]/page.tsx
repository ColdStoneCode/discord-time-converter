import { ArrowLeft, Award, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AdBanner from "@/components/AdBanner";
import { guides } from "@/data/guides";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.slug;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
      description: "The requested guide could not be found",
    };
  }

  return {
    title: `${guide.title} - Discord Time Converter Guide`,
    description: guide.excerpt,
  };
}

export default function GuidePage({ params }: Props) {
  const slug = params.slug;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const difficultyColors = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <article className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/guides"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
            <span
              className={`px-4 py-2 rounded-full font-medium border ${difficultyColors[guide.difficulty]}`}
            >
              <Award className="inline h-4 w-4 mr-2" />
              {guide.difficulty}
            </span>
            <span className="flex items-center text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              {guide.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {guide.title}
          </h1>

          <p className="text-xl text-gray-300">{guide.excerpt}</p>

          <div className="mt-6 text-gray-400 text-sm">
            Last updated:{" "}
            {new Date(guide.lastUpdated).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </header>

        <div className="mb-8">
          <AdBanner slot="1234567898" />
        </div>

        <div className="glass-card prose prose-invert prose-lg max-w-none p-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {guide.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12">
          <AdBanner slot="1234567899" />
        </div>
      </article>
      </section>
    </main>
  );
}
