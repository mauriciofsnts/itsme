import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Typography } from "@/components/ui/typography";
import { getAllPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/utils";
import { type Locale } from "@/lib/locales";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const posts = getAllPosts(locale);

  return (
    <div className="w-full max-w-7xl flex flex-col gap-10 px-0 p-5 sm:px-6 lg:px-0">
      <section className="flex flex-col gap-4 p-6 sm:p-10 mt-0 md:mt-16">
        <Typography
          variant="h1"
          className="max-w-[720px] text-4xl tracking-wide font-bold lg:text-6xl"
        >
          {t("title")}
        </Typography>
        <Typography variant="lead" className="text-stone-400">
          {t("subtitle")}
        </Typography>
      </section>

      <section className="flex flex-col p-6 sm:p-10 gap-8">
        {posts.length === 0 && (
          <Typography className="text-stone-400">{t("empty")}</Typography>
        )}

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 border-b border-border pb-8 last:border-none"
          >
            <span className="text-sm text-stone-500">
              {formatPostDate(post.date, locale)} · {t("minRead", { count: post.readingMinutes })}
            </span>
            <Typography
              variant="h3"
              className="group-hover:text-primary transition-colors"
            >
              {post.title}
            </Typography>
            <Typography className="text-stone-400">
              {post.description}
            </Typography>
          </Link>
        ))}
      </section>
    </div>
  );
}
