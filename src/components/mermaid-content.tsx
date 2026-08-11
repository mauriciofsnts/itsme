"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface MermaidContentProps {
  html: string;
  className?: string;
}

/**
 * Renders MDX-derived HTML that may contain `pre.mermaid` blocks (produced
 * by `rehypeMermaidBlocks` in `src/lib/blog.ts`) as actual Mermaid diagrams.
 * Diagram source is kept in `data-mermaid-source` so re-renders triggered by
 * a theme switch always start from the original text instead of a
 * previously rendered SVG.
 */
export function MermaidContent({ html, className }: MermaidContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // biome-ignore lint/correctness/useExhaustiveDependencies: `html` isn't read directly, but it drives the dangerouslySetInnerHTML below — the effect must re-run against the freshly injected DOM whenever it changes.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = Array.from(container.querySelectorAll<HTMLElement>("pre.mermaid"));
    if (nodes.length === 0) return;

    for (const node of nodes) {
      if (!node.dataset.mermaidSource) {
        node.dataset.mermaidSource = node.textContent ?? "";
      }
    }

    let cancelled = false;

    (async () => {
      // Loaded lazily so posts without diagrams never ship Mermaid's ~150kB.
      const { default: mermaid } = await import("mermaid");
      if (cancelled) return;

      mermaid.initialize({
        startOnLoad: false,
        theme: resolvedTheme === "dark" ? "dark" : "default",
        securityLevel: "strict",
        fontFamily: "inherit",
      });

      for (const [i, node] of nodes.entries()) {
        const source = node.dataset.mermaidSource ?? "";
        if (!source.trim()) continue;

        try {
          const id = `mermaid-diagram-${Date.now()}-${i}`;
          const { svg } = await mermaid.render(id, source);
          if (!cancelled) node.innerHTML = svg;
        } catch (error) {
          console.error("Failed to render Mermaid diagram", error);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [html, resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className={className}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: html is generated from our own trusted MDX content at build time, not user input
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
