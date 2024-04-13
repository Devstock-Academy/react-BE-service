import { useState, useContext } from 'react'
import { createPortal } from 'react-dom'
import { LoginContext } from '../../context/LoginContext'
import { formatDate } from '../../utils/date'
import Modal from '../modal/Modal'
import Button from '../button/Button'
import useBudgetForm from './useBudgetForm'
import styles from './BudgetForm.module.css'

const BudgetForm = () => {
  const [selectedValue, setSelectedValue] = useState('income')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isLoggedIn } = useContext(LoginContext)
  const { postData } = useBudgetForm()
  const today = new Date()
  const date = formatDate(today)

  const handleSubmit = (event) => {
    if (!isLoggedIn) {
      event.preventDefault()
      setIsModalOpen(true)
      return
    }

    postData()
  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const modal = createPortal(
    <Modal variant='secondary' onClose={() => setIsModalOpen(false)}>
      Dodawanie tylko dla zalogowanych użytkowników
    </Modal>,
    document.body
  )

  return (
    <div className={styles.formContainer}>
      <h2>Dodaj pozycję</h2>
      <form onSubmit={handleSubmit} className={styles.budgetForm}>
        <input type='text' placeholder='Opis' required />
        <input type='number' placeholder='Wartość' required />
        <div>
          <label>
            <input
              type='radio'
              value='income'
              checked={selectedValue === 'income'}
              onChange={handleChange}
            />
            Przychód
          </label>
          <label>
            <input
              type='radio'
              value='expense'
              checked={selectedValue === 'expense'}
              onChange={handleChange}
            />
            Koszt
          </label>
        </div>
        <Button type='submit'>Dodaj</Button>
        {isModalOpen && modal}
      </form>
    </div>
  )
}

export default BudgetForm
