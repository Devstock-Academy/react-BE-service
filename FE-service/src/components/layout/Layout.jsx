import { useContext } from 'react'
import { NotificationContext } from '../../context/NotificationContext'
import { Header, Notification } from '../../components'
import styles from './Layout.module.css'

const routes = [
  { name: 'Home', id: 1 },
  { name: 'Podsumowanie', id: 2 },
  { name: 'Organizer', id: 3 },
]

const Layout = ({ children }) => {
  const { notification, notificationVariant } = useContext(NotificationContext)

  return (
    <>
      {notification && (
        <Notification variant={notificationVariant} message={notification} />
      )}
      <Header>Budget tracker</Header>
      <div className={styles.layoutBody}>
        <div className={styles.navBar}>
          {routes.map(({ name, id }) => (
            <div key={id}>{name}</div>
          ))}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}

export default Layout
