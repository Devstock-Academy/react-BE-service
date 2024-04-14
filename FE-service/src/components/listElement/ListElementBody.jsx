import style from './ListElement.module.css'

const ListElementBody = ({ amount, type }) => {
  const isIncome = type === 'income'
  return (
    <div className={style.amountRow}>
      <span className={style.amount}>
        {isIncome ? '+' : '-'} {amount} $
      </span>
      <div className={isIncome ? style.income : style.expense}>{type}</div>
    </div>
  )
}

export default ListElementBody
