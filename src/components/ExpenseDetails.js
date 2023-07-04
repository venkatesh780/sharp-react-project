const ExpenseDetails = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="expense-item__price">RS {props.amount}</div>
      <p>{props.locationOfExpenditure}</p>
    </>
  );
};

export default ExpenseDetails;
