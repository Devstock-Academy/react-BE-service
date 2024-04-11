import { useState } from 'react'

import style from './List.module.css'
import ListElementHeader from './ListElementHeader'
import ListElementBody from './ListElementBody'

const ListElement = ({ listElement }) => {
  const [isAmountShow, setIsAmountShow] = useState(false)

  const { date, description, amount, type } = listElement || {}

  return (
    <div className={style.listElement}>
      <>
        <ListElementHeader
          description={description}
          isAmountShow={isAmountShow}
          setIsAmountShow={setIsAmountShow}
        />
        {isAmountShow && <ListElementBody amount={amount} type={type} />}
      </>
      <div className={style.date}>{date}</div>
    </div>
  )
}

export default ListElement
