import styles from './Header.module.css'
import LoginForm from './LoginForm'

const Header = ({ children }) => {
  return (
    <>
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
      <div className={styles.image}>
        <h1>{children}</h1>
      </div>
    </>
  )
}

export default Header
