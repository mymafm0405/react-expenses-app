import "./expense-item.css";
import ExpenseDate from "./expense-date";

function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
