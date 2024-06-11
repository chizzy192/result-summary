/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gradientColorStops: {
        'slateblue': 'hsl(252, 100%, 67%)',
        'royalblue': 'hsl(241, 81%, 54%)',
        'violetblue': 'hsla(256, 72%, 46%, 1)',
        'persianblue': 'hsla(241, 72%, 46%, 0)',
        'light-red': 'hsl(0, 100%, 67%)',
      },
    },
  },
  plugins: [],
}