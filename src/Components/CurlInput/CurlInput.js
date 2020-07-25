import React from 'react'

const CurlInput = ({ label = '', onChange, value = '' }) => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h3>{label}</h3>
      <textarea
        placeholder="Paste Your Curl Here"
        style={{
          width: '90%',
          height: 250,
          resize: 'none',
          border: '3px solid #adb5bd',
          padding: 20,
          borderRadius: 10,
          fontFamily: 'Poppins'
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default CurlInput
