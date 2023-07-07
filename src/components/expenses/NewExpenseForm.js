import "./NewExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

const NewExpenseForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  };
  const startEditerHandler = () => {
    setIsEditing(true);
  };
  const cancelEditerHandler = () => {
    setIsEditing(false);
  };
  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditerHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseData}
            onCancel={cancelEditerHandler}
          />
        )}
      </div>
    </>
  );
};

export default NewExpenseForm;
