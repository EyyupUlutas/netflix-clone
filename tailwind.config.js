module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        22: "85.4px",
      },
      width: {
        22: "85.4px",
      },

      colors: {
        "netflix-red": "#DB0404",
        "netflix-red-2": "#830908",
        "netflix-black": "#1A0D0D",
        "netflix-black-2": "#181818",
        "netflix-gray": "#7B7C7C",
        "netflix-gray-2": "#EDEDEB",
      },

      fontFamily: {
        netflixsansbold: ["NetflixSansBold", "sans-serif"],
        netflixsanslight: ["NetflixSansLight", "sans-serif"],
        netflixsansmedium: ["NetflixSansMedium", "sans-serif"],
        netflixsansregular: ["NetflixSansRegular", "sans-serif"],
        netflixsansthin: ["NetflixSansThin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
