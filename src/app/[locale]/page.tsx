import Phrase from "@/app/[locale]/(components)/phrase";
import Projects from "@/app/[locale]/(components)/projects";
import Education from "@/app/[locale]/(components)/education";
import Passion from "@/app/[locale]/(components)/passion";
import Bio from "@/app/[locale]/(components)/bio";
import Info from "@/app/[locale]/(components)/info";
import Hero from "@/app/[locale]/(components)/hero";
import Template from "@/app/[locale]/(components)/template";

export default function Home() {
  return (
    <Template>
      <div className="max-w-screen md:max-w-6xl p-5 md:p-10 mx-auto flex flex-col gap-10">
        <Phrase />
        <Hero />
        <Info />
        <hr className="bg-gray-300" />
        <Education />
        <hr className="bg-gray-300" />
        <Projects />
        <Bio />
        <hr className="bg-gray-300" />
        <Passion />
      </div>
    </Template>
  );
}
