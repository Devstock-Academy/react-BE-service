import styles from './Notification.module.css'

const Notification = ({ variant = 'primary', message = 'Notification' }) => {
  return (
    <div className={variant === 'primary' ? styles.seccess : styles.error}>
      {message}
    </div>
  )
}

export default Notification
