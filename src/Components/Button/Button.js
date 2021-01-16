import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '../Tooltip/Tooltip'

export default function Button({ onClick, label, Icon, toolTipText = '', disable = false }) {
  return (
    <Tooltip toolTipText={!disable ? toolTipText : ''}>
      <button
        disable={disable}
        className={`group flex h-10 min-w-min px-4 py-3 font-sans  rounded font-bold justify-center items-center
         ${disable ? 'cursor-not-allowed bg-green-400' : 'cursor-pointer bg-green-500 hover:bg-green-600'} `}
        type="button"
        onClick={onClick}
      >
        <span className="font-bold text-white text-xl">{label}</span>
        <Icon className="ml-2 w-6 h-6 fill-white" />
      </button>
    </Tooltip>
  )
}

Button.defaultProps = {
  Icon: null,
  toolTipText: '',
  disable: false
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func,
  toolTipText: PropTypes.string,
  disable: PropTypes.bool
}
