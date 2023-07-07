import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChageHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenses = props.expenses;

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChageHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && <p>No Expense Found!!!</p>}
      {filteredExpenses.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
          key={item.id}
        />
      ))}
      {filteredExpenses.length === 1 && (
        <p>Only single Expense here. Please add more...</p>
      )}
    </Card>
  );
};

export default Expenses;
