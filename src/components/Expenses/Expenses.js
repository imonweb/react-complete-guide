// import React, { useEffect } from "react"
import React, { useState } from "react"
// import App from "../App"
// import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import "./Expenses.css"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

// function Expenses(props) {
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js")
    // props.onChangeFilter(selectedYear)
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  // Method 3
  // let expensesContent = <p>No expenses found</p>

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {expensesContent} */}
        {/* //Method 2 {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}
        {/* // Method 1 {filteredExpenses.length === 0 ? <p>No expenses found.</p> : filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}
      </Card>
    </div>
  )
}

export default Expenses
