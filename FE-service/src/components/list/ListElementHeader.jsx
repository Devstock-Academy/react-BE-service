import style from "./List.module.css";
import Button from "../button/Button";
import { OpenEyeIcon, ClosedEyeIcon } from "../../icons";

const ListElementHeader = ({
  description,
  isAmountShow,
  setIsAmountShow,
  isLoggedIn,
}) => {
  const handleClick = () =>
    isLoggedIn
      ? setIsAmountShow((prev) => !prev)
      : alert("Podgląd tylko dla zalogowanych userów!");

  return (
    <div className={style.cardHeader}>
      <div className={style.description}>{description}</div>
      <Button iconButton onClick={handleClick}>
        {!isAmountShow ? <ClosedEyeIcon /> : <OpenEyeIcon />}
      </Button>
    </div>
  );
};

export default ListElementHeader;
