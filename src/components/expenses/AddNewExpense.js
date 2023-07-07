import "./AddNewExpense.css";

const AddNewExpense = (props) => {
  const addNewExpenseHandler = () => {
    props.onNewExpenseClicked(false);
  };
  return (
    <div className="new-expense">
      <button
        onClick={() => {
          addNewExpenseHandler();
        }}>
        Add New Expense
      </button>
    </div>
  );
};

export default AddNewExpense;
