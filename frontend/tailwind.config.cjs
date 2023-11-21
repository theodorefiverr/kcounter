/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite.{js,ts}"
],
  theme: {
    extend: {
      daisyui: {
        darkTheme: false,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require('flowbite/plugin')
    
    // require("daisyui"),
    // require("prettier-plugin-tailwindcss")
  ],
};
