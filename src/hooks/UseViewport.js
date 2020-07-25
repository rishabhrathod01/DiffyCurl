import React from 'react'
import throttle from 'lodash/throttle'

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
// eslint-disable-next-line import/prefer-default-export
export const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */

  let initDisplayDevice = 'mobile'
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  if (windowWidth <= 600) {
    initDisplayDevice = 'mobile'
  } else if (windowWidth <= 900) {
    initDisplayDevice = 'desktop'
  } else if (windowWidth <= 1366) {
    initDisplayDevice = 'desktop'
  } else {
    initDisplayDevice = 'desktop'
  }

  const [width, setWidth] = React.useState(windowWidth)
  const [height, setHeight] = React.useState(windowHeight)
  const [displayDevice, setDisplayDevice] = React.useState(initDisplayDevice)

  const handleWindowResize = throttle(() => {
    const currentWidth = window.innerWidth
    let newDisplayDevice = displayDevice
    if (currentWidth <= 500) {
      newDisplayDevice = 'mobile'
    } else if (currentWidth <= 900) {
      newDisplayDevice = 'desktop'
    } else if (currentWidth <= 1366) {
      newDisplayDevice = 'desktop'
    } else {
      newDisplayDevice = 'desktop'
    }
    if (displayDevice !== newDisplayDevice) {
      setDisplayDevice(newDisplayDevice)
    }
    setWidth(currentWidth)
    setHeight(window.innerHeight)
  }, 400)

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })
  const windowObj = { windowWidth: width, windowHeight: height, displayDevice }
  return windowObj
}
