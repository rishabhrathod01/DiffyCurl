import React from 'react'
import Github from '../../icons/Github'
import Sun from '../../icons/Sun'
import Moon from '../../icons/Moon'
import { useTheme } from '../../hooks/useTheme'
import Tooltip from '../Tooltip/Tooltip'

const Header = () => {
  const [theme, toggleTheme] = useTheme()

  const ThemeIcon =
    theme !== 'light' ? (
      <Sun className="h-6 w-6 fill-gray400 group-focus:fill-gray800 group-hover:fill-gray800 stroke-gray600 group-hover:stroke-gray800" />
    ) : (
        <Moon className="h-6 w-6 p-1 fill-gray400 group-focus:fill-gray800 group-hover:fill-gray800 stroke-gray600 group-hover:stroke-gray800" />
      )

  return (
    <div className="fixed w-full top-0 flex justify-between items-center mb-10 h-16 px-14 shadow z-10 bg-white dark:bg-black-800 ">
      <div className="py-6">
        <h1 className="text-3xl text-primary">
          Diffy<span className="font-semibold m-0 p-0">CURL</span>
        </h1>
      </div>

      <div className="flex flex-row items-center justify-evenly">
        <div className="ml-6">
          <Tooltip toolTipText="Toggle theme">
            <button
              className="group flex flex-row items-center justify-center bg-gray-150  hover:bg-gray-100 p-2 rounded-full"
              onClick={() => toggleTheme()}
              type="button"
            >
              {ThemeIcon}
            </button>
          </Tooltip>
        </div>
        <div className="ml-6">
          <Tooltip toolTipText="Checkout code">
            <a
              href="https://github.com/Rishabh-Rathod/DiffyCurl"
              className="group flex flex-row justify-center items-center px-2 py-1 bg-gray-150 hover:bg-gray-100  rounded"
            >
              <Github className="h-8 w-8 fill-gray600 group-focus:fill-gray800 group-hover:fill-gray800" />
              <span className="text-xl ml-2 mr-2 font-semibold text-gray-600 group-hover:text-gray-900">Github</span>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Header
