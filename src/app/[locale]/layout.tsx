import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteMetadata } from "@/config/metadata";

import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme={siteMetadata.theme}
            storageKey="mrtz-theme"
            disableTransitionOnChange
          >
            <div className="flex flex-col md:flex-row overflow-hidden max-h-screen">
              <Sidebar />

              <div className="flex-grow overflow-auto">{children}</div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>

      <GoogleAnalytics gaId={process.env.GTAG!} />
    </html>
  );
}
