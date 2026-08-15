import React, { useState } from "react";
import "./Dashboard.css";


import SummaryCards from "../SummaryCards/SummaryCards";
import BalanceTrend from "../Charts/BalanceTrend";
import SpendingBreakdown from "../Charts/SpendingBreakdown";
import Transactions from "../Transactions/Transactions";
import RoleSwitcher from "../RoleSwitcher/RoleSwitcher";
import Insights from "../Insights/Insights";

function Dashboard() {

  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", amount: 2000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 300, category: "Food", type: "expense" },
    { id: 3, date: "2026-04-03", amount: 500, category: "Shopping", type: "expense" }
  ]);

  return (

    <div className="p-6 space-y-6">

      <RoleSwitcher role={role} setRole={setRole} />

      <SummaryCards transactions={transactions} />

      <div className="grid grid-cols-2 gap-6">
        <BalanceTrend transactions={transactions} />
        <SpendingBreakdown transactions={transactions} />
      </div>

      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
        role={role}
      />

      <Insights transactions={transactions} />

    </div>

  );
}

export default Dashboard;
