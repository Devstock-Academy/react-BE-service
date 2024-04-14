import { useState } from 'react'
import useCardData from '../../hooks/useCardData'
import { ListElement, Button, Form } from '../../components'
import styles from './FeatureActivities.module.css'

const FeatureActivities = () => {
  const [isFormShown, setIsFormShown] = useState(false)
  const [activities, setActivities] = useState([
    {
      description: 'Zapłacić rachunki',
      amount: 100,
      type: 'expense',
      id: 1,
      date: '2024-04-01',
    },
    {
      description: 'Dentysta',
      amount: 400,
      type: 'expense',
      id: 2,
      date: '2024-04-01',
    },
  ])
  const { postData } = useCardData()

  function addItem(body) {
    setActivities((prevTodos) => [
      ...prevTodos,
      {
        ...body,
        id: Math.random(),
      },
    ])
  }

  function deleteItem(id) {
    setActivities((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  function finishItem(id) {
    const { id: elementId, ...rest } = activities.find(
      ({ id: cardId }) => cardId === id
    )
    setActivities((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== elementId)
    )
    postData(rest)
  }

  return (
    <div className={styles.container}>
      <div className={styles.actionBar}>
        <h2>Planowane aktywności</h2>
        <div>
          <Button onClick={() => setIsFormShown((prev) => !prev)}>
            {isFormShown ? 'Ukryj formularz' : 'Pokaż formularz'}
          </Button>
        </div>
      </div>
      {isFormShown && <Form handleBody={addItem} />}
      <h3>Lista</h3>
      <div className={styles.list}>
        {activities.map((item) => (
          <ListElement
            key={item.id}
            listElement={item}
            handleCardDelete={deleteItem}
            handleCardApproval={finishItem}
          />
        ))}
      </div>
    </div>
  )
}
export default FeatureActivities
