"use client";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

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
    <div>
      <h1
        className={cn(
          "text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-heading",
          headingFont.className
        )}
      >
        Mauricio Ferraz
      </h1>

      <p className="text-4xl font-medium text-gray-500">
        I&apos;m a {todayRole} based in Brazil
      </p>
    </div>
  );
};

export default Hero;
