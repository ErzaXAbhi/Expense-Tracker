import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state

const initialState = {
  transacations: [],
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANASACTION",
      payload: id,
    });
  }

  function addTransacation(transacation) {
    dispatch({
      type: "ADD_TRANSACATION",
      payload: transacation,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transacations: state.transacations,
        deleteTransaction,
        addTransacation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
