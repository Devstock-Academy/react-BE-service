import { useContext, useState, useEffect } from "react";

import style from "./List.module.css";
import ListElementHeader from "./ListElementHeader";
import ListElementBody from "./ListElementBody";
import { LoginContext } from "../../context/LoginContext";

const ListElement = ({ listElement }) => {
  const context = useContext(LoginContext);
  console.log("context", context);
  const [isAmountShow, setIsAmountShow] = useState(false);

  const { date, description, amount, type } = listElement || {};

  useEffect(() => {
    setIsAmountShow(context.isLoggedIn);
  }, [context.isLoggedIn]);

  return (
    <div className={style.listElement}>
      <>
        <ListElementHeader
          description={description}
          isAmountShow={isAmountShow}
          setIsAmountShow={setIsAmountShow}
          isLoggedIn={context.isLoggedIn}
        />
        {isAmountShow && <ListElementBody amount={amount} type={type} />}
      </>
      <div className={style.date}>{date}</div>
    </div>
  );
};

export default ListElement;
