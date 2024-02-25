import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauricio Ferraz - Web Developer",
  description: "This is my personal website. I'm a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row overflow-hidden max-h-screen">
            <Sidebar />

            <div className="flex-grow overflow-auto">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
