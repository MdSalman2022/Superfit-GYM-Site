/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f9cfb3",

          "secondary": "#108c1d",

          "accent": "#2dc4b7",

          "neutral": "#201B31",

          "base-100": "#EAE7F3",

          "info": "#9DD8F0",

          "success": "#1A9951",

          "warning": "#B5930D",

          "error": "#EF2E4E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
}  