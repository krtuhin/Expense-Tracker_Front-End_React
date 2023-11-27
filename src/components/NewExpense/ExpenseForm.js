import React from "react";

// import css
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      {/* inputs */}
      <div className="new-expense_controls">
        {/* title field */}
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" />
        </div>

        {/* amount field */}
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        {/* date field */}
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" />
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
