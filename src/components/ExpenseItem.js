// import React, { useEffect } from "react"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItems.css"

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 3, 12)
  // const expenseTitle = "Car Insurance"
  // const expenseAmount = 294.67

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
