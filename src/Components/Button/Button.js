import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ onClick, label, Icon }) {
  return (
    <button
      className="group flex h-10 min-w-min px-4 py-3 font-sans cursor-pointer rounded font-bold justify-center items-center bg-green-500 hover:bg-green-600"
      type="button"
      onClick={onClick}
    >
      <span className="font-bold text-white text-xl">{label}</span>
      <Icon className="ml-2 w-6 h-6 fill-white" />
    </button>
  )
}

Button.defaultProps = {
  Icon: null
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func
}
