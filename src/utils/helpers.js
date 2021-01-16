import { isObject } from 'lodash'

export const reArrangeObj = (unordered = {}) => {
  const ordered = {}
  if (isObject(unordered)) {
    const keys = Object.keys(unordered)
    if (keys.length) {
      keys
        .sort(function (a, b) {
          if (a.toLowerCase() < b.toLowerCase()) return -1
          if (a.toLowerCase() > b.toLowerCase()) return 1
          return 0
        })
        .forEach(function (key) {
          ordered[key] = unordered[key]
        })
    }
  }
  return ordered
}

export const jsonParse = (str) => {
  try {
    const obj = JSON.parse(str)
    if (obj && typeof obj === 'object' && obj !== null) {
      return reArrangeObj(obj)
    }
  } catch (err) { }
  return str
}

export const parseJsonData = (str) => {
  const parsedData = jsonParse(str)
  if (isObject(parsedData)) {
    const keys = Object.keys(parsedData)
    if (keys.length === 1) {
      const stringifiedData = keys[0]
      return jsonParse(stringifiedData)
    }
    return parsedData
  }
  return str
}

export const getUserSystemTheme = () => {
  const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
  if (userMedia.matches) {
    return 'dark'
  }
  return 'dark'
}
