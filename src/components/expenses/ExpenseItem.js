import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
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
    </Card>
  );
};

export default ExpenseItem;
