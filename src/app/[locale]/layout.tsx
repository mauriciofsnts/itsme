import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteMetadata } from "@/config/metadata";

import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { ViewTransitions } from "next-view-transitions";

const font = Onest({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: `${siteMetadata.title}`,
    type: "website",
    description: siteMetadata.description,
  },
  twitter: {
    site: siteMetadata.siteUrl,
    title: `${siteMetadata.title}`,
    card: "summary_large_image",
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;
  const messages = useMessages();

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <body className={cn(font.className, "dark:bg-[url('/noise.png')]")}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme={siteMetadata.theme}
              storageKey="mrtz-theme"
              disableTransitionOnChange
            >
              <div className="flex flex-col justify-center items-center">
                <Header />
                {children}
                <Footer />
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>

        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.GTAG!} />
        )}
      </html>
    </ViewTransitions>
  );
}
