import Expenses from "./components/expenses/Expenses";
import NewExpenseForm from "./components/expenses/NewExpenseForm";
import { expenses } from "./utils/config";

const App = () => {
  const locationOfExpenditure = "Food";
  return (
    <div>
      <NewExpenseForm />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
