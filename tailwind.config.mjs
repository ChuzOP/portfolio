/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // primary: "#7d7db5",
        // secondary: "#005B41",
        // background: "#020617",
        // text: "#CCCCCC",
        // ---
        // primary: '#8AB4F8', // Azul claro futurista
        // secondary: '#F4B400', // Amarillo dorado
        // background: '#0F172A', // Azul muy oscuro
        // ---
        // primary: '#61A0AF', // Azul verdoso suave
        // secondary: '#FFD700', // Oro para un contraste amigable
        // background: '#1A202C', // Azul carbón oscuro
        // text: '#CBD5E1', // Azul grisáceo claro para texto
        // ---
        primary: '#FB7185', // Rosa coral
        secondary: '#34D399', // Verde turquesa
        background: '#111827', // Gris azulado oscuro
        text: '#FFF', // Gris azulado muy claro para texto
        textAccent: '#81D4FA',
        // ---
        // primary: '#EF4444', // Rojo vivo
        // secondary: '#F59E0B', // Amarillo mostaza
        // background: '#111827', // Gris azulado oscuro
        // text: '#F3F4F6', // Gris azulado muy claro para texto
        github :"#d2d4d7"
      },
    },
  },
  plugins: [],
};
