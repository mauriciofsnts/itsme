import Phrase from "@/components/parts/home/phrase";
import Projects from "@/components/parts/home/projects";
import Education from "@/components/parts/home/education";
import Passion from "@/components/parts/home/passion";
import Bio from "@/components/parts/home/bio";
import Info from "@/components/parts/home/info";
import Hero from "@/components/parts/home/hero";

export default function Home() {
  return (
    <main className="max-w-screen md:max-w-7xl p-10 mx-auto flex flex-col gap-10">
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
    </main>
  );
}
