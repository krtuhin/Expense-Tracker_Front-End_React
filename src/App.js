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

  // function for fetch API
  let fetchData = () => {
    fetch("http://127.0.0.1:8080/all-items")
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.log(error));
  };

  // useEffect hook to avoid infinite looping
  useEffect(() => {
    // fetching data from API
    fetchData();
  }, []);

  // getting child's data as function parameter
  const addExpenseHandler = (expense) => {
    // updating expense list
    // const updatedExpenses = [expense, ...expenses];
    // setExpenses(updatedExpenses);

    // sending data to backend using fetch API
    fetch("http://127.0.0.1:8080/save-item", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        // rerander page with updated data
        fetchData();
        return response.text();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
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
