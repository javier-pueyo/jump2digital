import React from 'react'
import './Button.scss';

function Button({handleClick = null, type = 'button',  className = '', children = ''}) {
  return (
    <button 
      onClick={event => handleClick()}
      className={className}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button