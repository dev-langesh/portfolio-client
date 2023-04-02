/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      slab: ["Roboto Slab", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      boxShadow: {
        full: "4px 4px 16px 8px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
