import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transacations } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transacations.map((transacation) => (
          <Transaction key={transacation.id} transacation={transacation} />
        ))}
      </ul>
    </>
  );
};
