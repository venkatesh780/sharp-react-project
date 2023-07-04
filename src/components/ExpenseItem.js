import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
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
    </div>
  );
};

export default ExpenseItem;
