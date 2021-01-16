import React from 'react'
import PropTypes from 'prop-types'
import Trash from '../../icons/Trash'
import Tooltip from '../Tooltip/Tooltip'

const CurlInput = ({ label = '', onChange, value = '', placeholder = '', onClear = () => null }) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h3 className="text-primary font-medium font-sans text-xl">{label}</h3>
      <textarea
        style={{ width: '90%' }}
        className="bg-gray-100 dark:bg-primary-900 resize-none mt-2 h-44 border-2 border-solid border-gray-300 dark:border-gray-700 p-4 rounded text-xs font-mono font-normal text-black-800  dark:text-gray-50"
        placeholder={placeholder || `Paste Your ${label || 'curl'} Here`}
        value={value}
        onChange={onChange}
      />
      <Tooltip toolTipText="Clear curl">
        <button
          type="button"
          onClick={onClear}
          className="bg-gray-150 hover:bg-gray-100 group mt-4 flex flex-row items-center rounded-full"
        >
          <Trash className="w-10 h-10   p-2 fill-gray600 group-hover:fill-gray800" />
        </button>
      </Tooltip>
    </div>
  )
}

CurlInput.defaultProps = {
  placeholder: 'Paste Your Curl Here'
}

CurlInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onClear: PropTypes.func.isRequired
}

export default CurlInput
