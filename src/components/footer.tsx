import React from "react";
import Link from "next/link";
import { Typography } from "./ui/typography";
import { ArrowUpRight } from "lucide-react";
import { siteMetadata } from "@/config/metadata";
import { getTranslations } from "next-intl/server";

async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="w-full max-w-7xl flex flex-col md:flex-row gap-y-10 justify-between p-10 h-full">
      <div className="flex flex-col">
        <Typography variant="h4" className="text-stone-500">
          {t("footer.getInTouch")}
        </Typography>
        <Typography variant="h3" className="text-primary md:text-2xl text-xl">
          {siteMetadata.email}
        </Typography>
      </div>

      <div className="flex flex-col">
        <Typography variant="h4" className="text-stone-500">
          {t("footer.connectOnLinkedin")}
        </Typography>

        <Link href={siteMetadata.linkedin} target="_blank">
          <Typography
            variant="h3"
            className="text-primary md:text-2xl text-xl flex flex-row gap-3 group hover:text-[#0a66c2]"
          >
            {siteMetadata.author}
            <ArrowUpRight />
          </Typography>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
