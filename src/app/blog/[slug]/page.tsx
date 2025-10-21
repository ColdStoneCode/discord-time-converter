import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AdBanner from "@/components/AdBanner";
import { blogPosts } from "@/data/blogPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Discord Time Converter Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <article className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </span>
            <span className="flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <Tag className="h-4 w-4 mr-2" />
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300">{post.excerpt}</p>

          <div className="mt-6 text-gray-400">
            By <span className="text-white">{post.author}</span>
          </div>
        </header>

        <div className="mb-8">
          <AdBanner slot="1234567894" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 mb-8">
          <AdBanner slot="1234567895" />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group glass-card"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <span className="text-blue-400 text-sm">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
      </section>
    </main>
  );
}