/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#bef264",
        dark: "#292524",
        "dark-card": "#44403c",
        skeleton: "#e7e5e4",
        "skeleton-dark": "#44403c",
      },
    },
  },
  plugins: [],
};
