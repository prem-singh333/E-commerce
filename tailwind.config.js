/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#007bff",
        "primary-text": "#333333",
        "secondary": "#f8f9fa",
        "accent": "#ff9f00",
        "hori-btns": "#e6e6e6",
        "arrows": "#666666",
        "heart": "#cccccc",
        "inputs": "#f0f0f0",
        "secondary-text": "#888888",
        "bg-quantity": "#f3f3f3",
        "links": "#007bff",
        "rating": "#00b11e",
        "searchbar": "#fcfcfc",
        "border-color": "#c4c4c4",
      },
      boxShadow: {
        "card": "0px 0px 10px rgba(0, 0, 0, 0.3)"
      },
    },
  },
  plugins: [],
}

