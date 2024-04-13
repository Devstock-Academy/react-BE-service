import { memo } from 'react'
import styles from './List.module.css'

const ListHeaderComponent = ({ balanceInfo }) => {
  return (
    <div className={styles.listHeader}>
      <h2>Saldo: {balanceInfo ? balanceInfo.balance : 0} $</h2>
      <h3>Przychód: {balanceInfo ? balanceInfo.revenue : 0} $</h3>
      <h3>Wydatki: {balanceInfo ? balanceInfo.spendings : 0} $</h3>
    </div>
  )
}

const ListHeader = memo(ListHeaderComponent)

export default ListHeader
