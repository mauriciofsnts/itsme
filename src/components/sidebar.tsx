import React from "react";
import Logo from "./logo";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import SectionTitle from "./sectionTitle";

const headingFont = localFont({
  src: "../../public/font/SequelSansMediumDisp.woff2",
});

const Sidebar = () => {
  return (
    <aside className="md:max-w-[240px] w-screen h-20 md:h-screen flex md:flex-col gap-8 border-r-2 border-[#e1e4e8cc] p-10 md:p-10">
      <div className="md:mt-10 flex flex-row md:flex-col items-center md:items-start justify-between gap-5 w-full">
        <Logo />

        <div className="flex md:flex-col flex-row gap-3">
          <h4 className={cn("font-normal text-xl", headingFont.className)}>
            About
          </h4>
          <h4 className={cn("font-normal text-xl", headingFont.className)}>
            Ideas
          </h4>
          <h4 className={cn("font-normal text-xl", headingFont.className)}>
            CV
          </h4>
        </div>
      </div>

      <div className="md:flex hidden flex-col gap-8">
        <div className="flex flex-col gap-2">
          <SectionTitle>Projects</SectionTitle>

          <div className="flex flex-col">
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/mauriciofsnts/hermes"
            >
              Hermes
            </Link>
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              href="#"
            >
              Omnia
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <SectionTitle>Web interfaces</SectionTitle>

          <div className="flex flex-col">
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              href="#"
            >
              Speedify
            </Link>
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              rel="noopener noreferrer"
              target="_blank"
              href="http://squarefox.digital/"
            >
              Squarefox
            </Link>
            <Link
              className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
              href="#"
            >
              Itsme
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex hidden flex-col gap-2">
        <SectionTitle>Contact</SectionTitle>

        <div className="flex flex-col">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:mauriciofsnts@gmail.com"
            className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
          >
            Mail
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mauriciofsnts"
            className="text-sm text-[#3b3d41] hover:text-[#ccccd1]"
          >
            LinkedIn
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mauriciofsnts"
            className="text-sm text-[#3b3d41] hover:text-[#88888d]"
          >
            GitHub
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
