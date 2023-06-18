import React from "react";
import { Header } from "./components/Header";
import { Balence } from "./components/Balence";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransacation } from "./components/AddTransacation";

import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balence />
        <IncomeExpenses />
        <TransactionList />
        <AddTransacation />
      </div>
    </GlobalProvider>
  );
}
