import React from 'react'
import Proptypes from 'prop-types'

const Sun = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <title>Sunny</title>
    <path
      className={className}
      // stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
    />
    <circle
      fill="none"
      cx="256"
      cy="256"
      r="80"
      // stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
  </svg>
)

Sun.propTypes = {
  className: Proptypes.string.isRequired
}

export default Sun
