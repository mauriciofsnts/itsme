import React from "react";
import { Button } from "./ui/button";
import { siteMetadata } from "@/config/metadata";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full max-w-7xl flex flex-row justify-between items-center p-10 gap-4 sm:gap-0">
      <h1 className="font-bold text-lg sm:text-xl">{siteMetadata.author}</h1>

      <div className="flex flex-wrap items-center sm:justify-normal justify-end gap-1 sm:gap-3">
        <Link href={siteMetadata.linkedin} target="_blank">
          <Button variant="link" className="font-bold text-sm sm:text-base">
            <Linkedin className="md:hidden block" />
            <span className="md:block hidden">Linkedin</span>
          </Button>
        </Link>

        <Link href={siteMetadata.siteRepo} target="_blank">
          <Button variant="link" className="font-bold text-sm sm:text-base">
            <Github className="md:hidden block" />
            <span className="md:block hidden">Github</span>
          </Button>
        </Link>

        <span className="font-semibold text-sm sm:text-base">
          {siteMetadata.email}
        </span>
      </div>
    </header>
  );
};

export default Header;
