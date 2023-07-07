import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [expenseAmount, setExpenseAmount] = useState(props.amount);

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
    </Card>
  );
};

export default ExpenseItem;
