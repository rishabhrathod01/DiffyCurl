const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#e9e9e9',
          100: '#bcbcbd',
          200: '#909092',
          300: '#636466',
          400: '#36373a',
          500: '#202124',
          600: '#1a1a1d',
          700: '#131416',
          800: '#0d0d0e',
          900: '#060707'
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
          100: '#bcbcbd',
          200: '#909092',
          300: '#636466',
          400: '#36373a',
          500: '#202124',
          600: '#1a1a1d',
          700: '#131416',
          800: '#0d0d0e',
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
          100: '#bcbcbd',
          200: '#909092',
          300: '#636466',
          400: '#36373a',
          500: '#202124',
          600: '#1a1a1d',
          700: '#131416',
          800: '#0d0d0e',
          900: '#060707'
        }
      }),
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace']
      }
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus', 'group-focus', 'group-hover'],
      stroke: ['hover', 'focus', 'group-focus', 'group-hover']
    }
  },
  plugins: []
}
