export interface Link {
  name: string;
  href: string;
}

export interface Technology {
  id: number;
  name: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: Array<Technology["id"]>;
  // links: Link[];
  githubLink?: string;
  figmaLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    name: "Proyecto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod laboriosam quas quos doloribus err",
    technologies: [1, 2],
    githubLink: "https://github.com/ChuzOP/portfolio",
    figmaLink: "https://github.com/ChuzOP/portfolio",
  },
  {
    name: "Proyecto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod laboriosam quas quos doloribus err",
    technologies: [2, 3],
    figmaLink: "https://github.com/ChuzOP/portfolio",
  },
  {
    name: "Proyecto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod laboriosam quas quos doloribus err",
    technologies: [4, 5, 6, 7, 8],
    liveLink: "https://github.com/ChuzOP/portfolio",
    figmaLink: "https://github.com/ChuzOP/portfolio",
  },
];
