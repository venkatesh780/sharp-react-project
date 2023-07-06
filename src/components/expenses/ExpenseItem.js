import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [expenseAmount, setExpenseAmount] = useState(props.amount);
  const hangleClick = () => {
    setTitle("updated!!!");
    console.log(title);
  };
  const expenseHandler = () => {
    setExpenseAmount(100);
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <ExpenseDetails
          title={title}
          amount={expenseAmount}
          locationOfExpenditure={props.locationOfExpenditure}
        />
      </div>
      <button onClick={hangleClick}>change Title</button>
      <button onClick={expenseHandler}>change expense</button>
    </Card>
  );
};

export default ExpenseItem;
