/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        h1: "#4db5ff", // Color for h1
        h2: "#ffffff", // Color for h2
        h3: "#ffffff", // Color for h3
        h4: "#ffffff", // Color for h4
        p: "#ffffff", // Color for paragraphs
      },
    },
  },
  plugins: [],
};
