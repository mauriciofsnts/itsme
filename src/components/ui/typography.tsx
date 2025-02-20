import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  lead: "text-xl text-muted-foreground",
  p: "leading-7",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
  inlineCode:
    "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  multilineCode:
    "relative rounded bg-muted p-4 font-mono text-sm font-semibold overflow-x-auto",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  quote: "mt-6 border-l-2 pl-6 italic text-muted-foreground",
};

export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ variant = "p", className, ...props }, ref) => {
    const Component =
      variant === "inlineCode" || variant === "multilineCode"
        ? "code"
        : variant === "quote"
          ? "blockquote"
          : variant === "list"
            ? "ul"
            : variant.startsWith("h")
              ? variant
              : "p";

    return React.createElement(
      Component,
      {
        ...props,
        ref,
        className: cn(variants[variant], className),
      },
      props.children
    );
  }
);

Typography.displayName = "Typography";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variants;
}
