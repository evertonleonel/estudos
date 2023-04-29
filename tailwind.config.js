/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],

  theme: {
    extend: {
      colors: {
        azul: {
          claro: "#c5dfff",
          escuro: "#061e3c",
          hover: "#01057b0",
        },
      },
      fontFamily: {
        inter: ["Inter", "san-serif"],
      },
    },
  },
  plugins: [],
};
