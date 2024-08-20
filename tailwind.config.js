/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.3)",
          "200": "rgba(0, 0, 0, 0.96)",
        },
        darkgray: "#b0b0b0",
        darkslategray: "#333",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
      },
    },
    fontSize: {
      "mid-7": "17.7px",
      "330xl-4": "349.4px",
      "68xl": "87px",
      "121xl": "140px",
      "lgi-4": "19.4px",
      "13xl-1": "32.1px",
      lgi: "19px",
      "7xl": "26px",
      "6xl-2": "25.2px",
      xl: "20px",
      "5xl-1": "24.1px",
      "31xl-6": "50.6px",
      "11xl": "30px",
      "21xl": "40px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
