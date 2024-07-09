interface Tech {
  text: string;
  icon: string;
}

export interface Technology {
  title: string;
  title_color: string | null;
  technologies: Tech[];
}

import htmlIcon from "../../public/icons/html.svg?raw";
import reactIcon from "../../public/icons/react.svg?raw";
import cssIcon from "../../public/icons/css.svg?raw";
import javascriptIcon from "../../public/icons/javascript.svg?raw";
import nextIcon from "../../public/icons/next.svg?raw";
import nodeIcon from "../../public/icons/node.svg?raw";
import mysqlIcon from "../../public/icons/mysql.svg?raw";
import sequelizeIcon from "../../public/icons/sequelize.svg?raw";
import angularIcon from "../../public/icons/angular.svg?raw";
import gitIcon from "../../public/icons/git.svg?raw";
import githubIcon from "../../public/icons/github.svg?raw";
import figmaIcon from "../../public/icons/figma.svg?raw";
import tailwindIcon from "../../public/icons/tailwind.svg?raw";
import typescriptIcon from "../../public/icons/typescript.svg?raw";
import pycon from "../../public/icons/py.svg?raw";
import awsIcon from "../../public/icons/aws.svg?raw";
import astroIcon from "../../public/icons/astro.svg?raw";

export const technologies: Technology[] = [
  {
    title: "Frontend",
    technologies: [
      {
        text: "HTML",
        icon: htmlIcon,
      },
      {
        text: "CSS",
        icon: cssIcon,
      },
      {
        text: "JavaScript",
        icon: javascriptIcon,
      },
      {
        text: "TypeScript",
        icon: typescriptIcon,
      },
      {
        text: "React JS",
        icon: reactIcon,
      },
      {
        text: "Next JS",
        icon: nextIcon,
      },
      {
        text: "Tailwind",
        icon: tailwindIcon,
      },
      {
        text: "Astro",
        icon: astroIcon,
      },
    ],
    title_color: null,
  },
  {
    title: "Backend",
    technologies: [
      {
        text: "Node JS",
        icon: nodeIcon,
      },
      {
        text: "MySQL",
        icon: mysqlIcon,
      },
      {
        text: "Sequelize",
        icon: sequelizeIcon,
      },
    ],
    title_color: "#FFD700",
  },
  {
    title: "Aprendiendo",
    technologies: [
      {
        text: "Angular",
        icon: angularIcon,
      },
      {
        text: "Python",
        icon: pycon,
      },
      {
        text: "AWS",
        icon: awsIcon,
      },
    ],
    title_color: "#FF6F61",
  },
  {
    title: "Herramientas",
    technologies: [
      {
        text: "Git",
        icon: gitIcon,
      },
      {
        text: "GitHub",
        icon: githubIcon,
      },
      {
        text: "Figma",
        icon: figmaIcon,
      },
    ],
    title_color: null,
  },
];
