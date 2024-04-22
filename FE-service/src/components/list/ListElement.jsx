import { useState } from "react";

import style from "./List.module.css";
import ListElementHeader from "./ListElementHeader";
import ListElementBody from "./ListElementBody";

const ListElement = ({ listElement: { type, amount, date, description } }) => {
  const [isAmountShow, setIsAmountShow] = useState(true);

  return (
    <div className={style.listElement}>
      <>
        <ListElementHeader
          description={description}
          isAmountShow={isAmountShow}
          setIsAmountShow={setIsAmountShow}
        />
        {isAmountShow && <ListElementBody type={type} amount={amount} />}
      </>
      <div className={style.date}>{date}</div>
    </div>
  );
};

export default ListElement;
