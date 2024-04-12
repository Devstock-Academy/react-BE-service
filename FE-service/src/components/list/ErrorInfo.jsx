import styles from './List.module.css'

const ErrorInfo = ({ error }) => {
  return <div className={styles.error}>{error}</div>
}

export default ErrorInfo
