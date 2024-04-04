import { useState } from 'react'

import { countBalance } from '../../utils/balance'
import ListElement from './ListElement'
import styles from './List.module.css'
import Select from '../select/Select'

const transaction = [
  {
    id: 1,
    categoryId: 1,
    type: 'expense',
    amount: 100,
    date: '2024-04-01',
    description: 'Weekly groceries',
  },
  {
    id: 2,
    categoryId: 2,
    type: 'income',
    amount: 2000,
    date: '2024-04-01',
    description: 'Monthly salary',
  },
]

const options = [
  { value: '', label: 'Wszystko' },
  { value: 'expanse', label: 'Wydatki' },
  { value: 'income', label: 'Przychody' },
]

const List = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue)
  }

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <h2>Balance: {countBalance(transaction)} $</h2>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
      </div>
      {transaction.map((item) => (
        <ListElement listElement={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
