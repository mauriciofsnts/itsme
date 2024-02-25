import SectionTitle from "@/components/sectionTitle";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";

const headingFont = localFont({
  src: "../../../../public/font/SequelSansMediumDisp.woff2",
});

const Education = () => {
  return (
    <div>
      <SectionTitle>Education</SectionTitle>

      <div className="flex flex-row gap-5 mt-5">
        <div className="flex justify-center flex-col flex-1 w-full">
          <h3
            className={cn(
              "font-medium tracking-tight text-3xl text-[#3b3d41] ",
              headingFont.className
            )}
          >
            Impacta University of Technology
          </h3>

          <h3
            className={cn(
              "font-medium tracking-tight text-2xl text-[#A0A5AC] ",
              headingFont.className
            )}
          >
            Postgraduate in Digital Solutions Architecture
          </h3>

          <p className="text-xs mt-2 text-[#A0A5AC]">2023 - 2024</p>
        </div>

        <div className="flex-1">
          <Image
            alt="Impacta Tecnologia"
            src="https://placehold.co/400x200"
            width="400"
            height="200"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
