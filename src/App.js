import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpenseForm from "./components/expenses/NewExpenseForm";
// import { expenses } from "./utils/config";

const INITIAL_EXPENSES = [
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

const App = () => {
  const [allExpenses, setAllExpenses] = useState(INITIAL_EXPENSES);
  const [filterExpenses, setFilterExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseData = (expense) => {
    setAllExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const changeFilter = (selectedYear) => {
    const filtereExpenses = allExpenses.filter(
      (item) => item.date.getFullYear().toString() === selectedYear
    );
    setFilterExpenses(filtereExpenses);
  };

  return (
    <div>
      <NewExpenseForm onAddExpenseData={addExpenseData} />
      <Expenses expenses={filterExpenses} onChangeFilter={changeFilter} />
    </div>
  );
};

export default App;
