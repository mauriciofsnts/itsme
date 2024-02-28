import SectionTitle from "@/components/sectionTitle";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";

const headingFont = localFont({
  src: "../../../../public/font/SequelSansMediumDisp.woff2",
});

const Passion = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 items-start justify-center flex-col">
        <SectionTitle className="mb-5">THINGS I LOVE TO DO</SectionTitle>

        {["Solve problems", "Competitive Games", "Coffee"].map(
          (item, index) => (
            <h3
              key={index}
              className={cn(
                "font-medium tracking-tight text-2xl text-[#3b3d41] ",
                headingFont.className
              )}
            >
              {item}
            </h3>
          )
        )}
      </div>

      <div className="hidden md:flex flex-1 items-end gap-3">
        <Image
          alt="Coding"
          src="https://placehold.co/240x380"
          width="240"
          height="380"
          className="rounded-lg"
        />
        <Image
          alt="Coding"
          src="https://placehold.co/266x282"
          width="266"
          height="282"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Passion;
