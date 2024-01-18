/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
  ],
  theme: {
    darkMode: 'class',
    extend: {},
    screens: {
      phone:{'max': '560px'},
      tablet:{'min': '1000px'},
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: {"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e"},
      'blue-light': '#91D7F2',
      'blue-dark': '#0C3C59',
      'light': '#EBF1F2',
      'light-tint1': '#ebf1f180',
      'orange': '#F2594B',
      'red': '#FF0000',
      'yellow-dark': '#FFA500',
      'yellow-light': '#FFFFE0',
      'dark': '#121212',
      'gray-light': '#F8F8F8',
      'green':'#128c7e',
      'beige':'#fff',
      'beige-light':'#efefefb5',
      'gray':'#909090',
      'gray-tint-2': '#00000020',
      'dark-tint-1': '#4c5265',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'alfa-slab': ['"Alfa Slab One"', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'title': ['Belanosima', 'sans-serif'],
      'title-1': ['Merriweather Sans', 'sans-serif']
    }
  },
  plugins: [],
}
