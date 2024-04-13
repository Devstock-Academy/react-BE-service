import style from './List.module.css'
import Button from '../button/Button'
import { OpenEyeIcon, ClosedEyeIcon } from '../../icons'

const ListElementHeader = ({ description, isAmountShow, setIsAmountShow }) => {
  return (
    <div className={style.cardHeader}>
      <div className={style.description}>{description}</div>
      <Button iconButton onClick={() => setIsAmountShow((prev) => !prev)}>
        {!isAmountShow ? <ClosedEyeIcon /> : <OpenEyeIcon />}
      </Button>
    </div>
  )
}

export default ListElementHeader
