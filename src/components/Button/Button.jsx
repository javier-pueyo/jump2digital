import './Button.scss';

function Button({handleClick = () => {}, type = 'button',  className = '', children = ''}) {
  return (
    <button 
      onClick={event => { handleClick(true)}}
      className={className}
      type={type}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button