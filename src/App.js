// import sub component
import ExpenseItem from "./components/ExpenseItem";

function App() {
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

      {/* using multiple sub compenents */}
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      ></ExpenseItem>

      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      ></ExpenseItem>

      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}
      ></ExpenseItem>
    </div>
  );
}

// export component
export default App;
