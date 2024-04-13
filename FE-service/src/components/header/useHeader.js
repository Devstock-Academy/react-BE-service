import { useState, useContext } from 'react'
import { NotificationContext } from '../../context/NotificationContext'
import { LoginContext } from '../../context/LoginContext'

const useHeader = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext)
  const { handleNotification } = useContext(NotificationContext)

  const handleSubmit = async (event) => {
    if (!isLoggedIn) {
      event.preventDefault()
      const url = `http://localhost:3000/users?username=${username}&password=${password}`

      try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.length > 0) {
          setLoggedIn(true)
          handleNotification('Logowanie powiodło się!')
          localStorage.setItem('userIsLoggedIn', true)
        } else {
          handleNotification('Nieprawidłowe dane logowania', 'secondary')
          setLoggedIn(false)
        }
      } catch (error) {
        console.error('Failed to connect to the server')
        setLoggedIn(false)
      }
    } else {
      setLoggedIn((prev) => !prev)
      setPassword('')
      setUsername('')
      localStorage.setItem('userIsLoggedIn', false)
      handleNotification('Użytkownik został wylogowany')
    }
  }

  return {
    handleSubmit,
    setUsername,
    setPassword,
    username,
    password,
    isLoggedIn,
  }
}

export default useHeader
