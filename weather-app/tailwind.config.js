/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        'screen-minus-lg&xl': 'calc(100vh - 204px)',
        'screen-minus-sm&md': 'calc(100vh - 252px)',
      },
      animation: {
        'leftToRightSlow': '1s leftToRightSlow',
        'rightToLeftSlow': '1s rightToLeftSlow',
        'runSun' : '1s linear runSun',
        'enterWelCome' : '1.3s linear enterWelCome',
      },
      keyframes: {
        leftToRightSlow: {
          '0%': { 'transform': 'translateX(-100%)' },
          '100%': { 'transform': 'translateX(0%)' },
        },
        rightToLeftSlow: {
          '0%': { 'transform': 'translateX(100%)' },
          '100%': { 'transform': 'translateX(0%)' },
        },
        runSun: {
          '0%': { 'transform': 'rotate(0deg)' },
          '100%': { 'transform': 'rotate(360deg)' },
        },
        enterWelCome: {
          '0%': { 'opacity': '0', 'transform': 'translateY(-100%)' },
          '100%': { 'opacity': '1',  'transform': 'translateY(0%)'},
        },
      }
    },
  },
  plugins: [],
}