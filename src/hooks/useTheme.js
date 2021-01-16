import React from 'react'
import { getUserSystemTheme } from '../utils/helpers'

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
}

const userInitialTheme = localStorage.getItem('theme') || getUserSystemTheme() || THEMES.LIGHT
document.body.setAttribute('data-theme', userInitialTheme)
if (userInitialTheme === THEMES.DARK) {
  document.querySelector('html').classList.add(THEMES.DARK)
}

const ThemeContext = React.createContext({ theme: userInitialTheme, toggleTheme: () => null })

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(userInitialTheme) // Default theme is light

  // To toggle between dark and light modes
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.body.setAttribute('data-theme', 'dark')
      document.querySelector('html').classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      document.querySelector('html').classList.remove('dark')
      document.body.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }

/* Rewrite the "useTheme" hook to pull the theme value out of the context */
export const useTheme = () => {
  /* We can use the "useContext" Hook to acccess a context from within another Hook, remember, Hooks are composable! */
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  return [theme, toggleTheme]
}

export const withTheme = (WrappedComponent) => (props) => {
  const [theme, toggleTheme] = useTheme()
  const newProps = {
    ...props,
    theme,
    toggleTheme
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrappedComponent {...newProps} />
}
