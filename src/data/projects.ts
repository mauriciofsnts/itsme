export type Project = {
  title: string;
  description: string;
  link: string;
  color: string;
  imageUrl: string;
};

export function getProjects(
  t: (
    key: `projects.${"omnia" | "squarefox" | "hermes" | "vulcano"}.description`
  ) => string
): Project[] {
  return [
    {
      title: "Omnia",
      description: t("projects.omnia.description"),
      imageUrl: "/pexels-expect-best-79873-351265.jpg",
      link: "/projects/omnia",
      color: "#fff",
    },
    {
      title: "Squarefox",
      description: t("projects.squarefox.description"),
      imageUrl: "/red-fox-vulpes-vulpes-european-forest.jpg",
      link: "/projects/squarefox",
      color: "#fff",
    },
    {
      title: "Hermes",
      description: t("projects.hermes.description"),
      imageUrl: "/pexels-ijonrobles-2388936.jpg",
      link: "/projects/hermes",
      color: "#fff",
    },
    {
      title: "Vulcano",
      description: t("projects.vulcano.description"),
      imageUrl: "/volcanic-eruption-natural-disaster.jpg",
      link: "/projects/vulcano",
      color: "#fff",
    },
  ];
}
