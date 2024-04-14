import Form from '../form/Form'
import useCardData from '../../hooks/useCardData'
import styles from './BudgetForm.module.css'

const BudgetForm = () => {
  const { postData } = useCardData()

  return (
    <div className={styles.formContainer}>
      <h2>Dodaj pozycję</h2>
      <Form handleBody={postData} />
    </div>
  )
}

export default BudgetForm
