import React from 'react'

export default function Button({ onClick, label, color }) {
  return (
    <button
      style={{
        flex: 1,
        height: 40,
        minWidth: 100,
        maxWidth: 140,
        backgroundColor: color || '#125dec',
        border: 'none',
        borderRadius: 10,
        fontFamily: 'Poppins',
        fontWeight: '600',
        cursor: 'pointer',
        margin: 10
      }}
      type="button"
      onClick={onClick}
    >
      <span style={{ color: 'white', fontSize: '16px' }}>{label}</span>
    </button>
  )
}
