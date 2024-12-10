/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "bg1": "#2C2B28",
        "bg2": "#393937",
        "bg3": "#282725",
        "bg4": "#21201C",
        "bg5": "#2F2F2B",
        "bg6": "#1A1915",
        "text1": "#E5E5E2",
        "text2": "#A6A39A",
        "btext": "#3F91E3",
        "bbg": "#272D34",
        "borderclr": "#52514B",
        "borderclr2": "#3A3933",
        "sidebarclr": "#24231Fcc",
        "hoverclr": "#1C1B18",
        "orng": "#B6613C"
      },
      fontFamily: {
        zilla: ['"Zilla Slab"', 'sans'],
      },

      screens: {
        Xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        Lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        Md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        Sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}

