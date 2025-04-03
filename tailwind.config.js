/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FA7436',
          black: '#222222',
        },
        secondary: {
          blue: '#4086F4',
          yellow: '#FFB60A',
        },
        button: {
          DEFAULT: '#FA7436',
        },
        background: {
          orange: '#FA7436',
          white: '#FEFCFB',
          ash: '#F7F8FC',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Volkhov', 'serif'],
      },
      fontSize: {
        h1: '64px',
        h2: '48px',
        h3: '24px',
        title: '24px',
        p1: '20px',
        p2: '18px',
        content: '16px',
        nav: '16px',
      },
      maxWidth: {
        content: '1170px',
      },
      screens: {
        xl: '1920px',
      },
    },
  },
  plugins: [],
};
