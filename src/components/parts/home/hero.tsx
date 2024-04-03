"use client";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";

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

function hashString(s: string) {
  let hash = 0;
  if (s.length === 0) return hash;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return hash;
}

function getDailyRandomRole() {
  const today = new Date().toISOString().slice(0, 10);
  const hash = hashString(today);
  const index = Math.abs(hash) % roles.length;
  return roles[index];
}

const Hero = () => {
  const todayRole = getDailyRandomRole();

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <h1
          className={cn(
            "text-8xl md:text-9xl leading-none font-extrabold text-transparent bg-clip-text bg-gradient-heading",
            headingFont.className
          )}
        >
          Mauricio Ferraz
        </h1>

        <p className="text-xl md:text-2xl font-medium text-gray-500 mt-2">
          I&apos;m a {todayRole} based in Brazil
        </p>
      </div>

      <div className="hidden flex-1 xl:flex flex-row flex-nowrap justify-end gap-5 bg-gradient-radial mt-20 md:mt-0 ">
        <Image
          alt="Placeholder"
          src="https://placehold.co/200x271"
          width="200"
          height="271"
          className="rounded-lg"
        />

        <Image
          alt="Placeholder"
          src="https://placehold.co/270x350"
          width="270"
          height="350"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
