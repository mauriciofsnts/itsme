import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { type Locale, defaultLocale } from "@/lib/locales";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
}

function readPostFile(slug: string, locale: Locale) {
  const localePath = path.join(BLOG_DIR, slug, `${locale}.mdx`);
  const fallbackPath = path.join(BLOG_DIR, slug, `${defaultLocale}.mdx`);
  const filePath = fs.existsSync(localePath) ? localePath : fallbackPath;

  if (!fs.existsSync(filePath)) return null;

  return fs.readFileSync(filePath, "utf8");
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export function getPostBySlug(slug: string, locale: Locale): Post | null {
  const raw = readPostFile(slug, locale);
  if (!raw) return null;

  const { data, content } = matter(raw);

  return {
    slug,
    content,
    readingMinutes: Math.ceil(readingTime(content).minutes),
    ...(data as PostFrontmatter),
  };
}

export function getAllPosts(locale: Locale): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is Post => post !== null)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function renderPostContent(content: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, { theme: "github-dark", keepBackground: false })
    .use(rehypeStringify)
    .process(content);

  return String(file);
}
