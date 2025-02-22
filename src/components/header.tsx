import React from "react";
import { Button } from "./ui/button";
import { siteMetadata } from "@/config/metadata";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full max-w-7xl flex justify-between p-10">
      <h1 className="font-bold">{siteMetadata.author}</h1>

      <div>
        <Link href={siteMetadata.linkedin} target="_blank">
          <Button variant="link" className="font-bold">
            Linkedin
          </Button>
        </Link>

        <Link href={siteMetadata.siteRepo} target="_blank">
          <Button variant="link" className="font-bold">
            Github
          </Button>
        </Link>
        <span className="font-semibold ml-2">{siteMetadata.email}</span>
      </div>
    </header>
  );
};

export default Header;
