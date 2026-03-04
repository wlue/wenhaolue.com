import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-text">
            {post.meta.title}
          </h1>
          <time className="text-sm text-text-muted">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <div className="prose prose-lg max-w-none text-text-secondary prose-headings:text-text prose-a:text-brand">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
