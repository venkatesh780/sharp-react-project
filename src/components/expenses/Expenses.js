import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChageHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    props.onChangeFilter(selectedYear);
  };
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChageHandler}
      />
      {expenses.length === 0 && <p>No Expense Found!!!</p>}
      {expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
          key={item.id}
        />
      ))}
      {expenses.length === 1 && (
        <p>Only single Expense here. Please add more...</p>
      )}
    </Card>
  );
};

export default Expenses;
