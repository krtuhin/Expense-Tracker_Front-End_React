import React, { useState } from "react";

// import css
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // useState for every field
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // getting value of title field
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // getting value of amount field
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  // getting value of date field
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // prevent page refresh
    event.preventDefault();

    // create object using input data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // sending data to parent using props
    props.onSaveExpenseData(expenseData);

    // set input field blank again
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* inputs */}
      <div className="new-expense_controls">
        {/* title field */}
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        {/* amount field */}
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        {/* date field */}
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      {/* end inputs */}

      {/* add expense button */}
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
