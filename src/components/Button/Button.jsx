import React from 'react'
import './Button.scss';

function Button({className = '', children}) {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button