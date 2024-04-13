import { useContext } from 'react'
import { NotificationContext } from './context/NotificationContext'
import { Header, List, Notification } from './components'

function App() {
  const { notification, notificationVariant } = useContext(NotificationContext)

  return (
    <>
      {notification && (
        <Notification variant={notificationVariant} message={notification} />
      )}
      <Header>Budget tracker</Header>
      <List />
      <footer>Budget tracker ©</footer>
    </>
  )
}

export default App
