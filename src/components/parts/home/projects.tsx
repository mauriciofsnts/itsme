import SectionTitle from "@/components/sectionTitle";
import { projects } from "@/lib/projects";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid grid-cols-2 grid-rows-3 gap-10 mt-5">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-bold">{project.title}</p>
            <p className="text-sm text-[#3b3d41] leading-6">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
