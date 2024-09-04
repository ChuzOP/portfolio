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
  href: string;
}

export const projects: Project[] = [
  {
    name: "ERP web",
    description:
      "Sistema full-stack multi usuario con gestión de inventario, punto de venta y generador de reportes PDF",
    technologies: [1, 2, 5, 6, 7, 9],
    href: "/proyects/erp",
  },
  {
    name: "Sistema Contable",
    description:
      "Gestor de facturas de compras y ventas alimentado por archivos XML y CSV y generando reportes contables como libros de compras, ventas, diario, mayor y balance",
      technologies: [6, 7, 8, 9],
    href: "/proyects/contable",
  },
  {
    name: "App Delivery Food",
    description:
      "Aplicación mobile multiplataforma para cocineros y deilveries",
    technologies: [4, 5, 9],
    href: "/proyects/app-delivery",
  },
];
