import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChageHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChageHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          locationOfExpenditure={expenses.locationOfExpenditure}
          key={expense.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
