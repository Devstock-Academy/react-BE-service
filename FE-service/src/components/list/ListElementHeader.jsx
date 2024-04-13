import { useContext } from 'react'
import style from './List.module.css'
import Button from '../button/Button'
import { OpenEyeIcon, ClosedEyeIcon } from '../../icons'
import { LoginContext } from '../../context/LoginContext'

const ListElementHeader = ({ description, isAmountShow, setIsAmountShow }) => {
  const { isLoggedIn } = useContext(LoginContext)

  const handleClick = () => {
    isLoggedIn
      ? setIsAmountShow((prev) => !prev)
      : alert('Podgląd tylko dla zalogowanych użytkowników')
  }

  return (
    <div className={style.cardHeader}>
      <div className={style.description}>{description}</div>
      <Button iconButton onClick={handleClick}>
        {!isAmountShow ? <ClosedEyeIcon /> : <OpenEyeIcon />}
      </Button>
    </div>
  )
}

export default ListElementHeader
