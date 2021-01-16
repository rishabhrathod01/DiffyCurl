import React from 'react'
import PropTypes from 'prop-types'
import Trash from '../../icons/Trash'

const CurlInput = ({ label = '', onChange, value = '', placeholder = '', onClear = () => null }) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h3 className="text-primary font-medium font-sans text-lg">{label}</h3>
      <textarea
        style={{ width: '90%' }}
        className="bg-gray-100 dark:bg-gray-700 resize-none mt-2 h-40 border-2 border-solid border-gray-300 p-4 rounded text-xs font-mono font-light text-primary-100"
        placeholder={placeholder || `Paste Your ${label || 'cURL'} Here`}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onClear}
        className="bg-gray-150 hover:bg-gray-100 group mt-4 flex flex-row items-center rounded-full"
      >
        <Trash className="w-10 h-10   p-2 fill-gray600 group-hover:fill-gray800" />
      </button>
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
