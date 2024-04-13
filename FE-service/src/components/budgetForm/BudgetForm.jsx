import { useState, useContext, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import { LoginContext } from '../../context/LoginContext'
import { formatDate } from '../../utils/date'
import Modal from '../modal/Modal'
import Button from '../button/Button'
import useBudgetForm from './useBudgetForm'
import styles from './BudgetForm.module.css'

const Input = forwardRef(function Input(props, ref) {
  return (
    <input
      ref={ref}
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
    />
  )
})

const BudgetForm = () => {
  const [selectedValue, setSelectedValue] = useState('income')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const descriptionRef = useRef(null)
  const amountRef = useRef(null)
  const { isLoggedIn } = useContext(LoginContext)
  const { postData } = useBudgetForm()
  const today = new Date()
  const date = formatDate(today)

  const body = {
    date,
    type: selectedValue,
    description: descriptionRef.current?.value,
    amount: amountRef.current?.value,
  }

  const handleSubmit = (event) => {
    if (!isLoggedIn) {
      event.preventDefault()
      return setIsModalOpen(true)
    }
    postData(body)
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
        <Input ref={descriptionRef} type='text' placeholder='Opis' required />
        <Input ref={amountRef} type='number' placeholder='Wartość' required />
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
