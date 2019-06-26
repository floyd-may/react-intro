import React from 'react'
export function Borderizationator ({ children }) {
  const style = {
    borderWidth: '4px',
    borderStyle: 'solid',
    borderColor: 'green',
    margin: '8px',
    padding: '8px'
  }
  return (<div style={style}>{children}</div>)
}
