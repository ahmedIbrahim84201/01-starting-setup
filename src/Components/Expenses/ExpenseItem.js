import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //we use props when we r receiving data from another play and its not pre defined

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
    </li>
  );
}
export default ExpenseItem;
