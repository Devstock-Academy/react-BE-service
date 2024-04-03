import style from './List.module.css'

const ListElement = ({ listElement }) => {
  const { type, amount, date, description } = listElement || {}

  const isIncome = type === 'income'

  return (
    <div className={style.listElement}>
      <>
        <div className={style.description}>{description}</div>
        <div className={style.amountRow}>
          <span className={style.amount}>
            {isIncome ? '+' : '-'} {amount}
          </span>
          <span className={isIncome ? style.income : style.expense}>
            {type}
          </span>
        </div>
      </>

      <div>{date}</div>
    </div>
  )
}

export default ListElement
