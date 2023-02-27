/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
  ],
  theme: {
    extend: {
      "colors": {
        "logo-color": "#FF914D"
      },
    },
  },
  plugins: [],
}