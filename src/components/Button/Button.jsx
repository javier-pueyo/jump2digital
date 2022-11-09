import React from 'react'
import './Button.scss';

function Button({handleClick = null, type = 'button',  className = '', children = ''}) {
  return (
    <button 
      onClick={event => handleClick(true)}
      className={className}
      type={type}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button