// import react
import React from "react";

// import sub component's css
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  //declare variable in component
  //   let title = "Car Insurence";

  return (
    // using component as a parent tag
    <Card className="expense-item">

      {/* using expense date sub component */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        {/* using JS data into JSX */}
        <h2>{props.title}</h2>

        <div className="expense-item__price">$ {props.price}</div>
      </div>
    </Card>
  );
};

// export sub component
export default ExpenseItem;
