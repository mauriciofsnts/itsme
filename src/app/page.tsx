import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import SectionTitle from "@/components/sectionTitle";
import Phrase from "@/components/parts/home/phrase";
import Projects from "@/components/parts/home/projects";
import Education from "@/components/parts/home/education";
import Passion from "@/components/parts/home/passion";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Bio from "@/components/parts/home/bio";

const headingFont = localFont({
  src: "../../public/font/SequelSansMediumDisp.woff2",
});

export default function Home() {
  return (
    <main
      className="container max-w-screen md:max-w-7xl p-10 "
      style={{ margin: "0 auto" }}
    >
      <div className="flex flex-col gap-10">
        <div className="">
          <Phrase />

          <div className="">
            <h1
              className={cn(
                "text-9xl font-extrabold select-none",
                headingFont.className
              )}
            >
              Mauricio Ferraz
            </h1>

            <TextGenerateEffect words="Front-end Developer" />
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div className="flex-1">he</div>

          <div className="flex-1">
            <SectionTitle>INFO</SectionTitle>

            <p className="text-sm text-[#3b3d41] leading-6 mt-5">
              I am a postgraduate from Impacta University in Digital Solutions
              Architecture, having completed my course in February 2024.
            </p>
            <br />
            <p className="text-sm text-[#3b3d41] leading-6">
              Since childhood, I&apos;ve been passionate about technology,
              always fascinated by the idea of creating impactful solutions for
              users. This passion has driven me to explore various areas within
              the technology field, constantly seeking ways to innovate and
              enhance user experience through creative and efficient solutions.
            </p>
            <br />
            <p className="text-sm text-[#3b3d41] leading-6">
              Throughout my career, I have immersed myself in the development of
              high-complexity platforms, collaborating with a variety of clients
              across different segments. My work includes significant
              contributions to renowned projects such as Senac, SOSDocs, Subway,
              TGI, and Starbucks. These enriching experiences have provided me
              with a broad understanding of the needs and requirements of
              different industries, while also enhancing my technical skills in
              various contexts.
            </p>
          </div>
        </div>

        <hr className="flex h-px bg-gray-300 border-0" />

        <Education />

        <hr className="flex h-px bg-gray-300 border-0" />

        <Projects />

        <Bio />

        <Passion />
      </div>
    </main>
  );
}
