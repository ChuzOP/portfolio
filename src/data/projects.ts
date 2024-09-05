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
    name: "ERP Web",
    description:
      "Sistema full-stack multiusuario con gestión de inventario, punto de venta y generación de reportes en PDF.",
    technologies: [1, 2, 5, 6, 7, 9],
    href: "/projects/erp",
  },
  {
    name: "Sistema Contable",
    description:
      "Gestor de facturas de compras y ventas mediante XML y CSV, con reportes contables como libros de compras, ventas, diario, mayor y balance.",
    technologies: [6, 7, 8, 9],
    href: "/projects/contable",
  },
  {
    name: "App Delivery Food",
    description:
      "Aplicación móvil multiplataforma para cocineros y repartidores.",
    technologies: [4, 5, 9],
    href: "/projects/app-delivery",
  },
];
