import SectionTitle from "@/components/sectionTitle";
import { projects } from "@/lib/projects";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 grid-rows-1 gap-5 mt-5">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-bold text-[#3b3d41]">{project.title}</p>
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
