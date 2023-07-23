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
        16: "16deg",
        20: "20deg",
        20: "20deg",
        30: "30deg",
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
        "content-up": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "content-down": {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "content-ltr": {
          "0%": { transform: "translateX(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },

      animation: {
        "width-in": "width-in 0.7s ease-out 0.1s forwards",
        "hill-up": "hill-up 1s ease-out 0.5s forwards",
        "hill-up-sm": "hill-up-sm 0.9s ease-out 0.8s forwards",
        "hill-up-xs": "hill-up-xs 0.9s ease-out 1s forwards",
        "height-up": "height-up 0.5s ease-out 2.1s forwards",
        "content-up": "content-up 0.5s ease-out forwards",
        "content-down": "content-down 0.5s ease-out forwards",
        "content-ltr": "content-ltr 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
