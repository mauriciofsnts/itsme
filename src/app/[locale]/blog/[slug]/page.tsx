import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Typography } from "@/components/ui/typography";
import {
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
  renderPostContent,
} from "@/lib/blog";
import { formatPostDate } from "@/lib/utils";
import { siteMetadata } from "@/config/metadata";
import { type Locale } from "@/lib/locales";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    },
    twitter: {
      title: post.title,
      description: post.description,
      card: "summary_large_image",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) notFound();

  const t = await getTranslations("blog");
  const related = getAllPosts(locale).filter((p) => p.slug !== slug);
  const html = await renderPostContent(post.content);

  return (
    <article className="w-full max-w-7xl flex flex-col gap-8 px-0 p-5 sm:px-6 lg:px-0">
      <header className="flex flex-col gap-4 mt-0 md:mt-16 p-6 sm:p-10 sm:pb-0">
        <span className="text-sm text-stone-500">
          {formatPostDate(post.date, locale)} ·{" "}
          {t("minRead", { count: post.readingMinutes })}
        </span>
        <Typography
          variant="h1"
          className="text-3xl tracking-wide font-bold lg:text-5xl"
        >
          {post.title}
        </Typography>
        <Typography variant="lead" className="text-stone-400">
          {post.description}
        </Typography>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-stone-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose prose-invert prose-stone max-w-none px-6 sm:px-10 prose-headings:tracking-wide prose-a:text-stone-50 prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {related.length > 0 && (
        <footer className="flex flex-col gap-4 p-6 sm:p-10 border-t border-border">
          <Typography variant="h4">{t("more")}</Typography>
          <Link
            href={`/blog/${related[0].slug}`}
            className="text-stone-300 hover:text-primary transition-colors underline underline-offset-4"
          >
            {related[0].title}
          </Link>
        </footer>
      )}
    </article>
  );
}
