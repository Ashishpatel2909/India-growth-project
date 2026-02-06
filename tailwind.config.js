export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        homeBg: "#FAF8F5",
        homeAccent: "#E76F51",
        timelineBg: "#F0F4F8",
        timelineAccent: "#2A9D8F",
        mapBg: "#F7F7E8",
        mapAccent: "#E9C46A",
        chartsBg: "#F4F4F9",
        chartsAccent: "#264653",
        aboutBg: "#FFF8F2",
        aboutAccent: "#D62828",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
