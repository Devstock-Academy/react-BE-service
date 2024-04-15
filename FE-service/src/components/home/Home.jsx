import { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

const url = `http://localhost:3000/users/1`

const Home = () => {
  const [userData, setUserData] = useState(null)
  const { isLoggedIn } = useContext(LoginContext)

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(url)
          const data = await response.json()
          setUserData(data)
        } catch (error) {
          console.error('Failed to connect to the server')
        }
      }
      fetchUserData()
    }
  }, [isLoggedIn])

  if (!isLoggedIn)
    return (
      <div>
        <h2>Aplikacja dostępna dla zalogowanych użytkowników!</h2>
      </div>
    )

  return (
    <div>
      <h2>Witaj {userData?.username} &#128075;</h2>
      <h3>
        Dzięki aplikacji Budget Tracker z łatwością zapanujesz nad swoimi
        wydatkami!
      </h3>
      <ul>
        <li>
          W sekcji <b>Podsumowanie</b> znajdziesz bilans swoich wydatków.
        </li>
        <li>
          W sekcji <b>Organizer</b> masz możliwość zarządzania swoimi wydatkami.
        </li>
      </ul>
    </div>
  )
}

export default Home
