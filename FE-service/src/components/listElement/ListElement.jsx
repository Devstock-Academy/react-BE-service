import { useState } from 'react'

import style from './ListElement.module.css'
import ListElementHeader from './ListElementHeader'
import ListElementBody from './ListElementBody'

const ListElement = ({ listElement, handleCardDelete, handleCardApproval }) => {
  const [isAmountShow, setIsAmountShow] = useState(false)

  const { date, description, amount, type, id } = listElement || {}

  return (
    <div className={style.listElement}>
      <>
        <ListElementHeader
          description={description}
          isAmountShow={isAmountShow}
          setIsAmountShow={setIsAmountShow}
          cardId={id}
          handleCardDelete={handleCardDelete}
          handleCardApproval={handleCardApproval}
        />
        {isAmountShow && <ListElementBody amount={amount} type={type} />}
      </>
      <div className={style.date}>{date}</div>
    </div>
  )
}

export default ListElement
