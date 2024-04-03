import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ["en", "pt"],

  // Default locale if no match
  defaultLocale: "pt",
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:page*"],
};
