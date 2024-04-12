import { useEffect, useState } from 'react'

import { countBalance } from '../../utils/balance'
import { Select } from '../../components'
import ListElement from './ListElement'
import ErrorInfo from './ErrorInfo'
import Loading from './Loading'
import styles from './List.module.css'

const options = [
  { value: '', label: 'Wszystko' },
  { value: 'expense', label: 'Wydatki' },
  { value: 'income', label: 'Przychody' },
]

const url = 'http://localhost:3000/transactions'

const List = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue)
  }

  useEffect(() => {
    let isCancelled = false
    setIsLoading(true)
    fetch(`${url}/${selectedValue && `?type=${selectedValue}`}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw new Error('Coś poszło nie tak...')
      })
      .then((data) => {
        if (isCancelled) {
          return
        }
        setIsLoading(false)
        setData(data)
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e)
      })
    return () => {
      isCancelled = true
    }
  }, [selectedValue])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorInfo error={error.message} />
  }

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <h2>Balance: {data ? countBalance(data) : 0} $</h2>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
      </div>
      {data?.map((item) => (
        <ListElement listElement={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
