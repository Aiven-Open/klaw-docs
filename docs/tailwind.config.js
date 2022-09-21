/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        "grey-0": "#EDEDF0",
        "grey-5": "#EDEDF0",
        "grey-30": "#B4B4BB",
        "grey-70": "#4A4B57",
        "grey-80": "#3A3A44",
        "grey-100": "#19191D",
        "blue-5": "#EFFAFF",
        "blue-30": "#7FD1F7",
        "blue-100": "#02569A",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // We use preflight from Furo theme instead.
  },
};
