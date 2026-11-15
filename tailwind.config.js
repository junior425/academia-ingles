/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0B132B",
        card: "#131E3A",
        line: "#1E293B",
        pearl: "#CBD5E1",
        gold: { DEFAULT: "#F59E0B", hover: "#FBBF24" },
        emerald: { DEFAULT: "#10B981", hover: "#059669" },
      },
    },
  },
  plugins: [],
};
