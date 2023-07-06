import "./ExpenseForm.css";
import { expenses } from "../../utils/config";

const ExpenseForm = () => {
  return (
    <div className="expense-form-container">
      <h2 className="expense-form-heading">Add Expense Form</h2>
      <div>
        <form
          onChange={(e) => {
            console.log(e.target.value);
          }}>
          <input type="text" id="expense-title" placeholder="Title" />
          <input type="text" id="expense-amount" placeholder="Amount" />
          <input type="text" id="expense-date" placeholder="dd/mm/yyyy" />
        </form>
      </div>
      <button className="add-expense-btn">Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
