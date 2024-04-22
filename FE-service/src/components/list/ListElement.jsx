import { useState, useEffect } from "react";

import style from "./List.module.css";
import Button from "../button/Button";
import { OpenEyeIcon, ClosedEyeIcon } from "../../icons";

const UseEffectDemo = () => {
  useEffect(() => {
    console.log("effect");
    const intervalId = setInterval(() => {
      console.log("interval");
    }, 2000);

    return () => {
      console.log("unmount component", intervalId);
      clearInterval(intervalId);
    };
  }, []);
  return <h1>UseEffect Demo</h1>;
};

const ListElement = ({ listElement }) => {
  const [isAmountShow, setIsAmountShow] = useState(false);

  const { type, amount, date, description } = listElement || {};
  const isIncome = type === "income";

  return (
    <div className={style.listElement}>
      <>
        <div className={style.cardHeader}>
          <div className={style.description}>{description}</div>
          <Button iconButton onClick={() => setIsAmountShow((prev) => !prev)}>
            {!isAmountShow ? <ClosedEyeIcon /> : <OpenEyeIcon />}
          </Button>
        </div>
        {isAmountShow && (
          <>
            <UseEffectDemo />
            <div className={style.amountRow}>
              <span className={style.amount}>
                {isIncome ? "+" : "-"} {amount} $
              </span>
              <div className={isIncome ? style.income : style.expense}>
                {type}
              </div>
            </div>
          </>
        )}
      </>
      <div className={style.date}>{date}</div>
    </div>
  );
};

export default ListElement;
