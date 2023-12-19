// import react
import React, { useState, useEffect } from "react";

// import sub component
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

// sending multiple data
let DUMMY_EXPENSES = [];

const App = () => {
  // declared variable to send data using props
  // let expenseDate = new Date(2023, 8, 17);
  // let expenseTitle = "School Fees";
  // let expenseAmount = 300;

  // creating updatable expense list using useState
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // useEffect hook to avoid infinite looping
  useEffect(() => {
    // fetching data from API
    fetch("http://127.0.0.1:8080/all-expenses")
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.log(error));
  }, []);

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
