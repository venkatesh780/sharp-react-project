import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpenseForm from "./components/expenses/NewExpenseForm";
// import { expenses } from "./utils/config";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Food",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "Food",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Food",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Food",
    },
  ];

  const addExpenseData = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      {console.log("app rendering!!!")}
      <NewExpenseForm onAddExpenseData={addExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
