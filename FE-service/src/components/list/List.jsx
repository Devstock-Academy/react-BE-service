import { useMemo, useState } from 'react'
import { countBalance } from '../../utils/balance'
import { Select, Button, ListElement } from '../../components'
import Loading from './Loading'
import ListHeader from './ListHeader'
import useListData from './useListData'
import styles from './List.module.css'

const options = [
  { value: '', label: 'Wszystko' },
  { value: 'expense', label: 'Wydatki' },
  { value: 'income', label: 'Przychody' },
]

const List = () => {
  const [isListVisible, setIsListVisible] = useState(true)
  const { data, isLoading, selectedValue, handleSelectChange, balanceData } =
    useListData()

  const balanceInfo = useMemo(() => countBalance(balanceData), [balanceData])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.bodyContent}>
      <ListHeader balanceInfo={balanceInfo} />
      <div className={styles.actionBar}>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
        <Button onClick={() => setIsListVisible((prev) => !prev)}>
          {isListVisible ? 'Ukryj listę' : 'Pokaż listę'}
        </Button>
      </div>

      {isListVisible && (
        <div className={styles.list}>
          {data?.map((item) => (
            <ListElement listElement={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default List
