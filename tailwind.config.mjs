/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#7d7db5",
        secondary: "#005B41",
        background: "#1A1A2E",
        background2: "#1f2937",
        text: "#CCCCCC",
        github :"#d2d4d7"
      },
    },
  },
  plugins: [],
};
