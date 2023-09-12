import React from "react";
import { GlobalContext } from "../context/GlobelState";

const IncomeExpenses = () => {
  const { transactions } = React.useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction?.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{Math.abs(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
