import Button from '../button/Button'
import useHeader from './useHeader'
import './Header.module.css'

const LoginForm = () => {
  const {
    handleSubmit,
    setUsername,
    setPassword,
    username,
    password,
    isLoggedIn,
  } = useHeader()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type='submit'>{isLoggedIn ? 'Logout' : 'Login'}</Button>
    </form>
  )
}

export default LoginForm
