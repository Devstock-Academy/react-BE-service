import { useContext } from 'react'
import { NotificationContext } from './context/NotificationContext'
import {
  Header,
  List,
  Notification,
  BudgetForm,
  FeatureActivities,
} from './components'

function App() {
  const { notification, notificationVariant } = useContext(NotificationContext)

  return (
    <>
      {notification && (
        <Notification variant={notificationVariant} message={notification} />
      )}
      <Header>Budget tracker</Header>
      {/* <List />
      <BudgetForm /> */}
      <FeatureActivities />
    </>
  )
}

export default App
