/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        primary: '#bc49d3',
        grey: '#949494',
        neoWhite:'#FCFCFD',
        appWhite:'#FCFCFD',
        appBlack:'#344054',
        'blue': {
          100: '#F8D7FF',
          200: '#ECBDF6',
          300: '#DE8AEF',
          400: '#bc49d3',
          500: '#bc49d3',
          600: '#bc49d3',
          700: '#781D8A',
          800: '#781D8A',
          900: '#430A4F',
        }
        
      },
      fontFamily: {
        sans: ['ClashDisplay-Variable'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

