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
        lsm: "0px 2px 2px 2px rgba(0,0,0,0.3)",
      },
      skew: {
        16: "16deg", // You can add more custom skew values here if needed
      },

      keyframes: {
        "width-in": {
          "0%": { width: "0px" },
          "100%": { width: "132px" },
        },
        "hill-up": {
          "0%": { bottom: "-1000px" },
          "100%": { bottom: "-200px" },
        },
        "hill-up-sm": {
          "0%": { bottom: "-1000px" },
          "100%": { bottom: "-180px" },
        },
        "hill-up-xs": {
          "0%": { bottom: "-1000px" },
          "100%": { bottom: "-180px" },
        },
        "height-up": {
          "0%": { height: "0px" },
          "100%": { height: "100vh" },
        },
      },

      animation: {
        "width-in": "width-in 0.7s ease-out 0.1s forwards",
        "hill-up": "hill-up 1s ease-out 0.5s forwards",
        "hill-up-sm": "hill-up-sm 0.9s ease-out 0.8s forwards",
        "hill-up-xs": "hill-up-xs 0.9s ease-out 1s forwards",
        "height-up": "height-up 0.5s ease-out 2.1s forwards",
      },
    },
  },
  plugins: [],
};
