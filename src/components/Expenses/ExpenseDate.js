// import react
import React from "react";

// import css
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  
  // modify props object data to use in JSX
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* used modified data */}
      <div className="expense-date_day">{day}</div>
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  );
};

// export component
export default ExpenseDate;
