/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
  ],
  theme: {
    extend: {
      "colors": {
        "blue": "#2dc1f7"
      },
    },
  },
  plugins: [],
}