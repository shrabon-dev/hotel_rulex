/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto':["Roboto", 'sans-serif'],
        'anglecia':['Anglecia'],
      },
      colors:{
        'btn':'#BF885E',
        'card':'#664831',
        'main':'#473D35',
        'secondary':'#7A7176',
        'third':'#D9945F',
        'dark_title':'#21160E',
        'dark':'#21160E',
      }
    },
  },
  plugins: [],
}
