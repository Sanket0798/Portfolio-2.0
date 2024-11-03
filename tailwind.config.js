/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // Center the container
      // screens: {
      //   sm: "100%",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      //   "3xl": "1600px",
      // },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1340px", // Set width for xl breakpoint
        "2xl": "1340px", // Set width for 2xl breakpoint
        "3xl": "1340px", // Set width for 3xl breakpoint
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-bg': '#1A1A1A', // Custom color for box backgrounds
      },
      textColor: {
        h1: "#4db5ff", // Color for h1
        h2: "#ffffff", // Color for h2
        h3: "#ffffff", // Color for h3
        h4: "#ffffff", // Color for h4
        p: "#ffffff", // Color for paragraphs
      },
      borderRadius: {
        'default': '16px', // Default border radius
        'sm': '8px',       // Small border radius
        'lg': '24px',      // Large border radius
        'full': '9999px',  // Full border radius (circle)
      },
    },
  },
  plugins: [],
};
