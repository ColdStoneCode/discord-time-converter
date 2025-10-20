import { Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Discord Timestamp Blog - Tips, Guides & Best Practices",
  description:
    "Explore our comprehensive blog covering Discord timestamps, server management, bot development, and community building strategies.",
};

export default function BlogPage() {
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category)),
  );

  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
            Discord Time Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Expert insights, tutorials, and best practices for Discord
            timestamps, server management, and community building.
          </p>
        </div>

        <div className="mb-12">
          <AdBanner slot="1234567892" />
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full bg-slate-800 text-gray-300 text-sm border border-slate-700"
            >
              <Tag className="inline h-4 w-4 mr-1" />
              {category}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group glass-card overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl">📝</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {post.category}
                  </span>
                  <span className="text-blue-400 group-hover:text-blue-300 transition text-sm">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <AdBanner slot="1234567893" />
        </div>
      </div>
      </section>
    </main>
  );
}
