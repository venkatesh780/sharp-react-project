import "./NewExpenseForm.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import { useState } from "react";

const NewExpenseForm = (props) => {
  const [addNewExpenseClicked, setAddNewExpenseClicked] = useState(true);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
    setAddNewExpenseClicked(false);
  };
  const expenseClicked = (isClicked) => {
    setAddNewExpenseClicked(isClicked);
  };
  const cancelExpense = (isClicked) => {
    setAddNewExpenseClicked(isClicked);
  };
  return (
    <>
      {addNewExpenseClicked ? (
        <AddNewExpense onNewExpenseClicked={expenseClicked} />
      ) : (
        <div className="new-expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseData}
            onCancelExpense={cancelExpense}
          />
        </div>
      )}
    </>
  );
};

export default NewExpenseForm;
