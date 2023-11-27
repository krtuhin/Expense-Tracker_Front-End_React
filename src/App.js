// import react
import React, { useState } from "react";

// import sub component
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

// sending multiple data
let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "School Fees",
    amount: 300,
    date: new Date(),
  },
  {
    id: "e2",
    title: "Room Rent",
    amount: 1500,
    date: new Date(2023, 11, 6),
  },
  {
    id: "e3",
    title: "College Semester",
    amount: 1200,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  // declared variable to send data using props
  // let expenseDate = new Date(2023, 8, 17);
  // let expenseTitle = "School Fees";
  // let expenseAmount = 300;

  // creating updatable expense list using useState
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // getting child's data as function parameter
  const addExpenseHandler = (expense) => {
    // updating expense list
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      {/* added new expense component */}
      {/* getting data from child using props */}
      <NewExpense onAddExpense={addExpenseHandler} />

      {/* used sub component  */}
      {/* passing data using props */}
      <Expenses item={expenses} />
    </div>
  );
};

// export component
export default App;
