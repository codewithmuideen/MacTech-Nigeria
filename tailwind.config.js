/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "hsl(208, 11%, 30%)",
        Blue: "hsl(211, 53%, 56%)",
        Dark2: "hsl(180, 2%, 9%)",
        Dark3: "hsl(220, 5%, 31%)",
        Dark4: "hsl(0, 0%, 12%)",
        Dark5: "hsl(202, 24%, 93%)",
        white1: "hsl(0, 0%, 100%)",
        white2: "hsl(204, 33%, 97%)",
        Ash: "hsl(196, 5%, 55%)",
        Footer: "hsl(204, 33%, 97%)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans - serif"],
        shadow: ["Shadows Into Light", "cursive"],
        great: ["Great Vibes", "cursive"],
        amatic: ["Amatic SC", "cursive"],
        Lato: ["Lato", "sans - serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "767px",
      md: "1060px",
      lg: "1081px",
      xl: "1700px",
    },
  },
  plugins: [],
};
