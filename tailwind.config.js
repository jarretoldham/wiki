import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./markdoc/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: {
              100: "#EAF0F4",
              200: "#D6E0E9",
              300: "#A6B2BD",
              400: "#323336",
              500: "#1C1F23",
              600: "#14181E",
              700: "#0E1119",
              800: "#080C14",
              900: "#050810",
              DEFAULT: "#1C1F23",
            },
          },
        },
      },
    }),
  ],
};
