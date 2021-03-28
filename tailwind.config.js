const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.blueGray,
      blue: colors.blue,
      cyan: colors.cyan
    },
    listStyleType: {
      square: 'square'
    },
    extend: {
      fontFamily: {
        sourcesans: ['"Source Sans Pro"', 'sans-serif'],
        sourcecode: ['"Source Code Pro"', 'monospace']
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        layout: '200px minmax(900px, 1fr) 100px'
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark']
    }
  },
  plugins: []
};
