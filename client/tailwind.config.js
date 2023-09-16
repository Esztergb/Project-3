/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        cgreen: "#9CB490",
        cdarkgreen: "#95AB8B",
        cyellow: "#EBE373",
        cbrown: "#715a45",
        cwhite: "#f7f0d9",
        corange: "#f27121",
        cred: "#e94057",
      },
    },
  },
  plugins: [],
};
