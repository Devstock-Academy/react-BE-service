import { useState } from "react";

import style from "./List.module.css";

const ListElementBody = ({ type, amount, ...rest }) => {
  console.log("rest", rest);
  const isIncome = type === "income";

  return (
    <div className={style.amountRow}>
      <span className={style.amount}>
        {isIncome ? "+" : "-"} {amount} $
      </span>
      <div className={isIncome ? style.income : style.expense}>{type}</div>
    </div>
  );
};

export default ListElementBody;
