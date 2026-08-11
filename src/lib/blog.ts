import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Element, Root } from "hast";
import readingTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { defaultLocale, type Locale } from "@/lib/locales";

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

/**
 * Pulls ```mermaid fenced blocks out of the normal syntax-highlighting path.
 * `rehype-pretty-code` would otherwise treat them as regular source code and
 * render tokenized spans instead of a diagram. By replacing `pre > code` with
 * a bare `pre.mermaid` holding the raw diagram source (no nested `code`
 * element), the pretty-code visitor no longer matches the node, and the
 * client-side `MermaidContent` component picks it up to render the SVG.
 */
function rehypeMermaidBlocks() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "pre" || index === undefined || !parent) return;

      const code = node.children.find(
        (child): child is Element => child.type === "element" && child.tagName === "code"
      );
      if (!code) return;

      const className = code.properties?.className;
      const isMermaid =
        Array.isArray(className) && className.includes("language-mermaid");
      if (!isMermaid) return;

      const source = code.children
        .filter((child) => child.type === "text")
        .map((child) => child.value)
        .join("");

      parent.children[index] = {
        type: "element",
        tagName: "pre",
        properties: { className: ["mermaid", "not-prose"] },
        children: [{ type: "text", value: source }],
      };
    });
  };
}

export async function renderPostContent(content: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeMermaidBlocks)
    .use(rehypePrettyCode, { theme: "github-dark", keepBackground: false })
    .use(rehypeStringify)
    .process(content);

  return String(file);
}
