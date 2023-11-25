// import react and react hook (use state)
import React, { useState } from "react";

// import sub component's css
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  /* destructuring the array with two variable one denoting the value that is 
  passed and another is the method to change the passed value */
  const [title, setTitle] = useState(props.title);

  // creating function clickhandler
  let clickHandler = () => {
    setTitle("New Title");
  };

  return (
    // using component as a parent tag
    <Card className="expense-item">

      {/* using expense date sub component */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        {/* using JS data into JSX */}
        <h2>{title}</h2>

        <div className="expense-item__price">$ {props.price}</div>
      </div>

      {/* using click event (use function in the click event without '()') */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

// export sub component
export default ExpenseItem;
