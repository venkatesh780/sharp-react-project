import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          locationOfExpenditure={expenses.locationOfExpenditure}
          key={expense.id}
        />
      ))}
    </div>
  );
};

export default Expenses;
