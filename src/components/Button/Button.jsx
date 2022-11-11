import './Button.scss';

function Button({onClick, type = 'button',  className = '', children = ''}) {

  const usedOnClick = (event) => {
    return onClick ? onClick(event) : null
  }
  
  return (
    <button 
      onClick={event => { usedOnClick(event) }}
      className={className}
      type={type}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button