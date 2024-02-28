import SectionTitle from "@/components/sectionTitle";
import Image from "next/image";

const Info = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row  gap-5 mt-10 min-h-[500px]">
      <div className="mt-10 flex flex-1 flex-row gap-5 justify-start h-full">
        <div className="self-start">
          <Image
            alt="Just an placeholder"
            src="https://placehold.co/237x260"
            width="237"
            height="260"
            className="rounded-lg"
          />
        </div>

        <div className="self-end h-max">
          <Image
            alt="Just an placeholder"
            src="https://placehold.co/266x386"
            width="266"
            height="386"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex-1">
        <SectionTitle>INFO</SectionTitle>

        <p className="text-sm text-[#3b3d41] leading-6 mt-5">
          I am a postgraduate from Impacta University in Digital Solutions
          Architecture, having completed my course in February 2024.
        </p>
        <br />
        <p className="text-sm text-[#3b3d41] leading-6">
          Since childhood, I&apos;ve been passionate about technology, always
          fascinated by the idea of creating impactful solutions for users. This
          passion has driven me to explore various areas within the technology
          field, constantly seeking ways to innovate and enhance user experience
          through creative and efficient solutions.
        </p>
        <br />
        <p className="text-sm text-[#3b3d41] leading-6">
          Throughout my career, I have immersed myself in the development of
          high-complexity platforms, collaborating with a variety of clients
          across different segments. My work includes significant contributions
          to renowned projects such as Senac, SOSDocs, Subway, TGI, and
          Starbucks. These enriching experiences have provided me with a broad
          understanding of the needs and requirements of different industries,
          while also enhancing my technical skills in various contexts.
        </p>
      </div>
    </div>
  );
};

export default Info;
