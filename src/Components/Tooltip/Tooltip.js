import React from 'react'
import PropTypes from 'prop-types'
import './tooltip.css'

const Tooltip = ({ children = '', toolTipText = '', direction = 'bottom' }) => {
  if (!toolTipText) {
    return children
  }
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext font-sans font-normal text-sm">{toolTipText}</span>
    </div>
  )
}

Tooltip.defaultProps = {
  direction: 'bottom'
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  toolTipText: PropTypes.string.isRequired,
  direction: PropTypes.string
}

export default Tooltip
