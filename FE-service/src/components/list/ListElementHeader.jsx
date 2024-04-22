import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import style from "./List.module.css";
import Button from "../button/Button";
import { OpenEyeIcon, ClosedEyeIcon } from "../../icons";
import { LoginContext } from "../../context/LoginContext";
import Modal from "../modal/Modal";

const ListElementHeader = ({ description, isAmountShow, setIsAmountShow }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleClick = () => {
    isLoggedIn ? setIsAmountShow((prev) => !prev) : setIsModalShown(true);
  };

  const modal = createPortal(
    <Modal variant="secondary" onClose={() => setIsModalShown(false)}>
      Podgląd tylko dla zalogowanych userów
    </Modal>,
    document.body
  );

  return (
    <div className={style.cardHeader} onClick={() => alert("propagacja")}>
      <div className={style.description}>{description}</div>
      <Button iconButton onClick={handleClick}>
        {!isAmountShow ? <ClosedEyeIcon /> : <OpenEyeIcon />}
      </Button>
      {isModalShown && modal}
    </div>
  );
};

export default ListElementHeader;
