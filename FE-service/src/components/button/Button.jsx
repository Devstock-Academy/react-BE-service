import styles from './Button.module.css'

const Button = ({ children, iconButton, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={iconButton ? styles.imgBtn : styles.img}
    >
      {children}
    </button>
  )
}

export default Button
