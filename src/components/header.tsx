import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { siteMetadata } from "@/config/metadata";
import { buttonVariants } from "./ui/button";

const Header = async () => {
  const t = await getTranslations("nav");

  return (
    <header className="w-full max-w-7xl flex flex-row justify-between items-center p-10 gap-4 sm:gap-0">
      <Link href="/" className={buttonVariants({ variant: "link", className: "p-0" })}>
        <h1 className="font-bold text-lg sm:text-xl">{siteMetadata.author}</h1>
      </Link>

      <div className="flex flex-wrap items-center sm:justify-normal justify-end gap-1 sm:gap-3">
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "link",
            className: "font-bold text-sm sm:text-base",
          })}
        >
          {t("blog")}
        </Link>

        <Link
          href={siteMetadata.linkedin}
          target="_blank"
          className={buttonVariants({
            variant: "link",
            className: "font-bold text-sm sm:text-base",
          })}
        >
          <Linkedin className="md:hidden block" />
          <span className="md:block hidden">{t("linkedin")}</span>
        </Link>

        <Link
          href={siteMetadata.siteRepo}
          target="_blank"
          className={buttonVariants({
            variant: "link",
            className: "font-bold text-sm sm:text-base",
          })}
        >
          <Github className="md:hidden block" />
          <span className="md:block hidden">{t("github")}</span>
        </Link>

        <span className="font-semibold text-sm sm:text-base">{siteMetadata.email}</span>
      </div>
    </header>
  );
};

export default Header;
