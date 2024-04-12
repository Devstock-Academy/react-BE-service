import { createPortal } from 'react-dom'
import { useContext, useState } from 'react'
import style from './List.module.css'
import Button from '../button/Button'
import Modal from '../modal/Modal'
import { OpenEyeIcon, ClosedEyeIcon } from '../../icons'
import { LoginContext } from '../../context/LoginContext'

const ListElementHeader = ({ description, isAmountShow, setIsAmountShow }) => {
  const [isModalShown, setIsModalShown] = useState(false)
  const { isLoggedIn } = useContext(LoginContext)

  const handleClick = () => {
    isLoggedIn ? setIsAmountShow((prev) => !prev) : setIsModalShown(true)
  }

  const modal = createPortal(
    <Modal variant='secondary' onClose={() => setIsModalShown(false)}>
      Podgląd tylko dla zalogowanych użytkowników
    </Modal>,
    document.body
  )

  return (
    <div className={style.cardHeader}>
      <div className={style.description}>{description}</div>
      <Button iconButton onClick={handleClick}>
        {!isAmountShow ? <ClosedEyeIcon /> : <OpenEyeIcon />}
      </Button>
      {isModalShown && modal}
    </div>
  )
}

export default ListElementHeader
