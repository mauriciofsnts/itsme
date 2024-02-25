import SectionTitle from "@/components/sectionTitle";
import React from "react";

const items = [
  { date: "2019", description: "Started my career as a developer" },
  { date: "2020", description: "Front-end developer at _fourcicle" },
  { date: "2021", description: "Graduated in Computer Science" },
  {
    date: "2022",
    description: "Became a full-stack developer at SouthRock Lab.",
  },
  {
    date: "2024",
    description: "Completed my postgraduate in Digital Solutions Architecture",
  },
];

const Bio = () => {
  return (
    <div>
      <SectionTitle>Bio</SectionTitle>

      <div className="flex flex-col gap-3 mt-5">
        {items.map((item, index) => (
          <div
            className="flex justify-start items-center flex-row gap-3"
            key={index}
          >
            <p className="font-bold text-sm">{item.date}</p>

            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bio;
