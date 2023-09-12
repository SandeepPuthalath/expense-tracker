import React from "react";
import { GlobalContext } from "../context/GlobelState";

const Balance = () => {
  const { transactions } = React.useContext(GlobalContext);

  const amounts = transactions?.map(transaction => transaction?.amount);
  const total = amounts?.reduce((acc, curr) => (acc += curr), 0).toFixed(2)

  return (
    <>
      <h4>Your blance</h4>
      <h1>₹{total}</h1>
    </>
  );
};

export default Balance;
