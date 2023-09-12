import React from "react";
import AppReducer from "./AppReducer"
//Initial State

const initialState = {
  transactions: [],
};

// Create context

export const GlobalContext = React.createContext(initialState);

//Provider component

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = React.useReducer(AppReducer, initialState)

    function deleteTransaction (id){
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      })
    }

    function addTransaction(transaction){
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction,
      });
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>)
}
