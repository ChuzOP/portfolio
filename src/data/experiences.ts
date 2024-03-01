export interface Experience {
  position: string;
  place: string;
  date: string;
  description: Array<string>;
  linkedin?: string;
}

export const experiences: Experience[] = [
  {
    position: "FullStack React Developer",
    linkedin: "https://gt.linkedin.com/company/techxperto",
    place: "TechXperto",
    date: "Nov 2022 - Feb 2024",
    description: [
      "Desarrollando y dandole mantenimiento a aplicaciones web con NextJS y MySQL.",
      "Colaborando de manera efectiva en equipos distribuidos a través de git y GitHub, gestionando múltiples ramas de código.",
      "Implementando nuevas funcionalidades y optimizando procesos para mejorar la eficiencia y la experiencia del usuario.",
      "Contribuyendo al crecimiento y éxito del equipo mediante la resolución proactiva de problemas.",
    ],
  },
];
