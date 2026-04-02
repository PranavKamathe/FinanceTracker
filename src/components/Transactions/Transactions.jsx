import React from "react";
import "./Transactions.css";

function Transactions({ transactions, role }) {

  return (

    <div className="bg-white p-4 shadow rounded">

      <h2 className="text-lg font-bold mb-3">Transactions</h2>

      {role === "admin" && (
        <button className="mb-3 bg-blue-500 text-white px-3 py-1 rounded">
          Add Transaction
        </button>
      )}

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-100">
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((t) => (
            <tr key={t.id} className="text-center border-t">
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );
}

export default Transactions;