import React from "react";
import "./Insights.css";

function Insights({ transactions }) {

  const expenses = transactions.filter(t => t.type === "expense");

  const highest = expenses.reduce(
    (max, t) => (t.amount > max.amount ? t : max),
    expenses[0]
  );

  return (

    <div className="bg-white p-4 shadow rounded">

      <h2 className="text-lg font-bold mb-2">Insights</h2>

      <p>Highest Spending Category: {highest?.category}</p>
      <p>Amount: ₹{highest?.amount}</p>

    </div>

  );
}

export default Insights;