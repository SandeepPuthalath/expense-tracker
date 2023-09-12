import React from "react";
import { GlobalContext } from "../context/GlobelState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const {transactions} = React.useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions?.map((transaction) =>(<Transaction key={transaction?.id} transaction={transaction}/>))}
      </ul>
    </>
  );
};

export default TransactionList;
