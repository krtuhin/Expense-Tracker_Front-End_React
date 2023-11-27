import React from "react";

// import css
import "./NewExpense.css";

// import sub component
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // getting data from child as function parameter
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // creating new object using child's data
    const expenseData = {
      ...enteredExpenseData, // copy object using spread operator
      id: Math.random().toString(),
    };

    // sending data to parent using props
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* added expense form component */}
      {/* getting data using props */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
