import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on engineering, music, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-text">Blog</h2>

      {posts.length === 0 ? (
        <p className="text-text-secondary">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="flex items-baseline gap-4 mb-1">
                  <h3 className="text-xl font-semibold text-text group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-text-muted shrink-0">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                {post.description && (
                  <p className="text-text-secondary">{post.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
