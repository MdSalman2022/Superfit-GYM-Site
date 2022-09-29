/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1a609e",

          "secondary": "#7ebfd3",

          "accent": "#8f77f9",

          "neutral": "#2C293D",

          "base-100": "#392F65",

          "info": "#88C6E2",

          "success": "#279B70",

          "warning": "#F5AB61",

          "error": "#F41023",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
}  