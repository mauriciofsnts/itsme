import React from "react";
import Logo from "./logo";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import { useTranslations } from "next-intl";
import LangSwitch from "./language-switcher";

const headingFont = localFont({
  src: "../../public/font/SequelSansMediumDisp.woff2",
});

const SidebarItem = ({ title, href }: { title: string; href: string }) => (
  <Link
    className="text-sm text-[#3b3d41] dark:text-white/80 hover:text-[#ccccd1] dark:hover:text-white/70"
    rel="noopener noreferrer"
    target="_blank"
    href={href}
  >
    {title}
  </Link>
);

const Sidebar = () => {
  const t = useTranslations("Sidebar");

  return (
    <aside className="md:max-w-[240px] w-screen h-20 md:h-screen flex md:flex-col gap-8 border-r-2 border-[#e1e4e8cc] dark:border-white/10 p-10 md:p-10 justify-between">
      <div className="flex md:flex-col w-full gap-8">
        <div className="md:mt-10 flex flex-row md:flex-col items-center md:items-start justify-between gap-5 w-full">
          <Logo />

          <div className="flex md:flex-col flex-row gap-1">
            <h4
              className={cn(
                "font-normal dark:text-white text-current text-xl",
                headingFont.className
              )}
            >
              {t("About")}
            </h4>
            <h4
              className={cn(
                "font-normal dark:text-white text-current text-xl",
                headingFont.className
              )}
            >
              {t("Ideas")}
            </h4>
            <h4
              className={cn(
                "font-normal dark:text-white text-current text-xl",
                headingFont.className
              )}
            >
              {t("CV")}
            </h4>
          </div>
        </div>

        <div className="md:flex hidden flex-col gap-8">
          <div className="flex flex-col gap-2">
            <SectionTitle>{t("Projects")}</SectionTitle>

            <div className="flex flex-col">
              <SidebarItem
                title={t("Hermes")}
                href="https://github.com/mauriciofsnts/hermes"
              />

              <SidebarItem title={t("Omnia")} href="#" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <SectionTitle>{t("Web Interfaces")}</SectionTitle>

            <div className="flex flex-col">
              <SidebarItem title={t("Itsme")} href="#" />
              <SidebarItem
                title={t("Squarefox")}
                href="http://squarefox.digital/"
              />
              <SidebarItem title={t("Speedify")} href="#" />
            </div>
          </div>
        </div>

        <div className="md:flex hidden flex-col gap-2">
          <SectionTitle>{t("Contact")}</SectionTitle>

          <div className="flex flex-col">
            <SidebarItem
              title={t("Mail")}
              href="mailto:mauriciofsnts@gmail.com"
            />

            <SidebarItem
              title={t("Linkedin")}
              href="https://www.linkedin.com/in/mauriciofsnts"
            />

            <SidebarItem
              title={t("Github")}
              href="https://github.com/mauriciofsnts"
            />
          </div>
        </div>
      </div>

      <div className="md:flex hidden">
        <LangSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;
