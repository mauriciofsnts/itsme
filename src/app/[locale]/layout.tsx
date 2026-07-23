import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    openGraph: {
      title,
      type: "website",
      description,
    },
    twitter: {
      site: siteMetadata.siteUrl,
      title,
      card: "summary_large_image",
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <body className={cn(font.className, "dark:noise-bg")}>
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
