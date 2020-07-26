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

// export const isJSON = (str) => {
//   try {
//     const obj = JSON.parse(str)
//     if (obj && typeof obj === 'object' && obj !== null) {
//       return true
//     }
//   } catch (err) {}
//   return false
// }
