/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura"],
      },

      colors: {
        light100: "#dedddb",
        dark100: "#23262B",
      },
    },
  },
  plugins: [],
};
