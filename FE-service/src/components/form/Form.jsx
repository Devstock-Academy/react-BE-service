import { useState, useContext } from 'react'
import { createPortal } from 'react-dom'
import { LoginContext } from '../../context/LoginContext'
import { formatDate } from '../../utils/date'
import Modal from '../modal/Modal'
import Button from '../button/Button'
import styles from './Form.module.css'

const Form = ({ handleBody }) => {
  const [selectedValue, setSelectedValue] = useState('income')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [description, setDescription] = useState(null)
  const [amount, setAmount] = useState(null)
  const { isLoggedIn } = useContext(LoginContext)
  const today = new Date()
  const date = formatDate(today)

  const body = {
    date,
    type: selectedValue,
    description,
    amount,
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isLoggedIn) {
      return setIsModalOpen(true)
    }
    handleBody(body)
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
    <div>
      <form onSubmit={handleSubmit} className={styles.budgetForm}>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type='text'
          placeholder='Opis'
          required
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type='number'
          placeholder='Wartość'
          required
        />
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

export default Form
