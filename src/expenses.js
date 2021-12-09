import "./expenses.css";
import ExpenseItem from "./expense-item";
import Card from "./card";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </Card>
  );
}

export default Expenses;
