/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: '#808080',
        black: '#000000',
        white: '#ffffff',
        purple: 'rgb(96,0,96)',
        purpleDark: "rgb(64,0,64)",
        purplelight: 'rgb(112,0,112)',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bubblegum: '#ff77e9',
        bermuda: '#78dcca'
      },
      width: {
        "120": "30rem",
        "144": "36rem",
        "192": "48rem"
      },
      maxWidth: {
        "8xl": "88rem",
        "8.5xl": "104rem",
        "9xl": "112rem"
      }
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
