import { useState, useEffect } from 'react'

import { countBalance } from '../../utils/balance'
import ListElement from './ListElement'
import styles from './List.module.css'
import Select from '../select/Select'
import Button from '../button/Button'

// const transaction = [
//   {
//     id: 1,
//     categoryId: 1,
//     type: 'expense',
//     amount: 100,
//     date: '2024-04-01',
//     description: 'Weekly groceries',
//   },
//   {
//     id: 2,
//     categoryId: 2,
//     type: 'income',
//     amount: 2000,
//     date: '2024-04-01',
//     description: 'Monthly salary',
//   },
// ]

const options = [
  { value: '', label: 'Wszystko' },
  { value: 'expense', label: 'Wydatki' },
  { value: 'income', label: 'Przychody' },
]

const BASE_URL = 'http://localhost:3000'

const List = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const [data, setData] = useState([])

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue)
  }

  useEffect(() => {
    fetchData()
  }, [selectedValue])

  const fetchData = () => {
    fetch(`${BASE_URL}/transactions${selectedValue && `?type=${selectedValue}`}`)
      .then(response => response.json())
      .then(data => setData(data))
  }

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        {/* <Button onClick={fetchData}>Pobierz dane</Button> */}
        <h2>Balance: {countBalance(data)} $</h2>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
      </div>
      {data.map((item) => (
        <ListElement listElement={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
