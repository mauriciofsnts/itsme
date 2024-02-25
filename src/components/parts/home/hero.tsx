"use client";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { TypeAnimation } from "react-type-animation";

const headingFont = localFont({
  src: "../../../../public/font/SequelSansMediumDisp.woff2",
});

const roles = [
  "Front-end Developer",
  "React Developer",
  "TypeScript Developer",
  "JavaScript Developer",
  "Back-end Developer",
  "Node.js Developer",
  "Full-stack Developer",
];

const Hero = () => {
  return (
    <div className="">
      <h1
        className={cn(
          "text-9xl font-extrabold select-none",
          headingFont.className
        )}
      >
        Mauricio Ferraz
      </h1>

      <TypeAnimation
        sequence={roles.map((role, index) => {
          return index % 2 === 0 ? role : 3000;
        })}
        wrapper="span"
        speed={20}
        style={{ fontSize: "36px", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Hero;
