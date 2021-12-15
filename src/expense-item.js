import React, { useState } from "react";
import "./expense-item.css";
import ExpenseDate from "./expense-date";
import Card from "./card";

function ExpenseItem({ title, amount, date }) {
  const [expTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}

export default ExpenseItem;
