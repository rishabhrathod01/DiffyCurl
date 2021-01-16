const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#e9e9e9',
          100: '#D6D6D6',
          200: '#ADADAD',
          300: '#848484',
          400: '#5B5B5B',
          500: '#333333',
          600: '#282828',
          700: '#1E1E1E',
          800: '#191919',
          900: '#0A0A0A'
        },
        gray: {
          150: colors.coolGray[200]
        }
      },
      backgroundColor: {
        'primary-100': 'var(--bg-light-color)',
        'primary-900': 'var(--bg-dark-color)',
        primary: 'var(--bg-color)'
      },
      textColor: {
        'primary-100': 'var(--fg-light-color)',
        primary: 'var(--fg-color)'
      },
      fill: (theme) => ({
        white: colors.white,
        gray400: theme('colors.gray.400'),
        gray600: theme('colors.gray.600'),
        gray800: theme('colors.gray.800'),
        black: {
          light: '#e9e9e9',
          100: '#CCCCCC',
          200: '#B2B2B2',
          300: '#999999',
          400: '#7F7F7F',
          500: '#666666',
          600: '#4C4C4C',
          700: '#333333',
          800: '#191919',
          900: '#060707'
        }
      }),
      stroke: (theme) => ({
        white: colors.white,
        gray400: theme('colors.gray.400'),
        gray600: theme('colors.gray.600'),
        gray800: theme('colors.gray.800'),
        black: {
          light: '#e9e9e9',
          100: '#CCCCCC',
          200: '#B2B2B2',
          300: '#999999',
          400: '#7F7F7F',
          500: '#666666',
          600: '#4C4C4C',
          700: '#333333',
          800: '#191919',
          900: '#060707'
        }
      }),
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['FiraCode', 'monospace']
      }
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus', 'group-focus', 'group-hover'],
      stroke: ['hover', 'focus', 'group-focus', 'group-hover'],
      backgroundOpacity: ['dark']
    }
  },
  plugins: []
}
