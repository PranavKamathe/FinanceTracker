import React from "react";
import "./SummaryCards.css";

function SummaryCards({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expenses;

  return (

    <div className="grid grid-cols-3 gap-4">

      <div className="bg-white shadow p-4 rounded">
        <h2>Total Balance</h2>
        <p className="text-xl font-bold">₹{balance}</p>
      </div>

      <div className="bg-green-100 shadow p-4 rounded">
        <h2>Income</h2>
        <p className="text-xl font-bold">₹{income}</p>
      </div>

      <div className="bg-red-100 shadow p-4 rounded">
        <h2>Expenses</h2>
        <p className="text-xl font-bold">₹{expenses}</p>
      </div>

    </div>

  );
}

export default SummaryCards;