import { useMemo } from 'react'
import { countBalance } from '../../utils/balance'
import { Select } from '../../components'
import ListElement from './ListElement'
import Loading from './Loading'
import useListData from './useListData'
import styles from './List.module.css'

const options = [
  { value: '', label: 'Wszystko' },
  { value: 'expense', label: 'Wydatki' },
  { value: 'income', label: 'Przychody' },
]

const List = () => {
  const { data, isLoading, selectedValue, handleSelectChange, balanceData } =
    useListData()

  const balanceInfo = useMemo(() => countBalance(balanceData), [balanceData])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.bodyContent}>
      <div className={styles.listHeader}>
        <h2>Balance: {balanceData ? balanceInfo : 0} $</h2>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          {data?.map((item) => (
            <ListElement listElement={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
