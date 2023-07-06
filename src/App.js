import ExpenseForm from "./components/expenses/ExpenseForm";
import Expenses from "./components/expenses/Expenses";
import { expenses } from "./utils/config";

const App = () => {
  const locationOfExpenditure = "Food";
  return (
    <div>
      <ExpenseForm />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
