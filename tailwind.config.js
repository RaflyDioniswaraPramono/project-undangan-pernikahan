/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        fade: "fade 0.5s ease-in-out forwards",
      },
      keyframes: {
        fade: {
          "0%": {
            transform: 'scaleY(0)'
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
