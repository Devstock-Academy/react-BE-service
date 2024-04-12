import style from './Modal.module.css'
import Button from '../button/Button'

const Modal = ({ onClose, children, variant = 'primary' }) => {
  return (
    <div className={style.backdrop}>
      <div
        className={
          variant === 'primary' ? style.modalSuccess : style.modalError
        }
      >
        <span>{children}</span>
        <Button onClick={onClose}>Zamknij</Button>
      </div>
    </div>
  )
}

export default Modal
