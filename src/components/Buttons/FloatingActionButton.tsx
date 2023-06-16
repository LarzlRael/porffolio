import './Buttons.scss'

interface PropsFloatingActionButton {
  onClick: () => void
  left?: string
  right?: string
  bottom?: string
  top?: string
  color?: string
  icon?: string
  backgroundColor?: string
  size?: string
}
export const FloatingActionButton = (
  propsFloatingActionButton: PropsFloatingActionButton,
) => {
  const {
    onClick,
    size = '30px',
    color = 'white',
    backgroundColor = 'blue',
  } = propsFloatingActionButton
  return (
    <button
      onClick={onClick}
      className="div"
      style={{
        background: backgroundColor,
        width: size,
        height: size,
        color: color,
        position: 'fixed',
        border: 'none',
        borderRadius: '50%',
        outline: 'none',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        cursor: 'pointer',
        ...propsFloatingActionButton,
      }}
    >
      <i className="fa fa-plus" aria-hidden="true"></i>
    </button>
  )
}
