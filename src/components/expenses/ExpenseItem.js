import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const hangleClick = () => {
    console.log("clicked!!!");
  };
  const deleteHandler = (e) => {
    const expenses = e.target.parentElement.parentElement;
    const expenseItem = e.target.parentElement;
    expenses.removeChild(expenseItem);
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
          locationOfExpenditure={props.locationOfExpenditure}
        />
      </div>
      <button onClick={hangleClick}>change Title</button>
      <button onClick={deleteHandler}>delete expense</button>
    </Card>
  );
};

export default ExpenseItem;
