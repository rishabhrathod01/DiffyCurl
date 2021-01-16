const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
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
        gray800: theme('colors.gray.800')
      }),
      stroke: (theme) => ({
        white: colors.white,
        gray400: theme('colors.gray.400'),
        gray600: theme('colors.gray.600'),
        gray800: theme('colors.gray.800')
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
