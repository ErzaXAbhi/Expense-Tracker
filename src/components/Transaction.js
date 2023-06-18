import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transacation }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transacation.amount < 0 ? "-" : "+";

  return (
    <li className={transacation.amount < 0 ? "minus" : "plus"}>
      {transacation.text}{" "}
      <span>
        {sign}₹{Math.abs(transacation.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transacation.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
