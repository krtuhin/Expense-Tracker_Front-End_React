import React from "react";

// import css
import "./NewExpense.css";

// import sub component
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      {/* added expense form component */}
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
