import React from "react";
import Link from "next/link";
import { Typography } from "./ui/typography";
import { ArrowUpRight } from "lucide-react";
import { siteMetadata } from "@/config/metadata";

function Footer() {
  return (
    <footer className="w-full max-w-7xl flex justify-between p-10">
      <div className="flex flex-col">
        <Typography variant="h4" className="text-stone-500">
          Get in touch
        </Typography>
        <Typography variant="h3" className="text-primary">
          {siteMetadata.email}
        </Typography>
      </div>

      <div className="flex flex-col">
        <Typography variant="h4" className="text-stone-500">
          Connect on Linkedin
        </Typography>

        <Link href={siteMetadata.linkedin} target="_blank">
          <Typography
            variant="h3"
            className="text-primary flex flex-row gap-3 group hover:text-[#0a66c2]"
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
