import { isObject } from 'lodash'

export const reArrangeObj = (unordered = {}) => {
  const ordered = {}
  const keys = Object.keys(unordered)

  keys
    .sort(function (a, b) {
      if (a.toLowerCase() < b.toLowerCase()) return -1
      if (a.toLowerCase() > b.toLowerCase()) return 1
      return 0
    })
    .forEach(function (key) {
      ordered[key] = unordered[key]
    })
  return ordered
}

export const jsonParse = (str) => {
  try {
    const obj = JSON.parse(str)
    if (obj && typeof obj === 'object' && obj !== null) {
      return obj
    }
  } catch (err) {}
  return str
}

export const parseJsonDate = (str) => {
  const parsedData = jsonParse(str)
  if (isObject(parsedData)) {
    const keys = Object.keys(parsedData)
    const stringifiedData = keys[0]
    return jsonParse(stringifiedData)
  }
  return str
}
