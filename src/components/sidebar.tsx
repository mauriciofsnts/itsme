import React from "react";
import Logo from "./logo";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import { useTranslations } from "next-intl";

const headingFont = localFont({
  src: "../../public/font/SequelSansMediumDisp.woff2",
});

const Sidebar = () => {
  const t = useTranslations("Sidebar");

  return (
    <aside className="md:max-w-[240px] w-screen h-20 md:h-screen flex md:flex-col gap-8 border-r-2 border-[#e1e4e8cc] p-10 md:p-10">
      <div className="md:mt-10 flex flex-row md:flex-col items-center md:items-start justify-between gap-5 w-full">
        <Logo />

        <div className="flex md:flex-col flex-row gap-3">
          <h4 className={cn("font-normal text-xl", headingFont.className)}>
            {t("About")}
          </h4>
          <h4 className={cn("font-normal text-xl", headingFont.className)}>
            {t("Ideas")}
          </h4>
          <h4 className={cn("font-normal text-xl", headingFont.className)}>
            {t("CV")}
          </h4>
        </div>
      </div>

      <div className="md:flex hidden flex-col gap-8">
        <div className="flex flex-col gap-2">
          <SectionTitle>{t("Projects")}</SectionTitle>

          <div className="flex flex-col">
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/mauriciofsnts/hermes"
            >
              {t("Hermes")}
            </Link>
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              href="#"
            >
              {t("Omnia")}
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <SectionTitle>{t("Web Interfaces")}</SectionTitle>

          <div className="flex flex-col">
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              href="#"
            >
              {t("Speedify")}
            </Link>
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              rel="noopener noreferrer"
              target="_blank"
              href="http://squarefox.digital/"
            >
              {t("Squarefox")}
            </Link>
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              href="#"
            >
              {t("Itsme")}
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex hidden flex-col gap-2">
        <SectionTitle>{t("Contact")}</SectionTitle>

        <div className="flex flex-col">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:mauriciofsnts@gmail.com"
            className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
          >
            {t("Mail")}
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mauriciofsnts"
            className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
          >
            {t("Linkedin")}
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mauriciofsnts"
            className="text-sm text-[#3b3d41] hover:text-[#88888d]"
          >
            {t("Github")}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
