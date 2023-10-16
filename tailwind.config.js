/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'blueHover' : '#1b73f4',
        'violetHover' : '#e80dfd',
        'darkBlueHover' : '#2428cc',
        'lightBlueHover' : '#7376ff',
      }
    },
  },
  plugins: [],
}