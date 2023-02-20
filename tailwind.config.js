/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    debugScreens:{
      position: ['top', 'left']
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl':'4rem',
      }
    },
    extend: {
    listStyleType: {
      square: 'square',
      roman: 'upper-roman'
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      dm: ['"DM Serif Text"', 'serif' ]
    },
      animation:{
        blob: 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      },
      colors: {
        max_file_yellow_1: '#D19439',
        max_file_yellow_2: '#927628',
        max_file_logo_blue:'#162E40'
      },
      backgroundImage:{
        'background_pic': "url('/public/maxfile/background image.jpg')"
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%'
      }
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-debug-screens'), require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
}
