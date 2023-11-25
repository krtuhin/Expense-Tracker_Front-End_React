// import react
import React from "react";

// import sub component
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // declared variable to send data using props
  // let expenseDate = new Date(2023, 8, 17);
  // let expenseTitle = "School Fees";
  // let expenseAmount = 300;

  // sending multiple data
  let expenses = [
    {
      id: "e1",
      title: "School Fees",
      price: "300",
      date: new Date(),
    },
    {
      id: "e2",
      title: "Room Rent",
      price: "1500",
      date: new Date(2023, 11, 6),
    },
    {
      id: "e3",
      title: "College Semester",
      price: "1200",
      date: new Date(2023, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's Start...!!</h2>

      {/* used sub component  */}
      {/* passing data using props */}
      <Expenses item={expenses} />
    </div>
  );
};

// export component
export default App;
