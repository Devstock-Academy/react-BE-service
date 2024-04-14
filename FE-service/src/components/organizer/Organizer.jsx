import { useReducer } from 'react'
import useCardData from '../../hooks/useCardData'
import { activityReducer } from '../../reducers/activitiesReducer'
import { ListElement, Button, Form } from '..'
import styles from './Organizer.module.css'

const Organizer = () => {
  const [state, dispatch] = useReducer(activityReducer, {
    activities: [
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
    ],
    isFormShown: false,
  })
  const { postData } = useCardData()

  function addItem(body) {
    dispatch({ type: 'add', body })
  }

  function deleteItem(id) {
    dispatch({ type: 'delete', id })
  }

  function finishItem(id) {
    dispatch({ type: 'send', id, postData })
  }

  return (
    <div className={styles.container}>
      <div className={styles.actionBar}>
        <h2>Planowane aktywności</h2>
        <div>
          <Button onClick={() => dispatch({ type: 'togleForm' })}>
            {state.isFormShown ? 'Ukryj formularz' : 'Pokaż formularz'}
          </Button>
        </div>
      </div>
      {state.isFormShown && <Form handleBody={addItem} />}
      <h3>Lista</h3>
      <div className={styles.list}>
        {state.activities?.map((item) => (
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
export default Organizer
