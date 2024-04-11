import { useState } from 'react'
import Button from '../button/Button'
import './Header.module.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const url = `http://localhost:3000/users?username=${username}&password=${password}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.length > 0) {
        setLoggedIn(true)
        alert('Logowanie powiodło się!')
      } else {
        alert('Nieprawidłowe dane logowania')
        setLoggedIn(false)
      }
    } catch (error) {
      console.error('Failed to connect to the server')
      setLoggedIn(false)
    }
  }

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
      <Button type='submit'>Login</Button>
    </form>
  )
}

export default LoginForm
